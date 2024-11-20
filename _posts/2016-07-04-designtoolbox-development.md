---
title: DesignToolBox development stage
date: 2016-07-04T03:01:09+00:00
author: Bump
categories:
  - 3ds max tools
  - 3ds max tools
tags:
  - Update
---
### 2-Point Local Rotation

Works like the reference rotation tool, but instead of picking a rotation axis, it uses the object's local XYZ axes. The default rotation is around Z-axis, pressing Shift will rotate around local Y-axis, Control will rotate along X-axis.

### Replicator

Object replacer. Replaces picked nodes with instances or references of one source node. Can keep original transformation. Useful when you want to update already placed objects.

### Eyedropper

Multi purpose copy-paste tool. Replicates transformation, material, UVW modifiers or coordinates (in valid mesh objects), visual appearance, layer, general properties (i.e. you can copy the &#8220;radius&#8221; from a circle into a sphere or cylinder), modifiers (It cannot copy topology dependant modifications) and others, from a source object to a target object or to a group of targets.

Both tools are designed to work on the viewports with a fair grade of visual feedback.

Preview:

{% include video id="5yiUTtlxm3A" provider="youtube" %}
