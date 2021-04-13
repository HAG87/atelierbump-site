---
title: New tools introduced in v 2.8.0
author: Bump
categories:
  - DesignToolBox
  - 3ds max tools
tags:
  - Update
---

![rg?intpoints](/assets/images/icons/infer_128.png){: .icon-small}

## Reference points Tool

Trace temporary reference lines and place points at intersections. In difference with 3ds Max Helper points, this custom reference points will work with vertex snap.

Line tracing options:

1. Hold *SHIFT* when tracking a line second reference point to enable **ORTHOGONAL** direction override.
2. Hold [SHIFT / ALT] when picking first point of line:
   - *SHIFT*: Orthogonal placing mode
   - *ALT*: Polar placing mode

![dimobj?prev](\assets\images\dimobj_preview.png){: .align-center .drop-shadow}

## Distance history

![distanceDlg](/assets/images/ui/dstDlg.png){: .align-center .drop-shadow}

Selecting one or multiple items in the listbox of "Distance measures" or "Continued distance measures" wil re-display them in the viewport.

### Actions

- **Clear selection:** Deselect all items, turning off their display.
- **Clear values:** Reset the history, clearing all stored measurements.
- **Update:** This action is needed when you take some more measurements, with the dialog open. It will update the lists adding the new entries. It will also update any change in the color or text background/frame changes.

## Dimension objects

Create dimension lines with measure annotation allowing to render the taken dimensions. Standard Spline and text shapes will be created.

### Parameters

- Arrow size: This parameter controls the width and height of the dimension line arrows.
- Thickness: Thickness of the lines geometry.
- Text size: The size of the text label.
- Text thickness: Text labels are created with an *extrusion* modifier. This controls the extrusion amount.
- Text offset: Distance between the dimension line and the text.
- Renderable: Enables geometry rendering in output and viewports. On by default
- Flip text: Sometimes the dimension text can be flipped (right to left) check this to address this.

*Parameter spinners units are in centimeters.*

>Please note that, the text will be oriented left -> right, based on the current view. Expect unpredicted result on orthogonal views.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/U311FeOQrCU" frameborder="0" allowfullscreen></iframe></div>
