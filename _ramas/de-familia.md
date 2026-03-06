---
layout: page
title: "Derecho de Familia"
permalink: /ramas/familia/
---

<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
      <div>
      Aún no tenemos una definición para Derecho de Familia, si quieres aportar con una, escríbenos por instagram a  <a href="https://www.instagram.com/ddch.uss">@ddch.uss</a>.
      </div>
  </div>
</div>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'de familia'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
