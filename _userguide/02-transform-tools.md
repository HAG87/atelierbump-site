---
title: Transform Tools
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/transform-tools
---

## Transform Tools

![ref-rotation](/assets/images/icons/rotate_128.png){: .icon-small}

### Reference Rotation

Rotates an object about a direction axis and a reference point.

First, select the object you want to rotate.

1. Pick the base point, which will act as the rotation center.
2. Pick a point for the rotation axis.
3. Pick a reference point for the "rotate from" line.
4. Move the mouse to set the rotation angle and direction. Snap to a point or press <mark>SHIFT</mark> to lock angle steps.

>Hold the CTRL key when performing the last step (rotation), and the tool will rotate an instance of the object instead.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/jNH5CqEVkm4" frameborder="0" allowfullscreen></iframe></div>

![loc-rotation](/assets/images/icons/QLrotate_128.png){: .icon-small}

### Local Reference Rotation

A 2-point CAD-like rotation. Rotates an object about a local coordinate direction axis and a reference direction.

1. Pick the base point.
2. Pick the rotate-from point.
3. Change the XYZ axis while tracing the rotate-from point:
    - X axis: <mark>SHIFT</mark>
    - Z axis: Default
4. Track the rotation angle and direction. Press <mark>SHIFT</mark> to restrict angle steps.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/7yt8PFlBymI" frameborder="0" allowfullscreen></iframe></div>

![ref-scale](/assets/images/icons/scale_128.png){: .icon-small}

### Reference Scale

*Used to scale an object with a reference length to stretch and a target length; works as a 4-point scale method.*

\> First, select the object to scale.

The tool works by picking two reference distances: one representing a reference length to stretch up or down, and a second one representing the new distance.

1. Pick the Base point. This point will act as the base for the operation and also marks the original length's start.
2. Pick the second point for the original length line. Note that the direction of the line will be the direction of the operation.
3. Pick the Base point for the reference length.
4. Pick the End point for the reference length.

- Pressing <mark>SHIFT</mark> while tracking the second points will restrict the lines to **Orthogonal space**.
- Pressing <mark>SHIFT</mark> when activating the tool will keep the object's proportions for the scaling operation.

> - The reference scale tool has three modes:
> - **Normal:** The operation is done in world space.
> - **In context:** The operation is done in local coordinates.
> - **Xform:** Instead of a direct transformation, it applies an Xform modifier to the target object.

![mirror-tool](/assets/images/icons/Reflect_128.png){: .icon-small}

### Mirror Tool

An interactive mirror tool with complex mirror plane alignment.

1. Start by positioning the reference 3-plane gizmo by picking a center point for the mirror operation.
2. Orient the gizmo with points for direction, yaw, pitch, roll, and offset angle.
   1. Gizmo alignment: Set the gizmo's start position by picking a direction vector. Use <mark>SHIFT</mark> for orthogonal tracking, and <mark>SHIFT+CTRL</mark> to lock the gizmo and track the Z-axis.
   2. YAW angle: (or XY plane): Use <mark>RIGHT-CLICK</mark> to skip, <mark>SHIFT</mark> for angle snapping and <mark>ALT</mark> to invert direction.
   3. Pitch (YZ plane, along X-axis) and Roll (XZ plane, along Y-axis): Use <mark>RIGHT-CLICK</mark> to skip, <mark>CTRL</mark> to change from Pitch to Roll, <mark>SHIFT</mark> for angle snapping, and <mark>ALT</mark> to invert the direction.
3. Set or skip the offset angle.
4. Finally, select the objects and use the options in the dialog to enable or disable the mirror axes or planes.

![mirror-tool1](/assets/images/ui/mirrortool_1.png){: .align-center .drop-shadow}

![mirror-tool2](/assets/images/ui/mirrortool_2.png){: .align-center .drop-shadow}

![move-align](/assets/images/icons/QrotateF_128.png){: .icon-small}

### Move and Align (1D Align Tool)

Align objects using two directions from a common base point.

1. Select a target node. Pick a reference point and a target point to displace the node to a new position. This is a free-space operation.
2. Pick one point to set a reference direction, and a target point to match the original direction to it.
3. Use <mark>Right-Click</mark> or <mark>ESCAPE</mark> to end the tool.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/4qdFyJbd9n4" frameborder="0" allowfullscreen></iframe></div>

![points-align](/assets/images/icons/3ptAlign_128.png){: .icon-small}

### 3-Point Align

Relocate a node from three pairs of points, from an origin position to a target position.

1. Select the node you want to reposition
2. Pick first (A1) reference position and match it with a destination position (A2). "A" is the base point for the transformation
3. Pick second (B1) reference position and match it with a destination position (B2)
4. Pick first (C1) reference position and match it with a destination position (D2)
      - An axis gizmo will be displayed in the reference and start locations representing the origin (ABC1) and result (ABC2) coordinate systems.
