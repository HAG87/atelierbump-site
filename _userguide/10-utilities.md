---
title: Utilities
excerpt: 'User guide containing tools description and how to use.'
---

## Utilities

![modifiers-presets](/assets/images/icons/modPresets_128.png){: .icon-small}

### Modifiers presets

![modifiers-presets](/assets/images/ui/modifiers-presets.png){: .align-center}

Tool for storing presets for modifier. The tool works by storing values from the modifiers applied to a node. It has three dialogs, the main dialog shows a list of buttons with the presets, one dialog is for adding the presets, and the other is for managing the saved presets.

- Start the tool, use the presets from the list, selecting the object or objects to apply the modifiers to, and clicking the desired preset.
- - To add presets:
  1. Select an object with some modifiers applied, and click "Add presets". Pick an object if nothing is selected.
  2. Select a modifier from the list, Edit the name, and Add the preset.
- Use "Edit list" to reset, remove, or rearrange the preset list.

![paneling](/assets/images/icons/paneling_128.png){: .icon-small}

### Paneling

*Create a grid of panels (boxes or custom geometry) in a planar surface. Originally intended to fast model furniture cabinets and add handles, now is a multi-purpose tool.*

1. The first step using the Paneling tool is setting the operation surface. Set a rectangular area defined by two points: lower-left and top-right corners.
2. A rectangular area to operate will be delimited:
   1. Base point
   2. Second point will determine the height and alignment of the rectangle. Press <mark>SHIFT</mark> for orthogonal tracking.
   3. Third and last point sets the width. Keep pressed <mark>SHIFT</mark> to invert the up-direction.
3. By default, the tool creates the panels with standard box objects. **Start the tool with an object selected, to use it as source for the panels.**
4. Set Grid Vertical subdivisions moving the mouse towards or away the first point of the area (the lowe left corner), confirm with a left-click; repeat for the horizontal divisions. Each grid cell corresponds with one panel.
5. Use the UI to set the gap between panels and thickness. The checkbox next to the spinner will disable custom thickness for reference object mode and use the original height instead.

![paneling](/assets/images/ui/paneling_ui_1.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/0FMW5lpSUFI" frameborder="0" allowfullscreen></iframe></div>

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

![map-tools](/assets/images/icons/maptools_128.png){: .icon-small}

#### Map tools

Fit, center, reset UVW gizmos *(this tolls are only available by default through the UVWmap modifier in the command panel, they where written from scratch )* and delete UVW or UVWxform modifiers in selected objects from a convenient dialog.

>By default, **Delete UVWmap** removes only the last modifier on object's stack. Use **LEFT CLICK** to delete all the modifiers in stack. The same applies to **Delete UVWXform**.

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

---
