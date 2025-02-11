---
title: DesignToolBox feature list
excerpt: List of available tools and utilities
layout: full
permalink: /features/
classes: wide
categories:
  - Transform tools
  - Measure tools
  # - 'Settings #1'
  - Spatial reference guides
  - refGuides
  - Additional refGuides tools
  # - 'Settings #2'
  - Replicator and Eyedropper
  - Geometry modification
  - Object Utilities
  - General Utilities
  - Scene Organization
  - Rendering
  # - Extras
---
<div class="text-center" style="margin-bottom: 2em;"><a class="btn btn--info" href="/dstlbx/commands">Detailed feature list in table format</a></div>

{% for category in page.categories %}
  {% include feature-item.html %}
{% endfor %}
