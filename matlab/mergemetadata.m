%% mergemetadata
% Script to merge metadata of the lectures included in FITNes
% 2020-11-29 release candidate
% 2020-11-30 fix
% 2020-12-20 implement new properties
% 2020-12-21 add leftlenu,leftlenuXL (note that the JSON supplied by UB before Dec 2020, are discared (ZIPPED) as they corrupted the abstracts, old content, too high precedence)

% Previous content_transitional.json
% version fitness2019 (Dipesh): content_transitional.fitness2019.json
% version fitness2020 (check date): content_transitional.fitness2020_20201130.json
% last valid content: content_transitional.20201220manual.json

% TODO
% 'ExternalURL' set as 'w' (writtable) property once valid data added by user (2020-12-20)

%% metadata definitions
t0 = clock; % current time to derive total execution time
usr = deal(alias);
usr.set({ 'local','jsonmainfile','metafolder' 'metapattern','inheritfile'},...
        {'/home/olivi/Bulk/fitness2020/src/content/sandbox',...     local
         '$local/content_transitional.json',...                     jsonmainfile
        '$local/metadata',...                                        metafolder
        'lecture-id*.json',...                                      file pattern of meta data
        '$metafolder/inherit/content_transitional.20201221manual.json'},...inherited file (old database, for example)  <------- to be updated
        'path'); % all aliases are defined as path (better protection)
% saved files
JSONfile = usr.jsonmainfile;
JSONXLTfile = regexprep(usr.jsonmainfile,'.json$','.xlt.json');
% check files
if ~exist(usr.jsonmainfile,'file'), error('JSON mainfile ''%s'' does not exist',usr.jsonmainfile); end
if ~exist(usr.metafolder,'dir'), error('Metadata folder ''%s'' does not exist',usr.metafolder); end
metafiles = explore(usr.metapattern,usr.metafolder,0,'abbreviate')';
% main JSON file
mainjson = jsondecode(fileread(usr.jsonmainfile)); nmain = length(mainjson);
dispf('\nMAIN JSON file: %s\n',usr.jsonmainfile),fileinfo(usr.jsonmainfile); dispf('\t--> contains %d entries',length(mainjson))
% force update if true
forcedupdate = true;

%% fields identification
% attr: attributes can be 'r' (read) or 'w' (write)
% role: 'idx' (index), 'key' (key value for the learner), 'content' (teacher content), 'numeric' (robot), 'traceability' (internal purposes), 'source' (main id)
id = struct(...
                      'idx', struct('attr','r','role','idx'),...
                    'level', struct('attr','r','role','key'),...
                  'section', struct('attr','r','role','key'),...
                     'unit', struct('attr','r','role','key'),...
                     'part', struct('attr','r','role','key'),...
                      'key', struct('attr','r','role','key'),...
                'LevelName', struct('attr','r','role','key'),...
              'SectionName', struct('attr','r','role','key'),...
                 'UnitName', struct('attr','r','role','key'),...
             'RunningTitle', struct('attr','w','role','content'),...
                    'title', struct('attr','w','role','content'),...
                   'author', struct('attr','w','role','content'),...
              'institution', struct('attr','w','role','content'),...
                 'abstract', struct('attr','w','role','content'),...
                    'topic', struct('attr','w','role','content'),...
                 'keywords', struct('attr','w','role','content'),...
        'GraphicalAbstract', struct('attr','r','role','content'),...
                  'license', struct('attr','w','role','content'),...
                 'TopWords', struct('attr','r','role','content'),...
      'TopWordsFrequencies', struct('attr','r','role','numeric'),...
           'TopWordsSlides', struct('attr','r','role','content'),...
                'WordCloud', struct('attr','r','role','content'),...
       'PrequesiteLectures', struct('attr','w','role','content'),...
          'RelatedLectures', struct('attr','w','role','content'),...
             'Dependencies', struct('attr','r','role','content'),...
          'DependenciesURL', struct('attr','r','role','content'),...
           'embeddedVideos', struct('attr','r','role','content'),...
        'embeddedVideosURL', struct('attr','r','role','content'),...
              'ExternalURL', struct('attr','r','role','content'),... % to be set to 'r' in the future (2020-12-20), 'r' when no valid user data
                 'MenuLeft', struct('attr','r','role','content'),...    menu left for small terminals % added 2020-12-21
               'MenuLeftXL', struct('attr','r','role','content'),...    menu left for large screens   % added 2020-12-21
                  'nslides', struct('attr','r','role','numeric'),...
                 'nobjects', struct('attr','r','role','numeric'),...
                   'nlines', struct('attr','r','role','numeric'),...
                   'nnotes', struct('attr','r','role','numeric'),...
                     'host', struct('attr','r','role','traceability'),...
                   'fileid', struct('attr','r','role','traceability'),...
                     'root', struct('attr','r','role','traceability'),...
                 'download', struct('attr','r','role','traceability'),...
                     'path', struct('attr','r','role','traceability'),...
                  'subpath', struct('attr','r','role','source'),...
                 'filename', struct('attr','r','role','source'),...
                 'fullpath', struct('attr','r','role','traceability'),...
                     'size', struct('attr','r','role','traceability'),...
             'CreationDate', struct('attr','r','role','traceability'),...
         'ModificationDate', struct('attr','r','role','traceability'),...
               'RecordDate', struct('attr','r','role','traceability'),...
               'RecordHost', struct('attr','r','role','traceability'),...
               'LastAction', struct('attr','r','role','traceability'),...
                     'next', struct('attr','r','role','key'),...
              'NextSection', struct('attr','r','role','key'),...
                 'NextUnit', struct('attr','r','role','key'),...
              'NextLecture', struct('attr','r','role','key'),...
      'FirstLectureInLevel', struct('attr','r','role','key'),...
    'FirstLectureInSection', struct('attr','r','role','key'),...
       'FirstLectureInUnit', struct('attr','r','role','key'),...
           'acknowledgment', struct('attr','r','role','content'),...
                      'url', struct('attr','r','role','content'),...
                  'imglink', struct('attr','r','role','content'),...
                   'server', struct('attr','r','role','traceability'),...
                   'report', struct('attr','w','role','content'),...'
                 'HASHpath', struct('attr','r','role','hash'),...
              'HASHcontent', struct('attr','r','role','hash'),...
                   'engine', struct('attr','r','role','traceability'),...
                    'versn', struct('attr','r','role','traceability') ...
                    );
