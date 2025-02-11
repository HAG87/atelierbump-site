---
title: Mesh Stamp
reference: '/userguide/#mesh-stamp-tool'
icon: '/assets/images/icons/stampTool_128.png'
excerpt: Use an object to Interactively stamp its shape or cut holes in a mesh.
description:
    -   Use an object to Interactively stamp its shape or cut holes in a mesh.
    -   Set subdivision marks between two points, and place a clone on each mark.
# footer:
# footer_images:
category: Extras
---

1. In the UI, pick a base node to operate on and choose the operation
2. Select a tool object in the scene, and press the start button.
3. The tool object will be positioned in the base object surface, following the mouse; use **right-click** to stamp the object shape or **left-click** to finish.
   * Hold **SHIFT** and move the mouse to displace the tool towards-away the target surface.
   * Hold **CTRL** and move the mouse towards-away from the tool object to rotate it.
   * Hold **CTRL+SHIFT** and move the mouse to change the scale of the tool object.

Note that the objects must be geometry that can be converted to Editable Poly and, the tool will collapse the modifier stack.
