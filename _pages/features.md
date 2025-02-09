---
title: DesignToolBox feature list
excerpt: List of available tools and utilities
layout: full
permalink: /features/
classes: wide
---
<div class="text-center" style="margin-bottom: 2em;"><a class="btn btn--info" href="/dstlbx/commands">Detailed feature list in table format</a></div>

<div class="feature feature__wrapper">
  {% for section in site.data.features %}
    {% if section.title != null %}
      <div class="grid-row">
        <div class="feature-wide">
          <h3>{{ section.title }}</h3>
        </div>
      </div>
    {% endif %}
      {% if section.features != null %}
        {% if section.features.size == 1 %}
            {%- assign classname = "feature-wide" -%}
        {% elsif section.features.size == 2 %}
            {%- assign classname = "feature-two__fifth" -%}
        {% else %}
            {%- assign classname = "feature" -%}
        {% endif %}
        <div class="grid-row">
        {% for feature in section.features %}
            <div class="{{ classname }}">
            {% if feature.img != null%}
              <img src="{{ feature.img | relative_url }}" alt="">
            {% endif %}
            {% if feature.title != null%}
              <h4>{{ feature.title }}</h4>
            {% endif %}
            {% if feature.caption != null%}
              <p>{{ feature.caption }}</p>
            {% endif %}
            </div>
            {% endfor %}
        </div>
      {% endif %}
  {% endfor %}
</div>
