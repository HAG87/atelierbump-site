---
layout: splash
permalink: /
classes: wide
title: DesignToolBox for 3ds Max
author_profile: false
excerpt: 'DesignToolbox is a collection of tools specially designed to accelerate and simplify basic modeling tasks for architectural models, furniture design and other tasks where accurate modeling is needed. Professionals used to CAD or precision software will find it very familiar some of the included transformation tools, like reference rotation, scale and position, measurement tools and reference guides.<br/>Ability to place snapping points at poly lines intersections, visual rulers, fast UVW mapping and randomize, cloning tools, scene management, panel grids, fast pivot placement and work planes are some of the tools included, and new ones are added with each update.'
header:
  image: '/assets/images/logo-dstlbx.png'
  #overlay_color: "#1377FF"
  overlay_color: "#FFFFFF"
  overlay_filter: "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1.0))"
  overlay_image: /assets/images/hero-image-alpha.png
video:
  id: zskGfiWOeyo
  provider: youtube
feature_row_ui:
  - title: "Over 100+ unique tools to enhance your workflow"
    excerpt: "Carefully crafted and visually pleasant UI"
    url: "/features/"
    btn_label: "Complete feature list"
    btn_class: "btn--primary"
feature_row:
  - image_path: /assets/images/splash-docs.jpg
    alt: "DesignToolBox documents"
    title: "Documents"
    excerpt: "Consult the user guide to learn how to use the tools and their available options."
    url: "/userguide/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/splash-changelog.jpg
    alt: "New Features"
    title: "What's new"
    excerpt: "Stay up to date with the development and new features added in the latest version."
    url: "/docs/changelog/"
    btn_label: "Version history"
    btn_class: "btn--primary"
  - image_path: /assets/images/splash-maxscript.jpg
    title: "Free Tools"
    excerpt: "Look if some of our tools can improve your work. Feel free to modify and collaborate."
    url: "/tools/"
    btn_label: "Explore"
    btn_class: "btn--primary"
feature_tools:
  - image_path: /assets/images/icons/rotate_128.png
    title: Transform
    excerpt: Precise CAD-like and advanced transformation tools.
  - image_path: /assets/images/icons/Qmeasure_128.png
    title: Measure
    excerpt: Inquiry and display dimensions, angles and areas.
  - image_path: /assets/images/icons/rg_B_128.png
    title: Project
    excerpt: Construct your mododel with spatial reference guides.
  - image_path: /assets/images/icons/eyedrop_2_128.png
    title: Replicate
    excerpt: Match properties, replace nodes with a few clicks.
  - image_path: /assets/images/icons/p_array_128.png
    title: Clone
    excerpt: Distribute and clone nodes with interactive array tools.
  - image_path: /assets/images/icons/LayIso_128.png
    title: Organize & manage
    excerpt: Work faster with layers and manage node visibility.
  - image_path: /assets/images/icons/camtool_128.png
    title: Preparing scene to render
    excerpt: Review cameras and different output sizes faster, Set up batch render views with fewer clicks.
  - image_path: /assets/images/icons/mtl_128.png
    title: Materials and texture
    excerpt: Load a bunch of Textures in one operation. Easy manage geometry IDs..
  - image_path: /assets/images/icons/random_128.png
    title: + Utilities
    excerpt: Save modifiers presets, edit UVW maps, straighten edges, align vertices, randomization tools and more.
  
footer_text:
  - 3ds Max is a trademark of Autodesk Inc.
---

<!-- Video presentation -->
{% include video id=page.video.id provider=page.video.provider %}

<!--Feature list-->
{% include feature_tools.html type="image-center text-center" %}
{% include feature_row id="feature_row_ui" type="center" %}

<!--Slider images-->
{% include presentation-slider.html %}

<!--Buy now section-->
{% include dstlbx-buy-now.html price="$25.00*" purchase-url="https://gum.co/dstlbx" download-url="https://github.com/HAG87/designtoolbox-release/releases/latest" %}

<!-- Documents 3 column-->
{% include feature_row %}