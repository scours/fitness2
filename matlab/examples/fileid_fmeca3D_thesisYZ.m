%fileid_Cours_migration2019
%INRA\Olivier Vitrac - 19/08/2018, 28/08/2019, 03/09/2019 (major release, TOC), 07/09/2019 (dependencies)
%
% When updated, please change vsn, rev and the name of the script L33 (see comment inside)

%% Load aliases from fileid
usr = alias;
usr.set({ 'local','current','fileid'},...
        {'/home/@username/Bulk/fitness2019/external/output/',...
         'fileid_fmeca3D_thesisYZ.ods',...
        '$local/$current'},'path');
fileid = usr.fileid; %fileid = '/home/olivi/Bulk/fitness2019/sandbox/fileid_20190814.ods';
def = alias; %alias('protectpath',false);
def.load(fileid)
forcedupdate = true; % <--- set it to true ONLY to update PREFETCH files
favicon = '~/Bulk/fitness2019/template/favicon/favicon.ico';
vsn = 0.27;
rev = '$2020/01/20$';
if ~exist(def.wwwroot,'dir'), mkdir(def.wwwroot); end

%% conversion
if forcedupdate
    pptx2reveal_v2(def.struct,'static','repair','forcedupdate')
else
    pptx2reveal_v2(def.struct,TOC,'static','repair')
end