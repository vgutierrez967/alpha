---
layout: page
title: "Derecho del Trabajo"
permalink: /ramas/laboral/
definiciones:
  - texto: "Ordenación jurídica del trabajo prestado por cuenta ajena en condiciones de dependencia o subordinación."
---

<!-- Example definition card - you can reuse your lema layout style manually here -->
<div class="definition">
  <div style="display:flex; align-items:flex-start;">
    <div style="width:-2rem; height:2rem; background:#ffffff; color:white; border-radius:999px; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:0.75rem;">
    </div>
    <div>
    <p style="text-align: justify">
      "Regulación jurídica del trabajo subordinado, de las organizaciones colectivas de promoción, defensa y negociación de mejores condiciones de trabajo, y de las instituciones estatales como la Dirección del Trabajo o el ministerio del ramo encargado de fiscalizar el cumplimiento de la legislación laboral, y de la elaboración y aplicación de las políticas del trabajo." </p>
    <p style="text-align: right"><em>-Sergio Gamonal Contreras</em></p>
    </div>
  </div>
</div>

<h2>El Derecho del Trabajo se estructura en</h2>
  <ul>
  <li><a href="/lemas/derecho-individual-del-trabajo/">Derecho individual del trabajo</a>: Regula las relaciones laborales individuales.</li>
  <li><a href="/lemas/derecho-colectivo-del-trabajo/">Derecho colectivo del trabajo</a>: Regula las relaciones colectivas, destacando lo relativo a derecho sindical y procedimientos de negociación colectiva.</li>
  <li><a href="/lemas/derecho-administrativo-del-trabajo/">Derecho administrativo del trabajo</a>: Estudia la normativa que regula la actividad fiscalizadora del cumplimiento de la legislación laboral (Dirección del Trabajo).</li>
  <li><a href="/lemas/derecho-de-la-seguridad-social/">Derecho de la seguridad social</a>: Principios y normas que regulan la administración y gestión del sistema de cobertura de los estados de necesidad, la constitución y funcionamiento de estos sistemas.</li>
  </ul>

### Lemas pertenecientes a esta rama

<ul>
  {% assign lemas_in_rama = site.lemas | where_exp: "l", "l.ramas contains 'laboral'" %}
  {% for l in lemas_in_rama %}
    <li><a href="{{ l.url | relative_url }}">{{ l.title }}</a></li>
  {% endfor %}
</ul>
