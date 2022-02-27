---
title: DesignToolBox --- version 2.5.0
date: 2018-03-29T19:01:53+00:00
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Updates
---
## New features

* New layer tools:
  * Isolate layers: Isolate the layers of the current selected nodes, or pick a node in the viewport.
  * Hide/freeze/Box Mode layer picking a node in the viewport.
  * Added shortcuts to ribbon for some useful layer commands not present in 3ds max UI.

## Tools improvements and fixes

* Transform tools: Improved polar and orthogonal tracking.
* refGuides
  * Polar placing: Now, when placing the polar reference plane, you can orient and rotate (yaw-pitch-roll) it.
  * Orthogonal mode: Pressing **CRTL** will lock *z-axis*.
  * Removed option to place protractor with guide line.
  * New objects: Now line, protractor and intersection points are configurable **custom objects**, you can now snap to vertex at a intersection point.
* General performance improvements and fixes.
  * Fixed error that causes the first install dialog to reappear at each launch.
  * Fixed error with random UVW map transformations.
  * Improved Pattern array.
  * Improved distance measure history dialog.
* Fixed problems in demo version.
* UI enhancements
  * Better tooltips, complete description in ribbon tooltips.
  * Some other refinements.
* Net rendering (Backburner): Install the demo version in the render nodes to avoid warnings and potential render job fail.
* Moved refGuides MacroScripts to category *refGuides*;
* Moved DesignToolbox MacroScripts to category *Designtoolbox*; Optional features remains on category *DSTLBX tools*.
* 3ds Max 2019 compatibility. Fixed compatibility whit versions prior to 2017.