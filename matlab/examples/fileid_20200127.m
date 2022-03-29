%fileid_20191207
%INRA\Olivier Vitrac - 19/08/2018, 28/08/2019, 03/09/2019 (major release, TOC), 07/09/2019 (dependencies), 07/12/2019 (svg), 27/01/2020
% PRODUCTION version for Session Dijon - 5-7 February 2020
% $ revision 2020/02/06 $
%
% When updated, please change vsn, rev and the name of the script L33 (see comment inside)

%% Load aliases from fileid
usr = alias;
usr.set({ 'local','current','fileid'},...
        {'/home/@username/Bulk/fitness2019/sandbox',...
         'fileid_20200127.ods',...
        '$local/$current'},'path');
fileid = usr.fileid; %fileid = '/home/olivi/Bulk/fitness2019/sandbox/fileid_20190814.ods';
def = alias; %alias('protectpath',false);
def.load(fileid)
forcedupdate = true; % <--- set it to true ONLY to update PREFETCH files
forcecleandepencies = true;
favicon = '~/Bulk/fitness2019/template/favicon/favicon.ico';
vsn = 0.29;
rev = '$2020/02/06$';
if def.isalias('imformatpreferred')
    issvg = strcmpi(def.imformatpreferred,'svg');
else
    issvg = false;
