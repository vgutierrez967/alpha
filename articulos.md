---
layout: page
title: "Artículos, ensayos y reviews"
permalink: /articulos/
---

<ul class="articulos-list">
  {% assign ordered = site.articulos | sort: "date" | reverse %}
  {% for a in ordered %}
    <li>
      <a href="{{ a.url | relative_url }}">{{ a.title }}</a>
      <small>
        — {{ a.date | date: "%d/%m/%Y" }}
        {% if a.author %} · {{ a.author }}{% endif %}
      </small>
      {% if a.summary %}
        <p>{{ a.summary }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
