---
layout: page
title: Ramas
permalink: /ramas/
---

<div class="features ramas-grid">
  {% assign ramas_pages = site.ramas | sort: "title" %}
  {% for r in ramas_pages %}
    <div class="feature-card">
      <div class="icon">
        {% if r.title == "Derecho Administrativo" %}
          <i data-lucide="clipboard-list"></i>
        {% elsif r.title == "Derecho Aeronáutico" %}
          <i data-lucide="plane"></i>
        {% elsif r.title == "Derecho Ambiental" %}
          <i data-lucide="shrub"></i>
        {% elsif r.title == "Derecho Civil" %}
          <i data-lucide="user"></i>
        {% elsif r.title == "Derecho Comercial" %}
          <i data-lucide="shopping-bag"></i>
        {% elsif r.title == "Derecho Concursal" %}
          <i data-lucide="banknote-x"></i>
        {% elsif r.title == "Derecho Constitucional" %}
          <i data-lucide="pen-tool"></i>
        {% elsif r.title == "Derecho Económico" %}
          <i data-lucide="circle-dollar-sign"></i>
        {% elsif r.title == "Derecho Financiero" %}
          <i data-lucide="chart-no-axes-combined"></i>
        {% elsif r.title == "Derecho Internacional" %}
          <i data-lucide="earth"></i>
        {% elsif r.title == "Derecho Marítimo" %}
          <i data-lucide="ship"></i>
        {% elsif r.title == "Derecho Migratorio" %}
          <i data-lucide="tickets-plane"></i>
        {% elsif r.title == "Derecho Penal" %}
          <i data-lucide="gavel"></i>
        {% elsif r.title == "Derecho Procesal" %}
          <i data-lucide="landmark"></i>
        {% elsif r.title == "Derecho Societario" %}
          <i data-lucide="handshake"></i>
        {% elsif r.title == "Derecho Tributario" %}
          <i data-lucide="hand-coins"></i>
        {% elsif r.title == "Derecho de Familia" %}
          <i data-lucide="house-heart"></i>
        {% elsif r.title == "Derecho del Trabajo" %}
          <i data-lucide="briefcase-business"></i>
        {% else %}
          <!-- Placeholder circle SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        {% endif %}
      </div>
      <h3><a href="{{ r.url | relative_url }}">{{ r.title }}</a></h3>
    </div>
  {% endfor %}
</div>
