---
layout: page
title: "Derecho Civil"
permalink: /ramas/civil/
latin: "de <em>civilis</em>, derivado de <em>civis</em>, ciudadano" 
definiciones:
  - texto: Rama del Derecho Privado formada por el conjunto de principios y preceptos jurídicos sobre la personalidad y las relaciones patrimoniales y de familia.
---

<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
      <div>
      El Derecho Civil es el Derecho Privado común y general. Es el conjunto de principios y preceptos jurídicos sobre la personalidad y las relaciones patrimoniales y de familia.
      </div>
  </div>
</div>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'civil'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
