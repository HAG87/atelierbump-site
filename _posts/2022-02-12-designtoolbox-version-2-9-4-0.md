---
title: First new version (v2.9.4.0) of 2022
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

First release for 2022. This version brings some enhancements and brand new UI icons (Due to a data loss, the icons had to be redone. The new aesthetic is more consistent and blends well with native icons).

![icons](/assets/images/specimens-01-small.png){: .align-center .drop-shadow}

### Enhancements

* Camera manager
  * Added control for f-number, shutter, and ISO
  * Replaced image aspect presets to aspect ratio «X:Y» format.
  * Added buttons to get the resolution/ratio from an image and the current viewport background.
* mtlReplacer received several improvements:
  * Simplified UI: to assign a replacement, select a material (or a range) in the list and double click to open the Material explorer.
  * Multi-materials are listed by default. Added support to list & replace sub-materials (one level deep, no nested materials, for now, a multi-level solution is on plans).
  * Added a "Use" column to the list that shows if the material is used in the scene or as sub-material.
  
![mtlreplacer](/assets/images/ui/mtlreplacer.png){: .align-center .drop-shadow}

* Incremental Isolation:
  * Added an indication of the current level (i.e: level 7)
  * Decreasing the level selected all visible objects. This was corrected to maintain the current selection. Known Issue: working in sub-object and changing the level will return to object mode.
  * Newly created objects in a level were not correctly added to the stack.
  * Hiding an object when at a level will not keep the visibility state going one level up/down. This was changed so the object will remain hidden.

### Added

Included extras(Extras are tools that either do not fit well in another group of tools or are provided for free on our website and it is included in the package for convenience):

* Texture maps filename search and replace
* viewport composition guides

<div class="responsive-video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/_x84_JmnIO0" frameborder="0"> </iframe></div>

### Fixes

* layTools: Fixed undo actions
* mapTools: Optimized slow UI, fixed broken functionality
* Some general maintenance and optimizations.

### Future changes

Considering that this will be the last release to support legacy 3ds max versions (prior to 2018) in order to simplify maintenance and optimize development.
