---
title: Scene Management
excerpt: 'Scene management and rendering-related tools'
permalink: /userguide/scene-management
---

## Scene Management and Rendering Tools

![cam-manager](/assets/images/icons/camtool_128.png){: .icon-small}

### Camera Manager

This utility reviews scene cameras, assigns a custom resolution to each, and adds them to a batch render view or state set.

#### Per-Camera Resolution

First, enable the safe frame for the camera viewport.

Changing the resolution or aspect ratio for the active camera in the "Output Size" section stores custom properties for that camera. The tool will automatically change the render output as you cycle through cameras, allowing you to quickly render different outputs for each one.

Note that this feature will change the current render output configuration and will retain the last setting if you exit the tool or change the view or active camera.

#### Reviewing Cameras

You can change the camera from the "Scene Cameras" list or use the "Previous" and "Next" buttons.
Use the "Refresh" button to update the list after creating or deleting a camera.
The "Select" button selects the active camera in the scene.

##### Open Active Output Preview Tool

This opens a new floater dialog with a button to toggle the feature on and off. If the tool is open and enabled, changing cameras using the standard 3ds Max method (CTRL+C) will automatically update the render output to match the settings configured in "Output Size" for the respective camera (if any).

![cam-manager-ui](/assets/images/ui/cammngr_ui1.png){: .align-center .drop-shadow}

#### Batch Render Rollout

- The view will be named with the active camera's name and resolution information.
- After setting the **output path** once, the tool will automatically format the file name and output path for subsequent views.

![cam-manager-ui-2](/assets/images/ui/cammngr_ui2.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/rwIf1HBtY5o" frameborder="0" allowfullscreen></iframe></div>

![mtl-replacer](/assets/images/icons/mtl_128.png){: .icon-small}

### Photographic Composition Guides

![vp-guides](/assets/images/vp-guides.png)

Display an overlay of photographic composition guides in the viewport.
This tool helps compose shots by easily drawing common photographic grids, reference lines, and perspective lines.

#### Features

- Quadrants (2x2)
- Rule of thirds (3x3)
- Golden proportions
- Golden ratio rectangles & spiral
- Position a guide in the viewport with the mouse. Possible positions:
  - Vertical
  - Horizontal
  - Cross
  - From point: Position multiple two-point aligned lines from a common base point. Useful for drawing perspective lines from a vanishing point or following a perspective line.
- You can select the color of the guides.

### Material Replacer

Automate the process of replacing materials, intended for use when importing scenes from other sources.

The tool enables you to save a list of material correspondences. If you work in another software with a standardized material library, you can set up correspondences with your 3ds Max material library once and reuse the saved list each time you import a scene or object.

Note: When importing some formats, 3ds Max auto-assigns materials with random names. Use a format like **FBX** that preserves material information.

![mtl-replacer-ui](/assets/images/ui/matreplacer.png){: .align-center .drop-shadow}

### Quick Material ID Set

A dialog UI for selecting and setting material IDs without needing to use the command panel.

![mtl-id-set](/assets/images/ui/mtl-id-set.png){: .align-center .drop-shadow}

- Works with Editable Poly objects only.
- You can also select all faces that have the same ID as the current selection.
- An additional option allows you to randomly set IDs for the selected polygons.

### Bitmap Multi-Loader

Load multiple bitmaps into the scene at once. Bitmap names will be automatically assigned with a prefix and the file name. The tool also enables you to set the gamma value for the loaded bitmaps.

### Bitmap Name from File

Change the scene bitmap names from the default random names to more meaningful names based on their filenames.

### Missing Textures

A texture map filename search-and-replace utility for relocating missing files.

### Color Clipboard

A dockable color swatch bar.

![colorbar](/assets/images/ui/colorbar.png){: .align-center .drop-shadow}

- The "*\+*" button populates swatches with random colors.
  - **LEFT-CLICK** to fill unused slots.
  - **RIGHT-CLICK** to replace all samples.
- **RIGHT-CLICK** on a sample to copy or paste a color.
- Drag and drop colors to and from the material editor.
- Use the "..." button to apply HSV adjustments to the colors.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/QlSqMZJj8YQ" frameborder="0" allowfullscreen></iframe></div>

### Wireframe Colors Adjustment

Adjust HSV values of the selected object's wireframe color.

### Other Material Related Tools

- Remove materials from selection
- Select nodes without material
- Select faces by ID
- Quick ID set
- Random IDs
