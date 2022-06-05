---
title: DesignToolBox Reference
excerpt: 'Userguide containing tools description and how to use.'
permalink: /docs/userguide/
# toc: true
sidebar:
  title: "Index"
  nav: sidebar-userguide
---

## refGuides, spatial reference helpers

*refGuides plug-in is intended to improve and speed up architecture modeling, or any case where precise measurements are needed.
It allows to create construction guides, for accurately position and model objects. This guides can act as rulers, displaying custom measurement units in the viewport.*

The main functionality of this tool set consist in the creation of two types of reference objects : **linear guides** and **protractors**.

Another feature is the ability to place **intersection marks** where linear guides intersects in space. Use this feature with the **Intersection points** option, or holding the **<mark>ALT</mark>** key during placement.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ewg1prguQE0" frameborder="0" allowfullscreen></iframe></div>

![rg?tool](/assets/images/icons/rg_B_128.png){: .icon-small}

### Guides placement

Three creation modes are available:

#### Free space mode

This mode place a guide by determining a direction from two points.

1. Pick a base reference point.
2. Pick a second reference point determining the direction of the guide.

>Pressing **<mark>SHIFT</mark>** will lock the tracking to orthogonal coordinates.

#### Orthogonal space mode

1. Pick a reference point, it will act as a center of the orthogonal space.
2. Move the mouse around to change the direction or snap to a point.

>Press **<mark>CTRL</mark>** during axis selection for Z axis restriction.

#### Polar space mode

1. Pick base point. A circular gizmo displays in the viewports, representing a construction plane.
2. Rotation point 1: Pick Z axis gizmo rotation reference point.
3. Rotation point 1: X or Y axis rotation points.
    - Press **<mark>ALT</mark>** while tracking any gizmo rotation to snap angle values.
    - Press **<mark>SHIFT</mark>** to change direction, **<mark>CTRL</mark>** to change axis.
4. Rotate the mouse around to select the angular component.

> - "Polar mode angle" option sets the angular increment. It's accessible from the ribbon, the UI creation mode or the Options dialog.
> - Press **<mark>ALT</mark>** during last placement tracking to override intersection points ON/OFF setting.
> - The tools have a "continued creation" mode for placing more than one guide in one action.

![rGUImode](/assets/images/ui/rgUImode.png){: .align-center .drop-shadow}

![rg?protractor](/assets/images/icons/prot_128.png){: .icon-small}

#### Line guide

##### Intersection points

This feature allows to place reference point, acting as a snapping mark, where the reference guide lines intersects in space.

##### Guides parameters

Line guides have two parameters: Units and Extension.

- **Units provide** a subdivision scale for the guide. Used to snap objects to, or as a measure ruler.
- **Extension** determines how long the guide will be.

The UI option for the creation modes shows a floater with the general settings for the guides, protractor placement and intersection points option. Right clicking on the dialog pops up a context menu with more options.

#### Protractor guide

Tool for displaying and snapping angular values. The same placing methods described for the reference line tool are available for the protractor, a exception of the UI mode, since its included in the guide line UI.

![prev?prot_128](/assets/images/ui/preprot.png){: .align-center .drop-shadow}

![rg?intpoints](/assets/images/icons/infer_128.png){: .icon-small}

#### Reference points Tool

Trace temporary reference lines and place points at intersections. In difference with 3ds Max Helper points, this custom reference points will work with vertex snap.

Line tracing options:

1. Hold **<mark>SHIFT</mark>** when tracking a line second reference point to enable **ORTHOGONAL** direction override.
2. Hold [**<mark>SHIFT</mark>** / **<mark>ALT</mark>**] when picking first point of line:
   - *SHIFT*: Orthogonal placing mode
   - *ALT*: Polar placing mode

![rg?liveview](/assets/images/icons/rg_inf2_128.png){: .icon-small}

#### Viewport information tools

Use the guides as a ruler display in viewport unit steps

- Live info: Display units for the current selected guide.
- Live info+: Display units for all the guides in the current view (skips hidden or isolated guides).

![rg?more](/assets/images/icons/rg_UI_128.png){: .icon-small}

#### refGuides Objects

When using any of the "refGuides" tools, a custom Shape object is created for / Lines / Protractors / intersection points / with options available  from the command panel for tunning their settings: Line extension, units scale; Protractor angle marks and radius; Intersection point display style and size.[*]

#### refGuides additional tools

- Delete all guides in scene.
- Lock guides after creation.

#### Options dialog

Provides settings to change the guides color, layer name, intersection points behavior and object type.

![rGoptions](/assets/images/ui/rGoptions.png){: .align-center .drop-shadow}

> [*] Custom Object mode (On by default) is only available for 3Ds Max 2016 and up.
> Smart intersection mode will consider any planar shape on the scene as a guide. While resource consuming, it can place intersection points on imported CAD drawings. for example.

