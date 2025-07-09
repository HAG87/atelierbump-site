---
title: Utilities
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/utilities
---

## Utilities

![modifiers-presets](/assets/images/icons/modPresets_128.png){: .icon-small}

### Modifier Presets

![modifiers-presets](/assets/images/ui/modifiers-presets.png){: .align-center}

Use this tool to store modifier presets. It saves values from the modifiers applied to a node. The tool has three dialogs: the main dialog displays a list of preset buttons, one dialog adds new presets, and the other manages saved presets.

- Start the tool, select the object(s) to apply modifiers to, and click the desired preset from the list.
- To add presets:
  1. Select an object with modifiers applied, then click "Add presets." If nothing is selected, pick an object.
  2. Select a modifier from the list, edit the name, and add the preset.
- Use "Edit list" to reset, remove, or rearrange the preset list.

![paneling](/assets/images/icons/paneling_128.png){: .icon-small}

### Paneling

*Create a grid of panels (boxes or custom geometry) on a planar surface. Originally designed for quickly modeling furniture cabinets and adding handles, this tool is now multi-purpose.*

1. Set the operation surface by defining a rectangular area with two points: the lower-left and top-right corners.
2. The rectangular area is delimited:
   1. Base point
   2. Third and last point set the width. Hold <mark>SHIFT</mark> to invert the up-direction.
3. By default, the tool creates panels with standard box objects. **Start the tool with an object selected to use it as the source for the panels.**
4. Set grid vertical subdivisions by moving the mouse toward or away from the first point (the lower-left corner), then confirm with a left-click. Repeat for horizontal divisions. Each grid cell corresponds to one panel.
5. Use the UI to set the gap between panels and thickness. The checkbox next to the spinner disables custom thickness for reference object mode and uses the original height instead.

![paneling](/assets/images/ui/paneling_ui_1.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/0FMW5lpSUFI" frameborder="0" allowfullscreen></iframe></div>

**Note:** The following instructions apply to the tool available until version 2.9.2.X (now removed):

1. Set the operation surface using the **Pick limits** button and three reference points: **Base point > Height Point > Width point**.
2. Uncheck "Box" and pick an object to use custom geometry for the panels. "Invert Object H/W" flips the front-facing side.
3. Set grid subdivisions; each cell corresponds to one panel.
4. Set the gap between panels.
5. Specify the panel thickness. The checkbox next to the spinner disables custom thickness for reference object mode and uses the original height instead.
6. Add Chamfer *(3ds Max 2016+ only)* to each panel with a Chamfer modifier.

### Detailer

Best used as a complement to the Paneling tool. This utility allows you to parametrically place an object over a selection.

 1. Select the Panels (or objects) you want to add the features. The list on top will change dynamically showing the selected objects. Use the <- button to reset the selection.
 2. Pick a detail (feature) object.
 3. Offset options:

- XYZ displacement from the base object's center.
  - Mirror: Mirrors objects following the selected rule. Note that the indexes correspond to the object's order in the selection list.
    - ODD and EVEN: Mirror odd or even Nth in the list.
    - List: type comma separated individual objects numbering or use score symbol to set a range of objects.
- Rotate details.

> Re-center pivots addresses situations where the detail object has a displaced pivot or to correct misplaced pivots in the result.

![paneling](/assets/images/ui/paneling_ui_2.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/pCalAPZWGjI" frameborder="0" allowfullscreen></iframe></div>

### Map Tools and multiMap

Texture coordinate-related tools

![map-tools](/assets/images/icons/maptools_128.png){: .icon-small}

#### Map Tools

Fit, center, and reset UVW gizmos *(these tools are only available by default through the UVWmap modifier in the command panel; they were written from scratch)* and delete UVW or UVWxform modifiers in selected objects from a convenient dialog.

>By default, **Delete UVWmap** removes only the last modifier on the object's stack. Use **LEFT CLICK** to delete all modifiers in the stack. The same applies to **Delete UVWXform**.

![multimap](/assets/images/ui/maptools_dlg.png){: .align-center .drop-shadow}

![multimap](/assets/images/icons/multimap_128.png){: .icon-small}

#### multiMap

Add **individual** UVW modifiers to a **selection** of objects, **poly elements** or **faces**. <mark>Randomize gizmos</mark>, transform direct mesh coordinates or add random UVWxform modifiers

![multimap](/assets/images/ui/multiMap_2016.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/BAxjEX4N4CY" frameborder="0" allowfullscreen></iframe></div>

![snap-states](/assets/images/icons/magnet_128.png){: .icon-small}

### Snaps states

![saves-nap-floater](/assets/images/ui/savesnap1.png){: .align-center .drop-shadow}

Save current active snaps as a named set and reuse them from the floater dropdown list

![save-snap-add](/assets/images/ui/savesnap2.png){: .align-center .drop-shadow}

![color-clipboard](/assets/images/icons/color_128.png){: .icon-small}
