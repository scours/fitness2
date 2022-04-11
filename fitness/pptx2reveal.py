# -*- coding: utf-8 -*-
"""
Created on Tue Apr  5 11:05:56 2022

@author: olivi
"""

# %% Dependencies
import os, fnmatch, socket, subprocess, re
from pathlib import PurePosixPath, PureWindowsPath
from datetime import datetime
import numpy as np
from fitness.private.struct import struct


# %% class definitions
class config(struct):
    """ mypptx class """
    _type = "reveal"        # object type
    _fulltype = "reveal-md" # full name
    _ftype = "propertie"    # field name
    _maxdisplay = 60

class filedetails(struct):
    """ explore class, almost as the original explore with abbreviate """
    _type = "file"        # object type
    _fulltype = "file details" # full name
    _ftype = "attribute"    # field name
    _maxdisplay = 120
    
    def __init__(self,file):
        """ initialization based on a valid filename """
        super().__init__(fullfilename=file)
        if not os.path.isfile(file):
            raise IOError(f'the file "{file}" does not exist')
        self.path, self.filename = os.path.split(file)
        self.name, self.ext = os.path.splitext(self.filename)
        self.date = os.path.getmtime(file)
        self.size = os.path.getsize(file)
        self.datestr = datetime.fromtimestamp(self.date).strftime("%Y-%m-%d %H:%M:%S")
        
    
# %% Functions mimicking the ones in version 1, which were initially coded in Matlab
def mem2bytes(t):
    """
        MEM2BYTES converts memory size (from str) to bytes (to double)
        v = mem2byes("300 kB")

    """
    if not isinstance(t,str): raise ValueError("t must be a string")
    U = "KMGTP";
    f = [1<<10,1<<20,1<<30,1<<40,1<<50] # A left shift by n bits is defined as multiplication with pow(2,n)
    v0 = re.search('(?P<v>\d+\.?\d*)\s*(?P<u>[KMGTPkmgtp]?)[bB]',t)
    if v0 is None: raise ValueError(f'unable to convert in bytes the string "{t}"')
    v = float(v0.group("v"))
    u = v0.group("u")
    if u !="": v = v*f[U.find(u.upper())]
    return v

def explore(filePattern="Slide*.png",directory=os.getcwd(),topdown=True,onerror=None):
    """
        EXPLORE lists all files matching a pattern in a given directory (unlimited depth)
        files = explore("*.PNG",".")
    """
    matches = []
    for path, dirs, files in os.walk(os.path.abspath(directory),topdown=topdown,onerror=onerror):
        for filename in fnmatch.filter(files, filePattern):
            matches.append(filedetails(os.path.join(path, filename)))
    return matches

def system(cmd):
    """ system() equivalent to Matlab one
        cmd = (code,params)
        returns 0 if no error as well as the standard output
        note: os.system() is depreciated and does not capture the output
    """
    out = subprocess.run(cmd,capture_output=True, text=True)
    return out.returncode, out.stdout.strip("\n")
    
# %% default configurations
vrsn = 0.331;
launchpath = os.getcwd();
onCleanup = lambda : os.chdir(launchpath)
hostname = socket.gethostname()
if hostname == "LX-Olivier2020":
    local = "/home/olivi/Documents/fitness/sandbox"
elif hostname=="lne-ThinkPad-P52":
    local = '/home/mai/Documents/fitness/sandbox'
else:
    raise NameError('define your machine, first')

defaultrevealoptions = config(
        # see https://github.com/hakimel/reveal.js#slide-attributes
        transition = "convex", # none/fade/slide/convex/concave/zoom
        backgroundTransition = "fade",
        viewDistance = 5,
        center = False,
        overview = True,
        touch = True,
        progress = True,
        controls = True,
        controlsTutorial = True,
        controlsLayout = "bottom-right",
        help = True,
        mouseWheel = True,
        slideNumber = "c/t",
        autoSlide = 15000,
        width = "102%",
    	height =   "102%",
    	margin = 0,
    	minScale = 0.1,
    	maxScale = 3,
        display = "block",
        transitionSpeed = "default" # default/fast/slow   
    )

