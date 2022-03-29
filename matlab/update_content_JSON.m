% Script to generate and update the main content (JSON) file
% INRA\Olivier Vitrac, AgroParisTech/Dipesh Chaudhari
% $ 2020/02/07 $

% ===========================================================================================
%       USE MERGEMETADATA.M to merge with user data
%       Note that the relative path hash is used to pair records
% ------------------ dependencies ----------------------------------------
%       videos = video-recorded lecture (to be shown in the menu)
%       movies = other media (not intended to be shown in the menu, only links are shown)
%
% ===========================================================================================

% Revision history
% 2020/02/09 release candidate
% 2020/02/10 add next/previsous lectures, ExternalURL (vrsn 0.11)
% 2020/02/11 text slide extraction (vrsn 0.12)
% 2020/11/27 add imglink, please note that relative URLs start with lectures/html/ (versn 0.13)
% 2020/11/29 add forcedrefresh (versn 0.131)
% 2020/12/19 add stopWords_usr (versn 0.14)
% 2020/12/20 add dependencies and video generator (versn 0.15)
% 2020/12/21 add MenuLeft, MenuLeftXL (versn 0.16)
% 2020/12/22 fix layout menuleft (versn 0.161)
% 2020/12/22 first release version with menuleft (versn 0.17)
% 2020/12/22 revised version with menuleft (versn 0.18)
% 2020/12/29 add guidelines, and updated icons (versn 0.19)
% 2021/01/03 update videos with those from Fraunhofer (versn 0.20)
% 2021/01/03 standarization of emoji between index and left menu (versn 0.21)

% To do
% 'ExternalURL' once valid data added by user (see near L400)

%% force refresh if needed
forcedrefresh = false; % to be set to true if the slide content or the number of slides has changed
% version of this code (stored in the output)
versn = '0.201';
timestamp = datestr(now,'yyyy-mm-dd HH:MM');

%% Current project
% change this section to define a new project/website
t0 = clock; % current time to derive total execution time
[usr,def] = deal(alias);
usr.set({ 'local','current','fileid'},...
        {'/home/olivi/Bulk/fitness2020/sandbox',...     local (outputfolder of fileid), replace olivi by @username if needed
         'fileid_20201123_20201221.ods',...                      definition file, standard: fileid_date.ods
        '$local/$current'},...                          fullpath
        'path'); % all aliases are defined as path (better protection)
    
listauthors = { ... first column = full name (as to be displayed), second column = search string to identify the author (regular expression)
    'Kata Galić'                'Kata'
    'Fátima Poças'              'Poças'
    'Patrick Sauvegrain'        'Sauvegrain'
    'Maria José Fabra'          'Fabra'
    'Catherine Loriot'          'Loriot'
    'Frederic Debeaufort'       'Debeaufort'
    'Horst-Christian Langowski' 'Langowski'
    'Olivier Vitrac'            'Vitrac'
    'Murielle Hayert'           'Hayert'
    'Sandra Domenek'            'Domenek'
    'Jean-Mario Julien'         'Julien'
    'Phuong-Mai Nguyen'         'Nguyen'
    'Massimiliano Gerometta'    'Massimiliano'
    'Thomas Karbowiak'          'Karbowiak'
    'Marie-Christine Chagnon'   'Chagnon'
    'undefined author'          'undef$'
    }; % the list of authors (check accents, they are entered as UTF8)

def.load(usr.fileid) % load all defintions from ODS file (using alias method)

% # remove transitional once correctly implemented, and set maincontent in fileid #
def.set('maincontent_transitional','$root/$content/content_transitional.json','path')
def.set('maincontent_wordcloud','$root/$content/wordcloud/','path')
JSONfile = def.maincontent_transitional;
% JSONfile = def.maincontent; % to be preferred in the future
[pn,fn,en] = fileparts(JSONfile);
JSONfolderBAK = fullfile(pn,'backup'); if ~exist(JSONfolderBAK,'dir'), mkdir(JSONfolderBAK), end
JSONfileBAK = fullfile(JSONfolderBAK,sprintf('%s.%s%s',fn,datestr(now,'yyyymmdd_HHMM'),en));
JSfolder = fullfile(pn,'js'); if ~exist(JSfolder,'dir'), mkdir(JSfolder), end
JSON2JSfile = fullfile(JSfolder,[fn '.js']);
if ~exist(def.maincontent_wordcloud,'dir'), mkdir(def.maincontent_wordcloud); end
% reference image index
imrefindex = 2; % take the second image for lecture preview
% dependency list and video generator 
dependencyList = struct2table([
    struct('folder','references' ,'url','<a id="FitnessInnerLink" href="./references/" title="reference documents (books, articles) related to this lecture" target="_reference">&#128214; book</a>')
    struct('folder','videos'     ,'url','<a id="FitnessInnerLink" href="./videos/" title="this lecture as a video (can be part)" target="_video">&#127902;&#65039; video-recorded</a>')
    struct('folder','movies'     ,'url','<a id="FitnessInnerLink" href="./movies/" title="media related to this lecture" target="_movies">&#127910; movies</a>')
    struct('folder','extra'      ,'url','<a id="FitnessInnerLink" href="./extra/" title="extra content related to this lecture" target="_extra">&#9971; extra</a>')
    struct('folder','casestudies','url','<a id="FitnessInnerLink" href="./casestudies/" title="practical cases related to this lecture" target="_casestudies">&#127839; case studies</a>')
    struct('folder','guidelines' ,'url','<a id="FitnessInnerLink" href="./guidelines/" title="guidelines related to this lecture" target="_guidelines">&#128217; guidelines</a>')    
    struct('folder','howto'      ,'url','<a id="FitnessInnerLink" href="./howto/" title="help on software" target="_howto">&#8505;&#65039; help</a>')
    struct('folder','solutions'  ,'url','<a id="FitnessInnerLink" href="./solutions/" title="solutions to tests and case studies" target="_solutions">&#128290; solutions</a>')
    ]);
videoplayer = @(videofile) sprintf('<video width="100%%" controls="controls" poster="%1$s.jpg" preload="auto"><source type="video/webm" src="%1$s.webm" /><source type="video/mp4" src="%1$s.mp4" /></video>',videofile);
expandvideo = @(vids) sprintf('<tr><td>%s</td></tr>',vids{:});
videourl = @(vids) sprintf('<table id="FitnessVideo">%s</table>',expandvideo(cellfun(@(vid) videoplayer(vid),vids,'UniformOutput',false)));

