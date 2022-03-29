%Script to convert guidelines (PDF) in SVG
% INRAE\Olivier Vitrac - 2020-12-24

versn = '0.15';
%% definitions
root = '/home/olivi/Bulk/fitness2020/downloadWP3/outputs/';
local = 'www/';
template = heredoc();
D = datestr(now,'yyyy-mm-dd');
template.head = @(DOC,PAGES,TITLE,TABTOC) regexprep(template.MDhead,{'##DOC##','##PAGES##','##TITLE##','##DATE##','##TABTOC##'},{num2str(DOC),num2str(PAGES),TITLE,D,TABTOC});
template.page = @(DOC,PAGES,PAGE,LEVEL)   regexprep(template.MDpage,{'##DOC##','##PAGES##','##PAGE##','##LEVEL##'}, {num2str(DOC),num2str(PAGES),num2str(PAGE),LEVEL});
levelTOC = {'######'};
stepTOClist = [1 2 5:5:20 30:10:100];
maxstepTOC = 12;
nsvgmax = 60; % maximum number of svg
forcedupdate = false;

%% look for all pdf and set a folder to store individually all pages
pdf = explore('*.pdf',fullfile(root,local),[],'abbreviate');
pdf(~cellfun(@isempty,regexp({pdf.name},'^doc','once'))) = []; % removed converted PDF
npdf = length(pdf);
[~,~,cfolder] = unique({pdf.path},'stable');
k = 0; t0=clock;
for isource=1:cfolder(end)
    ind = find(cfolder==isource); nind = length(ind);
    for jdoc=1:nind
        k = k +1;
        pdf(ind(jdoc)).pgfolder = sprintf('src_doc%d',jdoc);
        pdf(ind(jdoc)).mdfile = sprintf('doc%d.md',jdoc);
        pdf(ind(jdoc)).pdffile = fullfile(pdf(ind(jdoc)).pgfolder,sprintf('doc%d.pdf',jdoc));        
        pgfolder = fullfile(pdf(ind(jdoc)).path,'guidelines',pdf(ind(jdoc)).pgfolder);
        mdfile   = fullfile(pdf(ind(jdoc)).path,'guidelines',pdf(ind(jdoc)).mdfile);
        pdffile  = fullfile(pdf(ind(jdoc)).path,'guidelines',pdf(ind(jdoc)).pdffile);
        screen = dispb('','[%d/%d]\t %s ...',k,npdf,pdf(ind(jdoc)).file);
        % generate the folder
        if ~exist(pgfolder,'dir'), mkdir(pgfolder), end
        % generate the SVG
        if ~exist(fullfile(pgfolder,'page1.svg'),'file')
            svgenginecmd = sprintf('pdf2svg ''%s'' ''%s'' all',fullfile(pdf(ind(jdoc)).path,pdf(ind(jdoc)).file),fullfile(pgfolder,strrep('page*.svg','*','%d')));
            LD_LIBRARY_PATH = getenv('LD_LIBRARY_PATH'); system(svgenginecmd); setenv('LD_LIBRARY_PATH',LD_LIBRARY_PATH)
            fsvg = explore('page*.svg',pgfolder,[],'abbreviate');
            dispb(screen,'[%d/%d]\t %s\t %d SVG files converted',k,npdf,pdf(ind(jdoc)).file,length(fsvg));
        else
            fsvg = explore('page*.svg',pgfolder,[],'abbreviate');
        end
        % copy the PDF
        if ~exist(pdffile,'file')
            copyfile(fullfile(pdf(ind(jdoc)).path,pdf(ind(jdoc)).file),pdffile);
        end
        % generate the MD file - split documents if needed
        nsvg = length(fsvg); lastsvg = 0;
        nparts = max(1,ceil(nsvg/nsvgmax));
        if nsvg>nsvgmax, suffix = @(i) sprintf('_part%d.md',i); else, suffix=''; end        
        for ipart=1:nparts
            tabTOC = ''; 
            listsvg = ((lastsvg+1):min(nsvg,lastsvg+nsvgmax))';
            nsvgcurrent = length(listsvg);
            if isempty(suffix), currentmdfile = mdfile;
            else, currentmdfile = regexprep(mdfile,'\.md$',suffix(ipart));
            end
            if ~exist(currentmdfile,'file') || forcedupdate
                T = regexprep(pdf(ind(jdoc)).name,{'FITNES[^S]','_','-','\s+','^\s','\s$'},{'FITNESS ',' ',' | ',' ','',''},'ignorecase');
                if ~isempty(suffix)
                    T = sprintf('%s | <b><small>part%d/%d</small></b>',T,ipart,nparts);
                    for jpart=1:nparts
                        if ipart==jpart
                            tabTOC = [tabTOC sprintf('<td align="center"><b>%d</b></td>',jpart)]; %#ok<AGROW>
                        else
                            tabTOC = [tabTOC sprintf('<td align="center"><a href="%s" title="part %d of %d"><small><kbd>%d</kbd></small></a></td>',...
                                regexprep(pdf(ind(jdoc)).mdfile,'\.md$',regexprep(suffix(jpart),'.md$','.html')),jpart,nparts,jpart)]; %#ok<AGROW>
                        end
                    end
                    tabTOC = sprintf('==<small>Large document split into <kbd>%d</kbd> parts | Part <kbd>%d</kbd> is displayed.</small>==\n<table border=0 style="width: 100%%; table-layout: fixed;"><tr>%s</tr></table>\n',nparts,ipart,tabTOC);
                end
                stepTOC = stepTOClist(find(max(1,round(nsvgcurrent./stepTOClist+1))<=maxstepTOC,1,'first'));
                tagTOC = repmat({''},nsvg,1); tagTOC([1:stepTOC:end end]) = levelTOC;
                tmp = [ {template.head(jdoc,nsvg,T,tabTOC)}
                        arrayfun(@(p) template.page(jdoc,nsvg,p,tagTOC{p}),listsvg,'UniformOutput',false)
                        {sprintf('\n<section id="bottom"></section>\n<hr />\n\n`%s: %s (v. %s) < %s@%s:%s >%s`',datestr(now),mfilename,versn,username,localname,...
                            fullfile(pdf(ind(jdoc)).path,pdf(ind(jdoc)).file),currentmdfile)
                        }
                        ];
                fid = fopen(currentmdfile,'w'); fprintf(fid,'%s',tmp{:}); fclose(fid);
            end % currentmdfile
            lastsvg = listsvg(end);
        end % next ipart
    end