5. <mark>Left Click</mark> once more to invert the transformation, or exit the tool with <mark>Right Click</mark>

![redimension](/assets/images/icons/Qdim_128.png){: .icon-small}

### reDimension

*Real world units scaling in a direction. Change object's height, length or width (or proportional length-width etc..) to a desire dimension.*

1. Select the object and pick a base reference point.
2. Pick reference distance / direction end.
    - Pressing <mark>SHIFT</mark> while tracking second point will restrict the direction to <mark>orthogonal space*</mark>.
3. Set new dimension on the Dialog UI.
    - Incremental option will add / subtract the value form the former distance.

#### Floater dialog

![redimension](/assets/images/ui/reDim.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/eQ6nggsDUfw" frameborder="0" allowfullscreen></iframe></div>

![offset](/assets/images/icons/offset_128.png){: .icon-small}

### Position Offset

Precise referential movement from a target point, and specified direction

1. Select objects to move.
2. Pick an Origin point for the movement trajectory.
3. Pick an End point.
4. A dialog will open to set the distance. A reference mark will display the displacement from the Base point along the trajectory line. X Y and Z spinners stets the distance by correlated axis increments; enabling "offset mode" will shift the position of the reference mark from the trajectory

> - Incremental mode will change the target point to the Origin point instead of the default End point.
> - You can use this tool in editable poly mode, selecting the sub objects to be moved first.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/L1Bu_d280ME" frameborder="0" allowfullscreen></iframe></div>

![refMove](/assets/images/icons/refMove_128.png){: .icon-small}

### Reference move

CAD-like Move tool that uses two (origin and destination) reference points.

1. Select the objects you want to move.
2. Start the tool; Pick an origin ref. point (be sure to enable snaps)
3. Pick a destination point to displace the origin point to.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZCKKdEMK9a8" frameborder="0" allowfullscreen></iframe></div>

![swap-transform](/assets/images/icons/swapTr_128.png){: .icon-small}

### Swap transform

Select a collection of objects (will follow the selection pick order) and cycle their transform from one to the next.

![random-swap](/assets/images/icons/RndSwap_128.png){: .icon-small}

### Random swap transform

Randomly swap position, rotation and scale between the selected objects.

![random-swap-ui](/assets/images/ui/random-swap.png){: .align-center .drop-shadow}

#### Floater dialog

![offset](/assets/images/ui/offset_dlg.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/A4xlntUFo2k" frameborder="0" allowfullscreen></iframe></div>

### Random transform

Tool packed with several options to randomize and clone nodes.

- Can be used to directly modify the node transform, add an XForm modifier, or transform applied modifiers gizmo's.
- Set constant, by range or a scripted list of values to apply the transform.
- Apply the transform in Grid, Local, or Reference coordinate system. To use the later mode, pick a reference node first.

![random-transform](/assets/images/ui/rndTrnsform.png){: .align-center .drop-shadow}

### Arrange objects

![arrange-Int](/assets/images/icons/arrangeInt_128.png){: .icon-small}

#### Arrange objects (interactive)

Distribute or redistribute objects (equally spaced) on a linear direction.
*This variant of the tool tracks the objects new position's with marks in the viewport*

1. Select the object set to rearrange.
2. Pick the direction line START POINT
3. Track the end of the line. Before picking the END POINT to finish the operation, use these options:

> - Press <mark>SHIFT</mark> to conform to the underlying surfaces
> - Press <mark>SHIFT</mark> to orient to the underlying surfaces

![arrange-RT](/assets/images/icons/arrangeRT_128.png){: .icon-small}

#### Arrange objects (real-time)

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/1xn46xp3xvc" frameborder="0" allowfullscreen></iframe></div>

Distribute or redistribute objects (equally spaced) on a linear direction.
*This variant of the tool tracks the objects new position's in real time. it could be slow with complex geometry*

1. Select the object set to rearrange.
2. Pick the direction line START POINT
3. Track the end of the line. Before picking the END POINT to finish the operation, use these options:

> - Press <mark>SHIFT</mark> to conform to the underlying surfaces
> - Press <mark>CONTROL</mark> to orient to the underlying surfaces

![arrange-AB](/assets/images/icons/arrangeAB_128.png){: .icon-small}

#### Arrange objects (start-end objects)

Distribute or redistribute objects (equally spaced) on a linear direction.
Direction and length of the distribution determined by the position of two objects:

1. Select the START OBJECT
2. Select the END OBJECT
3. Select the objects to distribute between them.

> Press the TOOL BUTTON+<mark>SHIFT</mark> to conform and align the objects to the underlying surfaces.

![drp-object](/assets/images/icons/dropObj_128.png){: .icon-small}

#### Drop objects

Drop objects on underlay surfaces.

> Press <mark>SHIFT</mark> when activating the tool to align the objects to the surface form.