![dslogo](/assets/images/icons/designtoolbox.png){: .icon-small}

## Transform tools

![ref?rot](/assets/images/icons/rotate_128.png){: .icon-small}

### reference Rotation

Rotates an object about a direction axis and a reference point

First, select the object you want to rotate.

1. Pick base point. this point will act as rotation center.
2. Pick point for rotation axis.
3. Rotate from line (Pick reference point).
4. Move mouse to set rotation angle and direction. Snap to point or press **<mark>SHIFT</mark>** to lock angle steps.

>Reference rotation has two alternative modes:
>**Default mode:** The rotation will take place in a temporary coordinate system, defined by a work plane.
>**Free mode:** Rotation is not restricted to a temporary coordinate system.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/jNH5CqEVkm4" frameborder="0" allowfullscreen></iframe></div>

![loc?rot](/assets/images/icons/QLrotate_128.png){: .icon-small}

### local reference Rotation

2-point CAD-like rotation. Rotates an object about a local coordinates direction axis and a reference direction

1. Pick base point.
2. Pick rotate-from point.
3. change XYZ axis while tracing rotate-from point:
    - X axis: **<mark>SHIFT</mark>**</mark>
    - Y axis: **<mark>CTRL</mark>**
    - Z axis: Default
4. Track rotation angle and direction. Press **<mark>SHIFT</mark>** to restrict angle steps.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/7yt8PFlBymI" frameborder="0" allowfullscreen></iframe></div>

![ref?scale](/assets/images/icons/scale_128.png){: .icon-small}

### reference Scale

*Used to scale an object with a reference length to stretch and a target length; works as a 4-point scale method.*

\> First, select the object to scale.

The tool works picking two reference distances, one representing a reference length to stretch up or down, and a second one representing the new distance.

1. Pick Base point. This point will act as base for the operation, also marks the original length start.
2. Pick second point for the original length line. Note that the direction of the line will be the direction of the operation.
3. pick Base point for the reference length.
4. pick End point for the reference length.

- Pressing **<mark>SHIFT</mark>** while tracking second points will restrict the lines to <mark>Orthogonal space*</mark>.
- Pressing **<mark>SHIFT</mark>** When activating the tool will keep the objects proportion for the scaling operation.

> - The reference scale tools has three modes:
> - **Normal:** Operation done in world space.
> - **In context:** Operation done in local coordinates.
> - **Xform:** Instead of direct transformation, it applies a Xform modifier to the target object.

![mirrortool](/assets/images/icons/Reflect_128.png){: .icon-small}

### Mirror tool

Position the 3-plane gizmo picking a center point for the mirror operation.
Orient the gizmo with points for direction, yaw, Pitch, Roll and offset angle.
Select the objects and use the options in the dialog.

![mirrortool1](/assets/images/ui/mirrortool_1.png){: .align-center .drop-shadow}

![mirrortool2](/assets/images/ui/mirrortool_2.png){: .align-center .drop-shadow}

![movealign](/assets/images/icons/QrotateF_128.png){: .icon-small}

### Move and align (1D Align tool)

Align objects using two directions from a common base point.

1. Select a target node. Pick a reference point and a target point to displace the node to a new position. This is a free space operation.
2. Pick one point to set a reference direction, and a target point to match the original direction to it.
3. Use **<mark>Right Click</mark>** or **<mark>ESCAPE</mark>** to end the tool.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/4qdFyJbd9n4" frameborder="0" allowfullscreen></iframe></div>

![pointsalign](/assets/images/icons/3ptAlign_128.png){: .icon-small}

### 3 points align

Relocate a node from three pairs of points, from an origin position to a target position.

1. Select the node you want to reposition
2. Pick first (A1) reference position and match it with a destination position (A2). "A" is the base point for the transformation
3. Pick second (B1) reference position and match it with a destination position (B2)
4. Pick first (C1) reference position and match it with a destination position (D2)
      - An axis gizmo will be displayed in the reference and start locations representing the origin (ABC1) and result (ABC2) coordinate systems.
5. **<mark>Left Click</mark>** once more to invert the transformation, or exit the tool with **<mark>Right Click</mark>**

![redimension](/assets/images/icons/Qdim_128.png){: .icon-small}

### reDimension

*Real world units scaling in a direction. Change object's height, length or width (or proportional length-width etc..) to a desire dimension.*

1. Select the object and pick a base reference point.
2. Pick reference distance / direction end.
    - Pressing **<mark>SHIFT</mark>** while tracking second point will restrict the direction to <mark>orthogonal space*</mark>.
3. Set new dimension on the Dialog UI.
    - Incremental option will add / subtract the value form the former distance.

#### Floater dialog