end
if ~exist(def.wwwroot,'dir'), mkdir(def.wwwroot); end
backupdependencymain = def.dependencymain;
if ~exist(def.maincontent,'file'), error('content file ''%s'' does not exist', def.maincontent), end
jsonmaincontent = jsondecode(fileread(def.maincontent));
if isempty(jsonmaincontent), error('''%s'' in ''%s'' does not contain data.\nPlease provide a valid JSON content file',def.content,def.maincontent), end
if (length(jsonmaincontent)==1) && ~isfield(jsonmaincontent,'level'), jsonmaincontent = struct2cell(jsonmaincontent); jsonmaincontent = cat(1,jsonmaincontent{:}); end
myscript = mfilename();
listlevels = {'common' 'specialized'};
IEEfix = @(x) str2double(sprintf('%0.12g',x));
genkey = @(l,s,u,p) IEEfix( l + s/100 + u/10000 + p/1000000 );
genpath = @(l,s,u,p) sprintf('%1$s/S%2$d/U%2$d.%3$d/part%4$d',listlevels{l},s,u,p);
sourcemenu = rootdir(def.maincontent);
destinationmenu = fullfile(def.wwwroot,def.wwwlib);
menulib = struct( ...
    'source',cellfun(@(f) fullfile(sourcemenu,f),{'json/extracontent.json' 'content.json' 'css/menu.css' 'js/menu.js' 'js/jquery.min.js'},'UniformOutput',false),...
    'destination',cellfun(@(f) fullfile(destinationmenu,f),{'json/extracontent.json' 'json/content.json' 'css/menu.css' 'js/menu.js' 'js/jquery.min.js'},'UniformOutput',false) ...
);


%% Check whether a global medu is defined
menukey = struct('head','menucontentHEAD','body','menucontentBODY');
menu = struct('head',struct('tag','</head>','content','','where','before'),...
              'body',struct('tag','<body>','content','','where','after'));
for m=fieldnames(menukey)'
    if exist(def.(menukey.(m{1})),'file')
        fid = fopen(def.(menukey.(m{1})),'r');
        tmp = uncell(textscan(fid,'%s','delimiter','\n','whitespace',''));
        if ~isempty(tmp)
            menu.(m{1}).content = sprintf('%s\n',tmp{:});
        end
        if strcmpi(menu.(m{1}).where,'after')
            menu.(m{1}).content = [menu.(m{1}).tag newline menu.(m{1}).content];
        else
            menu.(m{1}).content = [menu.(m{1}).content menu.(m{1}).tag];
        end
        menu.(m{1}).tag = regexptranslate('escape',menu.(m{1}).tag);
        fclose(fid);
    end
end


%% Force an analyze of all files before converting PPT files in HTML5, to be used to create a general TOC and links all presentations together
if ~exist('forced','var') || ~forced
    simulation = false;            %<----------------- user choice (use simulation=true for debugging or analyzing the structure)
    forced = false;
end
if isempty(myscript) || ~isempty(regexp(myscript,'^LiveEditor','once')), error('run this script by pressing F5'), end
if ~exist('cPPTx','var') && ~forced
    simulationstate = simulation;
    dispf('=============================================')
    dispf('force simulation to analyze all the structure')
    dispf('=============================================')
    simulation = true; %#ok<NASGU>
    forced = true; %#ok<NASGU>
    run(myscript)               %<----------------- update it when needed (/* ATTENTION */) (/* ATTENTION */) (/* ATTENTION */)
    simulation = simulationstate;
    forced = false;
    dispf('================================================')
    dispf('the structure has been analyzed (variable cPPTx)')
    dispf('================================================')
end


%% search for all PPTX as defined by aliases set in fileid
excludelocked = '^\.\~lock.*.pptx#$';
PPTx = explore('*.pptx',def.sourcePPTfolder,'','abbreviate');
PPTx = PPTx(cellfun(@isempty,regexp({PPTx.file}',excludelocked)));
listauthors = {
    'Kata Galić'
    'Fátima Poças'
    'Patrick Sauvegrain'
    'Maria José Fabra'
    'Catherine Loriot'
    'Frederic Debeaufort'
    'Horst Christian Langowski'
    'Olivier Vitrac'
    'Murielle Hayert'
    'Sandra Domenek'
    'Jean-Mario Julien'
    'Phuong-Mai Nguyen'
    };
for i=1:length(PPTx)
    tmp = strsplit(PPTx(i).subpath,filesep); tmp = tmp(~cellfun(@isempty,tmp));
    PPTx(i).fingerprint = DataHash(lower(fullfile(PPTx(i).subpath,PPTx(i).file)),struct('HEX','base64','Method','MD5'));
    PPTx(i).subpath_split = tmp;
    PPTx(i).depth = length(PPTx(i).subpath_split);
    if forcecleandepencies 
        PPTx(i).slides = extractTXTfromPPT(fullfile(PPTx(i).path,PPTx(i).file),'noprefetch');
    else
        PPTx(i).slides = extractTXTfromPPT(fullfile(PPTx(i).path,PPTx(i).file)); %#ok<UNRCH>
    end
    PPTx(i).slidetitle = regexprep(PPTx(i).slides(2).content,{'\n','#+\s+','^Unit\s*\d+\.\d+\s*'},{' - ','',''});
    iauthor = find(~cellfun(@isempty,regexp(PPTx(i).slidetitle,listauthors,'match')));
    if isempty(iauthor), PPTx(i).author = ''; else, PPTx(i).author = listauthors{iauthor}; end
    PPTx(i).slidetitle = regexprep(PPTx(i).slidetitle,...
        {'\s+(-|_)?\s*(Partner|Catherine|Maria|xxxx|Prof|Output|Special|part|WP2: Pro).*$' 'Fátima Poças\s?-?\s?' 'Output\:?\s*\d*\s*\(?O?\d*\)\s*' 'WP.*Unit \d\.\d\.?\s*','Common.*Unit\d\s\d\s*'},{'','','','',''});
    if isfield(PPTx(i).slides,'dependencies')
        PPTx(i).dependencies = PPTx(i).slides(1).dependencies; % inherit dependencies found in the first slide
    else
        PPTx(i).dependencies = {};
    end
end

% manage duplicates/update
dup=findduplicates({PPTx.fingerprint}); ndup = length(dup);
toberemoved = [];
for idup=1:ndup
    ind = find(ismember({PPTx.fingerprint},dup{idup})); nind = length(ind);
    [~,idate] = sort([PPTx(ind).datenum],'descend');
    toberemoved = [toberemoved ind(2:end)]; %#ok<AGROW>
    dispf('Duplicated PPTx %d/%d (%d copies)',idup,ndup,nind)
    for j=1:nind
        dispf('\t[%s - %0.3g MB] %s',PPTx(ind(j)).date,PPTx(ind(j)).bytes/1e6,fullfile(PPTx(ind(j)).subpath,PPTx(ind(j)).file))
    end
end
% remove duplicates
dispf('remove %d duplicated PPTx',length(toberemoved))
PPTx(toberemoved)=[];
% length of sub folders
dispf('found depths: %s',sprintf(' %d',unique([PPTx.depth])))
depthmax = max([PPTx.depth]);
valid = [PPTx.depth]==depthmax;
PPTx = PPTx(valid);
nPPTx = length(PPTx);

%% extract all levels, sort all
levels = cell(nPPTx,depthmax);
for i=1:nPPTx
    for j=1:depthmax
        levels{i,j} = PPTx(i).subpath_split{j};
    end
end
[~,ind] = sortrows(upper(levels));
levels = levels(ind,:);
PPTx = PPTx(ind);

%% classification
[levellist,levelid] = deal(cell(depthmax,1));
levelidx = NaN(nPPTx,depthmax);
for j = 1:depthmax
    [levellist{j},~,levelidx(:,j)] = unique(upper(levels(:,j)));
end
[~,~,classid] = unique(levelidx,'rows','stable');
T = table(classid,levelidx,levels);
listclassid = unique(classid); nclassid = length(classid);
partcounter = zeros(nclassid,1);
for i=1:nPPTx
    partcounter(classid(i)) = partcounter(classid(i)) + 1;
    PPTx(i).nparts = length(find(classid==classid(i)));
    PPTx(i).ipart = partcounter(classid(i));
end
levelid{1} = lower(uncell(regexp(levellist{1},'(COMMON|SPECIALIZED)','match')));
levelid{2} = regexprep(uncell(regexp(levellist{2},'(SESSION\s?\d+)','match')),'ESSION\s','');
levelid{3} = regexprep(uncell(regexp(levellist{3},'(UNIT\s?\d+\.\d+)','match')),'NIT\s','');
S = str2double(uncell(regexp(levellist{3},'UNIT\s?(?<section>\d+)\.(?<subsection>\d+)','tokens')));
titleid = repmat({''},size(levels));
titleid(:,1) = regexprep(levels(:,2),'session\s?\d+\s\_\s+','','ignorecase');
titleid(:,2) = regexprep(levels(:,3),'UNIT\s?\d+\.\d+\s*','','ignorecase');
% parts in file name not working
% tmp = uncell(regexp({PPTx.file}','part\s?(\d+)\.pptx$','tokens','ignorecase'));
% morethanone = ~cellfun(@isempty,tmp);
% titleid(morethanone,3) = arrayfun(@(n,m) sprintf('(part %d/%d)',n,m),str2double(uncell(tmp(morethanone))),[PPTx(morethanone).nparts]','UniformOutput',false);
% fixed parts
morethanone = [PPTx.nparts]'>1;
titleid(morethanone,3) = arrayfun(@(n,m) sprintf(' (part %d/%d)',n,m),[PPTx(morethanone).ipart]',[PPTx(morethanone).nparts]','UniformOutput',false);

%% POPULATE CONTENT (back compatibility) based on hash
nINPUTS = 9;
template  = cell2struct(repmat({''},1,nINPUTS),arrayfun(@(i) sprintf('INPUT%d',i),1:nINPUTS,'UniformOutput',false),2);
for i=1:nPPTx
    ipart = str2double(uncell(regexp(PPTx(i).file,'part\s*(\d+)','tokens')));
    if ~isempty(ipart), PPTx(i).ipart = ipart; end
    PPTx(i).INPUTS = template;
    PPTx(i).INPUTS.INPUT1 = regexprep(PPTx(i).subpath,['^' regexptranslate('escape',filesep)],'');
    PPTx(i).INPUTS.INPUT2 = PPTx(i).file;
    def.set(PPTx(i).INPUTS) % assign all parameters
    PPTx(i).hash = DataHash(fullfile(def.makehash),struct('HEX','base64','Method','MD2'));
    PPTx(i).l = levelidx(i,1);
    PPTx(i).s = S(levelidx(i,3),1);
    PPTx(i).u = S(levelidx(i,3),2);
    PPTx(i).p = PPTx(i).ipart;
    PPTx(i).key = genkey(PPTx(i).l,PPTx(i).s,PPTx(i).u,PPTx(i).p);
    PPTx(i).keypath = genpath(PPTx(i).l,PPTx(i).s,PPTx(i).u,PPTx(i).p);
end
jsonmaincontentidx = NaN(nPPTx,1);
refhash = {jsonmaincontent.hash}';
sourcehash = {PPTx.hash}';
[~,iref,isou] = intersect(refhash,sourcehash,'stable');
isourcemissing = setdiff(1:length(sourcehash),isou);
irefmissing = setdiff(1:length(refhash),iref);
% check common for mistakes in l s u
inotcorrect = find((abs([PPTx(isou).key] - [jsonmaincontent(iref).key]))>genkey(0,0,0,0));
dispf('%1$s - %2$s - %1$s',repmat('#',1,12),'HASH')
dispf('bad HASH assignment (level:Section.Unit) for %d files',length(inotcorrect))
for i=inotcorrect
    dispf('PPTx(%d): %s of ''%-50s'' from ''%s''',isou(i),PPTx(isou(i)).keypath,PPTx(isou(i)).file,PPTx(isou(i)).subpath)
    dispf('JSON(%d): %s of ''%-50s'' from ''%s''',iref(i),jsonmaincontent(iref(i)).path,jsonmaincontent(iref(i)).unit,jsonmaincontent(iref(i)).section)
    dispf('>> JSON entry is discarded, please check')
    %for p = {'l' 's' 'u' 'p' 'keypath'}
    %    jsonmaincontent(iref(i)).(p{1}) = PPTx(isou(i)).(p{1});
    %end
    dispf(' -----')
