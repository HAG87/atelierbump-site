---
title: About Paramblock2 Error
date: 2018-07-17T01:49:01+00:00
author: Bump
categories:
  - DesignToolBox
tags:
 - Bug
---

This issue happens when trying to open a scene with refGuides objects made in a previous version than the current installed one, preventing from opening the scene.

Unfortunately it can't be corrected, (It will be fixed for next version updates, but it can't be corrected for previous versions).

Workarounds to open the scene:

1. Merge in a new scene everything except any refGuides object
2. If you have DesignToolBox unistalled, open the scenes, remove any invalid refGuides object, re-save.
3. Temporary delete %MAXROOT%/Plugins/refGuidesObject.mse, do option 2.

Apologies for the inconveniences.