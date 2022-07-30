---
title: First new version (v2.9.5.0) of 2022
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

Mid-year release for 2022. This version adds a couple of tools and fix some major problems encountered. Big thanks to all the users who suggested new features and reported bugs.

### Changes since version 2.9.4.0

#### Fixes

* Mirror tool:
  * Fixed inverted rotation
  * Fixed clone mode not deactivating
* ref Rotate: fix for inverted rotation result
* ref Scale: rewritten to be more reliable. In previous versions, the tool will fail if the reference vectors where perpendicular.
* cameraManager: Unlocked the rollout height. In displays with a resolution of 1080p some buttons where cropped
* Pivot tools:
  * Fixed Working Pivot to Pivot button
  * Added a tooltip for the "Pivot to Face" to express more clearly that only works with editable polys.
* infoTool: Fixed swapped dimension labels.
* The angle measure tool was not displaying the angle correctly
* The area measure tool was not displaying the value and was throwing an error
* Fixed critical functionality problem with refGuides: Intersection points were not working correctly in 3ds Max 2022.
* Fixed configuration option to change refGuide object to standard splines.

#### Added

* Added an option to disable Bounding box snap auto activation in certain tools.
* ref Rotate: If you press CTRL on the last step, the rotation is performed over a copy of the reference object.
* Reference move tool (User requested): Move tool that uses two (origin and destination) reference points.
* Swap position tool (User requested): Select a collection of objects (will follow the selection pick order) and cycle their transform from one to the next.

#### Enhancements

* Tested compatibility with 3ds Max 2023
* reDimension tool has now an option to keep object proportions.
* Photographic composition guides updated to include golden ratio proportions.
* Mirror tool:  Added a cancel button.

### Whats new now

* Tool to measure the angle between two polygons faces.
* Accumulative dimension Measure. Useful to visualize the length of a non linear path, or to get the perimeter of a shape.

### Enhancements

* Improved refRotation tool.
* General optimizations.

### Fixes

* Material Replacer tool was not working
* Fixed the configuration, some settings where not saved

### Future changes

Considering that this will be the last release to support legacy 3ds max versions (prior to 2018) in order to simplify maintenance and optimize development.
