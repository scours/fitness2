% addsearch2index: Script to insert the search engine inside the main index
% INRAE\Olivier Vitrac, AgroParisTech/Dipesh Chaudhari, AgroParisTech/Steward Ouadi
% $ 2020/12/23 $ - this script replaces and consolidates a lot work previously done automatically
%                  Note that appended and inserted content is supplied as comments (do not alter them)


% Revision history
% 2020/12/23 early release candidate (versn 0.10)
% 2020/12/24 release candidate (versn 0.11)
% 2021/01/03 UTF-8 for generalized emoji (versn 0.12)
% 2021/01/11 add new SVG logo


% TODO: charset is too far
%   see: https://validator.w3.org/i18n-checker/check?uri=https%3A%2F%2Ffitness.agroparistech.fr%2Ffitness%2Flectures%2Fhtml%2Findex.html#validate-by-uri+)
%   The following character encoding declaration did not fit completely within the first 1,024 bytes of the start of the page:
%   <meta charset="UTF-8"/>
%   The HTML5 spec says that the element containing the character encoding declaration must be serialized completely within the first 1024 bytes of the document.
%   Otherwise, browsers may not recognize this encoding declaration.


%% version of this code
% it is recommended to keep indexappend to prevent overwritting (the same4 code can be reused several times)
versn = '0.12';
indexappend = '_checkIT'; %add indexappend to index file
%% Current project
% change this section to define a new project/website
t0 = clock; % current time to derive total execution time
[usr,def] = deal(alias);
usr.set({ 'local','current','fileid','index'},...
        {'/home/olivi/Bulk/fitness2020/sandbox',...     local (outputfolder of fileid), replace olivi by @username if needed
         'fileid_20201123_20201221.ods',...             definition file, standard: fileid_date.ods
        '$local/$current',...                           fileid
        'index.html'},...                               index
        'path'); % all aliases are defined as path (better protection)
projkey = sprintf('%s@%s:%s',usr.username,usr.localname,usr.fileid);
def.load(usr.fileid) % load all defintions from ODS file (using alias method)
hashkey = DataHash(struct(def),struct('Method','SHA-256'));
hashtag = '<fitnessHASH>';
projtag = '<fitnessPROJECT>';

% index file
indexfile = def.wwwroot.wwwhtml.index;
projkey = sprintf('%s > %s',projkey,indexfile);
if ~exist(indexfile,'file'), error('the index ''%s'' does not exist in ''%s''',def.index,def.wwwroot.wwwhtml); end
[pn,fn,en] = fileparts(indexfile); nfo = dir(indexfile);
indexfolderBAK = fullfile(pn,'backup'); if ~exist(indexfolderBAK,'dir'), mkdir(indexfolderBAK), end
indexfileBAK = fullfile(indexfolderBAK,sprintf('%s.%s%s',fn,datestr(now,'yyyymmdd_HHMM'),en));
indexfileOUT = fullfile(pn,[fn indexappend en]);

% extraction (UTF-8)
%content.raw = fileread(indexfile);
%fid = fopen(indexfile,'r','n','UTF-8'); tmp = fread(fid,[1 inf],'*char'); fclose(fid);
fid = fopen(indexfile, 'rb'); bytes = fread(fid, '*uint8')'; fclose(fid);
content.raw  = native2unicode(bytes,'UTF-8');

if ~isempty(regexp(content.raw,hashtag,'once')) % index already modifiedcontent.raw
    rawhashkey = char(uncell(regexp(content.raw,[hashtag '(.*?)' regexprep(hashtag,'<','</')],'tokens')));
    rawprojkey = char(uncell(regexp(content.raw,[projtag '(.*?)' regexprep(projtag,'<','</')],'tokens')));
    dispf('The project reported in ''%s'' is:\n\t%s',def.index,rawprojkey)
    if isempty(rawhashkey)
        error('%s:: the index ''%s'' has been modified and looks damaged (no hashkey), please check',mfilename,def.index)
    elseif strcmp(rawhashkey,hashkey)
        error('%s:: the index ''%s'' has been modified - nothing to do (same project)',mfilename,def.index)
    else
        error('%s:: the index ''%s'' has been modified - it belongs to a different project',mfilename,def.index)
    end
