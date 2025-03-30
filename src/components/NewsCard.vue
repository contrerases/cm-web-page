<template>
  <div class="max-w-sm bg-card rounded-xl shadow-XL overflow-hidden border border-border ">
    <!-- Imagen -->
    <img
      :src="noticia.image"
      :alt="noticia.title"
      class="w-full h-48 object-cover"
    />

    <!-- Contenido -->
    <div class="p-4">
      <!-- Título y Fecha -->
      <div class="mb-2">
        <h3 class="text-xl font-bold text-primary truncate">
          {{ noticia.title }}
        </h3>
        <p class="text-sm text-secondary">{{ noticia.date }}</p>
      </div>

      <!-- Descripción -->
      <p class="text-sm text-foreground mb-4 line-clamp-3">
        {{ noticia.description }}
      </p>

      <!-- Botón Leer Más -->
      <button
        class="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-secondary hover:text-success-foreground transition cursor-pointer"
      >
        Leer más
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type  Noticia from '@/interfaces/noticias_model.ts';

defineProps<{
  noticia: Noticia;
}>();

</script>