allproperties = fieldnames(id);
writableproperties = allproperties(structfun(@(p) p.attr=='w',id));
isaPropertyCell = cellfun(@iscell,struct2cell(mainjson(1))); % true if the property is a cell array;
isaPropertyNestedCell = cellfun(@(x) iscell(x) && any(cellfun(@iscell,x)),struct2cell(mainjson(1))); % true if nested slides
dispf('%d writtable properties can be updated',length(writableproperties)), dispf('\t%s\n',writableproperties{:})
% XLT is saved always
jsonxlt =  regexprep(jsonencode(id),{'^\{' '\}$' '\},'},{'{\n' '\n}' '},\n'});
fid = fopen(JSONXLTfile,'w'); fprintf(fid,'%s\n',jsonxlt); fclose(fid); % write the JSON file
dispf('\tXLT file: '), fileinfo(JSONXLTfile)

%% handle metadata
if isempty(metafiles), dispf('No metadata on ''%s''\n\t--> nothing to do',usr.metafolder); return, end
% manage inherit
inherit = ~isempty(usr.inheritfile);
if inherit && ~exist(usr.inheritfile,'file'), error('inherited JSON mainfile ''%s'' does not exist',usr.inheritfile); end
% backup file
[pn,fn,en] = fileparts(usr.jsonmainfile);
JSONfolderBAK = fullfile(pn,'backup'); if ~exist(JSONfolderBAK,'dir'), mkdir(JSONfolderBAK), end
JSONfileBAK = fullfile(JSONfolderBAK,sprintf('%s.%s%s',fn,datestr(now,'yyyymmdd_HHMM'),en));


%% load all
dispf('\n-------------------------------')
% inherited JSON file
if inherit
    inheritjson = jsondecode(fileread(usr.inheritfile));
    dispf('\nINHERIT JSON file: %s\n',usr.inheritfile),fileinfo(usr.inheritfile); dispf('\t--> contains %d entries',length(inheritjson))
else
    inheritjson = struct([]);
end
% supplied meta daat
dispf('\n%d METADATA JSON files submitted',length(metafiles))
meta = arrayfun(@(m) jsondecode(fileread(fullfile(m.path,m.file))),metafiles); nmeta = length(metafiles);
metadate = datenum(uncell(regexp({metafiles.name},'date_(.*)\.','tokens')),'yyyy-mm-ddTHH MM SS'); % extract dates from filenames
dispf('\n-------------------------------\n')


%% find duplicates entries (keep only the most recent, based on filename)
primarykey = 'HASHpath';
ok = true(nmeta,1);
p = {meta.(primarykey)}; pu=unique(p);
for iu=1:length(pu)
    i = find(ismember(p,pu{iu}));
    ok(i) = (metadate(i)==max(metadate(i)));