end

% search and substitution rules (long substitution are defined as comments at the end of this script, using heredoc())
search = @(start,stop) char(uncell(regexp(content.raw,sprintf('%s(.*?)%s',start,stop),'tokens')));
searchtag = @(tag) search(['<' tag '>'],['</' tag '>']);
content.title = searchtag('title');
s = struct(... searched strings
    'style','</style>',...
    'body','<body.*?>.*?</p>',...
    'html','(</blockquote>)(?!.*</blockquote>).*</html>' ...
); r = heredoc(); 
content.index = regexprep(content.raw,struct2cell(s),struct2cell(r));

%% extract all links -- add title and target
% general definitions
IEEfix = @(x) str2double(sprintf('%0.12g',x)); % fix digits when needed
level = struct('common',1,'specialized',2);
genkey = @(l,s,u,p) IEEfix( l + s/100 + u/10000 + p/1000000 ); % key generator
genkeyfromstruct = @(s) genkey(level.(s.level),str2double(s.section),str2double(s.unit),str2double(s.part)); % idem with pptx as input
genkeyfirst = @(s,shift) genkey(level.(s.level),str2double(s.section),str2double(s.unit)+shift,1); % idem with pptx as input
concat = @(x) cat(1,x{:});
% all links
content.a = regexp(content.raw,'<a href=["''].*?["'']>.*?</a>','match')';
% links which are parts
content.ispart = ~cellfun(@isempty,regexp(content.a,'part\d+.html'));
content.apart = content.a(content.ispart);
content.partid = concat(regexp(content.apart,'(?<level>common|specialized)/S(?<section>\d+)/U\d+\.(?<unit>\d+)/part(?<part>\d+)\.html','names'));
content.partkey = arrayfun(@(s) genkeyfromstruct(s),content.partid);
first = arrayfun(@(s) genkeyfirst(s,0),content.partid);
last = arrayfun(@(s) genkeyfirst(s,1),content.partid);
for i=1:length(content.partid)
    content.partid(i).nparts = num2str(length(find( (content.partkey>=first(i)) & (content.partkey<last(i)) ))); % number of parts within each unit
end
content.parttitle = arrayfun(@(s) sprintf('part%4$s/%5$s of U%2$s.%3$s (%1$s)',s.level,s.section,s.unit,s.part,s.nparts),content.partid,'UniformOutput',false);
content.apart = cellfun(@(a,t) regexprep(a,'(href=["''].*?["''])',sprintf('$1 title="%s" target="_lecture"',t)),content.apart,content.parttitle,'UniformOutput',false);
% links wich are dependencies
content.acontent = regexprep(content.a,'</?.*?>','');
content.isdependencies = ismember(content.acontent,{'references','videos','movies','extra','casestudies','guidelines','howto','solutions'});
content.adependencies = content.a(content.isdependencies);
content.adependencies = cellfun( @(a,t) ...
    regexprep(a,{'title=["''].*?["'']','target=["''].*?["'']','(href=["''].*?["''])'},...
                {'','',sprintf('$1 title="linked document: %1$s" target="_%1$s"',t)}),...
    content.adependencies,content.acontent(content.isdependencies),'UniformOutput',false);
% do replacements
content.index = regexprep(content.index,regexptranslate('escape',content.a(content.ispart)),content.apart);
content.index = regexprep(content.index,regexptranslate('escape',content.a(content.isdependencies)),content.adependencies);