end


%% DEFINITIONS

% ~~~~~~~~~~~ template for header ~~~~~~~~~~~ 
%{
    MDhead = """◖[Guidelines](./)◗◖[This lecture](../casestudies/)◗ ◖[All lectures](../../../../)◗
<hr/>
<table><tr>
<td width='256px'><img src='./Fitness-logo256x256.png' alt='FITNESS' referrerPolicy='no-referrer' width='128px' /><br/><img src='./PartnersCoutries.png' alt='FITNESS' referrerPolicy='no-referrer' width='256px'/></td>
<td><address><b>PROJECT FITNess</b> - funded by the European Union's <b>ERASMUS</b> programme <small>(contract 2017-1-FR01-KA202-037441)</small><br/>
<b>Food packaging open courseware for higher education and staff of companies</b><br/>
<small>Partners: Croatia (UZAG-PBF), France (ACTIA, LNE, AGROPARISTECH/INRA, AGROSUP DIJON), Germany (TUM), 
Portugal (UCP), Spain (CSIC)</small><br/>
<span id="datetimestamp"></span>  -  <a href='mailto:olivier.vitrac@agroparistech.fr' title='email administrator'>Report issues</a></td>
</tr></table>
<script>
var dt = new Date();
document.getElementById("datetimestamp").innerHTML = dt.toLocaleString('en-US');
</script>
<section id="top"></section>
`The external document has been automatically converted on ##DATE##.`

##  ##TITLE##

> |   &#128196;##PAGES## pages  |  &#128217;<a href="./src_doc##DOC##/doc##DOC##.pdf" title="original document" target="_pdf">PDF version</a>  | ##TABTOC## 

[TOC]


"""
%}

% ~~~~~~~~~~~ template for each page ~~~~~~~~~~~ 
%{
    MDpage = """
<small><a href="#top" title="go to top">&#128285;</a></small> | <small><a href="#bottom" title="go to bottom">&#128282;</a></small>
##LEVEL## &#128196;page ##PAGE## of ##PAGES##
<img src="./src_doc##DOC##/page##PAGE##.svg" alt="page##PAGE##" width="100%" />
"""
%}