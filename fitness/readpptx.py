# -*- coding: utf-8 -*-
"""
    readpptx: main tools to read pptx for the project fitness 2.0
        from fitness.readpptx import mypptx
        pptfile = "../test/source/Vitrac_FoodRisk.pptx"
        ppt = mypptx(pptfile)

Created on Thu Mar 31 10:16:20 2022

@author: olivier.vitrac@agroparistech.fr
"""

# Revision history
# 2022-03-31 RC

# %% Dependencies
# note Mm(10) = 360000 pts for 10 mm
import os
from fitness.private.pptx import Presentation
from fitness.private.pptx.util import Mm # Inches, Pt, 
from fitness.private.struct import struct

# %% class pres
class sppt(struct):
    """ mypptx class """
    _type = "pres"        # object type
    _fulltype = "presentation" # full name
    _ftype = "item"        # field name
    _maxdisplay = 80
    
class slayout(sppt):
    """ mypptx.layout class """
    _type = "layout"        # object type
    _fulltype = "slide layout" # full name

class sslide(sppt):
    """ mypptx.slide class """
    _type = "slide"        # object type
    _fulltype = "slide content" # full name
    
class sshape(sppt):
    """ mypptx.shape class """
    _type = "shape"        # object type
    _fulltype = "shape content" # full name
    
class scount(sppt):
    """ mypptx.shape class """
    _type = "count"        # object type
    _fulltype = "counter" # full name

