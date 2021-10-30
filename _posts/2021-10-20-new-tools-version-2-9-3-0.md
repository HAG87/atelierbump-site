---
title: New tools introduced in v2.9.3.x
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

Last major release for 2021. This version brings some enhancements and a few new tools

## Entirely rewritten Array tools and Replacement of paneling tool

The idea was to set up a framework that will allow to have a more optimized Array tools and be able to the features. Part off this work derived in replacing the old and feature-similar panelling tool.
For now, the changes introduced are these:

* The 2D Array tools has a new mode for cloning the object in the "Grid cells" instead of the grid points. (Use SHIFT when starting the tool to use this mode)
* Pattern Array UI was simplified a bit, just one button to add/update the row-column rule, and it should be a performance improvement in most cases.

"Paneling tool", is now more interactive, with more interaction in the viewport and less in the UI. Behaving similar to 2D Array tool. The results will be the same, but is easier and faster to use. If you want to use an object as panel model, start the tools selecting first that object, if no object is selected default boxes will be created The interface now contains just thickness and cap parameters that are easier to preview. For a more detailed list of changes, refer to the user guide.

![paneling](/assets/images/ui/paneling_ui_1.png){: .align-center .drop-shadow}

(Video will be added soon)

## General enhancements

* Since some users encounter some difficulties in the activation steps, the "Welcome" dialog was enhanced to contain more useful useful information for new users.
* Some general optimizations all over the place, some tools should work faster in some cases.

## New tool: "Stamp"

First attempt to introduce a more direct modelling oriented tool. Its objective is to provide a quick way to "stamp" an object into another or cut holes on the surface. Some use cases could be to imprint a shape in a jar, detail a wall, cut holes in a ceiling to add recessed lamps...

(Video will be added soon)

## Fixes

major fixes includes the correction of a problem  with the eyedropper tool, that caused the display of an error dialog after one use. Also, Drop Objects tool did not work as expected when the target object's pivot was displaced and the Distribute tool was practically broken in the latest release.

## On plan

We have on plan a must needed remake some of the demo videos, and complete new ones for more of the main tools
