---
layout: page
title: Latinismos
permalink: /latinismos/
---

<ul>
  {% assign latinismos_pages = site.latinismos | sort: "title" %}
  {% for p in latinismos_pages %}
    <li><a href="{{ p.url | relative_url }}"><em>{{ p.title }}</em></a></li>
  {% endfor %}
</ul>