end
if ~all(ok)
    dispf('\t --> %d duplicate(s) found',length(find(~ok)));
    meta = meta(ok);
    metafiles = metafiles(ok);
    nmeta = length(meta);
end

%% entries in inherit
if inherit
    primarykey = 'HASHpath';
    [~,ihfound,jhfound] = intersect({mainjson.(primarykey)},{inheritjson.(primarykey)}); nhfound = length(ihfound);
    dispf('%d of %d inherit match ''%s'' in the main database (%d entries)',nhfound,length(inheritjson),primarykey,nmain)
end

%% entries in both bases
% ifound: main <- jfound: meta
primarykey = 'HASHpath';
[~,ifound,jfound] = intersect({mainjson.(primarykey)},{meta.(primarykey)}); nfound = length(ifound);
dispf('%d of %d metadata match ''%s'' in the main database (%d entries)',nfound,nmeta,primarykey,nmain)

%% entries missing in main
primarykey = 'HASHpath';
[~,kfound] = setdiff({meta.(primarykey)},{mainjson.(primarykey)});
dispf('%d of %d metadata are missing using ''%s'' as key in the main database (%d entries)',length(kfound),nmeta,primarykey,nmain)
for i=1:length(kfound)
    dispf('missing\t --> ''%s'' in ''%s''', metafiles(kfound(i)).file,metafiles(kfound(i)).path)
end

%% prepare the update
updatedjson = mainjson;
JSONbackup = forcedupdate;

%% inherit from the previous database
if inherit
    [~,ind] = sort(ihfound);
    for i=ind'
        for f=writableproperties'
            if ~isempty(inheritjson(jhfound(i)).(f{1}))
                JSONbackup = JSONbackup || ~isequal(lower(updatedjson(ihfound(i)).(f{1})), lower(inheritjson(jhfound(i)).(f{1}))); % backup required (note that lower works with numeric)
                updatedjson(ihfound(i)).(f{1}) = inheritjson(jhfound(i)).(f{1});
            end
        end
    end
end

%% update the main database with meta data
if nfound<1,dispf('\n no match, no update'), return, end
fmtl = '[%d] %11s/%s/%s/%-7s (%0.6f)';   % format left hand side
fmtr = '[%d] %-11s/%s/%s/%-30s (%0.6f)'; % format right hand side
record = @(fmt,r) sprintf(fmt,r.idx,r.level,r.section,r.unit,r.part(1:min(30,length(r.part))),r.key);
[~,ind] = sort(ifound);
dispf('\nRecords to be updated:')
for i=ind'
    dispf('\t%-40s\t<-\t%s\t%-140s',record(fmtl,mainjson(ifound(i))),record(fmtr,meta(jfound(i))),fullfile(metafiles(jfound(i)).path,metafiles(jfound(i)).file))
    for f=writableproperties'
        if ~isempty(meta(jfound(i)).(f{1}))
            JSONbackup = JSONbackup || ~isequal(lower(updatedjson(ifound(i)).(f{1})), lower(meta(jfound(i)).(f{1}))); % backup required (note that lower works with numeric)
            updatedjson(ifound(i)).(f{1}) = meta(jfound(i)).(f{1});
        end
    end
end

%% save & backup
saveenabled = true;
if JSONbackup
    % conversion to JSON and format
    jsoncontent = jsonencode(updatedjson);
    % split common/specialized
    for p = fieldnames(updatedjson)',  jsoncontent = regexprep(jsoncontent,['("' p{1} '":)(\[\{)'],'\n$1\n\n$2'); end
    % split records
    jsoncontent = regexprep(jsoncontent,'\}\,\{','\n\n},{\n');
    % split properties
    for p = allproperties'; jsoncontent = regexprep(jsoncontent,['("' p{1} '":)'],'\n$1'); end
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
    % back and save save
    if saveenabled
        % backup
        copyfile(usr.jsonmainfile,JSONfileBAK);
        % write the JSON file
        fid = fopen(JSONfile,'w'); fprintf(fid,'%s\n',jsoncontent); fclose(fid); % write the JSON file
        dispf('the transitional JSON content has been saved in:'), fileinfo(JSONfile)
        if JSONbackup, dispf('the previous JSON content is available as:'), fileinfo(JSONfileBAK), end
        dispf('Full JSON content update in %0.3g s',etime(clock,t0))
    end
else
    dispf('JSON content file checked in %0.3g s (nothing done)',etime(clock,t0))
    fileinfo(JSONfile)
end % backup JSON file