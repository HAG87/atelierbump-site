---
title: Scene organization
excerpt: 'User guide containing tools description and how to use.'
permalink: /userguide/scene-organization
---

## Scene organization tools

![unhide](/assets/images/icons/isolate_local_128.png){: .icon-small}

### Local isolate

Isolate / unisolate selected object and set an active work grid in its local coordinates.

>Note: If more than one object is selected, Local isolate will use the first object in the selection to set the grid.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/rD8cU_DtP4A" frameborder="0" allowfullscreen></iframe></div>

![unhide](/assets/images/icons/incIso_128.png){: .icon-small}

### Incremental isolation

re-Isolate within current the selection.

![inc-iso](/assets/images/ui/incIso_ui.png){: .align-center .drop-shadow}

The tool will open a floater dialog with three buttons. **"LEVEL UP"**, **"LEVEL DOWN"** and **"CLOSE"**. Select some nodes and press **LEVEL UP** to isolate them. Press **LEVEL DOWN** to restore the previous isolated nodes, or exit isolation mode if no previous level is registered. Closing the tool will exit isolation mode.

![unhide](/assets/images/icons/bulb_usel_128.png){: .icon-small}

### unHide by selection

This tool will temporally display all hidden objects (and hide visible ones). Select the ones you want to unhide and Press "Done" on the floater.

![unfroze](/assets/images/icons/bulb_fsel_128.png){: .icon-small}

### unFreeze by selection

This tool will temporally display all frozen objects (and freeze visible ones). Select the ones you want to unfreeze and Press "Done" on the floater.

![layer-tools](/assets/images/icons/layIso_128.png){: .icon-small}

### Layer tools

Layer tools will work on the selected node (if any) otherwise they will work in "pick mode".

| **Isolate layer**       | Isolate-Unisolate selected object/s layer/s. If nothing is selected, you can pick an object in viewport and isolate the respective layer. |
| **Lock layer**          | Locks the layer of the picked/selected node. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.          |
| **Hide layer**          | Turn off the layer of the picked node. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.                |
| **Layer box mode**      | Set Box mode status for target node layer. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.            |
| **Layer backface cull** | Set BackFaceCull status for target node layer. Press <mark>SHIFT</mark> when activating the tool to pick frozen nodes/layers.        |

---
