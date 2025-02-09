---
title: Pivot and coordinates related tools
excerpt: 'User guide containing tools description and how to use.'
permalink: /docs/userguide/
---

## Pivot and coordinates related tools

![pivot](/assets/images/icons/qpivot_128.png){: .icon-small}

### Pivot tools

Pivot repositioning commands

![pivot-tools](/assets/images/ui/pivotUI.png){: .align-center .drop-shadow}

While there already are tools available to reposition an object's center pivot, this one groups them in a convenient UI, that pops down from the toolbar or ribbon button.

>**LEFT CLICK** on any button to keep the UI open, or **RIGHT CLICK** to instantly close it.

- CENTER, TOP, BOTTOM: Most common operations, can be used directly from a dedicated macro.
- Top corners / middle / bottom corners: Box model reference locations. **A** | **B** | **C** | **D** buttons represents a corner point.
- 3 PNT: Position pivot from three points *(base point > Y axis > X axis)* keep <mark>SHIFT</mark> pressed to flip Z direction.
  - This also can be used to set a Working Pivot.
- FACE: Select an editable poly face and puts the pivot on its center, aligned to the face normal.
  - This also can be used to set a Working Pivot.
- RESET PVT: Resets the pivot to its original location.
- RESET XFRM: Shortcut for the built in reset object Xform.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/OshrLo5QpqA" frameborder="0" allowfullscreen></iframe></div>

#### Pivot to Snap point

Quickly move an object's pivot to a snapping point. Works with any snap type.
If no object is selected, the tool will reposition the pivot of the object where the snap is displayed (if any)

>This tool needs to be assigned to a keyboard shortcut!

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/kQdwEGEm2U8" frameborder="0" allowfullscreen></iframe></div>

![lock-pos](/assets/images/icons/Locks_pos_128.png){: .icon-small}

### Transform locks

Convenient shortcuts to enable / disable standard transformations locks on the current selected objects.

- All: Lock / unlock all transformations (Move, scale and rotate)
- Move lock
- Rotation lock
- Scale lock

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/EZ-VBQdTmuE" frameborder="0" allowfullscreen></iframe></div>

---
