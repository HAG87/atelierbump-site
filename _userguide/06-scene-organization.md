---
title: Scene Organization
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/scene-organization
---

## Scene Organization Tools

![unhide](/assets/images/icons/isolate_local_128.png){: .icon-small}

### Local Isolate

Isolate the selected object and set an active work grid in its local coordinates.

>Note: If more than one object is selected, Local Isolate will use the first object in the selection to set the grid.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/rD8cU_DtP4A" frameborder="0" allowfullscreen></iframe></div>

![unhide](/assets/images/icons/incIso_128.png){: .icon-small}

### Incremental Isolation

Re-isolate within the current selection.

![inc-iso](/assets/images/ui/incIso_ui.png){: .align-center .drop-shadow}

The tool opens a floater dialog with three buttons: **"LEVEL UP"**, **"LEVEL DOWN"**, and **"CLOSE"**. Select some nodes and press **LEVEL UP** to isolate them. Press **LEVEL DOWN** to restore the previously isolated nodes or exit isolation mode if no previous level is registered. Closing the tool will exit isolation mode.

![unhide](/assets/images/icons/bulb_usel_128.png){: .icon-small}

### Unhide by Selection

This tool temporarily displays all hidden objects (and hides visible ones). Select the ones you want to unhide and press "Done" on the floater.

![unfroze](/assets/images/icons/bulb_fsel_128.png){: .icon-small}

### Unfreeze by Selection

This tool temporarily displays all frozen objects (and freezes visible ones). Select the ones you want to unfreeze and press "Done" on the floater.

![layer-tools](/assets/images/icons/layIso_128.png){: .icon-small}

### Layer Tools

Layer tools work on the selected node (if any); otherwise, they work in "pick mode."

| **Isolate Layer**       | Isolates the layer(s) of the selected object(s). If nothing is selected, you can pick an object in the viewport to isolate its layer. |
| **Lock Layer**          | Locks the layer of the picked/selected node. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.          |
| **Hide Layer**          | Turns off the layer of the picked node. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.                |
| **Layer Box Mode**      | Sets the Box mode status for the target node's layer. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.            |
| **Layer Backface Cull** | Sets the Backface Cull status for the target node's layer. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.        |
