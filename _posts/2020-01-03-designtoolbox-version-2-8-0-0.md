---
title: DesignToolBox --- version 2.8.X
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

### New Tools

* **Points:** New tool for placing reference points at temporary guides intersections.
* **Renderable dimensions:** This was a old users request. The tool isn't perfect, and creates standard line shapes and text, but it does his commit.

### General and existing tools improvements

* Reworked how spinners values behave at different Max units configuration. It should be more consistent. i.e. Some default values where intended to be centimeters, if you set max to work with meters. In case the units where configured to centimeters, the value of the spinners where in millimeters, resulting in too small defaults.
* UI related: Ribbon tab, simplified reiterative tools and moved settings toggles to panel breaks to leave more room.
* General stability and improvements in viewport drawing methods. Some actions should be more fluid.
* Reworked how settings works. This is mostly internal and performance related, but in previous versions, there was some problems with tools not reflecting the changes.

### Fixes

* Resolved some problems with activation.
* In Demo mode (unlicensed) "activate now" dialogs and "Not activated" alerts where too obtrusive, and some features where broken.
* Issues with several tools were identified and fixed.