%% extract metadata, title
content.rawmeta = regexp(content.raw,'<meta.*?>','match')';
if isempty(content.rawmeta), content.rawmeta = {}; end
if ~iscell(content.rawmeta), content.rawmeta = {content.rawmeta}; end
rawmetanames = regexp(content.rawmeta,'name=[''"](.*?)[''"]','tokens');
rawmetanames(cellfun(@isempty,rawmetanames))={{{''}}};
rawmetanames = uncell(rawmetanames);
content.meta = ...
[
 {sprintf('<head>\n')
    '<meta name="description" content="FITNESS PLATFORM: food packaging open courseware for higher education and staff of companies (project ERASMUS+ FITNESS, contract 2017-1-FR01-KA202-037441)">'
    '<meta name="author" content="Olivier Vitrac">'
    '<meta name="generator" content="FITNESS platform">'
  [ '<meta name="keywords" content="lecture,course,food packaging,food contact materials,shelf-life,safety,plastics,' ...
    'recycling,reuse,sustainability,ecodesign,modeling,regulation,compliance,polymer,mass transfer,thermodynamics,migration,permeation,'...
    'solubility,materials,plastics,paperboard,metal,wood,cork,glass,printing,adhesive,EU,US,waste,environment,case-studies,guidelines,technology,' ...
    'legislation,AgroParisTech,INRAE,SAFEMAT,SayFood,ACTIA,CSIC,Fraunhofer,IVV,TUM,UZAG,UCP,ERASMUS,EFSA,FDA' ...
    '">'
  ]  
    '<link rel="shortcut icon" href="FITlogo.svg" type="image/x-icon" />'
 }
    content.rawmeta(~ismember(rawmetanames,{'description','author','generator','keywords'})) % remove duplicates, if any
];
content.index = regexprep(content.index,cellfun(@(m) [m '\n?'],regexptranslate('escape',content.rawmeta),'UniformOutput',false),'');
content.index = regexprep(content.index,'<head>',sprintf('%s',content.meta{:}),'ignorecase');
content.index = regexprep(content.index,'<title>.*</title>\n?',sprintf('<title>FITNess index/search</title>\n'),'ignorecase');

%% Add comments and fix title
docheader = {
        '<!DOCTYPE html>'
        '<!--'
sprintf('#!%s <%s >%s',def.local.current,def.download,def.wwwroot)
        '#'
sprintf('#  Main lecture index: %s',def.wwwhtml.index)
        '#  Project: FitNESS ERASMUS+ / Contract: EU contract 2017-1-FR01-KA202-037441'
        '#'
        '#  SOURCE (non-interactive HTML file generated from MarkDown with Typora)'
sprintf('#  \t    HTML file: %s',def.index)
sprintf('#  \t   HTML title: %s',content.title)
sprintf('#  \t       folder: %s',def.wwwroot.wwwhtml)
sprintf('#  \t         host: %s@%s',username,localname)
sprintf('#  \t       engine: %s (version %s)',mfilename('fullpath'),versn)
sprintf('#  \t         date: %s',nfo.date)
sprintf('#  \t         size: %0.1f kB',nfo.bytes/1024)
        '#'
        '#  THIS FILE (interactive HTML)'
sprintf('#  \t File Created: %s',datestr(now))
sprintf('#  \t       Coding: AgroParisTech/Steward Ouadi (great contributor)')
sprintf('#  \t       Design: AgroParisTech/Dipesh Chaudari (first exploration and implementation)')
sprintf('#  \t  Engineering: INRAE/Olivier Vitrac (main developer, administrator)')
        '#'
        '#  This interactive page (with search box) has been designed to work online and offline,'
sprintf('#  with or without a webserver (all URL are relative to the folder ''%s'')',def.wwwhtml)
        '#  Do not displace files, you need to download the entire folder. It is proposed'
        '#  as as single ZIP file (check the version or the date). Note that the dependent libraries'
sprintf('#  (css/, js/, json/, etc.) are strored in ''%s''.',def.wwwlib)
        '#'
        '#  If you experience issues with our experimental technology, please contact: olivier.vitrac@agroparistech.fr'
        '#'
        '#  DISCLAIMER'
        '#  The content is provided "AS IS" and may contain inconsistencies or inaccuracies.'
        '#  Please understand that we use automatic technologies in our workflow to convert'
        '#  multiple documents and content. The distribution license is permissive, it garantees'
        '#  a free use, distribution and non-commerical reuse with an obligation of citation.'
        '#  Please verify with each content whether you have the right or not to alter or modify'
        '#  the content or to use it commercially.'
        '#'
        '# ---------------------------'
        '# FITNESS tags (internal use)'
        '# ---------------------------'
        '# Each generation of FITNESS lectures is identified by unique SHA-256 fingerprint. Do not alter it.'
sprintf('  \t%s%s%s',hashtag,hashkey,regexprep(hashtag,'<','</'))
sprintf('  \t%s%s%s',projtag,projkey,regexprep(projtag,'<','</'))
        '# ---------------------------'
        '#'
        '-->'
}; docheader = sprintf('%s\n',docheader{:});
% replacement
content.index = regexprep(content.index,'<!doctype html>',docheader,'ignorecase');