dependencies = ["references","videos","movies","extra","casestudies","guidelines","howto","solutions"]

defaultTOC = config();
defaultreplace = config();
defaultsubstitute = config();
boolean = ['false','true'];
keyword = ['static','simulation' 'repair' 'forcedupdate'];
staticobjects = {
    "css":"dir",
    "js":"dir",
    "lib":"dir",
    "plugin":"dir",
    "index.html":"file"
    } # content of the static objects
imsourcefolder_default = 'png';

# %% main()
def pptx2reveal(
    wwwroot = local,
    wwwrel = "demo",
    wwwlib = "src",
    pptxfolder = local,
    pptx = "Cours_migration2018.pptx", # source pptx required
    imfolder = "jpg",
    imsourcefolder = '',
    impat = "Slide*.jpg" ,  # assets (raster)
    svgpat = "Slide*.svg",  # assets (svg)
    author = "INRA\\Olivier Vitrac",
    contact = "olivier.vitrac@agroparistech.fr",
    YAMLtitle = "", # title will be used when empty
    title = "CONTAMINATION OF FOOD BY PACKAGING MATERIALS",
    vrsn = vrsn,
    mdfile = "index.md",
    projectname = "",
    theme = "moon", #beige,black,blood,league,moon,night,serif,simple,sky,solarized,white (https://github.com/hakimel/reveal.js/tree/master/css/theme)
    resize = "25x25%",
    initialscale = 0.8,
    maximumscale = 2.0,
    userscalable = "yes",
    revealoptions = None,
    TOC = None,
    replace = None,
    substitute = None,
    headingshift = "", # add '##' to convert h1->h3, h2->h4, h3->h5, etc.
    headingshiftnotes = "##",
    fontsize = np.array([0.6000,0.5500,0.4500,0.3500,0.3000])+.1, # h1 h2 h3, etc. in em (to be used in css/theme/theme.css)
    hash = "",
    traceability = True,
    maxtitle = 120,# max length of title
    maxcontentslide = 12, #maximum number of lines on the content slide
    favicon = "~/Bulk/fitness2019/template/favicon/favicon.ico",
    mainindex = "",
    dependencies = dependencies,
    dependencymain = "index.html",
    imformatpreferred = "png",
    svgmaxsize = "2 MB"
        ):
    
    # -- arg check -- (try to mimic the original Matlab code)
    if revealoptions is None: revealoptions = defaultrevealoptions
    elif isinstance(revealoptions,struct): revealoptions.check(defaultrevealoptions)
    else: raise TypeError("revealoptions should be a struct() or a config() object")
    if TOC is None: TOC = defaultTOC
    elif isinstance(TOC,struct): TOC.check(defaultTOC)
    else: raise TypeError("TOC should be a struct() or a config()")
    if replace is None: TOC = defaultreplace
    elif isinstance(replace,struct): replace.check(defaultreplace)
    else: raise TypeError("replace should be a struct() or a conf() object")
    if substitute is None: substitute = defaultsubstitute
    elif isinstance(substitute,struct): substitute.check(defaultsubstitute)
    else: raise TypeError("substitute should be a struct() or a conf() object")                      
    static = revealoptions.static
    simulation = revealoptions.simulation
    repair = revealoptions.repair
    forcedupdate = revealoptions.forcedupdate
    if projectname == "":
        _,projectname = os.path.split(mdfile)
        projectname,_ = os.path.splitext(projectname)
    if YAMLtitle == "": YAMLtitle = title
    outputhtml = projectname + ".html"
    staticobjects[outputhtml] = "file"


    # -- folder check --
    # wwwroot = server root
    # www = /wwwroot/.../wwwrel/ = location of index.html
    # wwwlib = /wwwroot/.../o.wwwlib/ = location of libraries
    if not os.path.isdir(wwwroot): raise IOError('the wwwroot folder "%s" does not exist' % wwwroot)
    if not os.path.isdir(pptxfolder): raise IOError('the pptx folder "%s" does not exist' % pptxfolder)
    if not os.path.isfile(os.path.join(pptxfolder,pptx)): raise IOError('the PPTX file ''%s'' does not exist in "%s"' % (pptx,pptxfolder))
    www = os.path.join(wwwroot,wwwrel)  # location of index.html
    wwwlib = os.path.join(wwwroot,wwwlib)
    if not os.path.isdir(www): os.mkdir(www)
    if not os.path.isdir(wwwlib): os.mkdir(wwwlib)
    # htmlpath(p) make p relative to root
    # -- example --
    # tmpwww = 'www/folder1/html'
    # tmpwwwlib = 'lib'
    # htmloldlibpath('js') -> './js'
    # htmllibpath('js') ->  './../../../lib/js'
    #
    # // Matlab code //
    # pathsplit = @(p) strsplit(regexprep(p,{['\' filesep '+'],['^\' filesep],['\' filesep '$']},{['\' filesep] '' ''}),filesep);
    # fullfilex = @(x) fullfile(x{:});
    # backpath = @(p) fullfilex(repmat({'..'},length(pathsplit(p)),1));
    # htmlpath = @(p) fullfile('./',backpath(tmpwww),p);
    # htmloldlibpath = @(p) fullfile('./',fullfilex(pathsplit(p)));
    # htmllibpath = @(p) fullfile(htmlpath(tmpwwwlib),p);
    # -------------
    wwwroot = PureWindowsPath(wwwroot).as_posix()
    tmpwww = PureWindowsPath(wwwrel).as_posix() 
    tmpwwwlib = PureWindowsPath(wwwlib).as_posix()
    safepath = lambda p: PureWindowsPath(p).as_posix()
    backpath = lambda p: PurePosixPath(safepath(os.path.relpath(".",p)))
    htmlpath = lambda p: PurePosixPath("./")/backpath(tmpwww)/safepath(p)
    htmloldlibpath = lambda p: PurePosixPath("./")/safepath(p)
    htmllibpath = lambda p: PurePosixPath(tmpwwwlib)/safepath(p)
    
    # -- engines -- (requires mogrify, libreoffice and pdf2svg)
    #imenginecmd = sprintf('mogrify -path ''%s'' -resize 25x25%% -quality 90 -format jpg *.PNG',fullfile(www,o.imfolder));
    _,fname = os.path.split(pptx)
    fname,_ = os.path.splitext(fname)
    pdf = "%s.pdf" % fname
    imenginecmd  = ("mogrify" "-path '%s' -resize %s -quality 90 -format jpg *.PNG" % \
        (os.path.join(www,imfolder),resize) );
    pdfenginecmd = ("libreoffice", "--headless --convert-to pdf '%s'" % \
        os.path.join(pptxfolder,pptx) )
    svgenginecmd = ("pdf2svg","'%s' '%s' all" % \
        ( os.path.join(pptxfolder,pdf), os.path.join(www,imfolder,'Slide%d.svg') ) )
    
    imengine  = lambda: system(imenginecmd);
    pdfengine = lambda: system(pdfenginecmd);
    svgengine = lambda: system(svgenginecmd);
    svgmaxsize = mem2bytes(svgmaxsize);
    svgpreferred = imformatpreferred.lower()=="svg"
    
    # -- static output --
    # location:: www = /wwwroot/.../wwwrel/
    relpptxfolder,fnpptx = os.path.split(pptx)
    fnpptx,_ = os.path.splitext(fnpptx)
    if projectname == "": 
        staticsite = "_html_%s" % fnpptx
    else:
        staticsite = "_html_%s" % projectname    
    staticfolder = os.path.join(www,staticsite)
    existstaticfolder = os.path.isdir(staticfolder)
    
    
    # -- search for thumb images --
    # location:: www = /wwwroot/.../wwwrel/imfolder/
    if not os.path.isdir(os.path.join(www,imfolder)):
        print('PPTX2REVEAL: the image folder "%s" does not exist in "%s"' % (imfolder,wwwroot))
        if imsourcefolder == "":
            if os.path.isdir(os.path.join(pptxfolder,relpptxfolder,fnpptx)):
                rootimsourcefolder = os.path.join(pptxfolder,relpptxfolder)
                imsourcefolder = fnpptx
            else:
                rootimsourcefolder = wwwroot
                imsourcefolder = imsourcefolder_default
        else:
                rootimsourcefolder = wwwroot
        if os.path.isdir(os.path.join(rootimsourcefolder,imsourcefolder)):
            print('PPTX2REVEAL: conversion of all images from the folder "%s"' % imsourcefolder)
            if simulation: print('simulation>> mkdir %s' % os.join(www,imfolder))
            else: os.mkdir(os.join(www,imfolder))
            os.chdir(os.join(rootimsourcefolder,imsourcefolder))
            if simulation: print('simulation>> cd ''%s''\nsimulation>> %s' % (os.path.join(rootimsourcefolder,imsourcefolder),imenginecmd))
            else: print('run>> %s' % imenginecmd); imengine();
            os.chdir(launchpath)
        else:
            raise IOError('the image source folder "%s" does not exist in "%s"' % \
                          (imsourcefolder,rootimsourcefolder) )


    f = explore(impat,os.path.join(www,imfolder))
    if svgpreferred:
        if not os.path.isfile(os.path.join(pptxfolder,pdf)):
            print('run>> %s' % pdfenginecmd)
            currentpath = os.getcwd()
            os.chdir(pptxfolder)
            pdfengine()
            os.chdir(currentpath)
        if not os.path.isfile(os.path.join(pptxfolder,pdf)):
            raise IOError('the conversion of "%s" to PDF fails in "%s"' % (pdf,pptxfolder))
        LD_LIBRARY_PATH = os.getenv('LD_LIBRARY_PATH')    # save library path
        os.environ["LD_LIBRARY_PATH"] = ""  # clear library path
        print("run>> %s" % svgenginecmd); svgengine()
        os.environ["LD_LIBRARY_PATH"] = LD_LIBRARY_PATH  # restore the library path        
        fsvg = explore(svgpat,os.path.join(www,imfolder));
    else:
        fsvg = []
    if len(f)==0:
        if simulation:
            print('simulation>> ERROR no files "%s" found in "%s"'  % \
                  (impat,os.path.join(www,imfolder)) )
            f = explore(impat,os.path.join(rootimsourcefolder,imsourcefolder))
            if len(f)==0:
                raise IOError('SIMULATION failed: no image files matching "%s", please export slides first' % impat)
        else:
            raise IOError('no file matching "%s" in "%s"',impat,os.path.join(www,imfolder))
    

    searchslidenum = re.compile('(\d+$)')
    nn = [int(searchslidenum.findall(f0.name)[0]) for f0 in f]
    f = [fimg for _, fimg in sorted(zip(nn, f))]
    n = len(f)    

    if svgpreferred:
        if len(fsvg)==0:
            raise IOError('no file matching "%s" in "%s"' % (svgpat,os.path.join(www,imfolder)))
        nnsvg =  [int(searchslidenum.findall(f0.name)[0]) for f0 in fsvg]
        fsvg =  [fimg for _, fimg in sorted(zip(nnsvg, fsvg))]
        nsvg = len(fsvg)
        if nsvg != n:
            raise IOError(f"the number of raster images ({nn}) does not match the number of vectorial images ({nsvg})")

