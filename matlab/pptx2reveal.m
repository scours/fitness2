function pptx2reveal(varargin)
%PPTX2REVEAL converts PPTX into HTML 5 presentation based on the original PPTX and its exportation as high-resolution PNG images
%       pptx2reveal('property1','value1,'property2','value2,...)
%       pptx2reveal(...,'static')
%
%   Example (different from default)
%{
      pptx2reveal('pptx','HDR_defense7d.pptx',...
                  'wwwroot','/home/olivi/Documents/fitness/sandbox/hdr/',...
                  'pptxfolder','/home/olivi/Documents/fitness/sandbox',...
                  'title','HDR May 5th, 2017 *(taken as example)*',...
                  'theme','league',...
                  'static' ...
                 )
% Other example
      pptx2reveal('pptx','Vitrac_packforum2018.pptx',...
                  'wwwroot','/home/olivi/Documents/fitness/sandbox/forum/',...
                  'pptxfolder','/home/olivi/Documents/fitness/sandbox',...
                  'title','Predicting the safety of food contact articles - New science and dicdgital opportunities - October 4, 2018  - Four Points by Sheraton, Kalandergasse 1, Zurich',...
                  'theme','moon',...
                  'static' ...
                 )

%}
% 20/09/2018 - INRA\Olivier Vitrac - rev 09/12/2018

% Revision history
% 20/09/2018 alpha/primitive script (first demo online)
% 22/09/2018 entering in beta version, function, documentation and examples (most of reveal options are implemented)
% 23/09/2018 clean trailing characters ',', ';', ...
% 09/12/2018 add keyword simulation

%% Definitions
vrsn = 0.12;
launchpath = pwd;
cleanupObj = onCleanup(@()cd(launchpath));
switch localname
    case 'LX-Olivier2018'
        local = '/home/olivi/Documents/fitness/sandbox';
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
	'maxScale',2,...
    'display','block',...
    'transitionSpeed','default' ... default/fast/slow
    );