%% Update internal signature, time step
content.rawspan = char(regexp(content.raw,'<span>Page generated automatically.*?</script><span>\s?\)</span>','match'));
content.span = regexprep(content.rawspan,{'^<span>' '</span>$'},{'<span>&#129302; ' sprintf('&#127891; add search-bar with ''%s'' (v. %s) on %s. </span>',mfilename,versn,datestr(now))});
% replacement
content.index = regexprep(content.index,regexptranslate('escape',content.rawspan),content.span);

%% SAVE & BACKUP
saveenabled = true;
if saveenabled
    % backup
    copyfile(indexfile,indexfileBAK);
    %fid = fopen(indexfileOUT,'w','n','UTF-8'); fprintf(fid,'%s',content.index); fclose(fid); % write the HTML file
    bytes = unicode2native(content.index,'UTF-8');
    fid = fopen(indexfileOUT, 'wb'); fwrite(fid,bytes,'uint8')'; fclose(fid);
    dispf('the new INDEX content has been saved in:'), fileinfo(indexfileOUT)
    dispf('the source INDEX content is available as:'), fileinfo(indexfileBAK)
    dispf('Full INDEX update in %0.3g s',etime(clock,t0))
    web(['file://' indexfile])
    web(['file://' indexfileOUT],'-new')
end


%% #######################################################################################
% Definitions read from comments via heredoc
% see: https://fr.mathworks.com/matlabcentral/fileexchange/73681-heredoc-matlab
%
% The code below assumes a default path, it may be different in the future
%

% ###################################################################################
%% WARNING - WARNING - WARNING - WARNING - WARNING - WARNING - WARNING - WARNING - WARNING
%
% ====================================================================
%  DO NOT MODIFY THE COMMENTS BELOW WITHOUT KNOWING WHAT YOU ARE DOING
% ====================================================================

% ~~~~~~~~~~~~ style replaces </style> ~~~~~~~~~~~~
%{ 
    style = """

      /* Search bar on top  Author: Dipesh Chaudhari  */
      input[type='text'] {
        width: 500px;
        height: 50px;
        border-radius: 5px;
      }

      input[type='text']:focus {
        outline: none;
        box-shadow: 0px 0px 5px #61c5fa;
        border: 1px solid #5ab0db;
        border-radius: 5px;
      }

      input[type='text']:hover {
        border: 1px solid #999;
        border-radius: 5px;
      }

      input[type='text']:focus:hover {
        outline: none;
        box-shadow: 0px 0px 5px #61c5fa;
        border: 1px solid #5ab0db;
        border-radius: 5px;
      }

      /* Code for responsive layout */
      @media only screen and (max-width: 500px) {
        input[type='text'] {
          width: 250px;
          height: 40px;
          border-radius: 5px;
        }
        input[type='text']:focus {
          outline: none;
          box-shadow: 0px 0px 5px #61c5fa;
          border: 1px solid #5ab0db;
          border-radius: 5px;
        }

        input[type='text']:hover {
          border: 1px solid #999;
          border-radius: 5px;
        }

        input[type='text']:focus:hover {
          outline: none;
          box-shadow: 0px 0px 5px #61c5fa;
          border: 1px solid #5ab0db;
          border-radius: 5px;
        }
      }
      /* Search bar end Author: Dipesh Chaudhari*/

    </style>"""
%}

