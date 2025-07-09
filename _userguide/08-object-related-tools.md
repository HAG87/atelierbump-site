---
title: Object-Related Tools
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/object-related-tools
---

## Object-Related Tools

![1d-array](/assets/images/icons/1d_array_128.png){: .icon-small}

### 1D Array (Clone Between)

Set subdivision marks between two points and place a clone on each mark.

1. Pick the distance start point.
2. Pick the distance second point.
3. Move the mouse toward the start or end point to set the number of segments.
    - Press <mark>SHIFT</mark> while tracking the second point for orthogonal mode.
4. Pick the object to clone when prompted.

>**Note:**
> Orthogonal tracking (<mark>SHIFT</mark>) has an axis-lock feature: Hold <mark>SHIFT</mark>, and with vertex snap activated, move the cursor to a vertex and press <mark>CTRL</mark>. The tracking will be **restricted to the nearest axis**, allowing you to track any point while the line remains locked to that axis. This feature works in all tools with orthogonal tracking.
> **Alternate mode**: Press <mark>SHIFT</mark> when activating the tool to place clones at the midpoint of segments.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/VtAfxGZs4gU" frameborder="0" allowfullscreen></iframe></div>

![interactive-array](/assets/images/icons/2d_array_128.png){: .icon-small}

### Interactive 2D Array

*Quickly create a 2.5D array of objects by picking points in the viewport.*

1. Select the object to clone.
2. A rectangular area will be delimited:
   1. Base point
   2. The third and last point sets the width. Hold <mark>SHIFT</mark> to invert the up-direction.
3. Move the mouse away from the last point to select the number of rows. Left-click to finish selecting rows.
4. Move the mouse again to define the number of columns. Click to finish.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/aR_UTzUdyps" frameborder="0" allowfullscreen></iframe></div>

![pattern-array](/assets/images/icons/P_array_128.png){: .icon-small}

### Pattern Array

Create complex, rule-based object arrays like walls and mosaic patterns.

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

### Polar Array

*Rotate or clone an object around a center point or reference object.*

1. Select an object to operate on.
2. Activate the tool, and a dialog will open. Pick a center object.
3. Clicking on the colored slices of the dial will move the object by X degrees around the center object.

- The "Rotate itself" option will rotate the object on its own axis by the same number of degrees.
- The **Clone object** option will clone the object with each angular movement, creating circular arrays.
- Use "Custom angle" and the CW (clockwise) or CCW (counter-clockwise) buttons for any custom increment instead of the predefined 45° multiples on the dial.

> **LOOK AT** will apply a *look at* animation constraint to the object, keeping it always "looking" at the center.

#### Floater Dialog

![array-polar-ui](/assets/images/ui/mvarnd.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/40i8ldt4j4k" frameborder="0" allowfullscreen></iframe></div>

### Merge and Explode Tools

These tools offer enhanced functionality to the default attach/detach functions for Editable Polys, Meshes, and splines. They work with multiple selected objects of the supported types, eliminating the need to go to the modifier command panel or modeling ribbon tab.

- Explode will detach geometry elements and spline shapes into individual objects.
- Merge will combine geometry and splines into one object.

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

1. Select the vertices you want to align. Alternatively, select an edge loop or some consecutive edges.
2. Start the tool. Choose a base point to begin drawing a line that will be used to align the vertices.
3. Choose an endpoint to determine the direction of the line. The vertices will be repositioned over the line, to the closest point to the original position.
