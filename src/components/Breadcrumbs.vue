<template>
    <nav aria-label="breadcrumb" class="flex items-center text-sm space-x-1 text-foreground border-l-6 border-secondary pl-4 mb-16 mt-10 w-full">
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <span v-if="index > 0" class="text-gray-500">»</span> 
        <router-link
          v-if="index < breadcrumbs.length - 1"
          :to="breadcrumb.link"
          class="text-primary text-sm"
          :class="{ 'hover:underline': breadcrumb.underline }"
        >
          {{ breadcrumb.label }}
        </router-link>
        <span v-else class="text-secondary font-bold"> 
          {{ breadcrumb.label }}
        </span>
      </template>
    </nav>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    breadcrumbs: {
      type: Array as () => { label: string; link: string, underline: boolean }[], 
      required: true,
    },
  });
  </script>
  
 