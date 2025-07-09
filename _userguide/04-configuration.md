---
title: Configuration
excerpt: 'User guide containing tool descriptions and usage instructions.'
permalink: /userguide/configuration
---

## Configuration Dialog

Provides settings to change the guide color, layer name, intersection point behavior, and object type.

### refGuides Options

![refguides-cfg](/assets/images/ui/rGoptions.png){: .align-center .drop-shadow}

- [*] Custom Object mode (enabled by default) is only available for 3ds Max 2016 and later.
- Smart intersection mode will consider any planar shape in the scene as a guide. While resource-intensive, it can place intersection points on imported CAD drawings, for example.

### Viewport Element Colors

You can change the color palette used to represent point marks, lines, and other visual helpers within the tools. Change the colors in the pickers or use one of the presets.

![designtoolbox-cfg](/assets/images/ui/dstlbx_cfg.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/Peh68BRbEiQ" frameborder="0" allowfullscreen></iframe></div>

### refGuides Units Configuration

- Configure the default values for the guideline extension and unit scale.
- For the protractor, change the radius, angle marks, and angle snap for the polar positioning function.
- Set the size of the point markers.

![rg-units](/assets/images/ui/refguides-units.png){: .align-center .drop-shadow}

### Transform and Measure Tools Units Configuration

![ds-units](/assets/images/ui/dstlbx-units.png){: .align-center .drop-shadow}

- Linear Units apply only to results printed in the listener.
- Changing any of these values from the default of 1.0 will NOT scale the values in the current Display Unit Scale (e.g., 1.0m to 0.1m).
- The values will be printed in a generic unit, representing the measured value transformed by the scale factor.
- The mapping is done as follows: Display Unit * Factor -> Scaled value in generic units.
  e.g.:
  MEASUREMENT: 1.0m
  Linear Units Scale factor: 0.01 (for printing the value in centimeters)
  PRINTED RESULT: 100.0 u
