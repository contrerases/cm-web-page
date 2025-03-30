<template>
  <section class="bg-background pt-12 top-10 mt-10 mb-10">

    <TitleImage 
        title="Noticias"
    />
    
    <div class="container mx-auto max-w-6xl px-6">
      <!-- Transición para las noticias -->
      <div class="relative">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 transition-opacity duration-300"
          :class="isFading ? 'opacity-0' : 'opacity-100'"
          @transitionend="isFading = false"
        >
          <!-- Card de Noticia -->
          <NewsCard
            v-for="noticia in currentNoticias"
            :key="noticia.id"
            :noticia="noticia"
          />
        </div>
      </div>

      <!-- Paginación -->
      <div class="flex justify-center space-x-2">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded bg-secondary text-primary-foreground hover:bg-secondary/80 transition disabled:opacity-50 cursor-pointer"
        >
          Anterior
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-4 py-2 rounded transition',
            page === currentPage ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-secondary cursor-pointer'
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded bg-secondary text-primary-foreground hover:bg-secondary/80 transition disabled:opacity-50 cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import NewsCard from '@/components/NewsCard.vue';
import TitleImage from '@/components/TitleImage.vue';
import type  Noticia  from '@/interfaces/noticias_model.ts';

// Lista de noticias de ejemplo
const noticias = ref<Noticia[]>([
  { id: '1', image: '/path-to-image1.jpg', title: 'Noticia 1', date: '25 de abril de 2025', description: 'Descripción breve de la noticia 1.' },
  { id: '2', image: '/path-to-image2.jpg', title: 'Noticia 2', date: '24 de abril de 2025', description: 'Descripción breve de la noticia 2.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
  { id: '3', image: '/path-to-image3.jpg', title: 'Noticia 3', date: '23 de abril de 2025', description: 'Descripción breve de la noticia 3.' },
]);

const itemsPerPage = ref(9);
const currentPage = ref(1);
const isFading = ref(false);

const totalPages = computed(() => Math.ceil(noticias.value.length / itemsPerPage.value));
const currentNoticias = computed(() =>
  noticias.value.slice((currentPage.value - 1) * itemsPerPage.value, currentPage.value * itemsPerPage.value)
);

// Cambio de página con animación
const changePage = (newPage: number) => {
  isFading.value = true; // Activa el fade-out
  setTimeout(() => {
    currentPage.value = newPage;
    isFading.value = false; // Activa el fade-in
  }, 500); // Duración igual a `duration-500` en Tailwind
};

const prevPage = () => {
  if (currentPage.value > 1) changePage(currentPage.value - 1);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) changePage(currentPage.value + 1);
};

const goToPage = (page: number) => {
  changePage(page);
};
</script>