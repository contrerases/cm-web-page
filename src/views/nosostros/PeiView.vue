<template>
    <section class="bg-background text-foreground py-12 mt-16">
      <!-- Título con imagen -->
      <TitleImage title="Proyecto Educativo Institucional" />
  
      <div class="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-8">
        <!-- Contenido principal -->
        <div class="flex-1">
          <!-- Breadcrumbs -->
          <Breadcrumbs :breadcrumbs="breadcrumbs" />
  
          <!-- Texto principal -->
          <div class="bg-card py-6 px-6 rounded-lg shadow-md text-justify space-y-12">
            <!-- Introducción -->
            <section id="introduccion">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Introducción</h2>
              <p>
                El Proyecto Educativo Institucional (PEI) del Colegio Mistral es un documento que guía la vida institucional
                de la comunidad educativa. Es revisado anualmente y busca garantizar el desarrollo integral de los estudiantes.
              </p>
            </section>
  
            <!-- Misión -->
            <section id="mision">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Misión</h2>
              <p>
                Formar personas capaces de enfrentar y transformar la sociedad con justicia e igualdad, promoviendo valores
                que caracterizan el espíritu mistraliano.
              </p>
            </section>
  
            <!-- Visión -->
            <section id="vision">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Visión</h2>
              <p>
                Desarrollar habilidades del siglo XXI en toda la comunidad educativa, fomentando la creatividad, autonomía y
                sensibilidad social.
              </p>
            </section>
  
            <!-- Objetivos -->
            <section id="objetivos">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Objetivos</h2>
              <p>
                Promover el desarrollo integral de los estudiantes en áreas artísticas, deportivas, sociales y valóricas,
                preparándolos para construir una sociedad más justa y digna.
              </p>
            </section>
  
            <!-- Valores -->
            <section id="valores">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Valores Institucionales</h2>
              <ul class="list-disc pl-5">
                <li>Respeto</li>
                <li>Responsabilidad</li>
                <li>Solidaridad</li>
                <li>Humildad</li>
                <li>Perseverancia</li>
              </ul>
            </section>
          </div>
        </div>
  
        <!-- Navegación lateral -->
        <aside class="w-full lg:w-64 bg-card rounded-lg shadow-md p-6 self-start">
          <h2 class="text-xl font-bold mb-4">Secciones</h2>
          <ul class="space-y-3">
            <li>
              <a href="#introduccion" class="text-primary hover:underline">Introducción</a>
            </li>
            <li>
              <a href="#mision" class="text-primary hover:underline">Misión</a>
            </li>
            <li>
              <a href="#vision" class="text-primary hover:underline">Visión</a>
            </li>
            <li>
              <a href="#objetivos" class="text-primary hover:underline">Objetivos</a>
            </li>
            <li>
              <a href="#valores" class="text-primary hover:underline">Valores</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import TitleImage from '@/components/TitleImage.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  
  const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Nosotros', link: '/nosotros', underline: false },
    { label: 'Proyecto Educativo Institucional', link: '/nosotros/pei', underline: false },
  ];
  </script>