end
dispf('%1$s - %2$s - %1$s',repmat('#',1,12),'')
jsonmaincontent(iref(inotcorrect)) = [];
jsonkeys = cat(1,jsonmaincontent.key);

%% prepare INPUTS
% Lectures are organized as level/section/unit
%         $sourcelocal: $INPUT1/ (path='$INPUT1/')
%                $pptx: $INPUT2 (char='$INPUT2')
%               $level: $INPUT3 (char='$INPUT3')
%             $section: $INPUT4 (char='$INPUT4')
%                $unit: $INPUT5 (char='$INPUT5')
%             $lecture: $INPUT6 (char='$INPUT6')
%        $runningTitle: $INPUT7 (char='$INPUT7')
%              $author: $INPUT8 (char='$INPUT8')
%   $ProductionComment: $INPUT9 (char='$INPUT9')
for i=1:nPPTx
    % ---- jSON index
    currentref = jsonmaincontent(jsonkeys==PPTx(i).key);
    % ----
    PPTx(i).LEVEL = PPTx(i).l;
    PPTx(i).SECTION = PPTx(i).s;
    PPTx(i).SUBSECTION = PPTx(i).u;
    PPTx(i).PART = PPTx(i).p;
    PPTx(i).INPUTS.INPUT3 = levelid{1}{levelidx(i,1)};
    PPTx(i).INPUTS.INPUT4 = levelid{2}{levelidx(i,2)};
    PPTx(i).INPUTS.INPUT5 = levelid{3}{levelidx(i,3)};
    PPTx(i).INPUTS.INPUT6 = sprintf('part%d',PPTx(i).ipart);
    PPTx(i).INPUTS.INPUT7 = PPTx(i).slidetitle; %sprintf('%s%s',titleid{i,2},titleid{i,3});
    PPTx(i).INPUTS.INPUT8 = PPTx(i).author;
    if ~isempty(currentref)
        if ~isempty(currentref.runningtitle), PPTx(i).INPUTS.INPUT7 = currentref.runningtitle; end
        PPTx(i).INPUTS.INPUT8 = currentref.author;
    end
    if isempty(PPTx(i).INPUTS.INPUT8), PPTx(i).INPUTS.INPUT8 = 'undefined author'; end
    % check assignment the source PPTX, the image folder and its content
    def.set(PPTx(i).INPUTS) % assign all parameters
    % check
    if ~exist(fullfile(def.pptxfolder,def.pptx),'file')
        PPTx(i).INPUTS.INPUT7 = 'missing presentation';
        PPTx(i).INPUTS.INPUT9 = 'ERROR::missing PPTx';
        PPTx(i).ok = false;
    elseif ~exist(fullfile(def.pptxfolder,PPTx(i).name),'dir')
        PPTx(i).INPUTS.INPUT7 = 'missing images';
        PPTx(i).INPUTS.INPUT9 = 'ERROR::missing images'; % set an empty lecture
        PPTx(i).ok = false;
    elseif isempty(explore('*.PNG',fullfile(def.pptxfolder,PPTx(i).name),0,'fullabbreviate'))
        dispf('[%d/%d] no PNG, please check in ''%s''',i,nPPTx,def.pptxfolder)
        PPTx(i).ok = false;
    else
        PPTx(i).ok = true;
    end
    % create a hash folder to facilitate the conversion for all files having problems
    %PPTx(i).hash = DataHash(fullfile(def.makehash),struct('HEX','base64','Method','MD2'));
    def.set('hash',PPTx(i).hash,'path');
    if ~PPTx(i).ok
        if ~exist(def.hashfolder,'dir'), mkdir(def.hashfolder), end
        if exist(fullfile(def.hashfolder,def.hash),'dir')
            dispf('[%d/%d] restore the folder images',i,nPPTx)
            if ~simulation
                if ~exist(fullfile(def.pptxfolder,PPTx(i).name),'dir'), mkdir(fullfile(def.pptxfolder,PPTx(i).name)), end
                copyfile(fullfile(def.hashfolder,def.hash,filesep),fullfile(def.pptxfolder,PPTx(i).name));
                delete(def.hashfile)
            end
        elseif ~exist(def.hashfile,'file')
            dispf('[%d/%d] put a hash.pptx to convert into images',i,nPPTx)
            if ~simulation
                copyfile(def.file2hash,def.hashfile); fileinfo(def.hashfile);
            end
        end
    else
        dispf('[%d/%d] pptx2reveal...',i,nPPTx)
        if ~simulation
            def.set('mainindex',regexprep(def.indexfile,'\.md','.html'),'path')
            TOC = cPPTx.(sprintf('f%s',PPTx(i).fingerprint)).TOC;
            pptx2reveal_setup = def.struct;
            if forcedupdate
                pptx2reveal_v2(pptx2reveal_setup,'TOC',TOC,'replace',menu,'static','repair','forcedupdate')
            else
                pptx2reveal_v2(pptx2reveal_setup,'TOC',TOC,'replace',menu,'static','repair') %#ok<UNRCH>
            end
        end
    end