%% list of words to be removed from WordCloud
projectwords = {'fitness','erasmus','common','advanced','session','unit','kg','courtesy',...
    '&','~','+','#','tum','agroparistech','UZAG-PBF','UZAG','mw','ex','prof','dr','et','al','cas','sk','packagingdomenek','agroparitechecodesign','matriaux','stockage',...
    'mariechristine','jeanmario','phuongmai','hochstchristian','uzagpbf'};
stopWords_usr = [   lower(strsplit(sprintf('%s ',listauthors{:,1}))),...
                    lower(projectwords),...
                    stopWords('Language','en'),...
                    stopWords('Language','de')];

%% General definitions (partly a fork from fileid script)
% note that syntaxes @(p1,p2...) define anonymous functions with parameters p1,p2,...
formatdate = 'yyyy/mm/dd HH:MM'; % format date (to be sorted as string)
md5engine = @(pptx) system(sprintf('md5sum ''%s''',fullfile(pptx.path,pptx.file))); % engine for content HASH (Linux required)
md2engine = @(pptx) DataHash(fullfile(pptx.subpath,pptx.file),struct('HEX','base64','Method','MD2')); % engine for path hash (Matlab function: DataHash from MS)
lsup_reg = 'fitness\s*_\s*(?<level>specialized|common).*?unit\s?(?<section>\d+)\.(?<unit>\d+).*part\s*(?<part>\d+)'; % regular expression with named tokens
sectionextractor = @(pptx) regexp(lower(fullfile(pptx.subpath,pptx.file2)),lsup_reg,'names','ignorecase');
sectionnames_reg = 'fItNeSs\s*_?\s*(?<levelname>.*?)/sEsSiOn\s*\d+\s*_?\s*(?<sectionname>.*?)/UnIt\s*\d+\.\d+\s*(?<unitname>.*)$';
sectionnameextractor = @(pptx) regexp(lower(pptx.subpath),sectionnames_reg,'names','ignorecase');
listlevels = {'common' 'specialized'}; % the two levels considered
IEEfix = @(x) str2double(sprintf('%0.12g',x)); % fix digits when needed
genkey = @(l,s,u,p) IEEfix( l + s/100 + u/10000 + p/1000000 ); % key generator
genkeyfromstruct = @(pptx) genkey(pptx.level,pptx.section,pptx.unit,pptx.part); % idem with pptx as input
genpath = @(l,s,u,p) sprintf('%1$s/S%2$d/U%2$d.%3$d/part%4$d',listlevels{l},s,u,p); % path generator
genurl = @(l,s,u,p) sprintf('%s/%s.html',def.wwwhtml,genpath(l,s,u,p)); % URL generator
genurlfromstruct = @(pptx) genurl(pptx.level,pptx.section,pptx.unit,pptx.part); % idem with pptx as input
wordcloudfilename = @(pptx) fullfile(def.maincontent_wordcloud,sprintf('%1$s_U%2$d.%3$d_part%4$d.png',listlevels{pptx.level},pptx.section,pptx.unit,pptx.part));
% text extraction methods form PPTX and PDF (wordcloud, word frequencies, default title and author are derived from this content);
mypdf = @(pptx) fullfile(pptx.path,[pptx.name '.pdf']);
pptxcontent = @(pptx) extractTXTfromPPT(fullfile(pptx.path,pptx.file),'id','JSON','prefetchprefix','PREFETCH_JSON_content_','noprefetch'); % PPTx text extractor
pdfpagecontent = @(pptx,page) deblank(convertStringsToChars(regexprep(extractFileText(mypdf(pptx),'pages',page),'\n',' '))); % extract title slide from PDF (two first pages)
pdfcontent = @(pptx) regexprep(extractFileText(fullfile(pptx.path,[pptx.name '.pdf'])),'\n\n','\n');
slidetitle = @(cache) regexprep(cache.content(2).content,{'\n','#+\s+','^Unit\s*\d+\.\d+\s*'},{' - ','',''}); % extract title slide (by default = slide #2)
author = @(cache) listauthors{~cellfun(@isempty,regexp([slidetitle(cache) ' undef'],listauthors(:,2),'match','once')),1};
title = @(cache) deblank(regexprep(slidetitle(cache),{'\s+(-|_)?\s*(Partner|Catherine|Maria|xxxx|Prof|Output|Special|part|WP2: Pro).*$' 'Fátima Poças\s?-?\s?' 'Output\:?\s*\d*\s*\(?O?\d*\)\s*' 'WP.*Unit \d\.\d\.?\s*','Common.*Unit\d\s\d\s*' '^\s*[-\.]\s*' '\s*[-\.]\s*$' '^\s*\(.*?\)\s*' '\(.*?\)\s*$'},...
    {'','','','','','','','',''}));
runningtitle = @(cache) regexprep(title(cache),'\s*[\.\,-\:].*$','');
% Semantic analysis (PDF)
tokenpdf = @(txt) tokenizedDocument(regexprep(lower(txt),{'[\>\<\|\=\+\\/\,;\.\)\(\}\{:%\-_\]\[\?\!"''0-9]' '\s+' '(^|\s)\w(\s|$)'},{'',' ',''}));
sentencecase = @(x) [upper(x(1:min(length(x),1))) lower(x(2:end))];

%% Database of PPTx finger prints (entries are not deleted)
vardatabase = 'JSONfingerprints';
vardatabasefile = fullfile(def.sourcePPTfolder,sprintf('%s.mat',vardatabase));
if ~exist(vardatabase,'var')
    if exist(vardatabasefile,'file') && ~forcedrefresh, load(vardatabasefile); else, JSONfingerprints=struct([]); end % load the database of fingerprints
end

%% List source PPTx files (hashes, level, section, unit, part, key...)
% HASH of PPTx content based on md5sum (MD5)
% HASH of subpath based in MD2 via DataHash
% level, section, unit, part based on filename with subpath
%
% list of PPTx and remove .~lock files (if open with libreoffice/openoffice, they are kept if libreoffice/openoffice is not closed properly)
listOfPPTx = explore('*.pptx',def.sourcePPTfolder,[],'abbreviate');                                  % seek PPTx (unlimited depth)
listOfPPTx = listOfPPTx(cellfun(@isempty,regexp({listOfPPTx.file},'^\.~lock\..*\.pptx#$','match'))); % remove locked files if any
nPPTx = length(listOfPPTx);
% check that each PPTx is paired with a PDF
nmissingpdf = 0;
for i=1:nPPTx
    if ~exist(mypdf(listOfPPTx(i)),'file'), dispf('[%d/%d] the PDF file ''%s.pdf'' is missing in ''%s''',i,nPPTx,listOfPPTx(i).name,listOfPPTx(i).path), nmissingpdf = nmissingpdf + 1; end
end
if nmissingpdf, error('%d PDF files are missing (see above)',nmissingpdf); end
% number of valid PPTx (and PDF)
screen = ''; dispf('----\n%s (%s)\n----\n%d PPTx source files found in ''%s''',usr.fileid,usr.local,nPPTx,def.sourcePPTfolder)     % display
cacheupdated = false; % cache flag
deftmp = def;
for i=1:nPPTx
    % hash (MD5 for content, MD2 for path)
    screen = dispb(screen,'[%d/%d] calculate HASH for ''%s'' in ''%s''',i,nPPTx,listOfPPTx(i).file,listOfPPTx(i).subpath);
    [ret,out] = md5engine(listOfPPTx(i));
    listOfPPTx(i).HASHcontent = regexprep(out,'\s+.*$','');
    listOfPPTx(i).HASHpath = md2engine(listOfPPTx(i));
    hashtag = sprintf('H%s',listOfPPTx(i).HASHcontent);
    % extraction of lsup
    listOfPPTx(i).file2 = listOfPPTx(i).file; % add part1 if 'part' is missing
    if isempty(regexp(listOfPPTx(i).file2,'part\s*\d','match','ignorecase')) % no part
        listOfPPTx(i).file2 = sprintf('%s_part1.pptx',listOfPPTx(i).name);
    end
    tmp = sectionextractor(listOfPPTx(i));
    listOfPPTx(i).level = find(ismember(listlevels,tmp.level));
    listOfPPTx(i).section = str2double(tmp.section);
    listOfPPTx(i).unit = str2double(tmp.unit);
    listOfPPTx(i).part = str2double(tmp.part);
    listOfPPTx(i).key = genkeyfromstruct(listOfPPTx(i)); % corresponding key
    % section names
    tmp = sectionnameextractor(listOfPPTx(i));
    listOfPPTx(i).levelname = sentencecase(tmp.levelname);
    listOfPPTx(i).sectionname = sentencecase(tmp.sectionname);
    listOfPPTx(i).unitname = sentencecase(tmp.unitname);
    % image folder
    deftmp.level   = listlevels{listOfPPTx(i).level};
    deftmp.section = sprintf('S%d',listOfPPTx(i).section);
    deftmp.unit    = sprintf('U%d.%d',listOfPPTx(i).section,listOfPPTx(i).unit);
    deftmp.lecture = sprintf('part%d',listOfPPTx(i).part);
    fullimfolder = deftmp.wwwroot.wwwrel.imfolder;
    if exist(fullimfolder,'dir')
        allim = explore(sprintf('*.%s',def.imformatpreferred),fullimfolder,0,'abbreviate');
        [~,iallim] = sort(str2double(uncell(regexp({allim.name},'(\d+)$','tokens'))),'ascend');
        allim = allim(iallim);
        if imrefindex<=length(allim), currentimrefindex = imrefindex; else, imrefindex=1; end
        listOfPPTx(i).imglink = fullfile(deftmp.wwwrel.imfolder,allim(imrefindex).file);
    else
        screen = ''; dispf('\t image folder ''%s'' does not exist',fullimfolder)
        listOfPPTx(i).imglink = '';
    end
    % additional data or format
    listOfPPTx(i).MB = sprintf('%0.4g MB',listOfPPTx(i).bytes/(1024*1024));
    listOfPPTx(i).date2 = datestr(listOfPPTx(1).datenum,formatdate);
    % load PPTx content (acceleration achieved using the cache: JSONfingerprints)
    if isfield(JSONfingerprints,hashtag) && ~forcedrefresh
        cache = JSONfingerprints.(hashtag);
    else
        cache = struct('content',[],'raw',[],'title',[],'txt',[],'topwords',[],'frequencies',[],'topwordslides',{{}},'nfo',listOfPPTx(i));
        % extract PPTx content
        [cache.content,cache.raw]=pptxcontent(listOfPPTx(i));
        % extract PDF content
        cache.txt = pdfcontent(listOfPPTx(i));
        cache.txt = cache.txt{1}(cache.txt{1}<127);
        cache.title = pdfpagecontent(listOfPPTx(i),1:2); % title slides (the two first are extracted)
        cache.title = cache.title;
        % semantic analysis (all text from PDF)
        doc = tokenpdf(cache.txt);
        bag=removeInfrequentWords(removeWords(bagOfWords(doc),stopWords_usr),2);
        top = topkwords(bag,50); top(top{:,2}>5,:); % top words
        cache.topwords = cellstr(top{:,1});
        cache.frequencies = top{:,2};
        figure(1), clf, wordcloud(bag), print_png(100,wordcloudfilename(listOfPPTx(i)),'','',0,0,0) % generate the wordclound and save it as PNG
        % semantic analysis for each slide
        screen = ''; nslides = length(cache.content);
        cache.topwordsslides = cell(nslides,1);
        for j=1:nslides
            screen = dispb(screen,'[%d/%d] semantic analysis of slide %d of %d',i,nPPTx,j,nslides);
            txtslide = pdfpagecontent(listOfPPTx(i),j);
            slidedoc = tokenpdf(txtslide(txtslide<127));
            slidebag = removeWords(bagOfWords(slidedoc),stopWords);
            slidetop = topkwords(slidebag,20);
            cache.topwordsslides{j} = convertStringsToChars(slidetop{:,1});
        end
        % update the cache
        cacheupdated = true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        JSONfingerprints(1).(hashtag) = cache;
    end
    listOfPPTx(i).title = cache.title; %title(cache);
    listOfPPTx(i).runningtitle = runningtitle(cache);
    listOfPPTx(i).abstract = title(cache);
    listOfPPTx(i).GraphicalAbstract = lastdir(wordcloudfilename(listOfPPTx(i)));
    listOfPPTx(i).WordCloud = lastdir(wordcloudfilename(listOfPPTx(i)));
    listOfPPTx(i).author = author(cache);
    listOfPPTx(i).nslides = length(cache.content);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    listOfPPTx(i).nobjects = sum([cache.content.nchildren]);                                                                                                                                                                                                                                                                                                                                                            
    listOfPPTx(i).nlines = sum(arrayfun(@(c) c.statbody.nlines,cache.content));
    listOfPPTx(i).nnotes = sum(arrayfun(@(c) c.statnotes.nlines,cache.content));
    listOfPPTx(i).TopWords = cache.topwords;
    listOfPPTx(i).TopWordsFrequencies = cache.frequencies;
    listOfPPTx(i).TopWordsSlides = cache.topwordsslides;
    % automatic generation of keywords (based on first words of each slide)
    bagkw = cellfun(@(c) c(1:min(1,length(c))),listOfPPTx(i).TopWordsSlides,'UniformOutput',false);
    bagkw = bagkw(~cellfun(@isempty,bagkw));
    if ~isempty(bagkw)
        bagkw = [bagkw{:}];
        topkw = topkwords(bagOfWords(tokenizedDocument(bagkw)),12);
        topkw = setdiff(convertStringsToChars(topkw{:,1}),{'common','specialized','percent'});
    else
        topkw = {};
    end
    listOfPPTx(i).keywords = topkw;
    % set topic based on the first topword
    if ~isempty(cache.topwords)
        listOfPPTx(i).topic = cache.topwords{1};
    else
        listOfPPTx(i).topic = '';
    end
    % populate dependencies (added 2020-12-20)
    pathtmp = listOfPPTx(i).path;
    founddependencies = cellfun(@(d) exist(fullfile(pathtmp,d),'dir'),dependencyList.folder)>0;
    listOfPPTx(i).dependencies = dependencyList.folder(founddependencies);
    listOfPPTx(i).dependenciesHTML = dependencyList.url(founddependencies);
    if ismember('videos',listOfPPTx(i).dependencies)
        vids = explore('*.webm',fullfile(pathtmp,'videos'),[],'abbreviate'); nvids = length(vids);
        if nvids<1,error('no videos found in ''%s''',fullfile(pathtmp,'videos')), end
        listvids = cell(nvids,1);
        for ivid = 1:nvids
            if ~exist(fullfile(pathtmp,'videos',sprintf('%s.mp4',vids(ivid).name)),'file')
                error('no MP4 video matching ''%s'' in ''%s''',vids(ivid).file,vids(ivid).path)
            end
            if ~exist(fullfile(pathtmp,'videos',sprintf('%s.jpg',vids(ivid).name)),'file')
                error('no JPG poster matching ''%s'' in ''%s''',vids(ivid).file,vids(ivid).path)
            end
            listvids{ivid} = fullfile('videos',vids(ivid).subpath,vids(ivid).name);
        end % next vid
        listOfPPTx(i).embeddedVideos = listvids;
        listOfPPTx(i).embeddedVideosHTML = videourl(listvids);
    else
        listOfPPTx(i).embeddedVideos = {};
        listOfPPTx(i).embeddedVideosHTML = '';        
    end % if videos embedded
end
% order PPTx files according their position (key)
[~,ind] = sort([listOfPPTx.key]);
listOfPPTx = listOfPPTx(ind);
for i=1:nPPTx,listOfPPTx(i).idx = i; end
% save cache if needed
if cacheupdated, save(vardatabasefile,vardatabase), dispf('cache JSON content updated'), fileinfo(vardatabasefile), end

%% populate previous/next lectures
%     'next',pptx.nextlecture,...                         next lecture (in the list)
%     'NextSection',pptx.nextlectureinlevel,...           next lecture in the current level
%     'NextUnit',pptx.nextlectureinsection,...            next lecture in the current section
%     'NextLecture',pptx.nextlectureinunit,...            next lecture in the current unit
[listofkeys,ind] = sort(abs(cat(1,listOfPPTx.key)),'ascend');
if ~isempty(findduplicates(listofkeys)), error('keys are duplicated, please check maually the JSON file and the code'), end
for i=1:nPPTx
    if i>1, listOfPPTx(i).previouslecture = listOfPPTx(i-1).key; end
    if i<nPPTx, listOfPPTx(i).nextlecture = listOfPPTx(i+1).key; end
    listOfPPTx(i).firstlectureinlevel = listOfPPTx(find(listofkeys>=genkey(listOfPPTx(i).level,1,1,1),1,'first')).key;
    listOfPPTx(i).firstlectureinsection = listOfPPTx(find(listofkeys>=genkey(listOfPPTx(i).level,listOfPPTx(i).section,1,1),1,'first')).key;
    listOfPPTx(i).firstlectureinunit = listOfPPTx(find(listofkeys>=genkey(listOfPPTx(i).level,listOfPPTx(i).section,listOfPPTx(i).unit,1),1,'first')).key;
    % next lecture in the current level / NextSection in JSON (revised 2020-12-20) - old code commented
    %listOfPPTx(i).nextlectureinlevel = genkey(listOfPPTx(i).level+1,1,1,1); if ~ismember(listOfPPTx(i).nextlectureinlevel,listofkeys), listOfPPTx(i).nextlectureinlevel = NaN; end
    listOfPPTx(i).nextlectureinlevel = listofkeys(find(listofkeys>=genkey(listOfPPTx(i).level+1,1,1,1),1,'first'));
    % next lecture in the current section / NextUnit in JSON  (revised 2020-12-20) - old code commented
    %listOfPPTx(i).nextlectureinsection = genkey(listOfPPTx(i).level,listOfPPTx(i).section+1,1,1); if ~ismember(listOfPPTx(i).nextlectureinsection,listofkeys), listOfPPTx(i).nextlectureinsection = NaN; end
    listOfPPTx(i).nextlectureinsection = listofkeys(find(listofkeys>=genkey(listOfPPTx(i).level,listOfPPTx(i).section+1,1,1),1,'first'));
    % next lecture in the current unit  (revised 2020-12-20) - old code commented
    %listOfPPTx(i).nextlectureinunit = genkey(listOfPPTx(i).level,listOfPPTx(i).section,listOfPPTx(i).unit+1,1); if ~ismember(listOfPPTx(i).nextlectureinunit,listofkeys), listOfPPTx(i).nextlectureinunit = NaN; end
    listOfPPTx(i).nextlectureinunit = listofkeys(find(listofkeys>=genkey(listOfPPTx(i).level,listOfPPTx(i).section,listOfPPTx(i).unit+1,1),1,'first'));
    % consistency  (revised 2020-12-20) - old code commented
    %if isnan(listOfPPTx(i).nextlectureinsection) && ~isnan(listOfPPTx(i).nextlectureinlevel), listOfPPTx(i).nextlectureinsection = listOfPPTx(i).nextlectureinlevel; end
    %if isnan(listOfPPTx(i).nextlectureinunit) && ~isnan(listOfPPTx(i).nextlectureinsection), listOfPPTx(i).nextlectureinunit = listOfPPTx(i).nextlectureinsection; end
    if isempty(listOfPPTx(i).nextlectureinunit), listOfPPTx(i).nextlectureinunit = NaN; end
    if isempty(listOfPPTx(i).nextlectureinsection), listOfPPTx(i).nextlectureinsection = listOfPPTx(i).nextlectureinunit; end
    if isempty(listOfPPTx(i).nextlectureinlevel),   listOfPPTx(i).nextlectureinlevel = listOfPPTx(i).nextlectureinsection; end
end


%% Template for the database (please read well the meaning of each field)
% NOTE that all hidden slides need to be removed or un-hidden (it is the responsibility of authors)
%
% default values for the PPTX called pptx (any value listOfPPTx(1), listOfPPTx(2)...)
dbtemplate = @(pptx) struct(...                         pptx can be any listOdPPTx(i)
    'idx',pptx.idx,...                                  index 1,2... ============================================== ELEMENTS BELOW TO BE CHECKED BY AUTHORS
    'level',listlevels{pptx.level},...                  'common' or 'specialized' (to be checked by authors)
    'section',sprintf('S%d',pptx.section),...           'S1', 'S2',...     (to be checked by authors)
    'unit',sprintf('U%d.%d',pptx.section,pptx.unit),... 'U1.1' 'U1.2', ... (to be checked by authors)
    'part',sprintf('part%d',pptx.part),...              'part1', part2,... (note that the split can be revised by authors, they need to provide then independent PPTx)
    'key',pptx.key,...                                  numeric key to be used to sort lectures
    'LevelName',pptx.levelname,...                      level name (to be checked by authors)
    'SectionName',pptx.sectionname,...                  section name (to be checked by authors)
    'UnitName',pptx.unitname,...                        unit name (to be checked by authors)    
    'RunningTitle',pptx.runningtitle,...                short title (to be displayed in menu, as the long title if it is short; specific to the part)
    'title',pptx.title,...                              long title (as shown in the presentation)
    'author',pptx.author,...                            author(s) as shown in the presentation (without accents, to be validated by authors)
    'institution','undef',...                           University name (to be validated by authors
    'abstract',pptx.abstract,...                        abstract from 100 to 300 words (should be prepared by authors)
    'topic',pptx.topic,...                              main topic (expression, not a word, to be set by authors)
    'keywords',{pptx.keywords},...                      list of 5 to 10 keywords (should be defined by authors, a guess is proposed only)
    'GraphicalAbstract',pptx.GraphicalAbstract,...      graphical abstract (should be prepared by authors)
    'license','BY-SA-ND',...                            (should be set by users) BY:attribution, SA:share alike, NC:non commercial, ND:no derivatives (see: https://en.wikipedia.org/wiki/Creative_Commons_license)
    'TopWords',{pptx.TopWords},...                      top words used in the presentation
    'TopWordsFrequencies',pptx.TopWordsFrequencies,...  frequencies of the top words (they are already sorted in decreasing order)
    'TopWordsSlides',{pptx.TopWordsSlides},...          top words of each slide
    'WordCloud',pptx.WordCloud,...                      filename of the WordCloud (also used as default GraphicalAbstract)
    'PrequesiteLectures',[1.0101]',...                  list here of prerequisite lectures (to be defined by authors, default = first overview lecture, if set in Matlab, makes it a column vector)    
    'RelatedLectures',[1.0101]',...                     list here of related lectures (to be defined by authors, default = first overview lecture, if set in Matlab, makes it a column vector)
    'Dependencies',{pptx.dependencies},...              list of dependencies (references, videos, etc.)
    'DependenciesURL',{pptx.dependenciesHTML},...       corresponding list of URLs (ready to be used in a loop)
    'embeddedVideos',{pptx.embeddedVideos},...          local path of embedded videos (list)
    'embeddedVideosURL',pptx.embeddedVideosHTML,...     embedded videos within a vertical table
    'ExternalURL',{{...                                 list external links associated to the current lecture (authors should provide links)
        '<a id="FitnessLink" href="https://en.wikipedia.org/wiki/Food_packaging" title="Food Packaging on Wikipedia" target="_wiki">Food Packaging</a>'
        '<a id="FitnessLink" href="https://en.wikipedia.org/wiki/Food_contact_materials" title="FCM on Wikipedia" target="_wiki">Food Contact Materials</a>'        
                    }},...
    ... ----------------------------------------------- LAYOUT ELEMENTS
    'MenuLeft','',...                                   menu left for small terminals % added 2020-12-21
    'MenuLeftXL','',...                                 menu left for large screens   % added 2020-12-21
    ... ----------------------------------------------- AUTOMATIC ELEMENTS
    'nslides',pptx.nslides,...                          number of slides ============================================ END OF ELEMENTS TO BE CHECKED BY AUTHORS (including the number of slides)
    'nobjects',pptx.nobjects,...                        number of objects
    'nlines',pptx.nlines,...                            number of lines
    'nnotes',pptx.nnotes,...                            number of notes (lines)
    'host',sprintf('%s@%s',username,localname),...      user@host running this code
    'fileid',def.current,...                            current fileid
    'root',def.root,...                                 project rooté
    'download',def.download,...                         download folder
    'path',pptx.path,...                                path
    'subpath',pptx.subpath,...                          subpath
    'filename',pptx.file,...                            filename
    'fullpath',fullfile(pptx.path,pptx.file),...        fullpath
    'size',pptx.MB,...                                  file size in MB
    'CreationDate',pptx.date2,...                       date of creation (format yyyy/mm/dd HH:MM)
    'ModificationDate',pptx.date2,...                   date of modification (format yyyy/mm/dd HH:MM)
    'RecordDate',datestr(now,formatdate),...            date when the record has been updated (format yyyy/mm/dd HH:MM)
    'RecordHost',sprintf('%s@%s',username,localname),...user@host running this code
    'LastAction','create',...                           last action: 'creation','update','keep','move'
    'next',pptx.nextlecture,...                         next lecture (in the list)
    'NextSection',pptx.nextlectureinlevel,...           next lecture in the current level
    'NextUnit',pptx.nextlectureinsection,...            next lecture in the current section
    'NextLecture',pptx.nextlectureinunit,...            next lecture in the current unit
    'FirstLectureInLevel',pptx.firstlectureinlevel,...  first lecture in the current level
    'FirstLectureInSection',pptx.firstlectureinsection,...first lecture in the current section
    'FirstLectureInUnit',pptx.firstlectureinunit,...      first lecture in the current unit
    'acknowledgment','EU contract 2017-1-FR01-KA202-037441 (Project FITNess ERASMUS+)',... contract of FITNess with EU Comission
    'url',genurl(pptx.level,pptx.section,pptx.unit,pptx.part),... URL (without hostname)
    'imglink',pptx.imglink,...                          link to the lecture preview (as defined by Dipesh manually in the version 0.12)
    'server','https://fitness.agroparistech.fr',...                 main host
    'report','mailto:olivier@agroparistech.fr',...      E-mail to report issues
    'HASHpath',pptx.HASHpath,...                        MD2 hash based on path
    'HASHcontent',pptx.HASHcontent,...                  MD5 hash based on content
    'engine',mfilename('fullpath'),...                  name of this function
    'versn',versn ...
    ); %#ok<NBRAK>
dbdefault = arrayfun(dbtemplate,listOfPPTx); % generate the default inputs for all PPTx files
allproperties = fieldnames(dbdefault)'; % all properties
isaPropertyCell = cellfun(@iscell,struct2cell(dbtemplate(listOfPPTx(1)))); % true if the property is a cell array;
isaPropertyNestedCell = cellfun(@(x) iscell(x) && any(cellfun(@iscell,x)),struct2cell(dbtemplate(listOfPPTx(1)))); % true if nested slides

% list properties which can be inherited for each action
% other properties are maintained automatically, they cannot be modified/edited
inherit = struct(...
    'keep'    ,{{'LevelName' 'SectionName' 'UnitName' 'RunningTitle' 'title' 'abstract' 'keywords' 'topic' 'license' 'author' 'host' 'fileid' 'institution' 'report' 'CreationDate' 'ModificationDate' 'RecordDate''acknowledgment','ExternalURL'}},...
    'edit'    ,{{'LevelName' 'SectionName' 'UnitName' 'RunningTitle' 'title' 'abstract' 'keywords' 'topic' 'license' 'author' 'host' 'institution' 'report' 'CreationDate' 'ModificationDate' 'RecordDate' 'acknowledgment','ExternalURL'}},...
    'move'    ,{{'LevelName' 'SectionName' 'UnitName' 'RunningTitle' 'title' 'abstract' 'keywords' 'topic' 'license' 'author' 'host' 'fileid' 'institution' 'report' 'CreationDate' 'ModificationDate' 'acknowledgment','ExternalURL'}},...
    'update'  ,{{'LevelName' 'SectionName' 'UnitName' 'RunningTitle' 'title' 'abstract' 'keywords' 'topic' 'license' 'author' 'host' 'fileid' 'institution' 'report' 'CreationDate' 'acknowledgment','ExternalURL'}},...
    'create'  ,{{}} ... nothing is inherited
);

% ========== template codes foe debugging
% for debuging purposes only (do not use this section for production, it forces inheriting)
% tmpinherit = {'ExternalURL'};
% for p = fieldnames(inherit)'
%     inherit.(p{1})(end+(1:length(tmpinherit))) = tmpinherit;
% end

% for debuging purposes only (do not use this section for production, it removes inheriting)
% 'ExternalURL' is removed from valid properties when no valid data has been added by user (2020-12-20)
tmpinherit = {'ExternalURL'};
for p = fieldnames(inherit)'
    inherit.(p{1}) = setdiff(inherit.(p{1}),tmpinherit);
end


%% JSON file (note that db updates dbdefault and not the revserse, dbdefault is set by this program; db can be edited by hands)
if exist(JSONfile,'file')
    dispf('\nLoad current JSON content file...'), fileinfo(JSONfile)
    db = jsondecode(fileread(JSONfile));
    if (length(db)==1) && ~isfield(db,'level') % flaten any structure if required
        db = struct2cell(db);
        db = cat(1,db{:});
    end
    JSONupdate = false; % update files only if needed
    JSONbackup = true;  % backup required if updated
    if ~isempty(setdiff(fieldnames(dbdefault),fieldnames(db))), JSONupdate = true; end % we force update if some fields are misisng in db
else
    db = dbdefault;
    JSONupdate = true;  % update is forced (no preexisting file)
    JSONbackup = false; % backup not required (even if updated)
end
hash = struct( ...
        'content',struct('files',{{dbdefault.HASHcontent}},'json',{{db.HASHcontent}}),...
        'path',   struct('files',{{dbdefault.HASHpath}}   ,'json',{{db.HASHpath}}) ...
    );

% populate the changes if any
excludedfields = {'RecordDate' 'LastAction'};
isequalcontent = @(A,B) structcmp(rmfield(A,excludedfields),rmfield(B,excludedfields));
for i=1:nPPTx
    idb = [];
    if ~ismember(dbdefault(i).HASHpath,hash.path.json) % either a creation or a move
        if ismember(dbdefault(i).HASHcontent,hash.content.json) % move
            dbdefault(i).LastAction = 'move';
            JSONupdate = true;
            idb = find(ismember(hash.content.json,dbdefault(i).HASHcontent));
        else % nothing match
            dbdefault(i).LastAction = 'create';
            JSONupdate = true;
        end
    else % no change (keep) or update / the path exist
        idb = find(ismember(hash.path.json,dbdefault(i).HASHpath)); % JSON entry with similar path
        if strcmp(dbdefault(i).HASHcontent,db(idb).HASHcontent)     % JSON entry with similar PPTx
            if isequalcontent(db(idb),dbdefault(i))                 % JSON entry with similar content
                dbdefault(i).LastAction = 'keep';
            else % entries were edited
                dbdefault(i).LastAction = 'edit';
                JSONupdate = true;
            end
        else % the content does not match but the path matches
            dbdefault(i).LastAction = 'update';
            JSONupdate = true;
        end
    end
    % transfer properties if needed
    dispf('[%d/%d] %s >> ''%s''',i,nPPTx,dbdefault(i).LastAction,dbdefault(i).RunningTitle)
    if ~isempty(idb)
        for p = inherit.(dbdefault(i).LastAction)
            if isfield(db,p{1}) && ~isempty(db(idb).(p{1}))
                dbdefault(i).(p{1}) = db(idb).(p{1});
            end
        end
    end
end

%% HTML content: MenuLeft, MenuLeftXL
% ------ main layout (L# left section for row #, R# = right)
% L1
% L2 R2           with R2 = [R2L1;R2L2]
% L3 R3           with L3 = [L3L1;L3L2;L3L3;L3L4]
% L4
% ------
    
linkmenu = @(href,title,text) sprintf('<a id="menufitlink" href="%1$s" title="%2$s" target="_fitlink">%3$s</a>',href,title,text);
seplink = ' > ';
sepbody = ' | ';
sephead = '<br />';
extralines = '<br /><br />';
hr = @(px) sprintf('<hr style="border-top: %0.3gpx solid #c6392e;">',px);
for i=1:nPPTx
    % estimated time to read the lecture
    estimatedtime = ceil(1/60 * (20 * (dbdefault(i).nslides-6) + 1 * dbdefault(i).nobjects + 3 * dbdefault(i).nlines + 2 * dbdefault(i).nnotes));
    % list all parts associated to this lecture
    j = find((listofkeys>=genkey(listOfPPTx(i).level,listOfPPTx(i).section,listOfPPTx(i).unit,0)) & (listofkeys<genkey(listOfPPTx(i).level,listOfPPTx(i).section,listOfPPTx(i).unit+1,0)));
    nj = length(j); listparts = cell(nj,1);
    for k=1:nj
        listparts{k} = sprintf('<a href="../../../../../%3$s" title="%2$s">part%1$d</a>',k,dbdefault(j(k)).title,dbdefault(j(k)).url);
    end
    if nj>1, listparts{i==j} = ['<b>' listparts{i==j} '</b>']; sectionbold = {'',''}; else, sectionbold = {'<b>','</b>'};  end
    % substancial check for topics
    if ~iscell(dbdefault(i).topic), dbdefault(i).topic = {dbdefault(i).topic}; end
    % L1, L2
    L1 = [ '&#128230; ' ...
           linkmenu('../../../','main index','FITNness') seplink ...
           linkmenu('../../','all lectures in this level',dbdefault(i).level) seplink ...
           sectionbold{1} linkmenu('../','all lectures in this section',dbdefault(i).section) sectionbold{2} seplink ...
           linkmenu('./','all lectures in this unit',dbdefault(i).unit) seplink ...
           regexprep(sprintf('%s | ',listparts{:}),'\s+\|\s+$','') hr(8)];
           %linkmenu('.','this lecture',dbdefault(i).part) hr(8)];
    L2 = sprintf('<img src="../../../../src/wordcloud/%s" class="responsive" style="max-width: 70%%; display: block; margin-left: auto; margin-right: auto; height: auto;">',dbdefault(i).WordCloud);
    % R2
    R2L1 = sprintf('<em id="menufithead2"><small>%1$s</small>%2$s%3$s%2$s</em><em id="menufithead1"><b>%4$s</b></em><em id="menufithead3">%2$s<small>%5$d slides | &#9201; %6$d min</small></em>',...
    dbdefault(i).SectionName,sephead,dbdefault(i).UnitName,dbdefault(i).title,dbdefault(i).nslides,estimatedtime);
    if isempty(dbdefault(i).DependenciesURL)
        R2L2 = '';
        R2 = R2L1;
    else
        R2L2 = sprintf('<small>Linked content</small></br > %s',regexprep(sprintf('| %s ',dbdefault(i).DependenciesURL{:}),'^\|',''));
        R2 = ['<table><tr><td>' R2L1 '</td></tr><tr><td><em id="menufitbody">' extralines R2L2 '</em></td></tr></table>'];
    end
    % L3L1, L3L2, L3L3, L3L4
    abstract = regexprep(dbdefault(i).abstract,{'*\s*$' '\$' '\s*-\s*(level.*)\s*$'},{'' '' '<br /><b>$1</b>'},'ignorecase');
    L3L1 = ['<div id="menuabstract"><td>&#128240;<b>Abstract:</b> ' sprintf('<em id="menufitbody">%s</em>',abstract) extralines '</td></div>'];
    L3L2 = ['<div id="menutopic"><td>&#128209; <b>Topics:</b> <em class="topic-paragraph">' sprintf('<kbd><a href="#">%s</a></kbd> ',dbdefault(i).topic{:}) extralines '</em></td></div>'];
    L3L3 = ['<td>' hr(1) '<em id="menufitbody"><small>' sprintf('External content %s |',sprintf('| %s ',dbdefault(i).ExternalURL{:})) '</small></em>' hr(2) '</td>'];
    L3L4 = ['<td><table><tr><td width="30%"><img src="../../../../src/Fitness-logo256x256.png" alt="FITNESS" width="128px"></td>' ...
            '<td><em id="menufitbody">&#127963;' dbdefault(i).institution '&#128483; ' dbdefault(i).author '<br /><small>&#128467; rev.' dbdefault(i).ModificationDate '<br />&#127937; license ' dbdefault(i).license ' 4.0</small></em></td></tr></table></td>'];
    L3 = ['<table><tr>' L3L1 '</tr><tr>' L3L2 '</tr><tr>' L3L3 '</tr><tr>' L3L4 '</tr></table>'];
    if isempty(dbdefault(i).embeddedVideosURL),    R3 = '<em id="menufitbody"><small>&#129387; &#127869; no video &#127871; &#129377;</small></em><br />';
    elseif length(dbdefault(i).embeddedVideos)==1, R3 = '<em id="menufitbody"><small>&#127916; Video-recorded lecture</small></em><br />';
    else,                                          R3 = sprintf('<em id="menufitbody"><small>&#127902; %d Video-recorded lectures</small></em><br />',length(dbdefault(i).embeddedVideos));
    end
    R3 = [R3 dbdefault(i).embeddedVideosURL]; %#ok<AGROW>
    % L4
    L4 = [ '<td>' hr(4) ...
          '<small><address>' ...
          '<b>FITNESS - Food packaging open courseware for higher education and staff of companies</b>.<br />' ...
          '&#127466; EU PROJECT ERASMUS+ | contract 2017-1-FR01-KA202-037441<br />' ...
          '&#127469; UZAG-PBF | &#127479; ACTIA, LNE, AGROPARISTECH/INRAE, AGROSUP Dijon | &#127465; TUM | &#127481; UCP | &#127480; CSIC |' ...
          extralines ...
          '&#128198; $ <span id="datetimestamp"></span> $ | ' ...
          '&#128238; <a href="mailto:olivier.vitrac@agroparistech.fr" title="email administrator">Report issues</a> | ' ...
          sprintf('&#128567; v. %s (%s)',versn,timestamp) ...
          '</address></small></td>' ...
          ];
    % menuleftXL -- two columns
    menuleftXL = [...
        '<table>' ...
        '<tr><td>' L1 '</td></tr>' ...
        '<tr><td><table><tr><td>' L2 '</td><td>' R2 '</td></tr></table></td></tr>' ...
        '<tr><td><table><tr><td>' L3 '</td><td>' R3 '</td></tr></table></td></tr>' ...
        '<tr>' L4 '</tr>' ...
        '</table>' ...
        ]; %clipboard('copy',menuleftXL)
    % menuleft -- one single column
    menuleft = [...
        '<table>' ...
        '<tr><td>' L1 '</td></tr>' ...
        '<tr><td><table><tr><td>' L2 '</td></tr><tr><td>' R2 '</td></tr></table></td></tr>' ...
        '<tr><td><table><tr><td>' L3 '</td></tr><tr><td>' R3 '</td></tr></table></td></tr>' ...
        '<tr>' L4 '</tr>' ...
        '</table>' ...
    ]; %clipboard('copy',menuleft)
    % Store outputs
    dbdefault(i).MenuLeft = menuleft;
    dbdefault(i).MenuLeftXL = menuleftXL;
end

%% update the JavaScript version -- independent code, added on 2020-12-22 to enable offline running
nfo = dir(JSONfile);
json2jsheader = {
'/*'
' * File: content_transitional.js'
' * Contract: EU contract 2017-1-FR01-KA202-037441'
' * Project: FitNESS ERASMUS+'
' *'
' * SOURCE'
sprintf(' *\t JSON file: %s',nfo.name)
sprintf(' *\t    folder: %s',nfo.folder)
sprintf(' *\t      host: %s@%s',username,localname)
sprintf(' *\t    engine: %s (version %s)',mfilename('fullpath'),versn)
sprintf(' *\t      date: %s',nfo.date)
sprintf(' *\t      size: %0.1f kB',nfo.bytes/1024)
' *'
' * THIS FILE'
sprintf(' *\t File Created: %s',datestr(now))
sprintf(' *\t       Author: AgroParisTech/Steward OUADI, Revised: INRAE/Olivier Vitrac')
' */'
''
'// Online mode: we are in this mode, when the fitness platform is running on a web server'
'// Offline mode: we are in this mode, when the fitness platform is not running on a web server'
'// Variable used for Offline mode. As we cannot fetch the data because there is no running web server we get data from this variable'
''
''
''
'const jsonData = '
};
json2jsheader = sprintf('%s\n',json2jsheader{:});

%% Save the output JSON file if neded
if JSONupdate
    if JSONbackup, copyfile(JSONfile,JSONfileBAK); end % backup JSON file
    % write JSON file (transitional with separation between common/specialized)
    dbtransitional = dbdefault;
    % old version
    %dbtransitional = struct('commonmodule'     ,dbdefault(ismember({dbdefault.level},'common')),...
    %                        'specializedmodule',dbdefault(ismember({dbdefault.level},'specialized')));
    % conversion to JSON and format
    jsoncontent = jsonencode(dbtransitional);
    % split common/specialized
    for p = fieldnames(dbtransitional)',  jsoncontent = regexprep(jsoncontent,['("' p{1} '":)(\[\{)'],'\n$1\n\n$2'); end
    % split records
    jsoncontent = regexprep(jsoncontent,'\}\,\{','\n\n},{\n');
    % split properties
    for p = allproperties; jsoncontent = regexprep(jsoncontent,['("' p{1} '":)'],'\n$1'); end
    % additional new lines
    jsoncontent = regexprep(jsoncontent,{'(\[\{)' '\}\]\,' '\}\]\}'},{'\n[{\n\n' '\n\n}],\n' '\n\n}]}'});
    % split nested properties
    for p = allproperties(isaPropertyNestedCell)
        tmp = uncell(regexp(jsoncontent,['"' p{1} '":\[(.*?)\]\,?\n'],'tokens'));
        for k=1:length(tmp)
            tmptr = regexptranslate('escape',tmp{k});
            tmprep = regexprep(tmp{k},'\]\,','],\n');
            jsoncontent = regexprep(jsoncontent,tmptr,tmprep);
        end
    end
    % write the JS file
    tmp = [json2jsheader regexprep(jsoncontent,{'^\s*\[' '\}\]$' '\n\n'},{'[\n' '\n}\n];','\n'})];
    fid = fopen(JSON2JSfile,'w'); fprintf(fid,'%s\n',tmp); fclose(fid); % write the JS file
    dispf('the transitional JSON content (JS format) has been saved in:'), fileinfo(JSON2JSfile)    
    % write the JSON file
    fid = fopen(JSONfile,'w'); fprintf(fid,'%s\n',jsoncontent); fclose(fid); % write the JSON file
    dispf('the transitional JSON content has been saved in:'), fileinfo(JSONfile)
    if JSONbackup, dispf('the previous JSON content is available as:'), fileinfo(JSONfileBAK), end
    dispf('Full JSON content update in %0.3g s',etime(clock,t0))
else
    dispf('JSON content file checked in %0.3g s (nothing done)',etime(clock,t0))    
end


%% obsolete code  
% isaPropertyAsCell = cellfun(@iscell,struct2cell(dbtemplate(listOfPPTx(1)))); % true if the property is available as a cell array;
% isaPropertyScalar = cellfun(@(x) isnumeric(x) && length(x)==1,struct2cell(dbtemplate(listOfPPTx(1)))); % true if the property is a numeric scalar
% isaPropertyAsArray = cellfun(@(x) isnumeric(x) && length(x)>1,struct2cell(dbtemplate(listOfPPTx(1)))); % true if the property is available as a numeric array
%     % {'keywords'}    {'TopWords'}    {'TopWordsFrequencies'}    {'TopWordsSlides'}
%     for p = allproperties(isaPropertyAsCell | isaPropertyAsArray),  jsoncontent = regexprep(jsoncontent,['("' p{1} '":\[.*\],?)'],'$1\n'); end
%     % {'idx'}    {'key'}    {'nslides'}    {'nobjects'}    {'nlines'}    {'nnotes'}
%     for p = allproperties(isaPropertyScalar), jsoncontent = regexprep(jsoncontent,['("' p{1} '":.*?,)'],'$1\n'); end
%     % {'level'}    {'section'}    {'unit'}    {'part'}    {'RunningTitle'}    {'title'}    {'author'}    {'institution'}    {'abstract'} ... etc.
%     for p = allproperties(~isaPropertyAsCell & ~isaPropertyAsArray & ~isaPropertyScalar), jsoncontent = regexprep(jsoncontent,['("' p{1} '":".*?",?)'],'$1\n'); end
%     %