default = struct(...
    'wwwroot',fullfile(local,'migration'),...
    'pptxfolder',local,...
    'pptx','Cours_migration2018.pptx',... source pptx required
    'imfolder','jpg',...
    'imsourcefolder','png',...
    'impat','Slide*.jpg',...
    'author','INRA\\Olivier Vitrac',...
    'contact','olivier.vitrac@agroparistech.fr',...
    'title','CONTAMINATION OF FOOD BY PACKAGING MATERIALS',...
    'vrsn',vrsn,...
    'mdfile','index.md',...
    'theme','moon',... % beige,blcak,blood,league,moon,night,serif,simple,sky,solarized,white (https://github.com/hakimel/reveal.js/tree/master/css/theme)
    'initialscale',0.8,...
    'maximumscale',2.0,...
    'userscalable','yes',...
    'reveal',revealoptions_default);
boolean = {'false','true'};
keyword = {'static','simulation' 'repair'};
staticobjects = {
    'css' 'js'   'lib' 'plugin' 'index.html'
    'dir' 'dir'  'dir' 'dir'    'file'
}; % content of the static objects

%% arg check
[revealoptions,others] = argcheck(varargin,struct('reveal',revealoptions_default),keyword,'keep','case','nostructexpand');
o = argcheck(others,rmfield(default,'reveal'),'','case');
o.static = revealoptions.static;
o.simulation = revealoptions.simulation;
o.repair = revealoptions.repair;
revealoptions = argcheck(revealoptions.reveal,revealoptions_default,'','case');

if ~exist(o.wwwroot,'dir'), error('the wwwroot folder ''%s'' does not exist',o.wwwroot), end
if ~exist(o.pptxfolder,'dir'), error('the pptx folder ''%s'' does not exist',o.pptxfolder), end
if ~exist(fullfile(o.pptxfolder,o.pptx),'file'), error('the PPTX file ''%s'' does not exist in ''%s''',o.pptx,o.pptxfolder), end

imenginecmd = sprintf('mogrify -path ''%s'' -resize 25x25%% -quality 90 -format jpg *.PNG',fullfile(o.wwwroot,o.imfolder));
imengine = @() system(imenginecmd);
textenginecmd = @(i) sprintf('unzip -qc ''%s'' ppt/slides/slide%d.xml | grep -oP ''(?<=\\<a:t\\>).*?(?=\\</a:t\\>)''',fullfile(o.pptxfolder,o.pptx),i);
textengine = @(i) system(textenginecmd(i));
slide = @(i) getOutput(textengine,2,i);

%% static output
[~,fnpptx] = fileparts(o.pptx);
staticfolder = fullfile(o.pptxfolder,sprintf('_html_%s',fnpptx));
existstaticfolder = exist(staticfolder,'dir');

%% search for thumb images
if ~exist(fullfile(o.wwwroot,o.imfolder),'dir')
    dispf('PPTX2REVEAL: the image folder ''%s'' does not exist in ''%s''',o.imfolder,o.wwwroot)
    if exist(fullfile(o.wwwroot,o.imsourcefolder),'dir')
        cd(fullfile(o.wwwroot,o.imsourcefolder))
        dispf('PPTX2REVEAL: conversion of all images from the folder ''%s''',o.imsourcefolder)
        if o.simulation,    dispf('simulation>> mkdir %s',fullfile(o.wwwroot,o.imfolder))
        else,               mkdir(fullfile(o.wwwroot,o.imfolder))
        end
        cd(fullfile(o.wwwroot,o.imsourcefolder))
        if o.simulation,    dispf('simulation>> %s',imenginecmd)            
        else,               dispf('run>> %s',imenginecmd), imengine();
        end
        cd(launchpath)
    else
        error('the image source folder ''%s'' does not exist in ''%s''',o.imsourcefolder,o.wwwroot)
    end
end
f = explore(o.impat,fullfile(o.wwwroot,o.imfolder),[],'abbreviate');
if isempty(f)
    if o.simulation
        dispf('simulation>> ERROR no files ''%s'' found in ''%s''',o.impat,fullfile(o.wwwroot,o.imfolder))
        f = explore('*.PNG',fullfile(o.wwwroot,'png'),[],'abbreviate');
        if isempty(f)
            error('SIMULATION failed: no jpg or png files, please export slides first')
        end
    else
        error('no files ''%s'' found in ''%s''',o.impat,fullfile(o.wwwroot,o.imfolder))
    end
end
nn = str2double(uncell(regexp({f.name},'(\d+$)','tokens')));
[~,ind] = sort(nn);
f = f(ind); n = length(f);
dispf('PPTX2REVEAL: %d slides found',n)

%% generate the MarkDown File
slidetransition = '<!--s-->'; %'\n---\n';
verticalbar = '<!--v-->';
if o.simulation
    dispf('simulation>> touch %s',fullfile(o.wwwroot,o.mdfile))
    disp([repmat('-',1,80) '<<< begin'])
    fid = 1;
else
    if ~exist(fullfile(o.wwwroot,o.mdfile),'file') || o.repair
        fid = fopen(fullfile(o.wwwroot,o.mdfile),'w');
    end
end
fprintf(fid,'---\n');
fprintf(fid,'title: %s\n',o.title);
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
fprintf(fid,'    version: demo (%0.3g)\n',o.vrsn);
fprintf(fid,'    date: %s\n',datestr(now,'mmmm dd, yyyy'));
fprintf(fid,'    content: %d slides\n',n);
fprintf(fid,'    source: %s\n',o.pptx);
fprintf(fid,'    contact: %s\n',o.contact);
fprintf(fid,slidetransition);
screen = '';
for i=1:n
    screen = dispb(screen,'>> converting slide %d of %d',i,n);
    content = slide(i);
    if isempty(content), lines = {''}; else, lines = deblank(strsplit(content,newline)); end
    if length(lines{1})<4 || any(lines{1}<32)
        fprintf(fid,'\n### slide %d/%d \n',i,n);
    else
        if strcmpi(lines{1}(end-1:end),'of') || strcmpi(lines{1}(end-2:end),'and')
            slidetxt = [lines{1} ' ' lines{2}];
        else
            slidetxt = lines{1};
        end
        slidetxt = regexprep(slidetxt,'\s*|\,|\;|\.|\+|\-|\_','');
        fprintf(fid,'\n### %s \n',slidetxt);
    end
    fprintf(fid,'![%s](./%s/%s  "slide %d of %d") \n',f(i).file,o.imfolder,f(i).file,i,n);
    if ~isempty(content), fprintf(fid,'note: %s',content); end
    fprintf(fid,slidetransition);
end
if o.simulation,         disp([repmat('-',1,80) '<<< end'])
else,                    fclose(fid);
end

%% display
if o.static
    cd(o.wwwroot)
    [~,fname] = fileparts(o.pptx);
    staticsite = sprintf('_html_%s',fname);
    revealcmd = sprintf('reveal-md %s --static ''%s''',o.mdfile,staticsite);
    if o.simulation
        dispf('simulation>> %s',revealcmd)
    else
        if o.repair
            if existstaticfolder, dispf('clean>> %s',staticfolder), rmdir(staticfolder,'s'), end
            for sobj = staticobjects
                    if exist(fullfile(o.pptxfolder,sobj{1}),sobj{2})
                        dispf('clean>> %s',fullfile(o.pptxfolder,sobj{1}))
                        if strcmp(sobj{2},'dir'), rmdir(fullfile(o.pptxfolder,sobj{1}),'s')
                        else,                     delete(fullfile(o.pptxfolder,sobj{1}))
                        end % dir, file
                    end % if exist
            end % next sobj
        end % if repair
        dispf('run>> %s',revealcmd), system(revealcmd);
        if ~exist(staticfolder,'dir'), error('the following command fails: %s',revealcmd), end
    end % simulation
    idxfile = fullfile(o.wwwroot,staticsite,'index.html');
    if o.simulation
        dispf('simulation>> update %s',idxfile)
    else
        % edit index.html
        fid = fopen(idxfile,'r'); raw=uncell(textscan(fid,'%s','delimiter','\n','whitespace','')); fclose(fid);
        iviewport = ~cellfun(@isempty,regexp(raw,'<meta name="viewport".*>'));
        raw{iviewport} = sprintf('<meta name="viewport" content="width=device-width, initial-scale=%0.1f, maximum-scale=%0.1f, user-scalable=%s">',...
            o.initialscale,o.maximumscale,o.userscalable);
        fid = fopen(idxfile,'w'); for i=1:length(raw); fprintf(fid,'%s\n',raw{i}); end, fclose(fid);
        % move content (only if repair, if not do it manually)
        if o.repair
            for sobj = staticobjects
                if exist(fullfile(staticfolder,sobj{1}),sobj{2})
                dispf('move>> %s',fullfile(o.pptxfolder,sobj{1}))
                movefile(fullfile(staticfolder,sobj{1}),fullfile(o.pptxfolder,sobj{1}))
                end % if exist
            end % next sobj
            dispf('delete>> %s',staticfolder), rmdir(staticfolder)
        end % if repair
    end % simulation
else
    cd(o.wwwroot)
    dispf('\nOnline demo open in the default browser')
    revealcmd = sprintf('reveal-md %s',o.mdfile);
    if o.simulation,    dispf('simulation>> %s',revealcmd)   
    else,               dispf('run>> %s',revealcmd), system(revealcmd);
    end
end


end % end function

% ===================================== PRIVATE FUNCTIONS =====================================
function varargout = getOutput(func,outputNo,varargin)
    varargout = cell(max(outputNo),1);
    [varargout{:}] = func(varargin{:});
    varargout = varargout(outputNo);
end

%% __NOTES__
% Image resize
%   mogrify -path /home/olivi/Documents/sandbox/migration/jpg -resize 25x25% -quality 90 -format jpg *.PNG
% Text extraction
%   unzip -qc Cours_migration2018.pptx ppt/slides/slide1.xml | grep -oP '(?<=\<a:t\>).*?(?=\</a:t\>)'
%   unzip Cours_migration2018.pptx 'ppt/slides/*.xml' -d .  
% HMTL5 conversion
% reveal-md migration.md --static
% reveal-md slides.md --static _site
