---
layout: page
title: "Derecho Procesal"
permalink: /ramas/procesal/
---


<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
    <div>
    <p style="text-align: justify">  "La ciencia jurídica cuyo objeto es el estudio sistemático de las normas, principios e instituciones que regulan el ejercicio del poder jurisdiccional del Estado." </p>
    <p style="text-align: right"><em>-Hugo Pereira Anabalón.</em></p>
    </div>
  </div>
</div>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'procesal'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
