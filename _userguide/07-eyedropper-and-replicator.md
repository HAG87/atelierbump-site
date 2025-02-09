---
title: Eyedropper
excerpt: 'User guide containing tools description and how to use.'
---

## Eyedropper tools

![replicator](/assets/images/icons/eyedrop_1_128.png){: .icon-small}

### Replicator

*Replace any node with an instance or reference of another source node.*

1. Pick source node.
2. Pick nodes to be replaced.
    - DEFAULT: target node is replaced with an instance of the source node.
    - <mark>SHIFT</mark> while picking objects will create **references**.

### Options

![replicator_options](/assets/images/ui/replicator_floater.png){: .align-center .drop-shadow}

- Multi-target: This toggle will enable/disable the picking of multiple targets (When disabled, the tool wil act as a single-use).
- Use group as source: When selecting a group as source, use the entire group
- Replace entire group: If the *target* node is in a group, replace the entire group with the *source* node
- Retain source node offset transform: This effectively retains the node offsetTransform without changing the pivot, AND into the target transform.
- Replace all instances of the target node(s): If the *target* node is an instance, replace all instances of the node.
    Note: This mode will ignore the *source group* and *target group* options.
- Keep properties: By Default, replicator will use the *source* node properties. Enable the checkboxes to keep properties of the *target* node.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/8xTYApZCjVA" frameborder="0" allowfullscreen></iframe></div>

![eyedropper](/assets/images/icons/eyedrop_2_128.png){: .icon-small}

### Eyedropper

Properties, modifiers and appearance copy tool, from a source object to a target object or objects*

Note that, Eyedropper will replace any matching or similar property, regardless of the node class. I.E: You can copy the diameter of a circle shape to a sphere object, and so on. UVW map copy will copy applied UVW modifiers and attempt to copy direct mesh mapping, so if a editable poly or mesh is collapsed, there is a chance their mapping coordinates will be copied.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/LNEMMZjTgIQ" frameborder="0" allowfullscreen></iframe></div>

#### MultiTool

Will copy the active settings on the **filters** dialog:

![eyedrop-filters](/assets/images/ui/eyedropper_floater.png){: .align-center .drop-shadow}

#### Eyedropper modes

Additional available modes:

| Visual appearance                |
| Material                         |
| non-Topology dependent modifiers |
| Standard transformations         |
| UVW mapping                      |
