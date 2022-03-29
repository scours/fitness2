% FITNESS_www2 main script to put online data
%
%  1) put PPTX in a structure with a single file by node
%     create nodes 1,2... if needed to separate files
%  2) export all presentations as PNG images (high resolution) by choosing
%     export all slides, file name png 
%  3) copy all files to a Linux Machine
%     default directory: /home/olivi/Documents/fitness/www
%
%  NB: in this version all presentations are made static with they own libraries
%
% See also: PPTX2REVEAL


% INRA\Olivier Vitrac - rev. 2018/12/09

% Revision history
% 2018/12/07 alpha version
% 2018/12/08 first tree implementation (cancelled for lack of robustness)
% 2018/12/09 beta version, this code update all PPTX as soon as they have been identified


local = '/home/olivi/Documents/fitness/www2';    % www root
db=explore('Slide1.PNG',local,[],'abbreviate'); % look for all available presentations
ndb = length(db);                               % number of presentations
debugon = false;                                % set it to true for debugging
repairon = true;                                % keep it to true to update rapidly all presentations
vsn = 0.1;
rev = '$2018/12/09$';

%% engine
if debugon
    converter = @(model) pptx2reveal(model,'static','simulation'); % <-- simulation mode, nothing done
else
    if repairon
        converter = @(model) pptx2reveal(model,'static','repair'); % <-- repair mode, replace missing parts
    else
        converter = @(model) pptx2reveal(model,'static');          % <-- common mode
    end
end
template =       struct('pptx','HDR_defense7d.pptx',...
                  'wwwroot','/home/olivi/Documents/fitness/sandbox/hdr/',...
                  'pptxfolder','/home/olivi/Documents/fitness/sandbox',...
                  'title','HDR May 5th, 2017 *(taken as example)*',...
                  'author','Project ERASMUS + FITNESS 2018-2020',...
                  'theme','league' ...https://www.newyorker.com/goings-on-about-town
                 );
atxstyle = arrayfun(@(n) repmat('#',1,n),1:6,'UniformOutput',false);  % https://daringfireball.net/projects/markdown/syntax
mdlink = @(text,link,lpath) sprintf('[%s](%s)',text,regexprep(fullfile('./',lpath,link),{' ','(',')'},{'%20','%28','%29'}));

%% collect
for i=1:ndb
    dispf('[%d/%d] --- FITNESS --- >> proceeds with %s',i,ndb,db(i).subpath)
    p = regexp(db(i).subpath,filesep,'split');
    % lp: lecture tree or path (remove empty '', folders 1\ 2\)
    lp =  p(cellfun(@isempty,regexp(p,'^\d*$|^png$','match')) & ~cellfun(@isempty,p));
    % pp: powerpoint path
    lpp = p(cellfun(@isempty,regexp(p,'^png$','match')) & ~cellfun(@isempty,p));
    pp = fullfile(local,lpp{:});
    pptx = explore('*.pptx',pp,0,'fullabbreviate');
    if isempty(pptx), error('no PPTX file found in the node:: ''%s''',pp), end
    if length(pptx)>1, error('more than one PPTX file found in the node:: ''%s''',pp), end
    dispf('\t\t PPTx found'), fileinfo(pptx)
    [ppptx,fpptx,epptx] = fileparts(pptx{1});
    % object creation
    obj = template;
    obj.pptx = [fpptx epptx];
    obj.title = regexprep(fpptx,'\_',' ');
    obj.wwwroot = ppptx;
    obj.pptxfolder = ppptx;
    db(i).localpptx = fullfile(lpp{:});
    db(i).obj = obj;
    db(i).lecture = cellfun(@(h,t) sprintf('%s %s',h,t),atxstyle(1:length(lp)),regexprep(lp,{'\_' '^(.*)\s*\-'},{'-' '**$1**'}),'UniformOutput',false);
    %db(i).lecture{end+1} = sprintf('*  %s',fpptx);
    db(i).lecture{end+1} = sprintf('*  %s',mdlink(obj.title,'index.html',db(i).localpptx));
    db(i).lecturelength = length(db(i).lecture);
