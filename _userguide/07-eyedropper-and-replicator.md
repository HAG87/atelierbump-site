---
title: Eyedropper and Replicator
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/eyedropper-and-replicator
---

## Eyedropper and Replicator Tools

![replicator](/assets/images/icons/eyedrop_1_128.png){: .icon-small}

### Replicator

*Replace any node with an instance or reference of another source node.*

1. Pick the source node.
2. Pick the nodes to be replaced.
    - DEFAULT: The target node is replaced with an instance of the source node.
    - Hold <mark>SHIFT</mark> while picking objects to create **references**.

### Options

![replicator_options](/assets/images/ui/replicator_floater.png){: .align-center .drop-shadow}

- Use group as source: When selecting a group as the source, use the entire group.
- Replace entire group: If the *target* node is in a group, replace the entire group with the *source* node.
- Retain source node offset transform: This effectively retains the node's offset transform without changing the pivot and applies it to the target's transform.
- Multi-target: This toggle enables/disables picking multiple targets. When disabled, the tool acts as a single-use tool.
- Replace all instances of the target node(s): If the *target* node is an instance, this replaces all instances of that node.
    Note: This mode ignores the *source group* and *target group* options.
- Keep properties: By default, Replicator uses the *source* node's properties. Enable the checkboxes to keep the properties of the *target* node.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/8xTYApZCjVA" frameborder="0" allowfullscreen></iframe></div>

![eyedropper](/assets/images/icons/eyedrop_2_128.png){: .icon-small}

### Eyedropper

A tool for copying properties, modifiers, and appearance from a source object to a target object or objects.

Note: Eyedropper will replace any matching or similar property, regardless of the node class. For example, you can copy the diameter of a circle shape to a sphere object. UVW map copy will copy applied UVW modifiers and attempt to copy direct mesh mapping, so if an editable poly or mesh is collapsed, there is a chance its mapping coordinates will be copied.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/LNEMMZjTgIQ" frameborder="0" allowfullscreen></iframe></div>

#### MultiTool

This will copy the active settings from the **filters** dialog:

![eyedrop-filters](/assets/images/ui/eyedropper_floater.png){: .align-center .drop-shadow}

#### Eyedropper Modes

Additional modes available:

| Visual Appearance                |
| Material                         |
| Non-Topology Dependent Modifiers |
| Node Transformations             |
| UVW Mapping                      |

### Options

- Transformation:
  - Modes:
    - Copy the node pivot and transform: The space and pivot transforms from the source node will be copied to the target node.
    - Copy only the node pivot: This maintains the node's transform and only changes the pivot position and rotation.
    - Copy only the node transform: This mode only maps the node's transform, leaving the offset transform (the pivot transform) unchanged.
  - Keep original position: Enabling this checkbox maintains the target node's position.