![redimension](/assets/images/ui/reDim.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/eQ6nggsDUfw" frameborder="0" allowfullscreen></iframe></div>

![offset](/assets/images/icons/offset_128.png){: .icon-small}

### Offset (reference move)

Precise referential movement from a target point, and specified direction

1. Select objects to move.
2. Pick an Origin point for the movement trajectory.
3. Pick an End point.
4. A dialog will open to set the distance. A reference mark will display the displacement from the Base point along the trajectory line. X Y and Z spinners stets the distance by correlated axis increments; enabling "offset mode" will shift the position of the reference mark from the trajectory

> - Incremental mode will change the target point to the Origin point instead of the default End point.
> - You can use this tool in editable poly mode, selecting the sub objects to be moved first.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/L1Bu_d280ME" frameborder="0" allowfullscreen></iframe></div>

### Reference move

 CAD-like Move tool that uses two (origin and destination) reference points.

1. Select the objects you want to move.
2. Start the tool; Pick an origin ref. point (be sure to enable snaps)
3. Pick a destination point to displace the origin point to.

### Swap transform

Select a collection of objects (will follow the selection pick order) and cycle their transform from one to the next.

#### Floater dialog

![offset](/assets/images/ui/offset_dlg.png){: .align-center .drop-shadow}

### Random transform

Tool packed with several options to randomize and clone nodes.

- Can be used to directly modify the node transform, add a XForm modifier, or transform applied modifiers gizmo's.
- Set constant, by range or a scripted list of values to apply the transform.
- Apply the transform in Grid, Local or a Reference coordinate system. To use the later mode, pick a reference node first.

![randomtransform](/assets/images/ui/rndTrnsform.png){: .align-center .drop-shadow}

### Arrange objects

![arrangeInt](/assets/images/icons/arrangeInt_128.png){: .icon-small}

#### Arrange objects (interactive)

Distribute or redistribute objects (equally spaced) on a linear direction.
*This variant of the tool tracks the objects new position's with marks in the viewport*

1. Select the object set to rearrange.
2. Pick the direction line START POINT
3. Track the end of the line. Before picking the END POINT to finish the operation, use these options:

> - Press **<mark>SHIFT</mark>** to conform to the underlying surfaces
> - Press **<mark>SHIFT</mark>** to orient to the underlying surfaces

![arrangeRT](/assets/images/icons/arrangeRT_128.png){: .icon-small}

#### Arrange objects (real-time)

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/1xn46xp3xvc" frameborder="0" allowfullscreen></iframe></div>

Distribute or redistribute objects (equally spaced) on a linear direction.
*This variant of the tool tracks the objects new position's in real time. it could be slow with complex geometry*

1. Select the object set to rearrange.
2. Pick the direction line START POINT
3. Track the end of the line. Before picking the END POINT to finish the operation, use these options:

> - Press **<mark>SHIFT</mark>** to conform to the underlying surfaces
> - Press **<mark>CONTROL</mark>** to orient to the underlying surfaces

![arrangeAB](/assets/images/icons/arrangeAB_128.png){: .icon-small}

#### Arrange objects (start-end objects)

Distribute or redistribute objects (equally spaced) on a linear direction.
Direction and length of the distribution determined by the position of two objects:

1. Select the START OBJECT
2. Select the END OBJECT
3. Select the objects to distribute between them.

> Press the TOOL BUTTON+**<mark>SHIFT</mark>** to conform and align the objects to the underlying surfaces.

![arrangeAB](/assets/images/icons/dropObj_128.png){: .icon-small}

#### Drop objects

Drop objects on underlay surfaces.

> Press **<mark>SHIFT</mark>** when activating the tool to align the objects to the surface form.

---

## Measure tools

![divide](/assets/images/icons/sdivide_128.png){: .icon-small}

### Divide distance

*Set reference points to divide a distance*

1. Pick distance start point.
2. Pick distance second point.
3. Move the mouse towards the start or end point to set segments amount.
    - Press **<mark>SHIFT</mark>** while tracking second point for orthogonal mode.

> You can use the **Divide distance | input mode** tool to type the subdivision steps instead of mouse tracking.
>**Note:**
> Orthogonal tracking (**<mark>SHIFT</mark>**) has a axis-lock feature: Keep **<mark>SHIFT</mark>** pressed, and having vertex snap activated, move the cursor to a vertex and press **<mark>CTRL</mark>**, the tracking will be **restricted to the nearest axis**, and then you can track any point, the line will lock to that specific axis. This feature works in all the tools that has a orthogonal tracking feature.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/VtAfxGZs4gU" frameborder="0" allowfullscreen></iframe></div>

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/pzMIqMH5PXY" frameborder="0" allowfullscreen></iframe></div>

![distance](/assets/images/icons/Qmeasure_128.png){: .icon-small}

### Distance

*Live visual feedback measure tape.*

1. Pick a start point.
2. Track distance.
3. Pick an end point to measure again. A tape for each measurement will remain displayed until tool exit.
    - After picking the first point, press **<mark>SHIFT</mark>** to restrict the tape to XYZ axes (orthogonal mode).

The result of the last measure will be copied to the clipboard and each measure is traced to the listener after finishing using the tool.

> The alternate tool **Distance | continuous** displays one concatenated tape with all the measures.

![msdlg](/assets/images/icons/dimobj_128.png){: .icon-small}

### Working with measurements: Distance history

The "Distance history" dialog will store the taken measures with the **"measure distance"** or **"continued distance"** tools, allowing to re-display them and customize the appearance. You can also, create (standard-spline based) dimension objects to display and render the taken measurements.
Both functionalities are integrated in the dialog UI of the **"Distance history"** tool.

#### Distance history

![distanceDlg](/assets/images/ui/dstDlg.png){: .align-center .drop-shadow}

Selecting one or multiple items in the listbox of "Distance measures" or "Continued distance measures" wil re-display them in the viewport.

##### Actions

- **Clear selection:** Deselect all items, turning off their display.
- **Clear values:** Reset the history, clearing all stored measurements.
- **Update:** This action is needed when you take some more measurements, with the dialog open. It will update the lists adding the new entries. It will also update any change in the color or text background/frame changes.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/lRFG3Da7Oag" frameborder="0" allowfullscreen></iframe></div>

##### Dimension objects

Create dimension lines with measure annotation allowing to render the taken dimensions. Standard Spline and text shapes will be created.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/U311FeOQrCU" frameborder="0" allowfullscreen></iframe></div>

###### Parameters

- Arrow size: This parameter controls the width and height of the dimension line arrows.
- Thickness: Thickness of the lines geometry.
- Text size: The size of the text label.
- Text thickness: Text labels are created with an *extrusion* modifier. This controls the extrusion amount.
- Text offset: Distance between the dimension line and the text.
- Renderable: Enables geometry rendering in output and viewports. On by default
- Flip text: Sometimes the dimension text can be flipped (right to left) check this to address this.

*Parameter spinners units are in centimeters.*

>Please note that, the text will be oriented left -> right, based on the current view. Expect unpredicted result on orthogonal views.

![dimobj?prev](\assets\images\dimobj_preview.png){: .align-center .drop-shadow}

![angle](/assets/images/icons/Qangle_128.png){: .icon-small}

### Angle

*Measure any angle by 3 points.*

1. Pick angle base point.
2. Pick first reference point to mark a direction vector. The tool will track the angle comprehended between the first direction vector and the current mouse position or vertex snap (with center at the base point).
3. Pick second reference point to end.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/GobuvzrpsbI" frameborder="0" allowfullscreen></iframe></div>

![area](/assets/images/icons/Qarea_128.png){: .icon-small}

### Area

*Pick points to draw an a closed polygonal region and measure its area.*

1. Start picking points to draw an enclosed polyline.
2. Press right click to finish the measure. The result is traced to the listener.

>Orthogonal mode is available for the measure tool, press **<mark>SHIFT</mark>** between point picks.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/tn2Gt9ekX-c" frameborder="0" allowfullscreen></iframe></div>

![volume](/assets/images/icons/Qvolume_128.png){: .icon-small}

### Volume

*Cubic volume measure tool. It's not restricted to selected object mass, instead is measured as an empty space container box.*

Pick two points representing the start and end point of a box diagonal line. The measured volume of the box will be traced to the listener.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/voUivMGAsqM" frameborder="0" allowfullscreen></iframe></div>

### Home grid size

Displays a reference gizmo with 3 rules towards the XYZ axes indicating the Active Grid spacing units.

### Spatial Info

Displays information about an object's dimension and transformation

![spatialInfo](/assets/images/ui/spatialinfo_128.png)

---

## Pivot and coordinates related tools

![pivot](/assets/images/icons/qpivot_128.png){: .icon-small}

### Pivot tools

Pivot repositioning commands

![pivot_tools](/assets/images/ui/pivotUI.png){: .align-center .drop-shadow}

While there already are tools available to reposition an object's center pivot, this one groups them in a convenient UI, that pops down from the toolbar or ribbon button.

>**LEFT CLICK** on any button to keep the UI open, or **RIGHT CLICK** to instantly close it.

- CENTER, TOP, BOTTOM: Most common operations, can be used directly from a dedicated macro.
- Top corners / middle / bottom corners: Box model reference locations. **A** | **B** | **C** | **D** buttons represents a corner point.
- 3 PNT: Position pivot from three points *(base point > Y axis > X axis)* keep **<mark>SHIFT</mark>** pressed to flip Z direction.
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

![lockpos](/assets/images/icons/Locks_pos_128.png){: .icon-small}

### Transform locks

Convenient shortcuts to enable / disable standard transformations locks on the current selected objects.

- All: Lock / unlock all transformations (Move, scale and rotate)
- Move lock
- Rotation lock
- Scale lock

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/EZ-VBQdTmuE" frameborder="0" allowfullscreen></iframe></div>

---

## Scene organization tools

### Local isolate

Isolate / unisolate selected object and set an active work grid with it’s local coordinates.

>Note: If more than one object is selected, Local isolate will use the first object in the selection to set the grid.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/rD8cU_DtP4A" frameborder="0" allowfullscreen></iframe></div>

### Incremental isolation

re-Isolate within current selection.

![inciso](/assets/images/ui/incIso_ui.png){: .align-center .drop-shadow}

The tool will open a floater dialog with three buttons. **"LEVEL UP"**, **"LEVEL DOWN"** and **"CLOSE"**. Select some nodes and press **LEVEL UP** to isolate them. Press **LEVEL DOWN** to restore the previous isolated nodes, or exit isolation mode if no previous level is registered. Closing the tool will exit isolation mode.

![unhide](/assets/images/icons/bulb_usel_128.png){: .icon-small}

### unHide by selection

This tool will temporally display all hidden objects (and hide visible ones). Select the ones you want to unhide and Press "Done" on the floater.

![unfroze](/assets/images/icons/bulb_fsel_128.png){: .icon-small}

### unFreeze by selection

This tool will temporally display all frozen objects (and freeze visible ones). Select the ones you want to unfreeze and Press "Done" on the floater.

![laytools](/assets/images/icons/layIso_128.png){: .icon-small}

### Layer tools

Layer tools will work on the selected node (if any) otherwise they will work in "pick mode".

| **Isolate layer**       | Isolate-Unisolate selected object/s layer/s. If nothing is selected, you can pick an object in viewport and isolate the respective layer. |
| **Lock layer**          | Locks the layer of the picked/selected node. Press **<mark>SHIFT</mark>** when activating the tool to pick frozen nodes/layers.          |
| **Hide layer**          | Turn off the layer of the picked node. Press **<mark>SHIFT</mark>** when activating the tool to pick frozen nodes/layers.                |
| **Layer box mode**      | Set Box mode status for target node layer. Press **<mark>SHIFT</mark>** when activating the tool to pick frozen nodes/layers.            |
| **Layer backface cull** | Set BackFaceCull status for target node layer. Press **<mark>SHIFT</mark>** when activating the tool to pick frozen nodes/layers.        |

---

## Eyedropper tools

![replicator](/assets/images/icons/eyedrop_1_128.png){: .icon-small}

### Replicator

*Replace any node with an instance or reference of another source node.*

1. Pick source node.
2. Pick nodes to be replaced.
    - DEFAULT: Instance replacement
    - **<mark>SHIFT</mark>** while picking objects will create a **reference**.

> - By Default, replicator will keep the original node material and transformation. to replace the transformation, activate the checkbox in the ribbon or the check button macro. *Note that the original position is always maintained.*
> - Multitarget toggle will disable multiple targets.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/8xTYApZCjVA" frameborder="0" allowfullscreen></iframe></div>

![eyedropper](/assets/images/icons/eyedrop_2_128.png){: .icon-small}

### Eyedropper

Properties, modifiers and appearance copy tool, from a source object to a target object or objects*

Note that, Eyedropper will replace any matching or similar property, regardless of the node class. I.E: You can copy the diameter of a circle shape to a sphere object, and so on. UVWmap copy will copy applied UVW modifiers and attempt to copy direct mesh mapping, so if a editable poly or mesh is collapsed, there is a chance their mapping coordinates will be copied.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/LNEMMZjTgIQ" frameborder="0" allowfullscreen></iframe></div>

#### MultiTool

Will copy the active settings on the _**filters**_ dialog:

![eyedrop?filters](/assets/images/ui/eyedropper_floater.png){: .align-center .drop-shadow}

#### Eyedropper modes

Additional available modes:

| Visual appearance                |
| Material                         |
| non-Topology dependent modifiers |
| Standard transformations         |
| UVW mapping                      |

---

## Object related tools

![1darray](/assets/images/icons/1d_array_128.png){: .icon-small}

### 1D Array (Clone Between)

Set subdivision marks between two points, and place a clone on each mark

1. Pick distance start point.
2. Pick distance second point.
3. Move the mouse towards the start or end point to set segments amount.
    - Press **<mark>SHIFT</mark>** while tracking second point for orthogonal mode.
4. Pick the object to clone when prompted.

>**Note:**
> Orthogonal tracking (**<mark>SHIFT</mark>**) has a axis-lock feature: Keep **<mark>SHIFT</mark>** pressed, and having vertex snap activated, move the cursor to a vertex and press **<mark>CTRL</mark>**, the tracking will be **restricted to the nearest axis**, and then you can track any point, the line will lock to that specific axis. This feature works in all the tools that has a orthogonal tracking feature.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/pzMIqMH5PXY" frameborder="0" allowfullscreen></iframe></div>

![interactive?array](/assets/images/icons/2d_array_128.png){: .icon-small}

### Interactive 2D Array

*Quickly create a 2.5D Array of objects, picking points in the viewport.*

1. Select the object to clone.
2. Pick start point.
3. Pick second point to define a rectangular area.
4. Move the mouse away from the last point to select the amount of rows. Press left click to finish selecting rows.
5. move the mouse again to define columns quantity. press click to finish.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/aR_UTzUdyps" frameborder="0" allowfullscreen></iframe></div>

![pattern?array](/assets/images/icons/P_array_128.png){: .icon-small}

### Pattern Array

Make complex rule-based object arrays; walls, mosaic patterns...

![pattern?array](/assets/images/ui/parray.png){: .align-center .drop-shadow}

- Array Dimension
  - Rows and Columns: Set the amount of rows and columns for the array. Array dimension will be nRows x nColumns. (nColumns per row).
  - Checking "Totals" for Rows and Columns separation will use the XYZ values as total distance for rows or columns extension.
  - Interactive mode allows to set the array dimension parameters in an interactive way, from the viewport.
- Add rules
    1. Set a row number in the spinner to add rules to. Press "update Row" if you change the offset parameters for the current selected row number. unchecking "Enable" will turn off   the current row, but it's still used for calculations.
    2. Set current column for the row. Each added rule will "fill" a cell in the row.
        2.1 Pick the node to use.
        2.2 Set offset, rotation and scale values. unchecking "Enabled" will left a "hole" in the array, without breaking the rules.
    3. Once you finish to set the new column, or update the current selected row, press "ADD/UPDATE", check in the listview if the rule was successfully updated.

>Note: The preview needs to be updated after making changes to the rules.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/R7HhBRuUbnY" frameborder="0" allowfullscreen></iframe></div>

![cammanager](/assets/images/icons/Explode_128.png){: .icon-small}

![array?polar](/assets/images/icons/polar_array_128.png){: .icon-small}

### Polar array

*Rotate / Clone an object around a center or reference object.*

1. Select an object to operate on.
2. Activate the tool, a dialog will open. Pick a center object.
3. Clicking on the colored slices of the dial will move the object X degrees around the center object.

- Rotate itself option will rotate the object over itself the same amount of degrees.
- The **Clone object** option can will clone the object with each angular movement, making circular arrays.
- Use Custom angle and the CW (clockwise) or CCW (counter clockwise) for any custom increment instead of the predefined 45° multiplies of the dial.

> **LOOK AT** Will apply to the object a *look at* animation constraint, keeping the object always "looking" at the center.

#### Floater dialog

![arraypolar?ui](/assets/images/ui/mvarnd.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/40i8ldt4j4k" frameborder="0" allowfullscreen></iframe></div>

### Merge and Explode tools

This tools offers some enhanced functionality to the default available attach/detach functions specific for Editable polys, Meshes, and splines. It will work with multiple selected objects of the supported types, and there is no need to go to the modifier command panel or modelling ribbon tab.

- Explode will detach geometry elements and spline shapes to individual objects.
- Merge will Combine geometry and splines in one object.

**Supported object types:**

| Primitives |
| Edit Poly  |
| Edit Mesh  |
| Splines    |

![stamptool](/assets/images/icons/stampTool_128.png){: .icon-small}

### Mesh stamp tool

Use an object to Interactively stamp its shape or cut holes in a mesh.

- Objects must be geometry that can be converted to Editable Poly.
- This tool will collapse the modifier stack.

1. Use the UI to pick a base node to operate on
2. Choose the operation
3. Select a tool object in the scene, and press the start button
4. The tool object will be positioned in the base object surface, following the mouse; use right-click to stamp the object shape or left click to end the operation.

>- Keep pressed **<mark>SHIFT</mark>** and move the mouse to displace the tool towards-away the target surface.
>- Keep pressed **<mark>CTRL</mark>** and move the mouse towards-away from the tool object to rotate it around its normal.
>- Keep pressed **<mark>CTRL+SHIFT</mark>** and move the mouse towards-away from the tool object to change its scale.

---

## Scene management and rendering related tools

![cammanager](/assets/images/icons/camtool_128.png){: .icon-small}

### Camera manager

Utility to review scene cameras, assign a custom resolution to each, and add it to a batch render view or state set.

#### Per-Camera resolution

First Step: Set safe frame On for the camera viewport

Changing resolution / aspect ratio for the active camera in the "Output size" section of the tool will store custom properties for the camera, and the tool will automatically change the render output accordingly when cycling throw the cameras. This allows to quickly render different outputs for each camera.

Please note that the tool will change the current configured render output if you use this feature, and will keep the last setting if you exit the tool and change the view or active camera.

#### Reviewing cameras

You can either change the camera in the "Scene cameras" list, or use the "Previous" and "Next" buttons.
Use the "Refresh" button when you create or delete a camera to update the list.
Using "Select" button will select in the scene the active camera.

##### Open active output preview tool

This will open a new floater dialog, with only a button to set the feature on and off. If the tool is open and enabled, when changing the cameras using the standard 3ds Max method (CTRL+C) the render output will be auto changed to match the settings configured in the "Output size" for the respective camera (if any).

![cammanager](/assets/images/ui/cammngr_ui1.png){: .align-center .drop-shadow}

#### Batch render rollout

- The view will be named with the active camera name and resolution related information.
- After setting the **output path** one time, the tool will auto format file name and output path for the next views.

![cammanager](/assets/images/ui/cammngr_ui2.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/rwIf1HBtY5o" frameborder="0" allowfullscreen></iframe></div>

![cammanager](/assets/images/icons/mtl_128.png){: .icon-small}

### Material replacer

Automate the process of replacing materials. Intended to be used when importing scenes from other sources.

The tool enables to save a list of material correspondences, so if you work in another software with a standardized material library, reassigning materials is as easy to set up correspondences with your 3ds max material library one time, and use the saved list each time you import a scene or object.

Note: When importing some formats, 3ds max auto assigns materials with random names, so use a format like **FBX** that keeps material information.

![mtlreplacer](/assets/images/ui/matreplacer.png){: .align-center .drop-shadow}

### Bitmap multi-loader

Load multiple bitmaps in the scene at once. Bitmap names will be auto assigned with a prefix and the file name. The tool also enables to set the gamma value for the loaded bitmaps.

### Bitmap name from file

Change the scene bitmaps name from the default random name to a more meaningful name based on the filename.

### Other material related tools

- Remove materials from selection
- Select nodes without material
- Select faces by ID
- Quick ID set
- Random IDs

## Utilities

![paneling](/assets/images/icons/paneling_128.png){: .icon-small}

### Paneling

*Create a grid of panels (boxes or custom geometry) in a planar surface. Originally intended to fast model furniture cabinets and add handles, now is a multi-purpose tool.*

1. The first step using the Paneling tool is setting the operation surface. Set a rectangular area defined by two points: lower-left and top-right corners.
2. By default the tool creates the panels with standard box objects. **Start the tool with an object selected, to use it as source for the panels.**
3. Set Grid Vertical subdivisions moving the mouse towards or away the first point of the area (the lowe left corner), confirm with a left-click; repeat for the horizontal divisions. Each grid cell corresponds with one panel.
4. Use the UI to set the gap between panels and thickness. The checkbox next to the spinner will disable custom thickness for reference object mode and use the original height instead.

![paneling](/assets/images/ui/paneling_ui_1.png){: .align-center .drop-shadow}

**Note**: the following instruction set corresponds with the now removed tool available until version 2.9.2.X

1. The first step using the Paneling tool is setting the operation surface. Use the **Pick limits** button to set a surface with three reference points: **Base point > Height Point > Width point**
2. Uncheck "Box" and pick an object if you want to use a custom geometry for the panels. Invert Object H/W flips the front facing side.
3. Set Grid subdivisions each cell corresponds with one panel.
4. Set gap between panels.
5. Specify the thickness for the panel. The checkbox next to the spinner will disable custom thickness for reference object mode and use the original height instead.
6. Add Chamfer *(3ds Max 2016+ version restriction)* will add to each panel a Chamfer modifier.

### Detailer

Best suited to be used as a complement of the Paneling tool. This utility allows to parametrically place an object over a selection

 1. Select the Panels (or objects) you want to add the features. The list on top will change dynamically showing the selected objects. Use the <- button to reset the selection.
 2. Pick a detail (feature) object.
 3. Offset options:

- XYZ displacement from base object center.
  - Mirror: Will mirror objects following the selected rule. note that the indexes correspond to the object's order in the selection list.
    - ODD and EVEN: Mirror odd or even Nth in the list.
    - List: type comma separated individual objects numbering or use score symbol to set a range of objects.
- Rotate Details.

> Re-center pivots is intended to address situations where the detail object has a displaced pivot from its center, or to correct misplaced pivots in the result.

![paneling](/assets/images/ui/paneling_ui_2.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/pCalAPZWGjI" frameborder="0" allowfullscreen></iframe></div>

### Map tools and multiMap

Texture coordinates related tools

![maptools](/assets/images/icons/maptools_128.png){: .icon-small}

#### Map tools

Fit, center, reset UVW gizmos *(this tolls are only available by default through the UVWmap modifier in the command panel, they where written from scratch )* and delete UVW or UVWxform modifiers in selected objects from a convenient dialog.

>By default, **Delete UVWmap** removes only the last modifier on object's stack. Use **LEFT CLICK** to delete all the modifiers in stack. The same applies to **Delete UVWXform**.

![multimap](/assets/images/ui/maptools_dlg.png){: .align-center .drop-shadow}

![multimap](/assets/images/icons/multimap_128.png){: .icon-small}

#### multiMap

Add **individual** UVW modifiers to a **selection** of objects, **poly elements** or **faces**. <mark>Randomize gizmos</mark>, transform direct mesh coordinates or add random UVWxform modifiers

![multimap](/assets/images/ui/multiMap_2016.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/BAxjEX4N4CY" frameborder="0" allowfullscreen></iframe></div>

![snap?states](/assets/images/icons/magnet_128.png){: .icon-small}

### Snaps states

![savesnapfloater](/assets/images/ui/savesnap1.png){: .align-center .drop-shadow}

Save current active snaps as a named set and reuse them from the floater dropdown list

![savesnapadd](/assets/images/ui/savesnap2.png){: .align-center .drop-shadow}

![color?clipboard](/assets/images/icons/color_128.png){: .icon-small}

### Color clipboard

Dockable color swatches bar

![colorbar](/assets/images/ui/colorbar.png){: .align-center .drop-shadow}

- "*\+*" button populates swatches with random colors.
  - **LEFT CLICK** to fill unused slots.
  - press **SHIFT + LEFT CLICK** for grayscale values.
  - press **RIGHT CLICK** to replace all samples.
- **RIGHT CLICK** on a sample: Copy or paste color.
- Drag and Drop colors to and form the material editor
- Use the "..." Button to apply HSV adjustments to the colors.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/QlSqMZJj8YQ" frameborder="0" allowfullscreen></iframe></div>

### Wireframe colors Adjustment

Adjust HSV values of selected objects wireframe color.

---

## UI reference

### Menus

![dstlbx_menu](/assets/images/designtoolbox-menus.png){: .align-center .drop-shadow}

### Viewport elements colors

You can change the color palette used to represent points marks, lines and other kind of visual helpers within the tools. Change the colors in the pickers or use one of the presets.

![dstlbx_cfg](/assets/images/ui/dstlbx_cfg.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/Peh68BRbEiQ" frameborder="0" allowfullscreen></iframe></div>

### Where to locate the toolbar macros

You can find the tools in the **customization dialog** under the categories of <mark>refGuides</mark>, <mark>DesignToolBox</mark> and the extras in <mark>DSTLBX tools</mark>

### Ribbon Tab

#### refGuides panel

![refguides_ribbon](/assets/images/ui/r1.png){: .align-center .drop-shadow}

![refguides_ribbon](/assets/images/ui/r2.png){: .align-center .drop-shadow}

Options not available in toolbars:

- *Int. Points / Protractor / Polar Grid* toggles
- Units, angles (for protractor & polar tracking) and extension spinners.
- *Lock guides after creation* toggle.
- *Intersect All / Intersect current creation* toggle.

#### Transform panel

![transform_ribbon](/assets/images/ui/r3.png){: .align-center .drop-shadow}

#### Measure panel

![transform_ribbon](/assets/images/ui/r4.png){: .align-center .drop-shadow}

Option not available in toolbars: reference angle for rotation tools angle lock.

#### Replicator and Eyedropper panel

![eyedrop_ribbon](/assets/images/ui/r5.png){: .align-center .drop-shadow}

Options available in toolbars as Checkbuttons:

- Replicator
  - Replace groups: By default replicator replaces picked objects inside groups and not the entire group.
  - Transforms: Keep the original object standard transformations.
  - Multi target: On by default, enables the tool to pick more than one destination object.
- Eyedropper
  - Multi target: On by default, enables the tool to pick multiple destination objects.

#### Scene tools panel

![pivot_ribbon](/assets/images/ui/r6.png){: .align-center .drop-shadow}

#### General tools panel

![utilities_ribbon](/assets/images/ui/r7.png){: .align-center .drop-shadow}

#### Object related tools

![object_ribbon](/assets/images/ui/r8.png){: .align-center .drop-shadow}

#### Layer tools panel

![object_ribbon](/assets/images/ui/r9.png){: .align-center .drop-shadow}

### Combined floater dialogs UI

#### DesignToolBox floater

![refguidesUIfloater](/assets/images/ui/refguidesfloatUI.png){: .align-center .drop-shadow}

#### refGuides floater

![dstlbxUIfloater](/assets/images/ui/destlbxfloatUI.png){: .align-center .drop-shadow}

---

## Install folders

- Main files are installed in 3ds Max's root directory *Scripts* (Designtoolbox subfolder) and *Plugins* folders.
- MacroScripts files are placed in 3ds Max root directory *MacroScripts* folder.
- Icons are installed in the *UI_ln* folder in 3ds Max root directory.
- The ribbon extension is language dependent, it will be installed in the corresponding folder for the language selected during installation. I.E. */maxroot/EN_US* is the default directory.
- The Plug-in will create some configuration files in the current user folder under the following paths:
  - *../UserScripts/DesignToolbox* (user information)
  - *../en-US/plugcfg* (tools saved configuration files)
