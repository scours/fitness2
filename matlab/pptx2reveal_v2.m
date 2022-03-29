function pptx2reveal_v2(varargin)
%PPTX2REVEAL converts PPTX into HTML 5 presentation based on the original PPTX and its exportation as high-resolution PNG images
%       pptx2reveal('property1','value1,'property2','value2,...)
%       pptx2reveal(...,'static')
%
%   Example:
%     /home/olivi/Documents/fitness/sandbox/matlab/sandbox/www
%     assets
%     `----css
%      |    `----highlight
%      |    `----print
%      |    `----theme
%      |     |    `----source
%      |     |    `----template
%     `----js
%     `----lib
%      |    `----css
%      |    `----font
%      |     |    `----league-gothic
%      |     |    `----source-sans-pro
%      |    `----js
%     `----plugin
%      |    `----highlight
%      |    `----markdown
%      |    `----math
%      |    `----multiplex
%      |    `----notes
%      |    `----notes-server
%      |    `----print-pdf
%      |    `----search
%      |    `----zoom-js
%     onlinepres
%     `----test
%      |    `----jpg
%{
      pptx2reveal_v2('pptx','TEST_Jac2017_source.pptx',...
                  'wwwroot','/home/olivi/Documents/fitness/sandbox/matlab/sandbox/www',...
                  'wwwrel','onlinepres/test/',...
                  'wwwlib','assets/',...
                  'pptxfolder','/home/olivi/Documents/fitness/sandbox/matlab/sandbox',...
                  'title','Sandbox developement - August 8, 2019  - not for production',...
                  'theme','night',...
                  'static',...
                  'repair' ...
                 )

%}
% 20/09/2018 - INRA\Olivier Vitrac - rev. 17/12/2020

% Revision history
% 20/09/2018 alpha/primitive script (first demo online)
% 22/09/2018 entering in beta version, function, documentation and examples (most of reveal options are implemented)
% 23/09/2018 clean trailing characters ',', ';', ...
% 09/12/2018 add keyword simulation
% 08/08/2019 fork of ppt2reveal, moving to version 0.2 (version 2)
% 09/08/2019 add contentnfo
% 10/08/2019 add fontsize
% 18/08/2019 several fies for production (0.21)
% 28/08/2019 add resize
% 01/09/2019 add notes if any (0.22)
% 02/09/2019 fix note: (avoid reundancy), add content, final slides (0.24)
% 03/09/2019 add TOC (0.25)
% 06/09/2019 add dependencies (0.26)
% 07/09/2019 update dependencies if repair
% 07/12/2019 add svg capabilities
% 04/02/2019 implements tag/content replacement via property 'replace',struct('replacement1',struct('tag','....','content','....), etc.))
% 2020/02/05 version 0.28
% 2020/03/19 version 0.29, static objects (see staticobjects) are moved individually to enable content menu overrides
% 2020/11/23 version 0.30, add dist as dependency (reveal-md 4.12)
% 2020/12/02 version 0.31, improve compatibility with reveal-md 4.20
% 2020/12/14 version 0.32, implements two methods for menu (insertion [default] and replacement)
% 2020/12/17 version 0.33, add movies and videos as dependencies
% 2020/12/23 add 'guidelines" as dependencies (0.331)

%% Definitions
vrsn = 0.331;
launchpath = pwd;
cleanupObj = onCleanup(@()cd(launchpath));
switch localname
    case {'LX-Olivier2019' 'LX-Olivier2018' 'mol12.agroparistech.fr' 'LX-Olivier2020'}
        local = '/home/olivi/Documents/fitness/sandbox';
    case 'lne-ThinkPad-P52'
        local = '/home/mai/Documents/fitness/sandbox';
    otherwise
        error('define your machine, first')
end
revealoptions_default = struct( ... see https://github.com/hakimel/reveal.js#slide-attributes
    'transition','convex',... none/fade/slide/convex/concave/zoom
    'backgroundTransition','fade',...
    'viewDistance',5,...
    'center',false,...
    'overview',true,...
    'touch',true,...
    'progress',true,...
    'controls',true,...
    'controlsTutorial',true,...
    'controlsLayout','bottom-right',...
    'help',true,...
    'mouseWheel',true,...
    'slideNumber', 'c/t',...
    'autoSlide',15000,...
    'width',"102%",...
	'height',"102%",...
	'margin',0,...
	'minScale',0.1,...
	'maxScale',3,...
    'display','block',...
    'transitionSpeed','default' ... default/fast/slow
    );
imsourcefolder_default = 'png';
default = struct(...
    'wwwroot',local,...
    'wwwrel','demo',...
    'wwwlib','src',...
    'pptxfolder',local,...
    'pptx','Cours_migration2018.pptx',... source pptx required
    'imfolder','jpg',...
    'imsourcefolder','',...
    'impat','Slide*.jpg',...assets (raster)
    'svgpat','Slide*.svg',...assets (svg)
    'author','INRA\\Olivier Vitrac',...
    'contact','olivier.vitrac@agroparistech.fr',...
    'YAMLtitle','',... title will be used when empty
    'title','CONTAMINATION OF FOOD BY PACKAGING MATERIALS',...
    'vrsn',vrsn,...
    'mdfile','index.md',...
    'projectname','',...
    'theme','moon',... % beige,black,blood,league,moon,night,serif,simple,sky,solarized,white (https://github.com/hakimel/reveal.js/tree/master/css/theme)
    'resize','25x25%',...
    'initialscale',0.8,...
    'maximumscale',2.0,...
    'userscalable','yes',...
    'reveal',revealoptions_default,...
    'headingshift','',... add '##' to convert h1->h3, h2->h4, h3->h5, etc.
    'headingshiftnotes','##',...
    'fontsize',[0.6000 0.5500 0.4500 0.3500 0.3000]+.1,... h1 h2 h3, etc. in em (to be used in css/theme/theme.css)
    'hash','',...
    'traceability',true,...
    'maxtitle',120,... max length of title
    'maxcontentslide',12,... maximum number of lines on the content slide
    'favicon','~/Bulk/fitness2019/template/favicon/favicon.ico',...
    'mainindex','',...
    'dependencies',{{'references','videos','movies','extra','casestudies','guidelines','howto','solutions'}},... add movies 2020/12/17, add guidelines 2020/12/23
    'dependencymain','index.html',...
    'imformatpreferred','png',...
    'svgmaxsize','2 MB'...
    );
defaultTOC = struct('TOC',struct([]));
defaultreplace = struct('replace',struct([]));
defaultsubstitute = struct('substitute',struct([]));
boolean = {'false','true'};
keyword = {'static','simulation' 'repair' 'forcedupdate'};
staticobjects = {
    'css' 'js'   'lib' 'plugin' 'dist' 'index.html'
    'dir' 'dir'  'dir' 'dir'    'dir'  'file'
}; % content of the static objects

%% arg check
[revealoptions,others] = argcheck(varargin,struct('reveal',revealoptions_default),keyword,'keep','case','nostructexpand');
[TOC,others] = argcheck(others,defaultTOC,'','keep','case','nostructexpand');  TOC = TOC.TOC;
[replace,others] = argcheck(others,defaultreplace,'','keep','case','nostructexpand');  replace = replace.replace;                % insetertion points
[substitute,others] = argcheck(others,defaultsubstitute,'','keep','case','nostructexpand');  substitute = substitute.substitute; % substitution points
o = argcheck(others,rmfield(default,'reveal'),'','case');
o.static = revealoptions.static;
o.simulation = revealoptions.simulation;
o.repair = revealoptions.repair;
o.forcedupdate = revealoptions.forcedupdate;
revealoptions = argcheck(revealoptions.reveal,revealoptions_default,'','case');
if isempty(o.projectname), [~,projectname] = fileparts(o.mdfile); else, projectname = o.projectname; end
if isempty(o.YAMLtitle), o.YAMLtitle = o.title; end
outputhml = [projectname '.html'];
staticobjects(:,end+1) = {outputhml;'file'};


%% folder check
% wwwroot = server root
% www = /wwwroot/.../wwwrel/ = location of index.html
% wwwlib = /wwwroot/.../o.wwwlib/ = location of libraries
if ~exist(o.wwwroot,'dir'), error('the wwwroot folder ''%s'' does not exist',o.wwwroot), end
if ~exist(o.pptxfolder,'dir'), error('the pptx folder ''%s'' does not exist',o.pptxfolder), end
if ~exist(fullfile(o.pptxfolder,o.pptx),'file'), error('the PPTX file ''%s'' does not exist in ''%s''',o.pptx,o.pptxfolder), end
www = fullfile(o.wwwroot,o.wwwrel);  % location of index.html
wwwlib = fullfile(o.wwwroot,o.wwwlib);
if ~exist(www,'dir'), mkdir(www), end
if ~exist(wwwlib,'dir'), mkdir(wwwlib), end
% htmlpath(p) make p relative to root
% -- example --
% tmpwww = 'www/folder1/html'
% tmpwwwlib = 'lib'
% htmloldlibpath('js') -> './js'
% htmllibpath('js') ->  './../../../lib/js'
% -------------
tmpwww = o.wwwrel;
tmpwwwlib = o.wwwlib;
pathsplit = @(p) strsplit(regexprep(p,{['\' filesep '+'],['^\' filesep],['\' filesep '$']},{['\' filesep] '' ''}),filesep);
fullfilex = @(x) fullfile(x{:});
backpath = @(p) fullfilex(repmat({'..'},length(pathsplit(p)),1));
htmlpath = @(p) fullfile('./',backpath(tmpwww),p);
htmloldlibpath = @(p) fullfile('./',fullfilex(pathsplit(p)));
htmllibpath = @(p) fullfile(htmlpath(tmpwwwlib),p);

%% engines (requires mogridy, libreoffice and pdf2svg)
%imenginecmd = sprintf('mogrify -path ''%s'' -resize 25x25%% -quality 90 -format jpg *.PNG',fullfile(www,o.imfolder));
[~,fname] = fileparts(o.pptx); o.pdf = sprintf('%s.pdf',fname);
imenginecmd  = sprintf('mogrify -path ''%s'' -resize %s -quality 90 -format jpg *.PNG',fullfile(www,o.imfolder),o.resize);
pdfenginecmd = sprintf('libreoffice --headless --convert-to pdf ''%s''',fullfile(o.pptxfolder,o.pptx));
svgenginecmd = sprintf('pdf2svg ''%s'' ''%s'' all',fullfile(o.pptxfolder,o.pdf),fullfile(www,o.imfolder,strrep('Slide*.svg','*','%d')));
imengine  = @() system(imenginecmd);
pdfengine = @() system(pdfenginecmd);
svgengine = @() system(svgenginecmd);
svgmaxsize = mem2bytes(o.svgmaxsize);
svgpreferred = strcmpi(o.imformatpreferred,'svg');

% old text extraction (depreciated in version 0.2, use extractTXTfromPPT instead)
% textenginecmd = @(i) sprintf('unzip -qc ''%s'' ppt/slides/slide%d.xml | grep -oP ''(?<=\\<a:t\\>).*?(?=\\</a:t\\>)''',fullfile(o.pptxfolder,o.pptx),i);
% textengine = @(i) system(textenginecmd(i));
% slide = @(i) getOutput(textengine,2,i);

%% static output
% location:: www = /wwwroot/.../wwwrel/
[relpptxfolder,fnpptx] = fileparts(o.pptx);
if isempty(o.projectname)
    staticsite = sprintf('_html_%s',fnpptx);
else
    staticsite = sprintf('_html_%s',o.projectname);    
end
staticfolder = fullfile(www,staticsite);
existstaticfolder = exist(staticfolder,'dir');

%% search for thumb images
% location:: www = /wwwroot/.../wwwrel/imfolder/
if ~exist(fullfile(www,o.imfolder),'dir')
    dispf('PPTX2REVEAL: the image folder ''%s'' does not exist in ''%s''',o.imfolder,o.wwwroot)
    if isempty(o.imsourcefolder)
        if exist(fullfile(o.pptxfolder,relpptxfolder,fnpptx),'dir')
            rootimsourcefolder = fullfile(o.pptxfolder,relpptxfolder);
            o.imsourcefolder = fnpptx;
        else
            rootimsourcefolder = o.wwwroot;
            o.imsourcefolder = imsourcefolder_default;
        end
    else
            rootimsourcefolder = o.wwwroot;        
    end
    if exist(fullfile(rootimsourcefolder,o.imsourcefolder),'dir')
        dispf('PPTX2REVEAL: conversion of all images from the folder ''%s''',o.imsourcefolder)
        if o.simulation,    dispf('simulation>> mkdir %s',fullfile(www,o.imfolder))
        else,               mkdir(fullfile(www,o.imfolder))
        end
        cd(fullfile(rootimsourcefolder,o.imsourcefolder))
        if o.simulation,    dispf('simulation>> cd ''%s''\nsimulation>> %s',fullfile(rootimsourcefolder,o.imsourcefolder),imenginecmd)
        else,               dispf('run>> %s',imenginecmd), imengine();
        end
        cd(launchpath)
    else
        error('the image source folder ''%s'' does not exist in ''%s''',o.imsourcefolder,rootimsourcefolder)
    end
end
f = explore(o.impat,fullfile(www,o.imfolder),[],'abbreviate');
if svgpreferred
   if ~exist(fullfile(o.pptxfolder,o.pdf),'file'), dispf('run>> %s',pdfenginecmd), currentpath = pwd; cd(o.pptxfolder); pdfengine(); cd(currentpath); end
   if ~exist(fullfile(o.pptxfolder,o.pdf),'file'), error('the pdf ''%s'' has not been converted in ''%s''',o.pdf,o.pptxfolder), end
   LD_LIBRARY_PATH = getenv('LD_LIBRARY_PATH');    % save library path
   setenv('LD_LIBRARY_PATH','')                    % clear library path
   dispf('run>> %s',svgenginecmd), svgengine();
   setenv('LD_LIBRARY_PATH',LD_LIBRARY_PATH)       % restore the library path        
   fsvg = explore(o.svgpat,fullfile(www,o.imfolder),[],'abbreviate');
else
    fsvg = struct([]);
end
if isempty(f)
    if o.simulation
        dispf('simulation>> ERROR no files ''%s'' found in ''%s''',o.impat,fullfile(www,o.imfolder))
        f = explore('*.PNG',fullfile(rootimsourcefolder,o.imsourcefolder),[],'abbreviate');
        if isempty(f)
            error('SIMULATION failed: no jpg or png files, please export slides first')
        end
    else
        error('no file matching ''%s'' in ''%s''',o.impat,fullfile(www,o.imfolder))
    end
end
nn = str2double(uncell(regexp({f.name},'(\d+$)','tokens')));
[~,ind] = sort(nn); f = f(ind); n = length(f);
if svgpreferred
    if isempty(fsvg), error('no file matching ''%s'' in ''%s''',o.svgpat,fullfile(www,o.imfolder)); end
    nnsvg = str2double(uncell(regexp({fsvg.name},'(\d+$)','tokens')));
    [~,ind] = sort(nnsvg); fsvg = fsvg(ind); nsvg = length(fsvg);
    if nsvg ~= n, error('the number of raster images (%d) does not match the number of vectorial images (%d)',n,nsvg), end
end

dispf('PPTX2REVEAL: %d slide images found',n)

%% read the PPT file or use its PREFETCH_ if any (version 0.2 - only)
generatorid = mfilename;
if ~o.forcedupdate
    myppt = extractTXTfromPPT(...
        fullfile(o.pptxfolder,o.pptx),...
        'id',generatorid,...
        'prefetchprefix',sprintf('PREFETCHPPTx_%s_',generatorid),...
        'headingshift',o.headingshift,...
        'maxtitle',o.maxtitle);
else
    myppt = extractTXTfromPPT(fullfile(o.pptxfolder,o.pptx),'id',generatorid,'prefetchprefix',sprintf('PREFETCHPPTx_%s_',generatorid),'headingshift',o.headingshift,'maxtitle',o.maxtitle,'noprefetch');
end
if length(myppt)~=n
    dispf('WORKAROUND::\n\trm -r ''%s''',fullfile(www,o.imfolder))
    error('PPTX2REVEAL: the number of static images (%d) does not match the number of slides (%d)',n,length(myppt))
end

%% manage dependencies
ndependencies = length(o.dependencies);
hasdependencies = cell2struct(repmat({false},1,ndependencies),o.dependencies,2);
[dependencies,dependenciesTOC] = deal({});
for i=1:ndependencies
    hasdependencies.(o.dependencies{i}) = exist(fullfile(o.pptxfolder,o.dependencies{i}),'dir');
    if hasdependencies.(o.dependencies{i})
        dependencies{end+1} = o.dependencies{i}; %#ok<AGROW>
        if ~exist(fullfile(o.pptxfolder,o.dependencies{i},o.dependencymain),'file')
            warning('PPTX2REVEAL:: main file ''%s'' missing in dependency ''%s''',o.dependencymain,fullfile(o.pptxfolder,o.dependencies{i}))
            dependenciesTOC{end+1} = sprintf('<a href="./%1$s/" title="link to resource %1$s">%1$s</a>',o.dependencies{i});  %#ok<AGROW>
        else
            dependenciesTOC{end+1} = sprintf('<a href="./%1$s/%2$s" title="link to resource %1$s">%1$s</a>',o.dependencies{i},o.dependencymain);  %#ok<AGROW>            
        end
        if ~exist(fullfile(www,o.dependencies{i}),'dir') || o.forcedupdate || o.repair
            dispf('PPTX2REVEAL:: found and copy the dependency ''%s'' from ''%s''\n\tto ''%s''',o.dependencies{i},o.pptxfolder,www)
            [ret,retmsg]=copyfile(fullfile(o.pptxfolder,o.dependencies{i}),fullfile(www,o.dependencies{i}));
            if ~ret, error('cannot copy the dependency ''%s'' from ''%s''\n with the follwing message ''%s''',o.dependencies{i},o.pptxfolder,retmsg); end
            if ~exist(fullfile(www,o.dependencies{i},o.dependencymain),'file')
                dispf('PPTX2REVEAL [dependency=''%s''] main document ''%s'' is missing in ''%s''',o.dependencies{i},o.dependencymain,fullfile(www,o.dependencies{i}))
            end
        else
            dispf('PPTX2REVEAL:: found  the dependency ''%s'' (already copied)',o.dependencies{i})
        end
    end
end

%% generate the MarkDown File
slidetransition = '<!--s-->'; %'\n---\n'; % Slides left-right and up-down navigation with ‘—‘ or ‘—-‘
verticalbar = '<!--v-->';
if o.simulation
    dispf('simulation>> touch %s',fullfile(o.wwwroot,o.mdfile))
    disp([repmat('-',1,80) '<<< begin'])
    fid = 1;
else
    if exist(o.favicon,'file')
        copyfile(o.favicon,fullfile(www,'favicon.ico'));
    end
    if ~exist(fullfile(www,o.mdfile),'file') || o.repair
        fid = fopen(fullfile(www,o.mdfile),'w');
    else
        dispf('\t * * *    I M P O R T A N T    * * *')
        dispf('PPTX2REVEAL: the output file exist, use ''repair'' to regenerate the MarkDown file')
        dispf('PPTX2REVEAL: simulation mode is activated')
        fid = 1;
        o.simulation = true;
    end
end
fprintf(fid,'---\n');
fprintf(fid,'title: ''%s''\n',o.YAMLtitle);
fprintf(fid,'separator: %s\n',slidetransition);
fprintf(fid,'verticalSeparator: %s\n',verticalbar);
fprintf(fid,'theme: %s\n',o.theme);
fprintf(fid,'revealOptions:\n');
for p=fieldnames(revealoptions)'
    if ~isempty(revealoptions.(p{1}))
        if isnumeric(revealoptions.(p{1}))
            fprintf(fid,'    %s: %d\n',p{1},revealoptions.(p{1}));
        elseif islogical(revealoptions.(p{1}))
            fprintf(fid,'    %s: %s\n',p{1},boolean{1+revealoptions.(p{1})});
        else
            fprintf(fid,'    %s: ''%s''\n',p{1},revealoptions.(p{1}));
        end
    end
end
fprintf(fid,'---\n');
fprintf(fid,'___\n');
fprintf(fid,'## %s\n',o.title);
fprintf(fid,'### %s\n',o.author);
fprintf(fid,'___\n');
fprintf(fid,'    version: production (%0.3g)\n',o.vrsn);
fprintf(fid,'    date: %s\n',datestr(now,'mmmm dd, yyyy'));
fprintf(fid,'    content: %d slides\n',n);
fprintf(fid,'    class: %s\n',o.YAMLtitle);
fprintf(fid,'    title: %s\n',o.title);
fprintf(fid,'    source: %s\n',o.pptx);
fprintf(fid,'    hash: %s\n',o.hash);
fprintf(fid,'    contact: %s\n',o.contact);
fprintf(fid,'note: ##### [%s]%s@%s> %s with the following parameters: \n',datestr(now,'HH:MM:SS - dd/mm/yyyy'),username,localname,mfilename);
fprintf(fid,' |   **parameter**  | **value**  |\n');
fprintf(fid,' | --------------: | -------- |\n');
for fo = fieldnames(o)'
    if ischar(o.(fo{1})), fprintf(fid, '|   `%s`:   |   ` %s`   |\n',fo{1},o.(fo{1}));
    elseif isnumeric(o.(fo{1})), fprintf(fid,' | `%s`: |   ` %0.4g`   |\n',fo{1},o.(fo{1})(1)); end
end
% slide TOC (if TOC defined)
if ~isempty(TOC)
    fprintf(fid,verticalbar);
    fprintf(fid,'___\n');
    if isempty(dependencies)
        fprintf(fid,'> this lecture\n');
    else
        fprintf(fid,'> <table><tr><td align="center"><small>resources<br/>for this lecture</small></td>%s</tr></table>\n',sprintf('<td>%s</td>',dependenciesTOC{:}));
    end
    fprintf(fid,'___\n');
    fprintf(fid,'%s\n',TOC.current.page);
    if ~isempty(TOC.previous.link)
        fprintf(fid,'___\n');
        fprintf(fid,'> previous lecture\n');
        fprintf(fid,'___\n');
        if ~isempty(TOC.previous.page), fprintf(fid,'%s\n',TOC.previous.page); end
        fprintf(fid,'> *  [%s](%s)\n',TOC.previous.txt,htmlpath(TOC.previous.link));
    end
    if ~isempty(TOC.next.link)
        fprintf(fid,'___\n');
        fprintf(fid,'> next lecture\n');
        fprintf(fid,'___\n');
        if ~isempty(TOC.next.page), fprintf(fid,'%s\n',TOC.next.page); end
        fprintf(fid,'> *  [%s](%s)\n',TOC.next.txt,htmlpath(TOC.next.link));
    end
    fprintf(fid,'___\n');
    fprintf(fid,'\n\n---\n');
    fprintf(fid,'#### [go back to the main menu (all lectures)](%s)\n',htmlpath(o.mainindex));
    fprintf(fid,'---\n');
end
% slide content
for b=1:ceil(n/o.maxcontentslide)
    if b>1, modifier = ' (Cont''ed)'; else, modifier=''; end
    fprintf(fid,verticalbar);
    fprintf(fid,'---\n');
    fprintf(fid,'# CONTENT%s\n',modifier);
    fprintf(fid,'---\n');
    for i = ((b-1)*o.maxcontentslide+1):min(n,b*o.maxcontentslide)
        entry = regexprep(myppt(i).title,'^#*\s*','');
        if isempty(entry), entry = sprintf('slide %d/%d (no title)',i,n); end
        entry = regexprep(entry,{'(.)(.*)','\s+','\s+([\.,;:])','lne','actia','inra','fmeca','\<usa\>','\<eu\>','\<un\>','\<ec\>','haccp','\s+\?','\(\s+','\s+\)','\<iso\>'},...
            {'${upper($1)}${lower($2)}',' '  ,'$1','LNE','ACTIA','INRA','FMECA',  'USA'  ,  'EU'  ,  'UN'  ,   'EC' ,'HACCP','?'    ,'('    ,')','iso' });
        fprintf(fid,'*  [%d/%d] [%s](#/%d)\n',i,n,entry,i);
    end
    if ~isempty(o.mainindex)
        fprintf(fid,'---\n');
        fprintf(fid,'#### [go back to the main menu (all lectures)](%s)\n',htmlpath(o.mainindex));
        fprintf(fid,'---\n');
    end
end
% main slides
fprintf(fid,slidetransition);
screen = '';
shitnotesreplacement = sprintf('${repmat(''#'',1,min(6,length($1)+%d))} ',length(o.headingshiftnotes)); % regexprep('# Title## 2','(#+)\s','${repmat(''#'',1,min(5,length($1)+2))} ')
for i=1:n
    screen = dispb(screen,'>> writting slide %d of %d',i,n);
    % main
    content = myppt(i).content; %slide(i);
    fprintf(fid,'\n%s\n',myppt(i).title);
    if svgpreferred && fsvg(i).bytes<svgmaxsize, currentimfile = fsvg(i).file; else, currentimfile = f(i).file; end
    fprintf(fid,'![%s](./%s/%s  "slide %d of %d") \n',currentimfile,o.imfolder,currentimfile,i,n);
    % notes
    contentfornotes = regexprep(content,'(#+)\s',shitnotesreplacement);
    if myppt(i).hasnotes && ~isempty(myppt(i).mergednotes)
        notecontent = sprintf('\nnote: %s',sprintf('%s\n',myppt(i).mergednotes{:}));
        fprintf(fid,'%s\n',notecontent);
        noteon = true;
    else
        noteon = false;
    end
    if ~isempty(content), if noteon, fprintf(fid,'%s',contentfornotes); else, fprintf(fid,'note: %s',contentfornotes); noteon = true; end, end
    if o.traceability, if noteon, fprintf(fid,'%s\n',myppt(i).contentnfo); else, fprintf(fid,'note: %s\n',myppt(i).contentnfo); end, end
    if i<n, fprintf(fid,slidetransition); else, fprintf(fid,verticalbar); end
end
% last slide
fprintf(fid,'---\n');
fprintf(fid,'# Thank you for your attention.\n');
fprintf(fid,'---\n');
fprintf(fid,'###  Use this link to go back to the first slides\n');
fprintf(fid,'*  >  [first slide](#/)\n \n');
fprintf(fid,'*  >  [logo slide](#/1)\n \n');
fprintf(fid,'*  >  [content slide](#/0/2)\n \n');
fprintf(fid,'*  >  [title slide](#/2)\n \n');
fprintf(fid,'---\n');
fprintf(fid,'####  report issues to [Olivier Vitrac](mailto:olivier.vitrac@agroparistech.fr)\n');
if ~isempty(o.mainindex)
    fprintf(fid,verticalbar);
    fprintf(fid,'___\n');
    fprintf(fid,'# [go back to the main menu (all lectures)](%s)\n',htmlpath(o.mainindex));
    if ~isempty(TOC.next.link)
        fprintf(fid,'___\n');
        fprintf(fid,'> next lecture\n');
        fprintf(fid,'___\n');
        if ~isempty(TOC.next.page), fprintf(fid,'%s\n',TOC.next.page); end
        fprintf(fid,'> *  [%s](%s)\n',TOC.next.txt,htmlpath(TOC.next.link));
    end
    fprintf(fid,'___\n');
end
if o.simulation,         disp([repmat('-',1,80) '<<< end'])
else,                    fclose(fid);
end

%% display
currentpath = pwd;
if o.static
    cd(www)
    revealcmd = sprintf('reveal-md %s --static ''%s''',o.mdfile,staticsite);
    if o.simulation
        dispf('simulation>> %s',revealcmd)
    else
        outputhtml_default = fullfile(staticfolder,'index.html'); % original file created by reveal-md
        outputhtml = fullfile(staticfolder,outputhml);
        if o.repair % cleaning
            % clean assets
            if existstaticfolder, dispf('clean>> %s',staticfolder), rmdir(staticfolder,'s'), end
            for sobj = staticobjects
                    if exist(fullfile(staticfolder,sobj{1}),sobj{2})
                        dispf('clean>> %s',fullfile(staticfolder,sobj{1}))
                        if strcmp(sobj{2},'dir'), rmdir(fullfile(staticfolder,sobj{1}),'s')
                        else,                     delete(fullfile(staticfolder,sobj{1}))
                        end % dir, file
                    end % if exist
            end % next sobj
            % clean mdfile.html
            if exist(outputhtml_default,'file'), delete(outputhtml_default); end
            if exist(outputhtml,'file'), delete(outputhtml); end
        end % if repair
        % WORKAROUND
        %  _html_TEST_Jac2017_source/index.html
        %  _html_TEST_Jac2017_source/index.html → _html_TEST_Jac2017_source/index.html
        % { [Error: EEXIST: file already exists, symlink 'index.html' -> '_html_TEST_Jac2017_source/index.html']
        % Note that --static-dirs='jpg/' does not resolve the warnings
        if ~exist(outputhtml,'file')
            if ~exist(staticfolder,'dir'), mkdir(staticfolder); end
            system(sprintf('touch ''%s''',outputhtml));
        end % workaround to fix a bug in reveal-md 
        % END WORKAROUND
        LD_LIBRARY_PATH = getenv('LD_LIBRARY_PATH');    % save library path
        setenv('LD_LIBRARY_PATH','')                    % clear library path
        dispf('run>> %s',revealcmd), system(revealcmd); % run with the system libraries (running this command on existing files without repair generate an error)
        setenv('LD_LIBRARY_PATH',LD_LIBRARY_PATH)       % restore the library path
        if ~exist(staticfolder,'dir'), error('the following command fails: %s',revealcmd), end
    end % simulation
    if o.simulation
        dispf('simulation>> update %s',outputhtml)
    else
        % edit index.html (or the equivalent outputhtml)
        if exist(outputhtml_default,'file')
            fid = fopen(outputhtml_default,'r'); raw=uncell(textscan(fid,'%s','delimiter','\n','whitespace','')); fclose(fid);
        else
            fid = fopen(outputhtml,'r'); raw=uncell(textscan(fid,'%s','delimiter','\n','whitespace','')); fclose(fid);
        end
        % change all paths
        for p = staticobjects(1,ismember(staticobjects(2,:),'dir'))
            oldp = htmloldlibpath(p{1});
            newp = htmllibpath(p{1});
            raw = regexprep(raw,regexptranslate('escape',oldp),regexptranslate('escape',newp));
        end
        % viewport
        iviewport = ~cellfun(@isempty,regexp(raw,'<meta name="viewport".*>'));
        raw{iviewport} = sprintf('<meta name="viewport" content="width=device-width, initial-scale=%0.1f, maximum-scale=%0.1f, user-scalable=%s">',...
            o.initialscale,o.maximumscale,o.userscalable);
        % replace TAG:CONTENT
        if ~isempty(replace)
            for reptag = fieldnames(replace)'
                raw = regexprep(raw,replace.(reptag{1}).tag,replace.(reptag{1}).content);
            end
        end
        % replace between TAG and ENDTAG
        if ~isempty(substitute)
            raw2 = sprintf('%s\n',raw{:}); % convert the cell into a single string
            for reptag = fieldnames(substitute)'
                raw2 = regexprep(raw2,[substitute.(reptag{1}).tag '.*?' substitute.(reptag{1}).endtag],substitute.(reptag{1}).content);
            end
            raw = regexp(raw2,'\n','split')';
        end        
        % write back index.html (or the equivalent outputhtml)
        fid = fopen(outputhtml,'w'); for i=1:length(raw); fprintf(fid,'%s\n',raw{i}); end, fclose(fid);
        % remove the image folder, 'favicon.ico' if it exist (behavior of reveal-md since 4.2)
        if exist(fullfile(staticfolder,o.imfolder),'dir'), dispf('remove>> %s',fullfile(staticfolder,o.imfolder)), rmdir(fullfile(staticfolder,o.imfolder),'s'); end
        if exist(fullfile(staticfolder,'favicon.ico'),'file'), dispf('remove>> %s',fullfile(staticfolder,'favicon.ico')), delete(fullfile(staticfolder,'favicon.ico')); end        
        % move content (only if repair, if not do it manually)
        skip = false;
        if o.repair
            for sobj = staticobjects
                if exist(fullfile(staticfolder,sobj{1}),sobj{2})  % check that the source exist
                    dispf('move>> %s',fullfile(staticfolder,sobj{1}))
                    if strcmp(sobj{2},'dir')
                        dtmp = fullfile(wwwlib,sobj{1});
                        if exist(dtmp,'dir')  % destination folder exist 
                            dispf('skip ''%s'', the directory already exist  in ''%s''',fullfile(sobj{1},filesep),wwwlib)
                            % check each file individually
                            stmp = fullfile(staticfolder,sobj{1});
                            ftmp = explore('*.*',stmp,[],'abbreviate');
                            for itmp = 1:length(ftmp)
                                if ~exist(fullfile(dtmp,ftmp(itmp).subpath),'dir'); mkdir(dtmp,ftmp(itmp).subpath); end
                                if ~exist(fullfile(dtmp,ftmp(itmp).subpath,ftmp(itmp).file),'file')
                                    dispf('move>> %s',fullfile(ftmp(itmp).path,ftmp(itmp).file))
                                    movefile(fullfile(ftmp(itmp).path,ftmp(itmp).file),fullfile(dtmp,ftmp(itmp).subpath,ftmp(itmp).file))
                                    skip = false;
                                else
                                    skip = true;
                                end
                            end
                        else                                      % the folder does not exist
                            movefile(fullfile(staticfolder,sobj{1}),fullfile(wwwlib,sobj{1}))
                        end
                    else
                        movefile(fullfile(staticfolder,sobj{1}),fullfile(www,sobj{1}))
                    end
                end % if exist
            end % next sobj
            skip = skip || isempty(explore('*.*',staticfolder,[],'abbreviate'));
            dispf('remove>> %s',staticfolder), if skip, rmdir(staticfolder,'s'); else, rmdir(staticfolder); end
            if  ~strcmp(outputhtml_default,outputhtml) && exist(fullfile(www,lastdir(outputhtml_default)),'file'), delete(fullfile(www,lastdir(outputhtml_default))); end
        end % if repair
        % fix fontsize in css
        cssfile = fullfile(wwwlib,'css','theme',sprintf('%s.css',o.theme));
        % workaround reveal-md 4.12: src/css/theme/moon.css --> src/dist/theme/moon.css
        if ~exist(cssfile,'file')
            dispf('WARNING: theme folder moved to src/dist instead of src/css')
            cssfile = fullfile(wwwlib,'dist','theme',sprintf('%s.css',o.theme));
        end
        cssupdate = false;
        fid = fopen(cssfile,'r'); raw=uncell(textscan(fid,'%s','delimiter','\n','whitespace','')); fclose(fid);
        for ih = 1:length(o.fontsize)
            icss = find(ismember(raw,sprintf('.reveal h%d {',ih)),1,'first');
            if ~isempty(icss) && icss<length(raw)
                raw{icss+1} = regexprep(raw{icss+1},'\d?\.?\d+em',sprintf('%0.3gem',o.fontsize(ih)));
                cssupdate = true;
            end
        end % next ih
        if cssupdate, fid = fopen(cssfile,'w'); for i=1:length(raw); fprintf(fid,'%s\n',raw{i}); end, fclose(fid); end
    end % simulation
    cd(currentpath)
    % links
    if ~o.simulation
        dispf('>> OUTPUT:\t<a href="%1$s">Markdown file (static)</a>\t-\t%1$s',fullfile(www,o.mdfile))
        dispf('>> OUTPUT:\t<a href="%1$s">HTML file (interactive)</a>\t-\t%1$s',fullfile(www,lastdir(outputhtml)))
    end
else
    cd(o.www)
    dispf('\nOnline demo open in the default browser')
    revealcmd = sprintf('reveal-md %s',o.mdfile);
    if o.simulation,    dispf('simulation>> %s',revealcmd)   
    else,               dispf('run>> %s',revealcmd), system(revealcmd);
    end
end



end % end function

% ===================================== PRIVATE FUNCTIONS =====================================
% function varargout = getOutput(func,outputNo,varargin)
%     varargout = cell(max(outputNo),1);
%     [varargout{:}] = func(varargin{:});
%     varargout = varargout(outputNo);
% end

%% __NOTES__
% Image resize
%   mogrify -path /home/olivi/Documents/sandbox/migration/jpg -resize 25x25% -quality 90 -format jpg *.PNG
% Text extraction
%   unzip -qc Cours_migration2018.pptx ppt/slides/slide1.xml | grep -oP '(?<=\<a:t\>).*?(?=\</a:t\>)'
%   unzip Cours_migration2018.pptx 'ppt/slides/*.xml' -d .  
% HMTL5 conversion
% reveal-md migration.md --static
% reveal-md slides.md --static _site
