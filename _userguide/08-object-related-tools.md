---
title: Object related tools
excerpt: 'User guide containing tools description and how to use.'
permalink: /userguide/object-related-tools
---

## Object related tools

![1d-array](/assets/images/icons/1d_array_128.png){: .icon-small}

### 1D Array (Clone Between)

Set subdivision marks between two points, and place a clone on each mark

1. Pick distance start point.
2. Pick distance second point.
3. Move the mouse towards the start or end point to set segments amount.
    - Press <mark>SHIFT</mark> while tracking second point for orthogonal mode.
4. Pick the object to clone when prompted.

>**Note:**
> Orthogonal tracking (<mark>SHIFT</mark>) has a axis-lock feature: Keep <mark>SHIFT</mark> pressed, and having vertex snap activated, move the cursor to a vertex and press <mark>CTRL</mark>, the tracking will be **restricted to the nearest axis**, and then you can track any point, the line will lock to that specific axis. This feature works in all the tools that has a orthogonal tracking feature.
> **Alternate mode**: Press <mark>SHIFT</mark> when activating the tool to place the clones at segments midpoint.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/VtAfxGZs4gU" frameborder="0" allowfullscreen></iframe></div>

![interactive-array](/assets/images/icons/2d_array_128.png){: .icon-small}

### Interactive 2D Array

*Quickly create a 2.5D Array of objects, picking points in the viewport.*

1. Select the object to clone.
2. A rectangular area to operate will be delimited:
   1. Base point
   2. Second point will determine the height and alignment of the rectangle. Press <mark>SHIFT</mark> for orthogonal tracking.
   3. Third and last point sets the width. Keep pressed <mark>SHIFT</mark> to invert the up-direction
3. Move the mouse away from the last point to select the amount of rows. Press left click to finish selecting rows.
4. move the mouse again to define columns quantity. press click to finish.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/aR_UTzUdyps" frameborder="0" allowfullscreen></iframe></div>

![pattern-array](/assets/images/icons/P_array_128.png){: .icon-small}

### Pattern Array

Make complex rule-based object arrays; walls, mosaic patterns...

![pattern-array](/assets/images/ui/parray.png){: .align-center .drop-shadow}

- Array Dimension
  - Rows and Columns: Set the amount of rows and columns for the array. Array dimension will be nRows x nColumns. (nColumns per row).
  - Checking "Totals" for Rows and Columns separation will use the XYZ values as total distance for rows or columns extension.
  - Interactive mode allows to set the array dimension parameters in an interactive way, from the viewport.
- Add rules
    1. Set a row number in the spinner to add rules to. Press "update Row" if you change the offset parameters for the current selected row number. unchecking "Enable" will turn off   the current row, but it's still used for calculations.
    2. Set current column for the row. Each added rule will "fill" a cell in the row.
        2.1 Pick the node to use.
        2.2 Set offset, rotation and scale values. un-checking "Enabled" will left a "hole" in the array, without breaking the rules.
    3. Once you finish to set the new column, or update the current selected row, press "ADD/UPDATE", check in the listview if the rule was successfully updated.

>Note: The preview needs to be updated after making changes to the rules.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/R7HhBRuUbnY" frameborder="0" allowfullscreen></iframe></div>

![array-polar](/assets/images/icons/polar_array_128.png){: .icon-small}

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

![array-polar-ui](/assets/images/ui/mvarnd.png){: .align-center .drop-shadow}

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

![edge-length](/assets/images/icons/edgeLength_128.png){: .icon-small}

### Edge length tool

Change the length of selected edges. (Works only with Editable Poly objects)

  1. Select the Editable Poly object and start the tool.
  2. Select a set of edges you want to modify and select a reference vertex for each edge, it will be used as a base point to set the direction of the operation.
    If no vertex is selected the tool will use the first one that finds.
  3. Options: Max, minimum, and average length, custom value.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/YOMrC9Rxlng" frameborder="0" allowfullscreen></iframe></div>

![vertex-align](/assets/images/icons/vertexAlign_128.png){: .icon-small}

### Align vertices

Align a selection of vertices in a straight line.

1. Select the vertices you want to align. alternatively, select a edge loop or some consecutive edges.
2. Start the tool. Choose a base point to begin drawing a line that will be used to align the vertices.
3. Choose an endpoint to determine the direction of the line. The vertices will be repositioned over the line, to the closest point to the original position.
