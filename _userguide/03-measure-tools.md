---
title: Measure Tools
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/measure-tools
---

## Measure Tools

![divide](/assets/images/icons/sdivide_128.png){: .icon-small}

### Divide Distance

Set reference points to divide a distance.

1. Pick the distance start point.
2. Pick the distance second point.
3. Move the mouse toward the start or end point to set the number of segments.
    - Press <mark>SHIFT</mark> while tracking the second point for orthogonal mode.

> You can use the **Divide distance | input mode** tool to type the subdivision steps instead of using mouse tracking.
>**Note:**
> Orthogonal tracking (<mark>SHIFT</mark>) has an axis-lock feature: Hold <mark>SHIFT</mark>, and with vertex snap activated, move the cursor to a vertex and press <mark>CTRL</mark>. The tracking will be **restricted to the nearest axis**, allowing you to track any point while the line remains locked to that axis. This feature works in all tools with an orthogonal tracking feature.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/VtAfxGZs4gU" frameborder="0" allowfullscreen></iframe></div>

![distance](/assets/images/icons/Qmeasure_128.png){: .icon-small}

### Distance

A measuring tape with live visual feedback.

1. Pick a start point.
2. Track the distance.
3. Pick an end point to measure again. A tape for each measurement will remain displayed until the tool is exited.
    - After picking the first point, press <mark>SHIFT</mark> to restrict the tape to the XYZ axes (orthogonal mode).

The result of the last measurement will be copied to the clipboard, and each measurement is traced to the listener after finishing with the tool.

![distance-2](/assets/images/icons/Qmeasure_2_128.png){: .icon-small}

### Contiguous (Chain) Dimension Line

1. Measurement start point.
2. Continue picking points to add measurements.
3. Finish the tool with a right-click.

> Hold <mark>SHIFT</mark> while tracking the second point for orthogonal mode, then press <mark>CTRL</mark> for axis-lock.
> Measurements are copied to the clipboard and traced to the listener.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/lRFG3Da7Oag" frameborder="0" allowfullscreen></iframe></div>

![msdlg](/assets/images/icons/dimobj_128.png){: .icon-small}

### Working with Measurements: Distance History

The "Distance History" dialog stores the measures taken with the **"Measure Distance"** or **"Continued Distance"** tools, allowing you to re-display them and customize their appearance. You can also create standard spline-based dimension objects to display and render the taken measurements.
Both functionalities are integrated into the UI of the **"Distance History"** tool.

#### Distance History

![distance-history-dialog](/assets/images/ui/dstDlg.png){: .align-center .drop-shadow}

Selecting one or multiple items in the "Distance Measures" or "Continued Distance Measures" listbox will re-display them in the viewport.

##### Actions

- **Clear selection:** Deselect all items, turning off their display.
- **Clear values:** Reset the history, clearing all stored measurements.
- **Update:** This action is needed when you take more measurements with the dialog open. It will update the lists by adding the new entries. It will also update any changes in the color or text background/frame.

##### Dimension Objects

Create dimension lines with measurement annotations, allowing you to render the taken dimensions. Standard Spline and Text shapes will be created.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/U311FeOQrCU" frameborder="0" allowfullscreen></iframe></div>

###### Parameters

- Arrow size: This parameter controls the width and height of the dimension line arrows.
- Thickness: The thickness of the line geometry.
- Text size: The size of the text label.
- Text thickness: Text labels are created with an *extrusion* modifier. This controls the extrusion amount.
- Text offset: The distance between the dimension line and the text.
- Renderable: Enables geometry rendering in the output and viewports. Enabled by default.
- Flip text: Sometimes the dimension text can be flipped (right to left); check this to address the issue.

*Parameter spinner units are in centimeters.*

>Please note that the text will be oriented left-to-right based on the current view. Expect unpredictable results in orthogonal views.

![dim-obj-prev](\assets\images\dimobj_preview.png){: .align-center .drop-shadow}

![angle](/assets/images/icons/Qangle_128.png){: .icon-small}

### Angle

*Measure any angle by 3 points.*

1. Pick angle base point.
2. Pick first reference point to mark a direction vector. The tool will track the angle comprehended between the first direction vector and the current mouse position or vertex snap (with center at the base point).
3. Pick second reference point to end.

> Hold <mark>SHIFT</mark> while tracking the second and third points for orthogonal mode.
> The angle measurement is copied to the clipboard and traced to the listener.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/GobuvzrpsbI" frameborder="0" allowfullscreen></iframe></div>

![area](/assets/images/icons/Qarea_128.png){: .icon-small}

### Area

*Measure the area of a polygon defined by a series of points.*

1. Pick points to define the polygon's vertices.
2. Right-click to finish and calculate the area.

> The area measurement is copied to the clipboard and traced to the listener.
> Orthogonal mode is available for the measure tool, press <mark>SHIFT</mark> between point picks.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/tn2Gt9ekX-c" frameborder="0" allowfullscreen></iframe></div>

![volume](/assets/images/icons/Qvolume_128.png){: .icon-small}

### Volume

*Cubic volume measure tool. It's not restricted to selected object mass, instead is measured as an empty space container box.*

Pick two points representing the start and end point of a box diagonal line. The measured volume of the box will be traced to the listener.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/voUivMGAsqM" frameborder="0" allowfullscreen></iframe></div>

![angle2faces](/assets/images/icons/angle2faces_128.png)

### Angle between two faces

Measure the angle between two faces.

1. Start the tool.
2. Pick the first face and then a second one to inquiry the angle.
   - Two marks indicating the points and face normals will be drawn, along with a line connecting them and a text showing the angle in this format: **ANGLE---COMPLEMENTARY ANGLE**
   - The measurement will be printed to the listener, so you can copy and use these values.

>Note that this tool will not work when you have flipped normals, so check for inverted normals first.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/0v34PlCsrT4" frameborder="0" allowfullscreen></iframe></div>

![angle2edges](/assets/images/icons/angle2edges_128.png)

### Angle between two edges

1. Select two edges in an Editable poly or mesh object.
2. Check the tool macro button to show the angle between these two edges. Check the button again to change the object or to disable the tool.

### Spatial Info

Displays information about an object's dimension and transformation

![spatial-Info](/assets/images/ui/spatialinfo.png)

### Home grid size

Displays a reference gizmo with 3 rules towards the XYZ axes indicating the Active Grid spacing units.
