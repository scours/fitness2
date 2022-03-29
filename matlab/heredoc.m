function heredoc_out = heredoc(filename)
%heredoc_out = heredoc(filename)
%
% Read embedded heredoc/herestring entries from the comments in a .m file.
%
% Use of heredoc expressions avoids copious and annoying application of
% MATLAB string quotes/line continuation for multi-line embedded strings.
%
% Inputs:
%   filename (optional) - The full path to the .m file to be parsed for
%       heredoc content. Defaults to the calling .m file.
% Outputs:
%   heredoc_out - A structure with fieldnames equal to the variable names
%       specified for each heredoc expression. The contents of each field
%       is the string literal content associated with the heredoc.
%
% Heredocs are loaded from the comment content of the specified .m file. It
% is recommended to use block comments (%{...%}) for this purpose to better
% emulate the behavior of a heredoc in other languages.
%
% Two heredoc formats are supported.
% 1. Angle bracket "shell" format
%   The heredoc style supported by the Unix shell. The heredoc begins with
%   a valid variable name, followed by an optional equals, a double
%   angle bracket (<<), and finally a set of delimiter characters which
%   will be used to denote the end of the string literal.
%
%   Example:
%   %{
%   my_str1 = << END
%   This is a
%   multiline
%   string
%   END
%   %}
%   s = heredoc();
%   disp(s.my_str1)
%
%   Output:
%   This is a
%   multiline
%   string.
%
%   In this heredoc format, nothing else can occur after the delimiter
%   word on the heredoc declaration line (other than possible whitespace).
%   The string literal begins at the first character of the next line.
%
%   In the case that the double angle is used by itself, no modification is
%   made to leading whitespace or indentation of the string literal.
%   Additionally, the ending delimiter must occur on a line by itself with
%   no initial indentation. This final line is ignored (including the
%   preceding newline)
%
%   However, the following modifications are possible to the shell heredoc
%   format which will change the indentation behavior.
%
%   A double angle bracket followed by hyphen/dash (-) removes all
%   indentation from the literal. Additionally, the end delimiter may have
%   initial indentation on its line. Unlike the Unix shell, this affects
%   both space and tab indentation (the shell affects only tab)
%
%   Example:
%   %{
%   my_str2 = <<- END
%       This is a
%   multiline string with
%           variable indentation in
%         the heredoc.
%     END
%   %}
%   s = heredoc();
%   disp(s.my_str2)
%
%   Output:
%   This is a
%   multiline string with
%   variable indentation in
%   the heredoc.
%
%   A double angle bracket followed by tilde (~) removes indentation from
%   all lines of the literal which is present at the start of the first
%   line. (This is an extension provided by Ruby.)
%
%   Example:
%   %{
%   my_str3 = <<~ END
%       Line 1
%           Line 2
%               Line 3
%   END
%   %}
%   s = heredoc();
%   disp(s.my_str3)
%
%   Output:
%   Line 1
%       Line 2
%           Line 3
%
% 2. Triple quote "Python" format
%   The heredoc style supported by Python. The heredoc begins with
%   a valid MATLAB variable name, followed by an equals and an opening
%   triple quote ("""). The string literal follows and is ended by another
%   triple quote. No modification of whitespace is performed, and the
%   string literal begins directly after the triple quote.
%
%   Example:
%   %{
%   my_py_str = """A multiline
%   Python-style
%   string"""
%   %}
%   s = heredoc();
%   disp(s.my_py_str)
%
%   Output:
%   A multiline
%   Python-style
%   string
%
% Copyright (c) 2019, Benjamin P. Davis
%if filename not given, use the calling .m file

if ~exist('filename', 'var')
    stacks = dbstack('-completenames');
    if length(stacks) < 2
        error('Caller stack could not be found')
    end
    caller_stack = stacks(2);
    filename = caller_stack.file;
end
comments = get_comments(filename);
heredoc_out = get_heredoc(comments);
end
function comments = get_comments(filename)
%Read all comment lines from a .m file and concatenate them to a single
%multiline string
file_text = fileread(filename);
%split the file lines
tmp = textscan(file_text, '%s', 'Delimiter', '\n', 'Whitespace', '');
file_lines = tmp{1};
%find all standard comment lines
has_std_comment = ~cellfun(@isempty,...
    regexp(file_lines, '%(?![{}])', 'match'));
%find all block comment lines
has_block_comment_open = ~cellfun(@isempty,...
    regexp(file_lines, '^[ \t]*%{', 'match'));
has_block_comment_close = ~cellfun(@isempty,...
    regexp(file_lines, '^[ \t]*%}', 'match'));
ind_block_comment_open = find(has_block_comment_open);
ind_block_comment_close = find(has_block_comment_close);
%check the block comment consistency
assert(...
    length(ind_block_comment_open) == length(ind_block_comment_close) && ...
    all(ind_block_comment_open < ind_block_comment_close), ...
    'Unclosed block comment');
has_comment_line = has_std_comment;
comment_lines = cell(size(file_lines));
%pull content from the standard comments
comment_lines(has_std_comment) = regexp(...
    file_lines(has_std_comment), ...
    '(?<=%).*', 'once', 'match');
%pull content from the block comments
for iB = 1:length(ind_block_comment_open)
    i1 = ind_block_comment_open(iB)+1;
    i2 = ind_block_comment_close(iB)-1;
    comment_lines(i1:i2) = file_lines(i1:i2);
    has_comment_line(i1:i2) = true;
end
%cat all the comment lines together
comments = sprintf('%s\n', comment_lines{has_comment_line});
end
function heredoc_out = get_heredoc(text)
%Parse comment text for embedded heredoc expressions
nl = char(10); %#ok<CHARTEN>
%get the angle bracket heredocs
[heredoc_angle, m_start_angle, m_end_angle] = regexp(text, [...
    '(?xm) #enable regex freespacing/multiline mode' nl ...
    '^[\t ]* #could be some space at start of the line' nl ...
    '(?<varname>[a-zA-Z]\S*) #varname must start with a letter' nl ...
    '[\t ]* =? [\t ]* <<<? (?<modifier>[~-])? #the modifier must come directly after the angle brackets (before any spaces)' nl ...
    '[\t ]* (?<delimiter>\S+) [ \t]*\n #ignore any spaces to end of the line' nl ...
    '(?<content>.*?)(?=\n(?(2)[\t ]*|)\3)  #capture content until the delimiter' nl ...
    ], 'names', 'start', 'end');
%get the python-style (triple quote) strings
[heredoc_tquote, m_start_tquote, m_end_tquote] = regexp(text, [...
    '(?xm) #enable regex freespacing/multiline mode' nl ...
    '^[\t ]* #could be some space at start of the line' nl ...
    '(?<varname>[a-zA-Z]\S*) #varname must start with a letter' nl ...
    '[\t ]* = (?<modifier>) #dummy capture to match angle format' nl...
    '[\t ]* (?<delimiter>""") #dummy capture of triple quote to match angle format' nl ...
    '(?<content>.*?)(?=""")  #until end triple quote' nl ...
    ], 'names', 'start', 'end');
