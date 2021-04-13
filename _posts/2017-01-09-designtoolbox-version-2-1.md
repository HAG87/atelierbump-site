---
title: DesignToolBox --- version 2.1
date: 2017-01-09T21:42:34+00:00
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

### Tools improvements and fixes

#### Local reference rotation

* Added preview of rotation axis
* Now works properly when working in grid space mode.

#### reDimension tool

* Resolved incorrect resizing
* Now works properly when working in grid space mode.

#### Reference scale

* Rewritten functionality, now should work on more situations and produce more correct results.
* The behavior has changed, it no longer tries to match the first reference direction with the second, now it will match the first reference line length with the second, keeping the first line direction and proportions.

#### Local isolate

* Now works with Epoly/Edit mesh selected faces when editing

#### Offset tool

* Fixed incorrect undo handling

#### Angle measure

* Fixed wrong angular measurements

#### Divide distance

* Fixed Orthogonal tracking when working with an active grid

#### Measure distance

* Improved orthogonal tracking.
* Fixed behavior working in grid space.

#### General improvements and fixes

* Addressed incompatibility with 3Ds Max versions previous to 2016 (starting from 2014)
* Changed viewport elements colors, added a dialog to change the colors, including some presets.
* improved some performance and some general fixes all over the place.