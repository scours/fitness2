%Fork of fileid_20190814 to create the specfici folder for LNE, INRA and AgroParisTech
%INRA\Olivier Vitrac - 19/08/2018, 21/08/2019

%% Load aliases from fileid
usr = alias;
usr.set({ 'local','current','fileid'},...
        {'/home/@username/Bulk/fitness2019/sandbox',...
         'fileid_20190814.ods',...
        '$local/$current'},'path');
fileid = usr.fileid; %fileid = '/home/olivi/Bulk/fitness2019/sandbox/fileid_20190814.ods';
def = alias; %alias('protectpath',false);
def.load(fileid)
local = pwd;
cd(def.sourcePPTfolder)

%% find all directories
[~,out] = system('find . -type d | grep -i ^\.\/fitness'); cd(local)
d = regexp(out,'\n','split'); d = d(~cellfun(@isempty,d))';
ld = cellfun(@length,uncell(regexp(d,'/','match')));
match = (ld==3);
d = d(match);                   % all directories with uncontrolled case
[du,id] = unique(lower(d));     % directories with lower case
nu = length(du);
dtweaks = du;
for i=1:nu
    dtweaks{i}(1:2:end) = lower(du{i}(1:2:end));
    dtweaks{i}(2:2:end) = upper(du{i}(2:2:end));
end

%% create all tweak folders
for i=1:nu
    f = fullfile(def.sourcePPTfolder,dtweaks{i});
    if ~exist(f,'dir'), mkdir(f); end
end
    