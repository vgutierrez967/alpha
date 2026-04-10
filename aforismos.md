---
layout: page
title: Aforismos
permalink: /aforismos/
---

<ul>
  {% assign aforismos_pages = site.aforismos | sort: "title" %}
  {% for p in aforismos_pages %}
    <li><a href="{{ p.url | relative_url }}"><em>{{ p.title }}</em></a></li>
  {% endfor %}
</ul>