end
struct2table([PPTx.INPUTS])

%% Generate main index
mdmain = cell(0,1);
firstupper = @(x) regexprep([upper(x(1)) lower(x(2:end))],...
            {'\<eu\>','\<ec\>','\<us\>','\<fmea\>','\<fmeca\>','\<sfpp3\>','\<inra\>'},...
            {'EU','EC','US','FMEA','FMECA','SFPP3','INRA'},'ignorecase');
txt2html = @(x) regexprep(x,{' ','(',')'},{'%20','%28','%29'});
tmpwww = def.wwwhtml;
tmpwwwlib = def.wwwlib;
pathsplit = @(p) strsplit(regexprep(p,{['\' filesep '+'],['^\' filesep],['\' filesep '$']},{['\' filesep] '' ''}),filesep);
fullfilex = @(x) fullfile(x{:});
backpath = @(p) fullfilex(repmat({'..'},length(pathsplit(p)),1));
htmlpath = @(p) txt2html(fullfile('./',backpath(tmpwww),p));
htmllibpath = @(p) txt2html(fullfile(htmlpath(tmpwwwlib),p));
mdlink = @(text,htmlfile) sprintf('[%s](%s)',text,txt2html(fullfile('./',htmlfile)));
htmllink = @(text,htmlfile) sprintf('<a href="%2$s">%1$s</a>',text,txt2html(fullfile('./',htmlfile)));
if simulation, cPPTx = struct([]); end % content PPTx (set when simulation is true then used to link presentations)

% levels
current = struct('level','','section','','subsection','','part','','link','','previous','','next','',...
    'TOC',struct('current',struct('page','','txt','','link',''),'previous',struct('page','','txt','','link',''),'next',struct('page','','txt','','link','')));
def.set('wwwrellink','$wwwhtml/$link','path')
for level = unique([PPTx.LEVEL])
    ok1 = ([PPTx.LEVEL]==level);
    leveltitle = firstupper(regexprep(levellist{1}{level},{'^FITNESS\s_\s' '\straining modules'},{'' ''},'ignorecase'));
    mdmain{end+1} = sprintf('%s%s modules',def.ATXlevel,leveltitle); current.level = mdmain{end}; disp(mdmain{end})  %#ok<SAGROW>
    % section
    for section = unique([PPTx(ok1).SECTION])
        ok2 = ok1 & ([PPTx.SECTION]==section);
        sectionidx = levelidx(find(ok2,1),2);
        sectiontitle = firstupper(regexprep(levellist{2}{sectionidx},'^SESSION\s?\d\s?[-_]?\s?',''));
        mdmain{end+1} = sprintf('%s %d. %s',def.ATXsection,section,sectiontitle); current.section = mdmain{end}; disp(mdmain{end})  %#ok<SAGROW>
        % subsection
        for subsection = unique([PPTx(ok2).SUBSECTION])
            ok3 = ok2 & ([PPTx.SUBSECTION]==subsection);
            if any(ok3)
                subsectionidx = levelidx(find(ok3,1),3);
                subsectiontitle = firstupper(regexprep(levellist{3}{subsectionidx},'^UNIT\s?\d\.\d\s?',''));
                mdmain{end+1} = sprintf('%s %d.%d %s',def.ATXunit,section,subsection,subsectiontitle); current.subsection = mdmain{end}; disp(mdmain{end})  %#ok<SAGROW>
                % list parts and dependencies (from the destination www folder, not from the source folder as pptx2reveal_v2 did)
                listparts = unique([PPTx(ok3).PART]);
                for part = listparts
                    ok4 = ok3 & ([PPTx.PART]==part);
                    def.set(PPTx(ok4).INPUTS)
                    if part==1
                        if isempty(PPTx(ok4).author), author = 'undef'; else, author = PPTx(ok4).author; end
                        mdmain{end+1} = sprintf('%s %s',PPTx(ok4).slidetitle); disp(mdmain{end})  %#ok<SAGROW>
                        mdmain{end+1} = sprintf('*author: %s*',author); disp(mdmain{end})  %#ok<SAGROW>
                    end
                    dependencies = PPTx(ok4).dependencies; ndependencies = length(dependencies);
                    if ndependencies==0
                        mdmain{end+1} = [def.ATXlecture ' ' def.ATXrunnintitle ' ' mdlink(sprintf('part %d/%d',part,listparts(end)),def.link)]; %#ok<SAGROW>
                    else
                        tmplink = cell(ndependencies+1,1);
                        for idep = 1:ndependencies
                            def.dependency = dependencies{idep};
                            if exist(fullfile(def.dependencywww,backupdependencymain),'file')
                                def.dependencymain = backupdependencymain;
                            else
                                def.dependencymain = '';
                                dispf('\n\t====\n\t====> missing ''%s'' in ''%s''\n\t====',backupdependencymain,def.dependencywww)
                            end
                            tmplink{idep+1} = sprintf('<a href="%1$s/%3$s" title="link to resource %2$s">%2$s</a>',def.dependencywwwrel,def.dependency,def.dependencymain);
                        end
                        tmplink{1} = sprintf('<b><a href="%s">%s</a></b>',def.link,sprintf('part %d/%d',part,listparts(end)));
                        mdmain{end+1} = [def.ATXlecture ' ' def.ATXrunnintitle ' ' sprintf('<table><tr>%s</tr></table>',sprintf('<td>%s</td>',tmplink{:}))]; %#ok<SAGROW>
                    end
                    dispf(mdmain{end})
                    current.link = def.wwwrellink; current.part = sprintf('part %d/%d',part,listparts(end));
                    mdmain{end+1} = sprintf('%s',PPTx(ok4).slidetitle); disp(mdmain{end})  %#ok<SAGROW>
                    cPPTx(1).(sprintf('f%s',PPTx(ok4).fingerprint)) = current;
                end
            end
        end
    end
end

% add previous and next
plist = {'part','subsection','section','level'};
expandcell = @(x) sprintf('%s\n',x{:});
f = fieldnames(cPPTx); nf = length(f);
for i=1:nf
    for p = plist
        if i>1,  if ~strcmp(cPPTx.(f{i}).(p{1}),cPPTx.(f{i-1}).(p{1})), cPPTx.(f{i}).previous = p{1}; end, end
        if i<nf, if ~strcmp(cPPTx.(f{i}).(p{1}),cPPTx.(f{i+1}).(p{1})), cPPTx.(f{i}).next = p{1}; end, end
    end
    cPPTx.(f{i}).TOC.current.page = sprintf('# Fitness lecture - %s (v%0.3g)\n%s\n%s\n%s\n%s%s',rev,vsn,cPPTx.(f{i}).level,cPPTx.(f{i}).section,cPPTx.(f{i}).subsection,def.ATXlecture,cPPTx.(f{i}).part);
    cPPTx.(f{i}).TOC.current.txt = '';
    cPPTx.(f{i}).TOC.current.link = '';
    if i>1
        cPPTx.(f{i}).TOC.previous.page = expandcell(cellfun(@(p) cPPTx.(f{i-1}).(p),plist(find(ismember(plist,cPPTx.(f{i}).previous)):-1:2),'UniformOutput',false));
        cPPTx.(f{i}).TOC.previous.txt = cPPTx.(f{i-1}).part;
        cPPTx.(f{i}).TOC.previous.link = cPPTx.(f{i-1}).link;
    end
    if i<nf
        cPPTx.(f{i}).TOC.next.page = expandcell(cellfun(@(p) cPPTx.(f{i+1}).(p),plist(find(ismember(plist,cPPTx.(f{i}).next)):-1:2),'UniformOutput',false));
        cPPTx.(f{i}).TOC.next.txt = cPPTx.(f{i+1}).part;
        cPPTx.(f{i}).TOC.next.link = cPPTx.(f{i+1}).link;
    end
end

% header and footer
[r,s]=system('uname -a'); s=s(1:find(s==10,1)-1);
mdheader = {
    sprintf('![FITNESS](%s "ERASMUS+ Project")',htmllibpath(def.logo)) %'![FITNESS](./Fitness%20logo%20RVB.png "ERASMUS+ Project")'
    '# Online lectures'
    '[TOC]'
    };
mdfooter = {
    ''
    ''
    '------'
    ''
    ''
    '**ERASMUS + Project** - 2018-2020'
    sprintf('*Page generated automatically on %s with ''%s'' ( v. %0.3g, rev. %s )*',datestr(now),mfilename,vsn,rev)
    sprintf('* server: **%s@%s**  \nhost: *%s*',def.username,def.localname,s)
    sprintf('* local directory: %s',def.wwwroot)
    '* send any request to [Olivier Vitrac](mailto:olivier.vitrac@agroparistech.fr)'
    ''
    ''
    ''
    '------'
    ''
    ''
    'List of partners'
    ''
    '> - [ ] CROATIA (UZAB-PBF)'
    '> - [ ] FRANCE (ACTIA, LNE, AGROPARISTECH/INRA, AGROSUPDIJON)'
    '> - [ ] GERMANY (TUM)'
    '> - [ ] PORTUGAL (UCP)'
    '> - [ ] SPAIN (CSIC)'
    };

mdall = [mdheader;mdmain';mdfooter];

%% copy menu file lib
for i=1:length(menulib)
    copyfile(menulib(i).source,menulib(i).destination,'f');
    fileinfo(menulib(i).destination)
end

%% main file
dispf('FITNESS main file:')
mainmdfile = fullfile(def.wwwroot,def.indexfile);
if ~simulation
    logosource = fullfile(def.logosource,def.logo);
    logodestination = fullfile(def.wwwroot,def.wwwlib,def.logo);
    if ~exist(logodestination,'file')
        if ~exist(logosource,'file'), error('the source image ''%s'' does not exist',logosource), end
        copyfile(logosource,logodestination);
    end
    fid = fopen(mainmdfile,'w');
    for i=1:length(mdall), fprintf(fid,'%s  \n',mdall{i}); end
    fclose(fid);
    dispf('>> OUTPUT:\t<a href="%1$s">main Markdown file (use Typora with Fitness style)</a>\t-\t%1$s',mainmdfile)
    fileinfo(mainmdfile)
    if exist(favicon,'file')
        copyfile(favicon,fullfile(def.wwwroot,'favicon.ico'));
        copyfile(favicon,fullfile(def.wwwroot,rootdir(def.indexfile),'favicon.ico'));
    end
end

%% Alias configuration (Apache 2.4)
% <IfModule alias_module>
% 	# Aliases: Add here as many aliases as you need (with no limit). The format is
% 	# Alias fakename realname
% 	#
% 	# Note that if you include a trailing / on fakename then the server will
% 	# require it to be present in the URL.  So "/icons" isn't aliased in this
% 	# example, only "/icons/".  If the fakename is slash-terminated, then the
% 	# realname must also be slash terminated, and if the fakename omits the
% 	# trailing slash, the realname must also omit it.
% 	#
% 	# We include the /icons/ alias for FancyIndexed directory listings.  If
% 	# you do not use FancyIndexing, you may comment this out.
% 
% 	Alias /icons/ "/usr/share/apache2/icons/"
% 
% 	<Directory "/usr/share/apache2/icons">
% 		Options FollowSymlinks
% 		AllowOverride None
% 		Require all granted
% 	</Directory>
% 
% 	Alias /fitness/ "/home/olivi/Bulk/fitness2019/sandbox/www20190814/"
% 
% 	<Directory "/home/olivi/Bulk/fitness2019/sandbox/www20190814/">
% 		Options FollowSymlinks Indexes
% 		AllowOverride None
% 		Require all granted
% 	</Directory>
% 
% </IfModule>