end

%% tree construction (the order of the whole lecture is reconstructed from the initial file structure)
depth = max([db.lecturelength]);
wordlist = cell(depth,1);
W = zeros(ndb,depth);
nwords = 0;
for j=1:depth
    ilist = find([db.lecturelength]>=j);
    currentwords = arrayfun(@(i) db(i).lecture{j},ilist,'UniformOutput',false);
    [~,u] = unique(lower(currentwords),'sorted');
    wordlist{j} = currentwords(u);
    W(ilist,j) = cellfun(@(w) find(ismember(wordlist{j},w)),currentwords)+nwords;
    nwords = nwords + length(wordlist{j});
    db(i).W = W(ilist,:);
end
words = cat(2,wordlist{:})';
Wu = cellfun(@unique,num2cell(W,1),'UniformOutput',false);
nclasses = cellfun(@length,Wu);

%% Tree display (this algorithm is fast and robust, based on child and parent)
nT = max(W(:));
T = repmat(struct('parent',[],'child',[],'isroot',false,'isterminal',false,'isprinted',false),nT,1);
for iT=1:nT
    [i,j] = ind2sub(size(W),find(W==iT));
    if j(1)>1, T(iT).parent = W(i(1),j(1)-1); else, T(iT).isroot = true; end
    if j(1)<depth, T(iT).child = W(i,j(1)+1)'; T(iT).child = unique(T(iT).child(T(iT).child>0));
    else,          T(iT).isterminal = false;
    end
end
dispf('\n\n\t< < < < -------------- M A R K D O W N -------------- > > > >\n')
mdmain = cell(0,1);
for n = find([T.isroot])
    ok = true;
    while ok
        if ~T(n).isprinted                               % print when it is not printed
            mdmain{end+1} = sprintf('%s',words{n});
            dispf('\t%s',words{n})
            T(n).isprinted=true;
        end
        unexploredchild = T(n).child(~[T(T(n).child).isprinted]);
        if any(unexploredchild), n = unexploredchild(1); % down
        elseif T(n).isroot,      ok = false;             % stop
        else,                    n = T(n).parent;        % up
        end
    end
end
dispf('\n\n\t< < < < --------------    E    N    D    -------------- > > > >\n')

%% revealmd() process
for idb = 1:ndb
    dispf('\nFITNESS (%d of %d):: pptx2reveal() <----------[  %s  ]----------->',idb,ndb,db(idb).obj.pptx)
    dispf('%s',repmat('.',1,180))
    fileinfo(fullfile(db(idb).obj.pptxfolder,db(idb).obj.pptx))
    dispf('%s\n',repmat('.',1,180))
    converter(db(idb).obj)
    dispf('\nFITNESS (%d of %d)::  <------------------[  %s  ]------------------>\n\n',idb,ndb,db(idb).obj.pptx)
end

%% generate the main markdown file (local)
mainmdfile = fullfile(local,'index.md');
[r,s]=system('uname -a'); s=s(1:find(s==10,1)-1);
mdheader = {
    '![FITNESS](./Fitness%20logo%20RVB.png "ERASMUS+ Project")'
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
    sprintf('* server: **%s@%s**  \nhost: *%s*',username,localname,s)
    sprintf('* local directory: %s',local)
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
    '> - [ ] FRANCE (ACTIA, AGROPARISTECH/INRA, AGROSUPDIJON)'
    '> - [ ] GERMANY (TUM)'
    '> - [ ] PORTUGAL (UCP)'
    '> - [ ] SPAIN (CSIC)'
    };

mdall = [mdheader;mdmain';mdfooter];
if repairon
    dispf('FITNESS main file:')
    fid = fopen(mainmdfile,'w');
    for i=1:length(mdall), fprintf(fid,'%s  \n',mdall{i}); end
    fclose(fid);
    fileinfo(mainmdfile)
end