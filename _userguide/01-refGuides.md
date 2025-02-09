---
title: refGuides
excerpt: 'Spatial reference helpers'
---

## refGuides, spatial reference helpers

*refGuides toolset allows to create construction guides for accurately position and model objects. This guides can act as rulers, displaying custom measurement units in the viewport.*

The main functionality of this tool set consist in the creation of tree types of reference objects : **linear guide**, **protractor** and **point**.

Another feature is the ability to place **intersection marks** where linear guides intersects in space. Use this feature with the **Intersection points** option, or holding the <mark>ALT</mark> key during placement.

<div class="responsive-video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ewg1prguQE0" frameborder="0" allowfullscreen></iframe></div>

![rg-tool](/assets/images/icons/rg_B_128.png){: .icon-small}

### Guides placement

Three creation modes are available:

#### Free space mode

This mode place a guide by determining a direction from two points.

1. Pick a base reference point.
2. Pick a second reference point determining the direction of the guide.

>Pressing <mark>SHIFT</mark> will lock the tracking to orthogonal coordinates.

#### Orthogonal space mode

1. Pick a reference point, it will act as a center of the orthogonal space.
2. Move the mouse around to change the direction or snap to a point.

>Press <mark>CTRL</mark> during axis selection for Z axis restriction.

#### Polar space mode

1. Pick base point. A circular gizmo displays in the viewports, representing a construction plane.
2. Rotation point 1: Pick Z axis gizmo rotation reference point.
3. Rotation point 1: X or Y axis rotation points.
    - Press <mark>ALT</mark> while tracking any gizmo rotation to snap angle values.
    - Press <mark>SHIFT</mark> to change direction, <mark>CTRL</mark> to change axis.
4. Rotate the mouse around to select the angular component.

> - "Polar mode angle" option sets the angular increment. It's accessible from the ribbon, the UI creation mode or the Options dialog.
> - Press <mark>ALT</mark> during last placement tracking to override intersection points ON/OFF setting.
> - The tools have a "continued creation" mode for placing more than one guide in one action.

![rG-UI-mode](/assets/images/ui/rgUImode.png){: .align-center .drop-shadow}

![rg-protractor](/assets/images/icons/prot_128.png){: .icon-small}

#### Line guide

##### Intersection points

This feature allows to place reference point, acting as a snapping mark, where the reference guide lines intersects in space.

##### Guides parameters

Line guides have two parameters: Units and Extension.

- **Units provide** a subdivision scale for the guide. Used to snap objects to, or as a measure ruler.
- **Extension** determines how long the guide will be.

The UI option for the creation modes shows a floater with the general settings for the guides, protractor placement and intersection points option. Right clicking on the dialog pops up a context menu with more options.

#### Protractor guide

Tool for displaying and snapping angular values. The same placing methods described for the reference line tool are available for the protractor, a exception of the UI mode, since its included in the guide line UI.

![prev-prot](/assets/images/ui/preprot.png){: .align-center .drop-shadow}

![rg-int-points](/assets/images/icons/infer_128.png){: .icon-small}

#### Reference points Tool

Trace temporary reference lines and place points at intersections. In difference with 3ds Max Helper points, this custom reference points will work with vertex snap.

Line tracing options:

- Hold <mark>SHIFT</mark> when tracking a line second reference point to enable **ORTHOGONAL** direction override.
- Press <mark>SHIFT</mark> / when picking first point of line for **orthogonal** placement mode
- Press <mark>ALT</mark> when picking first point of line for **polar** placement mode

![rg-live-view](/assets/images/icons/rg_inf2_128.png){: .icon-small}

#### Viewport information tools

Use the guides as a ruler display in viewport unit steps

- Live info: Display units for the current selected guide.
- Live info+: Display units for all the guides in the current view (skips hidden or isolated guides).

![rg-more](/assets/images/icons/rg_UI_128.png){: .icon-small}

#### refGuides Objects

When using any of the "refGuides" tools, a custom Shape object is created for / Lines / Protractors / intersection points / with options available  from the command panel for tunning their settings: Line extension, units scale; Protractor angle marks and radius; Intersection point display style and size.[*]

#### refGuides additional tools

- Delete all guides in scene.
- Lock guides after creation.

![ds-logo](/assets/images/icons/dstlbx_icon_128.png){: .icon-small}
