---
layout: page
title: "Derecho Tributario"
permalink: /ramas/tributario/
definiciones:
  - texto: "Conjunto de principios y normas jurídicas que regulan la obtención de ingresos por parte de los entes públicos por medio del tributo."
---


<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
    <div>
    <p style="text-align: justify">
      "Conjunto de principios y normas jurídicas que regulan la obtención de ingresos por parte de los entes públicos por medio del tributo." </p>
    <p style="text-align: right"><em>-Rafael Calvo Ortega</em></p>
    </div>
  </div>
</div>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'tributario'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
