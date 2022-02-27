---
title: DesignToolBox --- version 2.7.X
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

This version implements some major changes and is recommended for all users to update to the last release. It has some major rewrite of the core functionality to improve performance.

### New Features

* **Reflect tool**: Viewport interactive mirror tool. let's you set a 3d gizmo for freely position mirror planes.
* ColorBar: Added option to adjust colors brightness, saturation and hue.
* Wirecolor adjust: Adjust selection wire colors. brightness, saturation and hue.
* Added "Check for updates" feature.
* Extra tool added: Incremental Isolation.

### Improvements

* Reworked Isolate layer tool: now is faster and supports nested layers correctly
* Replicator:
  * Added option to replace the current selection. With an active nodes selection, press CTRL when activating Replicator tool and pick a source node to replace selection with.
  * Fixed error when replicating groups.
* Eyedropper: Added option to work with current selection (bucket mode). With an active nodes selection, press CTRL when activating one of the tools.
* Chances in layer on/off tool: Now pressing SHIFT when selecting the tool, it will work in ON mode with frozen objects.
* Reworked spatial info tool to make it more useful.
* Changed behavior of "Local isolate":
  * Now its on/off state is unlinked from 3ds max standard isolation. Going out of isolation mode, will keep the reference coordinate system and the tool activated, until you click the tool again, restoring the previous coordinates system.
  * Now, active reference coordinates prior to using the tool, will be restored after.
* Improved algorithm and speed of "Pattern Array".
* Paneling tools had some major rework to make it faster and more reliable.
* MultiMap tool: Separated functionalities in individual dialogs to improve speed.

* Simplified Ribbon panels and reference guides placement options.
* Fixed some critical bugs.
* Fixed behavior of UI dialogs and buttons in toolbars/menus. Now buttons on toolbars, menu and ribbon properly opens-close tools with UI dialogs.
* Improved viewport graphics performance.
* Overall optimizations.
* Updated installer to support multiple 3ds Max versions on a single run.

### Included extras (Tools under "DSTLBX tools" category) as of version 2.7.X

* **File name to Map**:      Change the names of Bitmap Textures to the name of the loaded files.
* **Remove material**:       Remove material from selection
* **ID from camera**:        Set objects ID for current camera view
* **Face Id**:               Select faces w/ same ID
* **Random ID Set**:         Set random IDs
* **Incremental Isolation**: re-Isolate current selection
* **Toggle Trackbar**:       Toggle Timeslider and Trackbar
* **Random Select**:         Select random nodes
* **Align Assets**:          Put nodes in line
* **Camera manager**:        Manage Cameras and render batch views.
* **Replace with Xref**:     Replace selected node with Xref Record.
* **Bitmap multi-loader**:   Create SME Texture Nodes from multiple images with one action. With option to override gamma of loaded images.
* **Map name from file**:    Rename scene texture maps with their correspondent filename.
* **Select nodes without material**

Happy 2019!
