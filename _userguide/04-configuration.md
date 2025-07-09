---
title: Configuration
excerpt: 'User guide containing tools description and how to use.'
permalink: /userguide/configuration
---

## Configuration dialog

Provides settings to change the guides color, layer name, intersection points behavior and object type.

### refGuides options

![refguides-cfg](/assets/images/ui/rGoptions.png){: .align-center .drop-shadow}

- [*] Custom Object mode (On by default) is only available for 3Ds Max 2016 and up.
- Smart intersection mode will consider any planar shape on the scene as a guide. While resource consuming, it can place intersection points on imported CAD drawings. for example.

### Viewport elements colors

You can change the color palette used to represent points marks, lines and other kind of visual helpers within the tools. Change the colors in the pickers or use one of the presets.

![designtoolbox-cfg](/assets/images/ui/dstlbx_cfg.png){: .align-center .drop-shadow}

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/Peh68BRbEiQ" frameborder="0" allowfullscreen></iframe></div>

### refGuides units configuration

- Configure the default values for the guidelines extension and unit scale.
- For the protractor change the radius, angle marks and angle snap for the polar positioning function.
- Set the size of the point markers

![rg-units](/assets/images/ui/refguides-units.png){: .align-center .drop-shadow}

### Transform and measure tools units configuration

![ds-units](/assets/images/ui/dstlbx-units.png){: .align-center .drop-shadow}

- Linear Units apply only to results printed in the listener.
- Changing any of these values from the default 1.0 Will NOT scale the values in the current Display Unit Scale (i.e.: 1.0m to 0.1m).
- The values Will be printed in a generic unit, representing the measured value transformed by the scale factor.
- The mapping is done this way: Display Unit * Factor -> Scaled value in generic units.  
  I.E.:  
  MEASUREMENT: 1.0m  
  Linear Units Scale factor: 0.01 (for printing the value in centimeters)  
  PRINTED RESULT: 100.0 u
