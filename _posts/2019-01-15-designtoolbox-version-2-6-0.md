---
title: DesignToolBox --- version 2.6.0
date: 2019-01-15T23:05:07+00:00
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

This version addresses some problems found in the previous release and add some new features:

## New features

### Move and align (1D Align tool)

Align objects using two directions from a common base point.

  1. Select a target node. Pick a reference point and a target point to displace the node to a new position. This is a free space operation.
  2. Pick one point to set a reference direction, and a target point to match the original direction to it.
  3. Use Right Click or ESCAPE to end the tool.

### Random transformations tool

Tool packed with several options to randomize and clone nodes.

### Extra tool: Camera/Render batch manager

Tool intended to improve the use of the native batch render tool.Some features: Set render size per camera, add active view to batch render with auto naming and output path, Add multiple cameras with one action.

## Tools improvements and fixes

* Removed some outdated tools.
* Replicator tool:
  * Fixed problem with grouped objects
  * Changed the *groups mode* option to two separate parameters (for grouped nodes only):
    * Use source node entire group. On/Off Setting.
    * Replace target node entire group. On/Off setting.
    * Fixed instancing mode (was broken), added a note explaining this mode only works for un-grouped nodes.
* Local rotation tool:
  * Fixed problem with merged objects
  * Fixed incorrect angle measurement issue
  * Added option to have an additional reference point to offset the rotation angle measurement
* Area and volume measure:
  * Added parameter for units multiply factor.
* UVW Map tools:
  * Improved fitting algorithm.
  * Added option to change axis alignment
* Fixed problem with menu registration
* Fixed MacroScripts errors with 3ds Max 2016
* Fixed installer issues with version 2016 compatibility.