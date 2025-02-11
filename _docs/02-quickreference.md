---
title: Quick reference
excerpt: 'Userguide containing tools description and how to use.'
permalink: /docs/quickreference/
classes: wide
categories:
  - Transform tools
  - Measure tools
  - 'Settings #1'
  - refGuides
  - Additional refGuides tools
  - 'Settings #2'
  - Replicator and Eyedropper
  - Geometry modification
  - Object Utilities
  - General Utilities
  - Scene Organization
  - Rendering
  - Extras
---

{% for category in page.categories %}
  <div class="category">
      <h2>{{ category }}</h2>
  </div>  
  <div class="tools">
    {% for feature in site.features %}
      {% if feature.category == category %}
        {% include feature-card.html %}
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}
