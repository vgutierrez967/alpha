---
layout: page
title: "Derecho Administrativo"
permalink: /ramas/administrativo/
definiciones:
  - texto: "Rama del derecho que estudia la organización y funcionamiento de las administraciones públicas, sus relaciones con los ciudadanos, así como el sistema normativo que las rige y las garantías jurisdiccionales correspondientes."
---


<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
    <div>
      Rama del derecho que estudia la organización y funcionamiento de las administraciones públicas, sus relaciones con los ciudadanos, así como el sistema normativo que las rige y las garantías jurisdiccionales correspondientes (DPEJ).
    </div>
  </div>
</div>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'administrativo'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