# %% main()
def mypptx(filename,verbose=True):
    """ 
        read pptx
            ppt = mypptx("path/to/mypptfile.pptx")
            ppt = mypptx("path/to/mypptfile.pptx",verbose=True)
            
        Presentation object
          --------:----------------------------------------
           layouts: <class '__main__.slayout'>
            slides: <class '__main__.sslide'>
          --------:----------------------------------------

        Slides object (example)
          --------:----------------------------------------
             slide: [shape content (shape object)  [...]  (shape object) with 19 items]
                 n: 60
               raw: <class 'fitness.private.pptx.slide.Slides'>
           --------:----------------------------------------

        Slide object (example)
            ppt.slides.slide[30]
              ------------------------:----------------------------------------
                              slidenum: 31
                             slidename: 
                                 title: this is my title
                                    id: 271
                                layout: Blank
                            background: BACKGROUND (5)
              follow_master_background: False
                       has_notes_slide: False
                                  type: ['Shape', 'Shape', 'Picture',  [...] 'Picture', 'SlidePlaceholder']
                                  text: ['detailed\tcoarse', '11 to 13 [...] arson Education; 1998.', '31']
                                  name: ['Rectangle 2', 'Up Arrow 3',  [...]  'Slide Number Placeholder 5']
                                  area: [1, 33, 17, 14, 16, 17, 11, 40 [...] , 10, 5, 12, 6, 10, 99, 55, 1]
                                  left: [2473610, -90980, 3962919, 774 [...] 6, 9035437, 9245738, 11669713]
                                   top: [3130550, 1276191, 2849441, 46 [...] 45, 3744560, 1100956, 6461125]
                                 width: [184731, 959786, 1542531, 1493 [...] 880, 4035743, 3767444, 522287]
                                height: [400110, 4508938, 1427793, 119 [...] 110, 3166626, 1890507, 365125]
                                     n: <class '__main__.scount'>
                                   raw: <class 'fitness.private.pptx.shapes.shapetree.SlideShapes'>
                                  part: [<fitness.private.pptx.parts.s [...] object at 0x00000168BA84F3D0>]
              ------------------------:----------------------------------------
            Out[508]: shape content (shape object) with 19 items

        Counters within a slide (example)
            ppt.slides.slide[30].n
              -----------------------:----------------------------------------
                            Connector: 0
                         GraphicFrame: 0
                                Movie: 0
                              Picture: 7
              PlaceholderGraphicFrame: 0
                   PlaceholderPicture: 0
                           GroupShape: 0
                                Shape: 12
                     SlidePlaceholder: 1
              -----------------------:----------------------------------------
            Out[511]: counter (count object) with 9 items
        
    """
    
    # scale
    centimeter = Mm(10)

    # Open the presentation
    if os.path.isfile(filename):        
        doc = Presentation(filename)
    else:
        raise IOError(f'the file "{filename}" does not exist')

    # main container
    PPT = sppt(layouts = None, 
               slides = None
              )

    # Retrieve the layouts
    """ 
        Ref for slide types: 
            0 ->  title and subtitle
            1 ->  title and content
            2 ->  section header
            3 ->  two content
            4 ->  Comparison
            5 ->  Title only 
            6 ->  Blank
            7 ->  Content with caption
            8 ->  Pic with caption
    """

    layouts = doc.slide_master.slide_layouts
    PPT.layouts = slayout(
        raw = layouts,
        names = [l.name for l in layouts],
        n = len(layouts)
        )

    # Retrieve all slides
    """
        List of properties
            background
            element
            follow_master_background
            has_notes_slide
            name
            notes_slide
            part
            placeholders
            shapes
            slide_id
            slide_layout
    """
    slides = doc.slides
    nslides = len(slides)
    Sall = sslide( 
        slide = [], # slide container
        n = nslides,
        raw = slides
        )
    
    islide = 0
    
    for slide in slides:
        
        name = slide.name
        shapes = slide.shapes
        nshapes = len(shapes)
        slidetitle = shapes.title if hasattr(shapes, "title") else ""
        slidetitle = slidetitle.text if hasattr(slidetitle,"text") else ""
            
        S = sshape(
            slidenum = islide+1,
            slidename = name,
            title = slidetitle,
            id = slide.slide_id,
            layout = slide.slide_layout.name,
            background = slide.background.fill.type,
            follow_master_background = slide.follow_master_background,
            has_notes_slide = slide.has_notes_slide,
            type = [],
            text = [],
            name = [],
            area = [],
            left = [],
            top = [],
            width = [],
            height = [],
            n = None,
            raw = shapes,
            part = []
            )

        ishape = itext = 0
        ityp = scount(
            Connector=0,
            GraphicFrame=0,
            Movie=0, 
            Picture=0,
            PlaceholderGraphicFrame=0,
            PlaceholderPicture=0,
            GroupShape=0,
            Shape=0, 
            SlidePlaceholder=0
                )
    
        print(f"\n\n== slide [{islide}/{nslides-1}]","="*60,"\n",f"{slidetitle}","\n")
    
        for shape in shapes:
            tshape = type(shape).__name__
            ityp.setattr(tshape,ityp.getattr(tshape)+1)
            S.type.append(tshape)
            S.name.append(shape.name)
            S.part.append(shape.part)
            S.left.append(shape.left)
            S.top.append(shape.top)
            S.width.append(shape.width)
            S.height.append(shape.height)
            S.area.append(round(shape.width*shape.height/centimeter**2))
            
            text =  shape.text.strip() if hasattr(shape,"text") else ""
            
            if text !="" and text is not None:
                if verbose:
                    print("\t--[%10s ]" % f"shape {ishape}/{nshapes-1}",
                          "-"*25,'\n',text,"\n")
                S.text.append(text)
                itext += 1
            
            ishape += 1
                
        S.n = ityp
        Sall.slide.append(S)
        islide += 1

    PPT.slides = Sall
    
    # output
    return PPT

# %% DEBUG
# ===================================================   
# main()
# ===================================================   
# for debugging purposes (code called as a script)
# the code is called from here
# ===================================================
"""
pptfile = "../test/source/Vitrac_FoodRisk.pptx"
doc = Presentation(pptfile)
slides = doc.slides
for i in range(len(slides)):
    for j in range(len(slides[i].shapes)): 
        print(i,j,type(slides[i].shapes[j]).__name__)
"""

if __name__ == '__main__':
    pptfile = "../test/source/Vitrac_FoodRisk.pptx"
    ppt = mypptx(pptfile,verbose=False)
