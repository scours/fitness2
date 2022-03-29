function v = mem2bytes(t)
%MEM2BYTES converts memory size (from strongs) in bytes (to double)
% syntax: v = mem2byes('300 kB')
%         v = mem2byes('300 kB, 100 MB')
%         v = mem2bytes({'300 kB', '100 MB', '35b, 75b'})

% INRA\MS 2.1 - 2019/12/07 - INRA\Olivier Vitrac -  rev.


% arg check
if ~ischar(t) && ~iscellstr(t), error('the input must be char or a cell array'); end %#ok<ISCLSTR>
if iscell(t) % pseudo recursion
    m = numel(t);
    v = cell(m,1);
    for j=1:m
        v{j} = mem2bytes(t{j});
    end
    v(cellfun(@isempty,v))=[];
    v = cat(1,v{:});
    if isempty(v), v = []; end
    return
end

% Definitions
U  = 'KMGTP';
f = 1024.^(1:length(U));

% main()
v0 = regexp(t,'(?<v>\d+\.?\d+)\s*(?<u>[KMGTPkmgtp]?)[bB]','names');
if isempty(v0)
    v = [];
else
    n = length(v0);
    v = zeros(n,1);
    for i=1:n
        v(i) = str2double(v0(i).v);
        if ~isempty(v0(i).u)
            v(i) = v(i) * f(ismember(U,upper(v0(i).u)));
        end
    end
end