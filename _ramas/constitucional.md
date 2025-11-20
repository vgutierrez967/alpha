---
layout: page
title: "Derecho Constitucional"
permalink: /ramas/constitucional/
definiciones:
  - texto: "Rama del Derecho Público que estudia el conjunto de normas jurídicas que se refieren a la organización del Estado, de su Gobierno y de los derechos fundamentales de las personas."
---

<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
    <div>
    <p style="text-align: justify">
      "El Derecho Constitucional es la rama del Derecho Público que estudia el conjunto de normas jurídicas que se refieren a la organización del Estado, de su Gobierno y de los derechos fundamentales de las personas." </p>
    <p style="text-align: right"><em>-Hernán Molina Guaita</em></p>
    </div>
  </div>
</div>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'constitucional'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
