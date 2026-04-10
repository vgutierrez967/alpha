---
layout: page
title: Diccionario
permalink: /diccionario/
---

## Lemas

<ul>
  {% assign terms = site.lemas | sort: "title" %}
  {% for t in terms %}
    <li><a href="{{ t.url | relative_url }}">{{ t.title }}</a></li>
  {% endfor %}
</ul>

## Aforismos

<ul>
  {% assign aforismos_pages = site.aforismos | sort: "title" %}
  {% for r in aforismos_pages %}
    <li><a href="{{ r.url | relative_url }}"><em>{{ r.title }}</em></a></li>
  {% endfor %}
</ul>  

## Ramas

<ul>
  {% assign ramas_pages = site.ramas | sort: "title" %}
  {% for r in ramas_pages %}
    <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
  {% endfor %}
</ul>

