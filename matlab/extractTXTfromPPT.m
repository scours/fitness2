function [myppt,rawout] = extractTXTfromPPT(pptxfilename,varargin)
%EXTRACTTXTFROMPPT extracts automatically text from PowerPoint PPTX files (linux required)
% Syntax: myppt = extractTXTfromPPT(pptxfilename [,'noprefetch','noupdate'])
%         [myppt,details] = extractTXTfromPPT(pptxfilename [,'param1',value1,'param2',value2...)
% Keywords
%         'noprefetch' force the PPT to be read again
%           'noupdate' prevents the prefetch (if any) to be updated
% List of pair property/default value
%                  id: 'extractTXTfromPPT'
%           tmpprefix: 'extractTXTfromPPT_'
%      prefetchprefix: 'PREFETCH_extractTXTfromPPT_'
%          stylesheet: [13×1 struct] -> one line struct('name','stylename','level',{'level1' 'level2' 'leval3' 'level4'})
%        headingshift: ''
%
%
%   myppt = nslides x 1 structure array with fields:
%              name : slide name (if any), if not slide ## of ##
%            layout : layout section (only Office Theme name has been implemented)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
%       slidemaster : name of the slide master (as in the template/theme)
%         nchildren : number of text objects found
%          children : text o                                                                                                                                                                                                                                bjects
%               raw : raw content including other objects
%           content : formated content in markdown
%
%       For each object: myppt(islide).children(iobject)
%                type: 'TextBoxPlaceholder'
%                name: 'Title 2'
%                 tag: 'ppt.TextBoxPlaceholder:5194:4520'
%                hash: 'PPT_TextBoxPlaceholder51944520_'
%             content: '# Le risque chimique des emballages : les solutions'
%               title: first line of content (if empty slide # of #)
%      contentnotitle: following lines (starting from the second)
%                 raw: {7×1 cell}
%
%   details = structure with fields
%
%
%   Example
% ------------
%       myppt = extractTXTfromPPT('/home/olivi/Documents/fitness/sandbox/matlab/sandbox/TEST_Jac2017_source.pptx')

% 06/08/2019 - INRA\Olivier Vitrac - rev. 20/12/2020

% Revision history
% 06/08/2019 RC
% 07/08/2019 add prefetch and keywords
% 08/08/2019 add stylesheet, tunnable prefixes
% 09/08/2019 add contentnfo
% 17/08/2019 fix extraction
% 01/09/2019 full body and notes extraction, add maxtitle
% 02/09/2019 use ppt/noesSlides/_rels to pair notes with the proper slides
% 03/09/2019 replace note: by N.B.
% 06/09/2019 add basic support for dependencies
% 19/12/2020 add 'videos','movies' as dependencies
% 23/12/2020 add 'guideline" as dependencies

% definitions
stylesheet_default = [... struct('name','stylename','level',{'level1' 'level2' 'leval3' 'level4'})
    struct('name','title only',          'level',{{'# ' '# ' '' ''}})
    struct('name','title slide',         'level',{{'# ' '## ' '' ''}})
    struct('name','section',             'level',{{'# ' '## ' '### ' '### '}})
    struct('name','title and content',   'level',{{'# ' '* ' '* ' '* '}})
    struct('name','two content',         'level',{{'# ' '## ' '## ' '* '}})
    struct('name','content',             'level',{{'# ' '' '' ''}})
    struct('name','simple horizontal',   'level',{{'# ' '' '' ''}})
    struct('name','diapositive de texte','level',{{'# ' '' '' ''}})
    struct('name','comparison',          'level',{{'# ' '## ' '## ' '* '}})
    struct('name','comparison white',    'level',{{'# ' '## ' '## ' '* '}})
    struct('name','blank',               'level',{{'# ' '' '' ''}})
    struct('name','empty',               'level',{{'# ' '' '' ''}})
    struct('name','default',             'level',{{'# ' '' '' ''}})    
    ];
default = struct('id','extractTXTfromPPT',...                   to be used by pptx2reveal
                 'tmpprefix','extractTXTfromPPT_',...               tmp file deleted on runtime
                 'prefetchprefix','PREFETCH_extractTXTfromPPT_',... to be used by pptx2reveal
                 'stylesheet',stylesheet_default,...
                 'headingshift','',...
                 'maxtitle',120,...
                 'dependencies',{{'references','videos','movies','extra','casestudies','guidelines','howto','solutions'}},...
                 'dependencymain','index.html' ...
                 );
keywords = {'noprefetch','noupdate'};


%% arg check
helpcmd = '--help'; 
if nargin<1, pptxfilename = ''; end
if isempty(pptxfilename), pptxfilename = helpcmd; end
if strcmpi(pptxfilename,helpcmd), dispf('extractTXTfromPPT(''/myfullpath/myfile.pptx'')\n'), return, end
[p,f,e] = fileparts(pptxfilename);
if ~exist(pptxfilename,'file'), error('The file ''%s'' does not exist in ''%s''',[f e],p), end
if ~strcmpi(e,'.pptx'), error('The file ''%s'' is not a PPTx file',[f e]), end
options = argcheck(varargin,default,keywords,'case');

%% heading shift
options.headingshift = options.headingshift(options.headingshift=='#');
if ~isempty(options.headingshift)
    for i=1:length(stylesheet_default)
        for j=1:length(stylesheet_default(i).level)
            if ~isempty(stylesheet_default(i).level{j}) && (stylesheet_default(i).level{j}(1)=='#')
                stylesheet_default(i).level{j} = sprintf('%s%s',options.headingshift,stylesheet_default(i).level{j});
            end
        end
    end
    %
    for i=1:length(options.stylesheet)
        for j=1:length(options.stylesheet(i).level)
            if ~isempty(options.stylesheet(i).level{j}) && (options.stylesheet(i).level{j}(1)=='#')
                options.stylesheet(i).level{j} = sprintf('%s%s',options.headingshift,options.stylesheet(i).level{j});
            end
        end
    end
end

%% prefetch file
update = true;
nfo = dir(pptxfilename);
prefetchpptxfilename = fullfile(p,sprintf('%s%s.mat',options.prefetchprefix,f));
if update && exist(prefetchpptxfilename,'file') && ~options.noprefetch
    tmp = load(prefetchpptxfilename,'nfo');
    update = (nfo.datenum>tmp.nfo.datenum) || (nfo.bytes~=tmp.nfo.bytes);
    if ~update
        t0 = clock;
        tmp = load(prefetchpptxfilename);
        myppt = tmp.myppt;
        if nargout>1, rawout = tmp.raw; end
        dispf('%s:: %d slides and %d objects reloaded from prefetch file in %0.4g s',options.id,tmp.nslides,tmp.ntotalobjects,etime(clock,t0))
        fileinfo(prefetchpptxfilename)
        return
    end
end

%% manage dependencies
dependencies = options.dependencies(cellfun(@(d) exist(fullfile(p,d),'dir')>0,options.dependencies));

%% updated pptx (used mlreportgen) 
ver_rptgen = ver('rptgen');
if isempty(ver_rptgen), error('%s:: the toolbox ''MATLAB Report Generator'' version 5.5 (2018b) or later is required',options.id), end 
import mlreportgen.ppt.*;
updatepptxfilename = fullfile(p,sprintf('%s%s%s',options.tmpprefix,f,e));
if exist(updatepptxfilename,'file'), warning('%s:: the last instance did not close well on this file',options.id), end

%% open the PPTX presentation
slides = Presentation(updatepptxfilename,pptxfilename);
dispf('extractTXTfromPPT:: is reading'),fileinfo(pptxfilename)
r=open(slides);
if ~r, error('%s cannot open the file ''%s'' in ''%s'' (file in use?)',[f e],p,options.id), end

%% main engines
%  unzip -qc 'C:\Users\olivi\OneDrive\Data\Olivier\INRA\Projects\Fitness\matlab\sandbox\TEST_Jac2017_SOURCE.pptx' ppt/slides/slide13.xml | grep -oP --group-separator=$','  -e '(?<=name=")T.*?(?=")|(?<=\<a:t\>).*?(?=\</a:t\>)'
validobjects = {'BodyPlaceholder' 'ContentPlaceholder' 'TextBox' 'TextBoxPlaceholder'}; % add valid objects if needed
objpat = @(listofnames) sprintf('(?<=name=")%s.*?(?=")|',listofnames{:});
%cmdcontentppt = @(i) sprintf('unzip -qc ''%s'' ppt/slides/slide%d.xml | grep -oP ''%s(?<=\\<a:t\\>).*?(?=\\</a:t\\>)''',pptxfilename,i,objpat);
makehash = @(t) regexprep(t,{'^ppt','\.',':','(.)$'},{'PPT_','','','$1_'});
listofstyles = lower({options.stylesheet.name});
findstyle = @(layout) find(ismember(listofstyles,lower(layout)),1,'first');
isty = 0;
for sty = {stylesheet_default.name}
    isty = isty+1;
    istyle_default = findstyle(sty{1});
    if isempty(istyle_default), options.stylesheet(end+1) = stylesheet_default(isty); end
end
istyle_default = findstyle('default');
printcontent = @(varargin) regexprep(sprintf('%s\n',varargin{:}),...
    {'\n\s*\n\s*' '\n:' '\n\s' '\n\s*$' '^\s*$' ' , ','\s+\?','\(\s+','\s+\)','(.*)\s+([a-z][a-z]+)\s([A-Z][a-z]+)\s+(.*)','\s*:\s*$'},...
    {' ' ':' ' ','','',', ','?','(',')','$1 $2 - $3 $4',''});

%% content analysis
nslides = length(slides.Children);      
[tags,types,ok,names,hashes] = deal(cell(nslides,1));
myppt = repmat(struct('source',slides.TemplatePath,'name','','layout','','slidemaster','','style','',...
    'nchildren',0,'children',[],'raw','','content','','title','','contentnotitle','','contentnfo','',...
    'body','','notes','','statbody',[],'statnotes',[],'hascontent',false,'hasnotes',false,'mergedbody','','mergednotes','','dependencies',{dependencies}),nslides,1);
% for each slide
defaultname = sprintf('slide %%0%dd/%d',ceil(log10(nslides)),nslides);
ntotalobjects = 0; t0 = clock; screen='';
notesidx = buildnoteslist(pptxfilename,nslides); % build the list of all availables notes and pair them with the slide indices
for i = 1:nslides
    screen = dispb(screen,'%s::anaylysing slide %d/%d',options.id,i,nslides);
    % body extraction
    xmlslide = getslide(pptxfilename,i);                    % extract body content
    xmlslidenotes = getslidenotes(pptxfilename,i,notesidx); % extract notes if they exist
    [myppt(i).body,myppt(i).statbody,myppt(i).mergedbody] = getbody(xmlslide);
    [myppt(i).notes,myppt(i).statnotes,myppt(i).mergednotes] = getbody(xmlslidenotes);
    myppt(i).hascontent = sum([myppt(i).statbody.nlines])>0;
    myppt(i).hasnotes = sum([myppt(i).statnotes.nlines])>0;
    
    % content from mlmreportgen()
    if isempty(slides.Children(i).Name)
        myppt(i).name = sprintf(defaultname,i);
    else
        myppt(i).name = slides.Children(i).Name;
    end
    myppt(i).slidemaster = slides.Children(i).SlideMaster;
    myppt(i).layout = slides.Children(i).Layout;
    if ~isempty(slides.Children(i).Children)
        tags{i}  = { slides.Children(i).Children.Tag }';
        types{i} =  uncell(regexp(tags{i},'ppt\.([A-Za-z]*).*','tokens'));
        names{i} = {slides.Children(i).Children.Name}';
    end
    ntags = length(tags{i});
    ok{i} = false(ntags,1);                                                                                                                                                                                                                                                                                                                                                                                                                                         
    for j=1:ntags
        ok{i}(j) = ismember(types{i}{j},validobjects);
        hashes{i}{j} = makehash(tags{i}{j});
    end
    % matching names
    tags{i} = tags{i}(ok{i});
    types{i} = types{i}(ok{i});
    names{i} = names{i}(ok{i}); if isempty(names{i}) && isnumeric(names{i}), names{i} = {''}; end
    nobjects = length(names{i});
        
    cmdppt = sprintf('unzip -qc ''%s'' ppt/slides/slide%d.xml | grep -oP ''%s(?<=\\<a:t\\>).*?(?=\\</a:t\\>)''',pptxfilename,i,objpat(names{i}));
    slidecontent = strsplit(getOutput(@(i) system(cmdppt),2,i),'\n')';
    slidecontent = regexprep(slidecontent,...
        {'\s+','\s+([\.,;:])','lne','actia','inra','fmeca','\<usa\>','\<eu\>','\<un\>','\<ec\>','haccp','\s+\?','\(\s+','\s+\)','\<iso\>','\<note:\>'},...
        {' '  ,'$1',          'LNE','ACTIA','INRA','FMECA',  'USA'  ,  'EU'  ,  'UN'  ,   'EC' ,'HACCP','?'    ,'('    ,')'   , 'ISO' ,'N.B. '},'ignorecase');

    
    % pairing
    found = zeros(length(slidecontent),1);
    for j=1:nobjects
        found(find(ismember(slidecontent,names{i}{j}),1,'first'))=j;
    end
    currentcontents = cell(nobjects,1);
    for j=1:nobjects
        start = find(found==j);
        stop = start+find(found(start+1:end),1,'first')-1;
        if isempty(stop), stop = length(slidecontent); end
        currentcontents{j} = slidecontent(start+1:stop);
    end
    iscurrentobjects = ~cellfun(@isempty,currentcontents);
    if any(iscurrentobjects)
        % extract valid objects
        myppt(i).children = struct('type',types{i}(iscurrentobjects),...
                                   'name',names{i}(iscurrentobjects),...
                                   'tag',tags{i}(iscurrentobjects),...
                                   'hash',hashes{i}(iscurrentobjects)',...
                                   'content',currentcontents(iscurrentobjects),...
                                   'raw',currentcontents(iscurrentobjects));
        myppt(i).nchildren = length(myppt(i).children);
        ntotalobjects = ntotalobjects + myppt(i).nchildren;
        screen = dispb(screen,'%s::slide %d/%d: %d nobjects found (layout==''%s'')',options.id,i,nslides,myppt(i).nchildren,myppt(i).layout);
        % style  according to layout
        istyle = findstyle(myppt(i).layout); if isempty(istyle), istyle = istyle_default; end
        style  = repmat({''},max(length(options.stylesheet(istyle).level),myppt(i).nchildren),1);
        style(1:length(options.stylesheet(istyle).level)) = options.stylesheet(istyle).level;
        % extract content for each object and apply style
        len = zeros(myppt(i).nchildren,1);
        for j=1:myppt(i).nchildren
            tmp = regexprep(strtrim(sprintf('%s ',myppt(i).children(j).raw{:})),{'\n' '\s{1,}'},{' ',' '});
            ltmp = length(tmp);
            lraw = cellfun(@length,strtrim(myppt(i).children(j).raw)); lraw = lraw(lraw>0);
            nrows = length(lraw);
            if ~isempty(lraw)
                tosplit = (ltmp>40) || ((max(lraw)>80) && (min(lraw)>10));
                switch myppt(i).children(j).type
                    case 'TextBox',            tosplit = (ltmp>80)  || ((nrows>3)  && (min(lraw)>4));
                    case 'TextBoxPlaceHolder', tosplit = (ltmp>80)  || ((nrows>5)  && (min(lraw)>4));
                    case 'BodyPlaceholder',    tosplit = (ltmp>120) || ((nrows>10) && (min(lraw)>4));
                    case 'TablePlaceHolder',   tosplit = true;
                end
                if tosplit
                    myppt(i).children(j).content = sprintf('%s%s',style{j},regexprep(strtrim(sprintf('%s\n',myppt(i).children(j).content{:})),'\s{1,}',' '));
                else
                    myppt(i).children(j).content = sprintf('%s%s',style{j},tmp);
                end
            else % enmpty lraw
                myppt(i).children(j).content = '';
            end % not empty lraw
            len(j) = length(myppt(i).children(j).content);
        end % next object in slide
        % full content
        myppt(i).children(len<1) = [];
        myppt(i).nchildren = length(myppt(i).children);
        myppt(i).raw = cat(1,myppt(i).children.raw);
        myppt(i).content = printcontent(myppt(i).children.content);
    else
        screen = dispb(screen,'%s::slide %d/%d: no text object found',options.id,i,nslides);
    end % if not empty
    % generate title and content without title (even for empty slides)
    if myppt(i).nchildren
        if length(myppt(i).children(1).content)>(options.maxtitle/1.2),ratio = 1.2; else, ratio = 3; end
        if ~isempty(myppt(i).body) && ~isempty(myppt(i).body(1).paragraphs{1}) && length(myppt(i).children(1).content)>ratio*length(myppt(i).body(1).paragraphs{1})
            myppt(i).title = printcontent(sprintf('%s%s',style{1},myppt(i).body(1).paragraphs{1}));
        else
            myppt(i).title = printcontent(myppt(i).children(1).content);
        end
        if length(myppt(i).title)>options.maxtitle
            bks = find(myppt(i).title==' ');
            stop = bks(find(bks>options.maxtitle,1,'first'));
            if ~isempty(stop), myppt(i).title = sprintf('%s[...]',myppt(i).title(1:stop)); end
        end
        myppt(i).contentnotitle = printcontent(myppt(i).children(2:end).content);
    else
        myppt(i).title = sprintf('%s%s',options.stylesheet(istyle_default).level{1},myppt(i).name);
    end
    % generate contentnfo
    contentnfo = {
        sprintf('|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |')
        sprintf('| :--------------: | :--------: | :-------------------: | :-----------------------------: |')
        sprintf('|        %s        |     %s     |          %d           |            %s (%s)            |',myppt(i).name,slides.Children(i).Id,myppt(i).nchildren,datestr(nfo.datenum,'mmmm dd, yyyy'),[f e])
        sprintf('| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |')
        sprintf('|        %s        |     %s     |          %s           |             %s (%s)             |',myppt(i).slidemaster,myppt(i).layout,myppt(i).style,datestr(now,'mmm dd, yyyy'),mfilename) };
        myppt(i).contentnfo = [sprintf('\n\n---\n') sprintf('%s\n',contentnfo{:}) sprintf('\n\ncontent provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)')];
end % next slide

%% close and summary
dispb(screen,'%s:: is closing the presentation ''%s'' in ''%s''',options.id,[f e],p);
r=close(slides);
if ~r, error('%s:: the file ''%ss'' cannot be closed in ''%s''. Is it open elsewhere?',options.id,[f e],p), end
delete(updatepptxfilename)
dispf('------------------------')
dispf('%s:: %d objects found in %d slides in %0.4g s',options.id,ntotalobjects,nslides,etime(clock,t0))
T = cat(1,types{:}); Tu = unique(T);
for iT = 1:length(Tu)
    dispf('\t%d\t%s',length(find(ismember(T,Tu{iT}))),Tu{iT})
end
dispf('Slide master based on ''%s''',myppt(1).slidemaster)
L = {myppt.layout}; Lu = unique(L,'stable');
for iL = 1:length(Lu)
    dispf('\t%d\t%s',length(find(ismember(L,Lu{iL}))),Lu{iL})
end
dispf('------------------------')
l = [arrayfun(@(s) s.statbody.nlines,myppt) arrayfun(@(s) s.statnotes.nlines,myppt)];
dispf('\tslides with empty body = [ %s]',sprintf('%d ',sort(find(l(:,1)==0))))
for lu = unique(l(l(:,1)>0,1))'
    dispf('\tslides with %d lines = [ %s]',lu,sprintf('%d ',sort(find(l(:,1)==lu))))
end
dispf('\tslides with notes = [ %s]',sprintf('%d ',sort(find(l(:,2)>0))))
dispf('------------------------')
raw = struct('tag',tags,'type',types,'valid',ok,'name',names,'hash',hashes);

%% prefetch file update
if ~options.noupdate
    save(prefetchpptxfilename,'myppt','raw','nfo','nslides','ntotalobjects')
    dispf('%s:: updated the prefetch',options.id),fileinfo(prefetchpptxfilename) 
end

%% second output: raw
if nargout>1, rawout = raw; end


end % end function


% ===================================== PRIVATE FUNCTIONS =====================================
function varargout = getOutput(func,outputNo,varargin)
    varargout = cell(max(outputNo),1);
    [varargout{:}] = func(varargin{:});
    varargout = varargout(outputNo);
end

function notesidx = buildnoteslist(pptxfilename,nslides)
notesidx = NaN(nslides,1);
    for i=1:nslides
        [ret,rels] = system(sprintf('unzip -qc ''%s'' ppt/notesSlides/_rels/notesSlide%d.xml.rels',pptxfilename,i));
        if ~ret
            j = str2double(uncell(regexp(rels,'Target="../slides/slide(\d+)\.xml"','tokens')));
            notesidx(j) = i;
        end
    end
end

function xmlslide = getslide(pptxfilename,slideidx)
    %getslide = @(pptxfilename,i) getOutput(@(pptx,slideidx) system(sprintf('unzip -qc ''%s'' ppt/slides/slide%d.xml',pptx,slideidx)),2,pptxfilename,i);
    [ret,xmlslide] = system(sprintf('unzip -qc ''%s'' ppt/slides/slide%d.xml',pptxfilename,slideidx));
    if ret, error('something wrong happen while opening slide %d in %s',slideidx,pptxfilename), end
end

function xmlslidenotes = getslidenotes(pptxfilename,slideidx,notesidx)
    if ~isnan(notesidx(slideidx))
        [ret,xmlslidenotes] = system(sprintf('unzip -qc ''%s'' ppt/notesSlides/notesSlide%d.xml',pptxfilename,notesidx(slideidx)));
        if ret
            xmlslidenotes = '';
            dispf('no notes object for slide %d in %s (whereas they are expected)',slideidx,pptxfilename)
        end
    else
        xmlslidenotes = '';
    end
end

function [content,stat,mergedcontent] = getbody(pptxml,recursionflag)
    % body content
    % xmllint --xpath "//*[local-name()='txBody']/*[local-name()='p']/*[local-name()='r']/*[local-name()='t']/text()" debug.xml
    % read # XML path to slide notes: <p:txBody> -> <a:p> --> <a:r> --> <a:t>
    % more debug.xml |  grep -oP '\<p:txBody\>.*\</p:txBody\>' | grep -oP '(?<=\<a:t\>).*?(?=\</a:t\>)'
    % source: https://docs.microsoft.com/en-us/office/open-xml/structure-of-a-presentationml-document
    % source: https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.level1paragraphproperties?view=openxml-2.8.1
    % source: http://officeopenxml.com/prPresentation.php
    % source: http://officeopenxml.com/prSlide-styles-themes.php
    % https://medium.com/@robaboukhalil/your-slide-deck-is-a-zip-file-in-disguise-36bb14f11c0b
    if nargin<2, recursionflag = false; end
    if recursionflag
        txbody = pptxml;
        nbody = 1;
    else
        txbody = uncell(regexp(pptxml,'(?<=<p:txBody>).*?(?=</p:txBody>)','match'));
        nbody = length(txbody);
    end
    if isempty(txbody) % empty body
        content = struct('nlines',0,'paragraphs',{},'length',0);
        stat = struct('nlines',0,'minlengthtxt',0,'maxlengthtxt',0);
        if nargout>2, mergedcontent = {}; end
    else % not empty body
        if nbody>1 % usually notes (pseudo-recursion)
            [content,stat] = getbody(txbody(1),true);
            for ibody = 2:nbody
                [tmp,stattmp] = getbody(txbody(ibody),true);
                if ~isempty(tmp) && max([tmp.nlines])>0
                    content = [content;tmp]; %#ok<AGROW>
                    stat = struct('nlines',stat.nlines+stattmp.nlines,...
                                  'minlengthtxt',min(stat.minlengthtxt,stattmp.minlengthtxt),...
                                  'maxlengthtxt',max(stat.maxlengthtxt,stattmp.maxlengthtxt));
                end
            end
            content = trimbody(content);
            if nargout>2, mergedcontent = mergelines(cat(1,content.paragraphs)); end
            return
        end
        txbody = txbody{1};
        paragraphs = uncell(regexp(txbody,'<a:p>(.*?)</a:p>','tokens')); paragraphs = paragraphs(~cellfun(@isempty,paragraphs));
        if isempty(paragraphs) % empty paragraphs
            content = struct('nlines',0,'paragraphs',{{}},'length',0);
            stat = struct('nlines',0,'minlengthtxt',0,'maxlengthtxt',0);
            if nargout>2, mergedcontent = {}; end
        else % not empty paragraphs
            nparagraphs = length(paragraphs);
            content = repmat(struct('nlines',0,'paragraphs',{{''}},'length',0),nparagraphs,1);
            for ip=1:nparagraphs % for each parapgraph
                bullets = uncell(regexp(paragraphs{ip},'<a:r>(.*?)</a:r>','tokens'));
                bullets = bullets(~cellfun(@isempty,bullets));
                nr = length(bullets);
                if nr % content
                    cattxt = cell(nr,1);
                    for ir = 1:nr % for each bullet
                        txt = regexprep(uncell(regexp(bullets{ir},'<a:t>(.*?)</a:t>','tokens')),{'\s+','^\s$'},{' ',''});
                        txt = txt(~cellfun(@isempty,txt));
                        if isempty(txt)
                            txt = '';
                        else % not empty text object
                            content(ip).length = content(ip).length + length(txt);
                            content(ip).nlines = content(ip).nlines + 1;
                            txt = strtrim(sprintf('%s ',txt{:}));
                            txt = regexprep(txt,{'\s+','\s+([\.,;:])','lne','actia','inra','fmeca','\<usa\>','\<eu\>','\<un\>','\<ec\>','haccp','\s+\?','\(\s+','\s+\)','\<iso\>','\<note:\>'},...
                                                {' '  ,'$1',          'LNE','ACTIA','INRA','FMECA',  'USA'  ,  'EU'  ,  'UN'  ,   'EC' ,'HACCP','?'    ,'('    ,')','iso','N.B. '},'ignorecase');
                        end % if isempty txt
                        cattxt{ir} = txt;
                    end % next ir
                    cattxt = cattxt(~cellfun(@isempty,cattxt));
                    if isempty(cattxt)
                        cattxt = {''};
                        content(ip).nlines = 1;
                    end
                    content(ip).paragraphs = mergelines(cattxt);
                    content(ip).nlines = length(content(ip).paragraphs);
                end % if nr
            end % next ip
            cattxt = mergelines(cat(1,content.paragraphs)); l = cellfun(@length,cattxt);
            stat = struct('nlines',sum(cat(1,content.nlines)),'minlengthtxt',min(l),'maxlengthtxt',max(l));
            content = trimbody(content);
            if nargout>2, mergedcontent = cattxt; end
        end % empty paragraphs
    end % empty txbody
end %end function

function contentt= trimbody(content)
    if isempty(content)
            contentt = content;
    else
        n = length(content);
        l = zeros(n,1);
        for i=1:n
            if isempty(content(i).paragraphs)
                l(i) = 0;
            else
                l(i) = max(cellfun(@length,content(i).paragraphs));
            end
        end
        contentt = content(find(l>0,1,'first'):find(l>0,1,'last'));
    end
end

function cm = mergelines(c)
    if isempty(c), cm=c; return; end
    c = regexprep(c,{'^\s+' '\s+$' '\s+'},{'','',' '}); nc = length(c);
    cm = c(1);
    j=1;
    for i = 2:nc
        if     ~isempty(regexpi(c{i-1},'with\s*$|and\s*$|or\s*$|\(\s*$|\[\s*$|,\s*$|of\s*$|are\s*$|is\s*$|has\s*$|have\s*$|had\s*$|the\s*$|\sa\s*$|on\s*$|,\s*$|;\s*$')) ...
            || ~isempty(regexpi(c{i},'^\s*with|^\s*and|^\s*or|^\s*\)|^\s*\]|^,|^\s*is|^\s*has|^\s*have|^\s*had|^\s*of|^\s*on|^\s*to|^\(|^\s*:'))
            cm{j,1} = sprintf('%s %s',cm{j},c{i});
        elseif ~isempty(regexpi(c{i-1},'^[A-Z]')) && ~isempty(regexpi(c{i},'^[a-z]'))
            cm{j,1} = sprintf('%s %s',cm{j},c{i});
        elseif ~isempty(regexpi(c{i-1},'^[a-z]')) && ~isempty(regexpi(c{i},'^[a-z]'))
            cm{j,1} = sprintf('%s %s',cm{j},c{i});
        elseif ~isempty(regexpi(c{i-1},'\s+le\s*$|\s+les\s*$|\s+la\s*$|\s+du\s*$|\s+des\s*$|\s+à\s*$|\s+aux\s*$'))
            cm{j,1} = sprintf('%s %s',cm{j},c{i});
        else
            j=j+1;
            cm{j,1} = c{i};
        end     
    end
    cm = regexprep(cm,{'\s+','\s+([\.,;:])','\( ',' \)','\[ ',' \]'},{' ','$1','(',')','[',']'});
end
    




% ############### OBSOLETE CODE
    % for each object matching the type in list
%     nok = length(ok{i});
%     myppt(i).nchildren = nok;
%     myppt(i).children = struct('name','','type',types{i}(ok{i}),'tag',tags{i}(ok{i}),'hash','');
%     if ~isempty(myppt(i).children)
%         k=0;
%         for j=ok{i}'
%             k = k +1;
%             myppt(i).children(k).name = slides.Children(i).Children(j).Name;
%             myppt(i).children(k).tag = slides.Children(i).Children(j).Tag;
%             myppt(i).children(k).hash = makehash(myppt(i).children(k).tag);
%             myppthash(1).(myppt(i).children(k).hash) = struct('parent',myppt(i).name,'layout',myppt(i).layout,...
%                 'nchildren',myppt(i).nchildren,'name',myppt(i).children(k).name,'tag',myppt(i).children(k).tag);
%             txt = Text(myppt(i).children(k).hash);
%             replace(slides,myppt(i).children(k).name,myppt(i).children(k).hash)
%         end
%     end
% end