%reorder all captures according to what is first
all_heredoc = [heredoc_angle heredoc_tquote];
m_start = [m_start_angle m_start_tquote];
m_end = [m_end_angle m_end_tquote];
[~, iS] = sort(m_start);
all_heredoc = all_heredoc(iS);
m_start = m_start(iS);
m_end = m_end(iS);
%need to check for nested expressions which must be excluded
%for example, a python-style inside an angle heredoc
has_overlap = false(size(all_heredoc));
i_outer = 1;
while i_outer <= length(has_overlap)
    end_outer = m_end(i_outer);
    i_inner = i_outer + 1;
    %if the next match starts before the current one ends, mark as
    %overlapped
    while i_inner <= length(has_overlap) && m_start(i_inner) < end_outer
        has_overlap(i_inner) = true;
        i_inner = i_inner + 1;
    end
    i_outer = i_inner;
end
%remove all overlapped entries
all_heredoc = all_heredoc(~has_overlap);
%all names must be unique
varnames = {all_heredoc.varname};
assert(length(varnames) == length(unique(varnames)), ...
    'heredoc varnames must be unique');
%check valid varname
is_varname = cellfun(@isvarname, varnames);
i_not_varname = find(~is_varname, 1);
if ~isempty(i_not_varname)
    error('heredoc varname %s is not valid', varnames{i_not_varname});
end
%fix indent for all tilde/dash-modified strings
content = {all_heredoc.content};
modifier = {all_heredoc.modifier};
content = fix_indent(content, modifier);
%convert to output structure
heredoc_out = cell2struct(content,varnames,2);
end
function content = fix_indent(content, modifier)
for iC = 1:length(content)
    if strcmp(modifier{iC},'~')
        %Ruby extension, indent is aligned to first line
        %get the amount of indent from the very start of the string
        indent = regexp(content{iC}, '^[ \t]*', 'match', 'once');
        %remove it from start of every line (leveraging multiline regexp mode)
        content{iC} = regexprep(content{iC}, ...
            ['(?m)^' regexptranslate('escape',indent)], '');
    elseif strcmp(modifier{iC},'-')
        %remove all indents
        content{iC} = regexprep(content{iC}, '(?m)^[ \t]*', '');
    end
end
end