---
title: Pivot and Coordinates Tools
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/pivot-and-coordinates-related-tools
---

## Pivot and Coordinates Tools

![pivot](/assets/images/icons/qpivot_128.png){: .icon-small}

### Pivot Tools

Pivot repositioning commands.

![pivot-tools](/assets/images/ui/pivotUI.png){: .align-center .drop-shadow}

While other tools are available to reposition an object's center pivot, this one groups them in a convenient UI that drops down from the toolbar or ribbon button.

>**LEFT-CLICK** any button to keep the UI open, or **RIGHT-CLICK** to close it instantly.

- CENTER, TOP, BOTTOM: The most common operations, which can be used directly from a dedicated macro.
- Top corners / middle / bottom corners: Box model reference locations. The **A** | **B** | **C** | **D** buttons represent corner points.
- 3 PNT: Position the pivot from three points *(base point > Y axis > X axis)*. Hold <mark>SHIFT</mark> to flip the Z direction.
  - This can also be used to set a Working Pivot.
- FACE: Select an editable poly face and place the pivot on its center, aligned to the face normal.
  - This can also be used to set a Working Pivot.
- RESET PVT: Resets the pivot to its original location.
- RESET XFRM: A shortcut for the built-in reset object Xform.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/OshrLo5QpqA" frameborder="0" allowfullscreen></iframe></div>

#### Pivot to Snap Point

Quickly move an object's pivot to a snapping point. This works with any snap type.
If no object is selected, the tool will reposition the pivot of the object where the snap is displayed (if any).

>This tool needs to be assigned to a keyboard shortcut.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/kQdwEGEm2U8" frameborder="0" allowfullscreen></iframe></div>

![lock-pos](/assets/images/icons/Locks_pos_128.png){: .icon-small}

### Transform Locks

Convenient shortcuts to enable or disable standard transformation locks on the currently selected objects.

- All: Lock/unlock all transformations (Move, Scale, and Rotate).
- Move lock
- Rotation lock
- Scale lock

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/EZ-VBQdTmuE" frameborder="0" allowfullscreen></iframe></div>
