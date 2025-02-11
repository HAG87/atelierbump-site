---
title: Scene management
excerpt: 'Scene management and rendering related tools'
permalink: /userguide/scene-management
---

## Scene management and rendering related tools

![cam-manager](/assets/images/icons/camtool_128.png){: .icon-small}

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

![cam-manager-ui](/assets/images/ui/cammngr_ui1.png){: .align-center .drop-shadow}

#### Batch render rollout

- The view will be named with the active camera name and resolution related information.
- After setting the **output path** one time, the tool will auto format file name and output path for the next views.

![cam-manager-ui-2](/assets/images/ui/cammngr_ui2.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/rwIf1HBtY5o" frameborder="0" allowfullscreen></iframe></div>

![mtl-replacer](/assets/images/icons/mtl_128.png){: .icon-small}

### Photographic composition guides

![vp-guides](/assets/images/vp-guides.png)

Display an overlay of photographic composition guides in the viewport.
This tool is intended to be of aid when composing shots. Easily draw common photographic grids, reference and perspective lines to help compose the perfect shot.

#### Features

- Quadrants (2x2)
- Rule of thirds (3x3)
- Golden proportions
- Golden ratio rectangles & spiral
- Position a guide in the viewport with the mouse. Possible positions:
  - Vertical
  - Horizontal
  - Cross
  - From point: Position multiple Two-point aligned lines from a common base point. Useful to draw perspective lines from a vanishing point or follow the same perspective line.
- You can select the color of the guides.

### Material replacer

Automate the process of replacing materials. Intended to be used when importing scenes from other sources.

The tool enables to save a list of material correspondences, so if you work in another software with a standardized material library, reassigning materials is as easy to set up correspondences with your 3ds max material library one time, and use the saved list each time you import a scene or object.

Note: When importing some formats, 3ds max auto assigns materials with random names, so use a format like **FBX** that keeps material information.

![mtl-replacer-ui](/assets/images/ui/matreplacer.png){: .align-center .drop-shadow}

### Quick material ID Set

Dialog UI for select and set material IDs without the need to dive in the command panel.

![mtl-id-set](/assets/images/ui/mtl-id-set.png){: .align-center .drop-shadow}

- Works with editable poly only
- You can also select all the faces that has the same ID as the current selected one.
- An additional option allows to randomly set IDs for the selected polygons.

### Bitmap multi-loader

Load multiple bitmaps in the scene at once. Bitmap names will be auto assigned with a prefix and the file name. The tool also enables to set the gamma value for the loaded bitmaps.

### Bitmap name from file

Change the scene bitmaps name from the default random name to a more meaningful name based on the filename.

### Missing textures

Texture maps filename search and replace utility for relocating missing files.

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

### Other material related tools

- Remove materials from selection
- Select nodes without material
- Select faces by ID
- Quick ID set
- Random IDs
