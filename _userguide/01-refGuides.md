---
title: refGuides
excerpt: 'Spatial reference helpers'
permalink: /userguide/refguides
---

## refGuides, Spatial Reference Helpers

*The refGuides toolset allows you to create construction guides for accurately positioning and modeling objects. These guides can act as rulers, displaying custom measurement units in the viewport.*

The main functionality of this toolset consists of creating three types of reference objects: **linear guide**, **protractor**, and **point**.

Another feature is the ability to place **intersection marks** where linear guides intersect in space. Use this feature with the **Intersection points** option, or by holding the <mark>ALT</key> during placement.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ewg1prguQE0" frameborder="0" allowfullscreen></iframe></div>

![rg-tool](/assets/images/icons/rg_B_128.png){: .icon-small}

### Guide Placement

Three creation modes are available:

#### Free Space Mode

This mode places a guide by determining a direction from two points.

1. Pick a base reference point.
2. Pick a second reference point to determine the direction of the guide.

>Pressing <mark>SHIFT</mark> will lock the tracking to orthogonal coordinates.

#### Orthogonal Space Mode

1. Pick a reference point; it will act as the center of the orthogonal space.
2. Move the mouse around to change the direction or snap to a point.

>Press <mark>CTRL</mark> during axis selection for Z-axis restriction.

#### Polar Space Mode

1. Pick the base point. A circular gizmo will display in the viewports, representing a construction plane.
2. Rotation point 1: Pick the Z-axis gizmo rotation reference point.
3. Rotation point 2: X or Y axis rotation points.
    - Press <mark>ALT</mark> while tracking any gizmo rotation to snap angle values.
    - Press <mark>SHIFT</mark> to change direction, and <mark>CTRL</mark> to change the axis.
4. Rotate the mouse around to select the angular component.

> - The "Polar mode angle" option sets the angular increment. It's accessible from the ribbon, the UI creation mode, or the Options dialog.
> - Press <mark>ALT</mark> during the last placement tracking to override the intersection points ON/OFF setting.
> - The tools have a "continued creation" mode for placing more than one guide in a single action.

![rG-UI-mode](/assets/images/ui/rgUImode.png){: .align-center .drop-shadow}

![rg-protractor](/assets/images/icons/prot_128.png){: .icon-small}

#### Line Guide

##### Intersection Points

This feature allows you to place a reference point, acting as a snapping mark, where the reference guide lines intersect in space.

##### Guide Parameters

Line guides have two parameters: Units and Extension.

- **Units** provide a subdivision scale for the guide, used to snap objects to or as a measuring ruler.
- **Extension** determines how long the guide will be.

The UI option for the creation modes shows a floater with general settings for the guides, protractor placement, and intersection points. Right-clicking on the dialog pops up a context menu with more options.

#### Protractor Guide

A tool for displaying and snapping to angular values. The same placement methods described for the reference line tool are available for the protractor, with the exception of the UI mode, since it's included in the guide line UI.

![prev-prot](/assets/images/ui/preprot.png){: .align-center .drop-shadow}

![rg-int-points](/assets/images/icons/infer_128.png){: .icon-small}

#### Reference Points Tool

Trace temporary reference lines and place points at intersections. Unlike 3ds Max Helper points, these custom reference points will work with vertex snap.

Line tracing options:

- Hold <mark>SHIFT</mark> when tracking a line's second reference point to enable **ORTHOGONAL** direction override.
- Press <mark>SHIFT</mark> when picking the first point of a line for **orthogonal** placement mode.
- Press <mark>ALT</mark> when picking the first point of a line for **polar** placement mode.

![rg-live-view](/assets/images/icons/rg_inf2_128.png){: .icon-small}

#### Viewport Information Tools

Use the guides as a ruler to display unit steps in the viewport.

- Live info: Displays units for the currently selected guide.
- Live info+: Displays units for all guides in the current view (skips hidden or isolated guides).

![rg-more](/assets/images/icons/rg_UI_128.png){: .icon-small}

#### refGuides Objects

When using any of the "refGuides" tools, a custom Shape object is created for Lines, Protractors, and intersection points, with options available from the command panel for tuning their settings: Line extension, unit scale; Protractor angle marks and radius; Intersection point display style and size.

#### refGuides Additional Tools

- Delete all guides in the scene.
- Lock guides after creation.

![ds-logo](/assets/images/icons/dstlbx_icon_128.png){: .icon-small}