% ~~~~~~~~~~~~ body replaces <body.*?>.*</p> ~~~~~~~~~~~~
%{
    body = """
 <body class="typora-export">
    <div id="write" class="is-node">
      <div style="display: flex; flex-direction: row; align-items: center">
        <p>
          <img
            src="../src/Fitness%20logo%20RVB.png"
            referrerpolicy="no-referrer"
            alt="FITNESS"
            title="ERASMUS+ Project"
          /><span> </span>
        </p>

        <!-- search bar start Author: Dipesh Chaudhari -->
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6 m-auto">
              <h3 class="text-center mb-3">
                <i class="fas fa-flag-usa"></i>
              </h3>
              <!--Search bar -->
              <div class="form-group">
                <input
                  type="text"
                  id="search"
                  class="form-control form-control-lg"
                  placeholder="   Start with three characters, search online lectures"
                />
                <label
                  ><input
                    id="include-slide-results"
                    type="checkbox"
                    name="checkbox"
                    value="value"
                  />Search by keywords in slides</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Data will display here-->
      <div id="match-list"></div>
      <script src="../src/js/content_transitional.js"></script>
      <script src="../src/js/utils.js"></script>
      <script src="../src/js/jsjsonsearch2de.js"></script>
      <link rel="stylesheet" href="../src/css/slidesSearch.css" />
      <!--searchbar end Author: Dipesh Chaudhari-->"""
%}

% ~~~~~~~~~~~~ html replaces from the last </blockquote> to the end </html> ~~~~~~~~~~~~
%{
    html = """</blockquote>

      <p><span>List of contributors</span></p>
      <!-- List of Contributors -->
      <blockquote>
        <ul>
          <li class="md-task-list-item task-list-item task-list-not-done">
            <input type="checkbox" disabled="disabled" />
            <p><span>Olivier VITRAC, INRAE</span></p>
          </li>
          <li class="md-task-list-item task-list-item task-list-not-done">
            <input type="checkbox" disabled="disabled" />
            <p><span>Steward OUADI, AgroParisTech</span></p>
          </li>
          <li class="md-task-list-item task-list-item task-list-not-done">
            <input type="checkbox" disabled="disabled" />
            <p>
              <span>Dipesh CHAUDHARI, AgroParisTech</span>
            </p>
          </li>
        </ul>
      </blockquote>
      <hr />

        <div style="text-align: center;margin-top:50px;border:2px solid #C6392E;padding:10px;box-shadow:5px 10px #FAF0E8;border-radius : 10px 20px 3px; min-width:10em;max-width:50em;">
            <span>
                | &#129520; <small>FITNESS tools</small> 
                | &#128129;&#8205;&#9792;&#65039;<a href="./teasing/FITNessOverview.html" title="help for trainees, teachers and developers" target="_info"><kbd>HELP</kbd> on FITNess</a> 
                | &#128221;<a href="../modifyLectures/index.html" title="interface to update metadata (for authors)" target="_edit"><kbd>REVISE</kbd> lecture metadata</a>
                | &#10024; <small>FITNESS edition 2020</small> |
            </span>
        </div>
      <!-- end list of Contributors -->
    </div>
  </body>
</html>"""
%}

%% ##################################################################
% OBSOLETE CODE, list of contributors (removed on Dec 29, 2020)
%{
      <!-- List of Contributors -->
      <blockquote>
        <ul>
          <li class="md-task-list-item task-list-item task-list-not-done">
            <input type="checkbox" disabled="disabled" />
            <p><span>Olivier VITRAC</span></p>
          </li>
          <li class="md-task-list-item task-list-item task-list-not-done">
            <input type="checkbox" disabled="disabled" />
            <p><span>Steward OUADI</span></p>
          </li>
          <li class="md-task-list-item task-list-item task-list-not-done">
            <input type="checkbox" disabled="disabled" />
            <p>
              <span>Dipesh CHAUDHARI</span>
            </p>
          </li>
        </ul>
      </blockquote>
      <hr />
      <p>
        <span
          >Click on
          <a
            href="../modifyLectures/index.html"
            class="btn btn-primary btn-lg active"
            target="_blank"
            role="button"
            aria-pressed="true"
            >this link</a
          >
          to modify a lecture metadata</span
        >
      </p>
%}

