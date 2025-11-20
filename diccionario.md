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

## Latinismos

<ul>
  {% assign latinismos_pages = site.latinismos | sort: "title" %}
  {% for r in latinismos_pages %}
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

