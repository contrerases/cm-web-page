<template lang="">
    <div class="relative w-full h-96 mb-6">
        <!-- Imagen con sombra negra interior -->
        <div class="absolute inset-0">
          <img
            src="@/assets/img/Inicio 1.png"
            alt="Noticias"
            class="w-full h-full object-cover shadow-xl"
          />
          <!-- Gradiente para la sombra negra interior -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black-70"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black-70"></div>
     
        </div>
        
        <div class="container mx-auto max-w-6xl px-6">
           <!-- Título sobre la imagen -->
        <h1 class="absolute  bottom-10 text-5xl font-bold  pl-4 text-primary-foreground border-l-6 border-primary shadow-2x">
          {{props.title}}
        </h1>

        </div>
      </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<style lang="">
    
</style>