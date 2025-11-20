---
layout: page
title: Recursos
permalink: /recursos/
---

<ul>
  {% assign recursos_pages = site.recursos | sort: "title" %}
  {% for p in recursos_pages %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endfor %}
</ul>
