classdef alias < handle
%ALIAS class to manage strings with aliases
%   Constructor
%       a = alias();
%       a = alias('property',value,...)
%       Default options (they can be changed)
%       a = alias('prefix','$','suffix','','prefixfunc','@','suffixfunc','')
%   Overloaded operators
%       a.aliasname to evaluate recursively the alias 'aliasname'
%       a.aliasname = 'some text'; to define an alias
%       a.aliasname1.aliasname2..aliasname3
%       c = a + b;
%       a.aliasname=[] delete the alias aliasname
%   Methods: set, get, delete, eval, evali, replace, load
%       Shorthand syntax
%           a.set('$aliasname',string)
%           a.set('@aliasname',functionname)
%           a.set(struct('name',{{'alias1' 'alias2'...}},'type',{{'value1' 'value2' ...}},'type',{{'type1'  'type2...'}}
%           a.set(S) with S.name1='value1', S.name2='value2'
%           a.load('odsfile/xlsfle' [,'sheetname']) default sheetname = alias with 3 columns name, value, type
%           a.alias=[]
%       Full syntax
%           a.set(aliasname,string [,type]) with type = 'char' (default), path (without trailing filsep), cmd (pwd, localname, username, date...)
%           a.set({'alias1' 'alias2'...},{string1 string2},{type1 type2..})
%           string = a.get(aliasname)
%           stringwithoutalias = a.eval(aliasname)
%           a.delete(aliasname)
%           a.eval('expression')
%       Conversion into struct (static)
%           s = struct(a)
%           s = struct(a,'aliasname')  without prefix
%           s = struct(a,{'aliasname1','aliasname2'...)
%       Display, lookfor
%           a or a.disp()
%           a.disp('someexpression')
%           b=a.byVALUE('someexpression') -> b is an alias with all values matching 'someexpression'
%           b=a.byNAME('someexpression')  -> b is an alias with all names matching 'someexpression'
%           b=a.byEVAL('someexpression')  -> b is an alias with all results (after evaluation) are matching 'someexpression'
%           b=a.byTYPE('cmd'), a.byTYPE('char'), a.byTYPE('path')
%           b=a.isCHAR, a.isPATH, a.isCMD are the corresponding shortcuts
%           b=a.extract('someexpression',{'prop1'...}) with prop1.. 'name','value','eval','type'
%           b = a.isemptyVAL              -> list empty values
%       Copy an alias (do not use b=a as it copies only the handler and not its values)
%           b = a.copy;
%       Replacing values set a construction time
%           a.replace('propery','newvalue'...
%           available properties 'preffix' (default='$'), 'suffix' (default=''), 'funcprefix' (default='@'), 'funcsuffix' (default='')
%
%   Simple example
%{
    a = alias;
    a.set({'root','local'},{'www/','course/'},'path')
    a.set('file','example.html')
    a.eval('@pwd/$root/$local/$file')
    a.p1 = '@pwd/$root'
    a.p2 = '$local/$file'
    a.p3 = '$p1/$p2';
    a.p1.p2
    % new list of aliases
    b = alias;
    b.p4 = 'folderA';
    b.p5 = 'folderB';
    b.p6 = 'folderC';
    b.p7 = '$p4/$p5/$p6'
    b.p8 = '$p1/$p7/$p2'
    % concatenate the two lists of alias
    c = a+b
    d = c.replace('prefix','£'); % use an assignment to make the modification permanent
    d.p9='-->[£p8]'
%}
% Advanced axample to check POSIX implementation of the longest match
%{
a=alias; a.set({'a' 'aaa' 'aa'},{'1' '3' '2'}); a.eval('$aaa+$aa+$a')
b=alias; b.set({'aaaaaa' 'aa' 'aaaaa' 'a' 'aaaa' 'aaa'},{'6' '2' '5' '1' '4' '3'}); b.eval('$a<$aa<$aaa<$aaaa<$aaaaa<$aaaaaa')

%}
%  Example (Fitness)
%{
    param = alias;
    param.set({'local','file','datafile'},{'/home/olivi/Bulk/fitness2019/matlab','makewww_20190810.ods','/$local/$file'},{'path','char','char'})
    param.load('$datafile')
    p = struct(param);

    
%}    
%
%
%Fitness 0.2 - 10/08/2019 INRA\Olivier Vitrac - rev. 07/12/2019
    
    %% HIDDEN PROPERTIES
    % Protectpath has been added to avoid damage to them when recursive name expansion is used
    %   Compare without and with protection
    %{
           regexprep('$pathnottoconsider/$path/$path1/$path','\$path','_PATH_')
           regexprep('$pathnottoconsider/$path/$path1/$path','(^|/)\$path(/|$)','$1_PATH_$2')
           a = alias('protectpath',false);
           a.set('noprotection','$pathnottoconsider/$path/$path1/$path','char')
           a.set('path','_PATH_','path');
           a.pathnottoconsider = 'longpath';
           b = alias;
           b.set('protection','$pathnottoconsider/$path/$path1/$path','path')
           b.set('path','_PATH_','path');
           b.pathnottoconsider = 'longpath';
           a.noprotection
           b.protection
    %}
    properties(GetAccess = 'private', SetAccess = 'private')
        prefix           = '\$';
        suffix           = '';
        funcprefix       = '@';
        funcsuffix       = '';
        protectpath      = true;
        searchexp        = cell(0,1);
        replacevalue     = cell(0,1);
        type             = cell(0,1);
        isdynamic        = false(0,1);
        ordersearch      = zeros(0,1); % change order to maintain POSIX-like search (the longest match first)
        isambiguous      = false(0,1);
    end
    
    %% VISIBLE PROPERTIES
    properties(GetAccess = 'public', SetAccess = 'private')
        nalias       = 0;
        names        = cell(0,1);
        value        = cell(0,1);
    end
    
    
    methods
        %% CONSTRUCTOR
        function obj = alias(varargin)
            obj; %#ok<VUNUS>
            default = struct('prefix','','suffix','','funcprefix','','funcsuffix','','protectpath',obj.protectpath);
            options = argcheck(varargin,default);
            if ~isempty(options.prefix), obj.prefix = regexptranslate('escape',options.prefix); end
            if ~isempty(options.suffix), obj.suffix = regexptranslate('escape',options.suffix); end
            if ~isempty(options.funcprefix), obj.funcprefix = regexptranslate('escape',options.funcprefix); end
            if ~isempty(options.funcsuffix), obj.funcsuffix = regexptranslate('escape',options.funcsuffix); end
            obj.protectpath = options.protectpath;
            obj.set({'@pwd','@localname','@username','@date'})
        end
        
        %% METHOD SET (polymorphic syntax)
        %obj.set('name','value','type')
        %obj.set({'name1' 'name2'..},{'value1' 'value2'...},{'type1' 'type2'...})
        %obj.set(struct('name',{{'name1',''name2'...}},{{'value1' 'value2'...}},{{'type1' 'type2'...}})
        %obj.set(structure with field name1, name2)
        %obj.set('cmd')
        %obj.name = value
        function objout = set(obj,name,value,type)
            % Default
            type_default = 'char';
            validtype = {'char','path','cmd'};
            acceptedcmd = {'pwd','cd','localname','username','date'};
            % arg check
            if nargin<2, error('please provide an alias name and a value'), end
            if nargin<4, type = ''; end
            % struct
            if isstruct(name)
                fname = fieldnames(name); nfname = length(fname);
                if nfname==3 && isfield(name,'name') && isfield(name,'value') && isfield(name,'type')
                    obj.set(name.name,name.value,name.type)
                    if nargout, objout = obj; end
                    return
                elseif numel(name)==1
                    value = struct2cell(name);
                    if ~iscellstr(value), error('all arguments of the structure must be char'); end
                    obj.set(fname,value,'char')
                    if nargout, objout = obj; end
                    return
                else
                    error('only singleton stucture are accepted')
                end
            end
            % pseudo recursion
            if iscellstr(name)  %#ok<ISCLSTR>
                dup = findduplicates(name);
                if ~isempty(dup), error('the definitions of these alias is/are duplicated: %s',regexprep(sprintf('''%s'',',dup{:}),',$','')); end
                n = length(name);
                if nargin>2
                    if ~iscellstr(type), type = repmat({type},1,n); end    
                    if ~iscellstr(value), value = repmat({value},1,n); end %#ok<ISCLSTR>
                    if length(value)~=n, error('the number of values should match the number of aliases (%d)',n); end
                    if length(type)~=n, error('the number of types should match the number of aliases (%d)',n); end
                end
                if (nargin==2), 	for i=1:n, obj.set(name{i}); end
                elseif (nargin==3), for i=1:n, obj.set(name{i},value{i}); end
                elseif (nargin==4), for i=1:n, obj.set(name{i},value{i},type{i}); end
                end
                if nargout, objout=obj; end
                return
            end
            % Shorthands  (arg check)
            shortsyntax = false;
            if (nargin==2) && ( isempty(obj.prefix) || ~isempty(regexp(name,['^' obj.prefix],'once'))  ) ...
                           && ( isempty(obj.suffix) || ~isempty(regexp(name,[obj.suffix '$' ],'once'))  )
                name = char(uncell(regexp(name,['^' obj.prefix '(.*)' obj.suffix '$'],'tokens')));
                value = name; % name and value are equal
                type = 'char';
                shortsyntax = true;
            elseif (nargin==2) && ( isempty(obj.funcprefix) || ~isempty(regexp(name,['^' obj.funcprefix],'once'))  ) ...
                               && ( isempty(obj.funcsuffix) || ~isempty(regexp(name,[obj.funcsuffix '$' ],'once'))  )
                 name = char(uncell(regexp(name,['^' obj.funcprefix '(.*)' obj.funcsuffix '$'],'tokens')));
                 value = name; % name and value are equal
                 type = 'cmd';
                 shortsyntax = true;
            end
            % Regular syntax (arg echeck)
            if ~shortsyntax
                if nargin<3, error('please provide a value'), end
                if ~ischar(name), error('name must be a char'), end
                if isempty(name), error('name cannot be empty'), end
                if isempty(type), type = type_default; end
                if ~ischar(type), error('type must be a char'), end
                if ~ismember(type,validtype)
                    error('''%s'' unknown type, only these types are accepted: %s',type,regexprep(sprintf('''%s'',',validtype{:}),',$',''))
                end
            end
            % Pointer
            if ismember(name,obj.names)
                i = find(ismember(obj.names,name));
                newentry = false;
            else
                i = obj.nalias+1;
                obj.nalias = obj.nalias+1;
                newentry = true;
            end
            % Delete if is empty
            if ~newentry && isnumeric(value) && isempty(value)
                obj.names(i)        = [];
                obj.value(i)        = [];
                obj.type(i)         = [];
                obj.isdynamic(i)    = [];
                obj.searchexp(i)    = [];
                obj.replacevalue(i) = [];
                obj.ordersearch(i)  = [];
                obj.isambiguous(i)  = [];
                obj.nalias = obj.nalias-1; 
                [~,obj.ordersearch] = sort(obj.ordersearch,'ascend'); % maintian the continuity of numbers
                if nargout, objout=obj; end
                return;
            end
            % Assign
            obj.names{i} = name;
            obj.type{i} = type;
            switch type
                case 'char'
                    val = value;
                    obj.isdynamic(i) = false;
                    obj.searchexp{i} = [obj.prefix regexptranslate('escape',name) obj.suffix];
                case 'path'
                    localfilesep = regexptranslate('escape',filesep);
                    if ~isempty(value) && value(end)==filesep
                        tmp = [strsplit(value,filesep),{filesep}];
                    else
                        tmp = strsplit(value,filesep);
                    end
                    if length(tmp)>1 && isempty(tmp{1}), tmp{1}=filesep; end 
                    value = fullfile(tmp{:});
                    val = regexprep(value,[localfilesep '$'],'');
                    obj.isdynamic(i) = false;
                    obj.searchexp{i} = [obj.prefix regexptranslate('escape',name) obj.suffix];
                    if obj.protectpath
                        val = ['$1' val '$2'];
                        obj.searchexp{i} = sprintf('(^|%1$s)%2$s(%1$s|\\.|$)',localfilesep,obj.searchexp{i});
                    end
                case 'cmd'
                    if ~ismember(regexprep(value,{['^' obj.funcprefix] [obj.funcsuffix '$']},{'' ''}),acceptedcmd)
                         error('''%s'' is not accepted, only these commands are accepted: %s',value,regexprep(sprintf('''%s'',',acceptedcmd{:}),',$',''));
                    end
                    val = @() eval(value);
                    obj.isdynamic(i) = true;                    
                    obj.searchexp{i} = ['\@' name];
                    value = [obj.funcprefix value obj.funcsuffix];
            end
            obj.value{i} = value;
            obj.replacevalue{i} = val;
            obj.isambiguous(i) = false;
            obj.ordersearch = 1:obj.nalias;
            % implement the longest match (POSIX-style regexp)
            % fix obj.ordersearch 
            iambigous=find(arrayfun(@(j) length(find(strncmp(obj.searchexp(j),obj.searchexp(j+1:end),length(obj.searchexp{j})))),1:obj.nalias)>0);
            if ~isempty(iambigous)
                pf = strrep(obj.prefix,'\',''); sf = strrep(obj.suffix,'\','');
                jshortest = 1;
                for jshorter = 1:length(iambigous)
                    if ~obj.isambiguous(iambigous(jshorter))
                        obj.isambiguous(iambigous(jshorter)) = true;
                        dispf('expression ''%s%s%s'' (shortest) is ambigous with ''%s%s%s'' (longest)\n\t--> definition order is changed to maintain the longest match (POSIX-like behavior)',pf,obj.names{iambigous(jshorter)},sf,pf,obj.names{i},sf)
                    end
                    if length(obj.searchexp{iambigous(jshorter)})<length(obj.searchexp{iambigous(jshortest)}), jshortest = jshorter; end
                end
                tobereordered = find(strncmp(obj.searchexp{iambigous(jshortest)},obj.searchexp,length(obj.searchexp{iambigous(jshortest)})));
                [~,ilen] = sort(cellfun(@length,obj.searchexp(tobereordered)),'descend');
                obj.ordersearch(tobereordered) = obj.ordersearch(tobereordered(ilen));
            end
            if nargout, objout = obj; end
        end % end SET

         %% Method exist
        function ret = isalias(obj,name)
            % method isalias
            if nargin<2, error('please provide an alias name'), end
            if ~ischar(name), error('name must be a char'), end
            if isempty(name), error('name cannot be empty'), end
            ret = ismember(name,obj.names);
        end % end isalias
        
        %% Method GET
        function value = get(obj,name)
            % method GET
            if nargin<2, error('please provide an alias name'), end
            if ~ischar(name), error('name must be a char'), end
            if isempty(name), error('name cannot be empty'), end
            if ismember(name,obj.names)
                value = obj.value{ismember(obj.names,name)};
            else
                error('unknown alias ''%s''',name)
            end
        end % end GET
        
         %% Method DELETE
        function delete(obj,name)
            if nargin<1, error('alias name is required'), end
            if ~ischar(name), error('name must be a char'), end
            if isempty(name), error('name cannot be empty'), end
            if ~ismember(name,obj.names),error('unknown alias ''%s'' (already deleted?)',name), end
            obj.set(name,[])
        end % end GET
        
        %% Method EVAL
        function valueout = eval(obj,str,option)
            % method evaluate the string content and replace all aliases by their values
            option_default = 'matchcase';
            nitermax = 500;
            if nargin<2, str=obj.value; end
            if nargin<3, option = ''; end
            if isempty(option), option = option_default; end
            if ~ischar(str) && ~iscellstr(str), error('str must be a char or a cell array'); end %#ok<ISCLSTR>
            tmp = obj.replacevalue; for i=find(obj.isdynamic), tmp{i} = obj.replacevalue{i}(); end
            if ~iscellstr(str), str = {str}; scalar = true; else, scalar=false; end %#ok<ISCLSTR>
            nstr = length(str); valueout = cell(nstr,1);
            for istr = 1:nstr
                val = str{istr}; oldvalue = '';  niter = 0;
                while ~strcmp(val,oldvalue) && (niter<nitermax)
                    niter = niter +1;
                    oldvalue = val;
                    val = regexprep(oldvalue,obj.searchexp(obj.ordersearch),tmp(obj.ordersearch),option);
                end
                if niter>=nitermax, error('the maximum of iterations (%d) has been reached for entry %d (%s)',nitermax,istr,str{istr}), end
                valueout{istr} = val;
            end % next istr
            if scalar, valueout = valueout{1}; end
        end

        %% Method EVALI (ignore case)
        function valueout = evali(obj,str)
            if nargin<2, str=obj.value; end
            valueout = eval(obj,str,'ignorecase');
        end
        
         %% Method DISP (overloaded)
        function disp(obj,expr)
            if obj.nalias<1, dispf('\tNo alias defined.\n\tAdd one with obj.firstalias=''value'' or obj.set(''firstalias'',''value'',''type'')\n'), return, end
            if nargin<2, expr = ''; end
            if obj.nalias<1
                dispf('   alias object without properties')
            else
                pf = strrep(obj.prefix,'\',''); sf = strrep(obj.suffix,'\','');
                fnpf = strrep(obj.funcprefix,'\',''); fnsf = strrep(obj.funcsuffix,'\','');
                dispf('   %d alias defined \t(char,path: %saliasname%s; cmd: %saliasname%s)\n',obj.nalias,pf,sf,fnpf,fnsf)
                wmax = max(cellfun(@length,obj.names)) + max(length(obj.prefix)+length(obj.suffix),length(obj.funcprefix)+length(obj.funcsuffix));
                fmt = ['%' sprintf('%d',wmax+3) 's: %s (%s=''%s'')'];
                tmp = obj.eval();
                if isempty(expr)
                    idx = 1:obj.nalias;
                else
                    %expr = regexptranslate('escape',expr);
                    idx = find( ~cellfun(@isempty,uncell(regexp(obj.names,expr,'once'))) | ...
                                ~cellfun(@isempty,uncell(regexp(obj.value,expr,'once'))) ...
                    );
                    if isempty(idx), dispf('   ---> no match for ''%s'' in name and value of %d alias\n',expr,obj.nalias), end
                end
                for i=idx
                    if length(tmp{i})>5 && strcmp(tmp{i},obj.value{i}), tmp{i}=sprintf('%s...',tmp{i}(1:5)); end
                    switch obj.type{i}
                        case {'char' 'path'}
                            dispf(fmt,[pf obj.names{i} sf],obj.value{i},obj.type{i},tmp{i})
                        case 'cmd'
                            dispf(fmt,[fnpf obj.names{i} fnsf],obj.value{i},obj.type{i},tmp{i})
                    end                        
                end
            end
        end
        
         %% Method SUBREF (overloaded)
        function varargout = subsref(obj,S)
            protectedfields = {'nalias','names','value','eval','evali','set','get','disp','delete','plus','subasgn','subref','replace','load','struct','copy','extract',...
                'byNAME','byVALUE','byEVAL','byTYPE','isCHAR','isPATH','isCMD','isemptyVAL'};
            if all(ismember({S.type},'.')) && ~any(ismember({S.subs},protectedfields))
                nS = length(S);
                out = '';
                for iS = 1:nS
                    name = S(iS).subs;
                    if ~ischar(name) || isempty(name), error('please provide an alias without prefix and suffix'), end
                    if ~ismember(name,obj.names),error('unknown alias ''%s''',name), end
                    j = ismember(obj.names,name);
                    switch obj.type{j}
                        case 'char'
                            out = [out,obj.eval([strrep(obj.prefix,'\','') name strrep(obj.suffix,'\','')])]; %#ok<AGROW>
                        case 'path'
                            out = fullfile(out,obj.eval([strrep(obj.prefix,'\','') name strrep(obj.suffix,'\','')]));
                        case 'cmd'
                            out = [out,obj.eval([ strrep(obj.funcprefix,'\','') name strrep(obj.funcsuffix,'\','')])]; %#ok<AGROW>
                        otherwise
                            error('not implemented yet')
                    end
                end % next iS
                varargout = {out};
            else
                [varargout{1:nargout}] = builtin('subsref',obj,S);
            end
        end

         %% Method SUBASGN (overloaded)
        function obj = subsasgn(obj,S,varargin)
            if strcmp(S.type,'.')
            if length(S)>1, error('indices are not supported in alias'), end
                if ismember(S.subs,obj.names) % the original type is kept if the alias already exist
                    obj.set(S.subs,varargin{1},obj.type{ismember(obj.names,S.subs)})
                else
                    obj.set(S.subs,varargin{1})
                end
            else
                error('not a valid assignment of aliases')
            end
        end
        
         %% Concatenation PLUS
        function obj = plus(objA,objB)
            dup = intersect(objA.names,objB.names);
            if ~isempty(dup), dispf('%d alias are already present on the left, they will not be overwritten',length(dup)), end
            % convert command (internal to B)
            obj = objA;
            val = objB.value;
            icmd = find(ismember(objB.type,'cmd'));
            if any(icmd)
                val(icmd) = regexprep(val(icmd),{['^' objB.funcprefix] [objB.funcsuffix '$']},{'' ''});
            end
            % convert preffixes and suffixes (if needed, standard of A applied)
            pfA = strrep(objA.prefix,'\',''); sfA = strrep(objA.suffix,'\',''); fnpfA = strrep(objA.funcprefix,'\',''); fnsfA = strrep(objA.funcsuffix,'\','');
            pfB = strrep(objA.prefix,'\',''); sfB = strrep(objA.suffix,'\',''); fnpfB = strrep(objA.funcprefix,'\',''); fnsfB = strrep(objA.funcsuffix,'\','');
            if ~strcmp(pfA,pfB) || ~strcmp(sfA,sfB) || ~strcmp(fnpfA,fnpfB) || ~strcmp(fnsfA,fnsfB)
                objB = objB.replace('prefix',pfA,'suffix',sfA,'funcprefix',funcpfA,'funcsuffix',funcsfA);
            end
            % create the alias in A from B
            obj.set(objB.names,val,objB.type);
        end
        
         %% Method LENGTH (overloaded)
        function n = length(obj)
            n = obj.nalias;
        end
        
        %% Method REPLACE (used to change prefixes and suffixes)
        function objr = replace(obj,varargin)
            pf = strrep(obj.prefix,'\',''); sf = strrep(obj.suffix,'\',''); fnpf = strrep(obj.funcprefix,'\',''); fnsf = strrep(obj.funcsuffix,'\','');
            default = struct('prefix',pf,'suffix',sf,'funcprefix',fnpf,'funcsuffix',fnsf);
            options = argcheck(varargin,default);
            objr = alias(options);
            % fix values
            val = obj.value;
            for i=1:length(val)                
                if strcmp(obj.type{i},'cmd')
                    val{i} = regexprep(val{i},{['^' obj.funcprefix], [obj.funcsuffix '$']},{'' ''});
                end
                val{i} = regexprep(val{i},{obj.prefix,obj.suffix,obj.funcprefix ,obj.funcsuffix},...
                    regexptranslate('escape',{options.prefix,options.suffix,options.funcprefix ,options.funcsuffix}));
            end
            objr.set(obj.names,val,obj.type);
            obj = objr; %#ok<NASGU>
        end
        
        %% Method LOAD
        function obj = load(obj,filename,sheetname)
            sheetname_default = 'alias';
            if nargin<2, error('please provide a file'), end
            if nargin<3, sheetname = ''; end
            if ~isempty(regexp(filename,['^' obj.prefix '(.*)' obj.suffix '$'],'match'))
                filename = obj.eval(filename);
            end
            if ~exist(filename,'file'), error('the supplied file does not exist [%s]',filename), end
            if isempty(sheetname), sheetname = sheetname_default; end
            [~,~,ext] = fileparts(filename);
            if ~ismember(lower(ext),{'.xls','.xlsx','.ods'}), error('not a valid file, accepted: XLS or ODS (preferred)'), end
            raw = loadodsprefetch(filename,'sheetname',sheetname);
            if ~isfield(raw,'name'), error('the column ''name'' is missing'), end
            if ~isfield(raw,'value'), error('the column ''value'' is missing'), end
            if ~isfield(raw,'type'), error('the column ''type'' is missing'), end
            if ~all(cellfun(@ischar,raw.name)), error('some names are empty or numeric'), end
            ind = find(~cellfun(@ischar,raw.value)); if ~isempty(ind), error('the values of these parameters should be char: %s',regexprep(sprintf('''%s'',',raw.name{ind}),',$','')), end
            ind = find(~cellfun(@ischar,raw.type)); if ~isempty(ind), error('the types of these parameters should be char: %s',regexprep(sprintf('''%s'',',raw.name{ind}),',$','')), end
            ind = find(~cellfun(@(x) ismember(x,{'char','path','cmd'}),raw.type)); if ~isempty(ind), error('the types are invalid for: %s',regexprep(sprintf('''%s'',',raw.name{ind}),',$','')), end
            obj.set(raw);
        end
        
        %% Method STRUCT (overloaded)
        function s = struct(obj,names)
            if nargin<2, names = ''; end
            if isempty(names), names = obj.names; end
            if ischar(names), names = {names}; end
            missing = setdiff(names,obj.names);
            if ~isempty(missing), error('the following alias do(es) not exist: %s',regexprep(sprintf('''%s'',', missing{:}),',$','')), end
            fnames = regexprep(names,{'~[A-Za-z_]','^_'},{'',''});
            pf = strrep(obj.prefix,'\',''); 
            sf = strrep(obj.suffix,'\','');
            fnpf = strrep(obj.funcprefix,'\',''); 
            fnsf = strrep(obj.funcsuffix,'\','');
            for i=1:length(names)
                j = ismember(obj.names,names{i});
                if strcmp(obj.type{j},'cmd')
                    names{i} = [fnpf names{i} fnsf];
                else
                    names{i} = [pf names{i} sf];
                end
            end
            val = obj.eval(names);
            s = cell2struct(val,fnames,1);
        end
        
        %% Method COPY
       function obj2 = copy(obj,names)
            if nargin<2, names = ''; end
            if isempty(names), names = obj.names; end
            if ischar(names), names = {names}; end
            missing = setdiff(names,obj.names);
            if ~isempty(missing), error('the following alias do(es) not exist: %s',regexprep(sprintf('''%s'',', missing{:}),',$','')), end
            dup = findduplicates(names);
            if ~isempty(dup), error('the following alias are duplicated: %s',regexprep(sprintf('''%s'',', dup{:}),',$','')), end
            [~,ind] = intersect(obj.names,names,'stable');
            val = obj.value(ind);
            for i=1:length(val)
                if strcmp(obj.type{i},'cmd')
                    val{i} = regexprep(val{i},{['^' obj.funcprefix], [obj.funcsuffix '$']},{'' ''});
                end
            end            
            obj2 = alias;
            obj2 = set(obj2,obj.names(ind),val,obj.type(ind));
       end
        
         %% Method EXTRACT
        function obj2 = extract(obj,expr,property)
            property_default = {'name' 'value'};
            if obj.nalias<1, dispf('\tNo alias defined.\n\tAdd one with obj.firstalias=''value'' or obj.set(''firstalias'',''value'',''type'')\n'), obj2 = alias; return, end
            if nargin<2, expr = ''; end
            if nargin<3, property = ''; end
            if isnumeric(expr) && isempty(expr), flag_isempty = true; expr=''; property='value'; else, flag_isempty = false; end
            if ~ischar(expr), error('the expression must be char'), end
            if isempty(property), property = property_default; end
            if ~iscell(property), property = {property}; end
            if ~iscellstr(property), error('property must be char or a cell array'), end %#ok<ISCLSTR>
            property = property(:)';
            if obj.nalias<1
                dispf('   alias object without properties')
            else
                if isempty(expr) && ~flag_isempty
                    ok = true(1,obj.nalias);
                else
                    ok = false(1,obj.nalias);
                    for p = property
                        switch p{1}
                            case 'name'
                                ok = ok | ~cellfun(@isempty,uncell(regexp(obj.names,expr,'once')));
                            case 'value'
                                if flag_isempty
                                    ok = cellfun(@isempty,obj.value);
                                else
                                    ok = ok | ~cellfun(@isempty,uncell(regexp(obj.value,expr,'once')));
                                end
                            case 'eval'
                                tmp = obj.eval;
                                ok = ok | ~cellfun(@isempty,uncell(regexp(tmp',expr,'once')));
                            case 'type'
                                ok = ok | ismember(obj.type,expr);                                
                            otherwise
                                error('unknown property ''%s''',p{1})
                        end
                    end
                end
                idx = find(ok);
                if isempty(idx)
                    if flag_isempty
                        dispf('   ---> no empty value')
                    else
                        dispf('   ---> no match for ''%s'' in name and value of %d alias\n',expr,obj.nalias)
                    end
                    obj2 = alias;
                else
                    obj2 = copy(obj,obj.names(idx));
                end
            end
        end
        
        % Shorthand for EXTRACT with property = 'name'
        function obj2 = byNAME(obj,expr)
            if nargin<2, expr = ''; end
            obj2 = extract(obj,expr,'name');
        end
        
        % Shorthand for EXTRACT with property = 'value'
        function obj2 = byVALUE(obj,expr)
            if nargin<2, expr = ''; end
            obj2 = extract(obj,expr,'value');
        end
        % Shorthand for EXTRACT with property = 'eval'
        function obj2 = byEVAL(obj,expr)
            if nargin<2, expr = ''; end
            obj2 = extract(obj,expr,'eval');
        end
        
        % Shorthand for EXTRACT with property = 'type'
        function obj2 = byTYPE(obj,expr)
            if nargin<2, expr = ''; end
            obj2 = extract(obj,expr,'type');
        end        

        % Shorthand for EXTRACT with type = 'char'
        function obj2 = isCHAR(obj), obj2 = extract(obj,'char','type'); end        

        % Shorthand for EXTRACT with type = 'path'
        function obj2 = isPATH(obj), obj2 = extract(obj,'path','type'); end        

        % Shorthand for EXTRACT with type = 'cmd'
        function obj2 = isCMD(obj), obj2 = extract(obj,'cmd','type'); end
        
        % Method isemptyVAL()
        function obj2 = isemptyVAL(obj), obj2 = extract(obj,[]); end % special syntax to detect empty values
        
    end % --- end methods

end