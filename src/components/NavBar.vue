<template>
  <nav class="text-primary bg-background shadow-md fixed top-0 w-full z-50 border border-border">
    <div class="container mx-auto flex justify-between items-center px-6 py-4 rounded-b-lg">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="@/assets/img/icono.png" alt="Logo" class="h-20 w-auto" />
        <h1 class="font-semibold text-2xl text-foreground font-inter select-none">Colegio Mistral</h1>
      </div>

      <!-- Links de navegación -->
      <ul class="flex space-x-6 font-medium text-foreground relative h-full">
        <!-- Inicio -->
        <li>
          <router-link :to="{ name: 'Inicio' }" class="hover:text-primary  transition uppercase">
            Inicio
          </router-link>
        </li>

        <!-- Nosotros -->
        <li class="relative group">
          <span class="hover:text-primary transition uppercase cursor-pointer group-hover:text-primary">Nosotros</span>
          <!-- Dropdown -->
          <ul
            class="absolute left-0 bg-background shadow-xl rounded-lg p-3 hidden group-hover:block border border-border w-auto whitespace-nowrap"
          >
            <li>
              <router-link :to="{ name: 'Historia' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Historia
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'MisionVision' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Misión y Visión
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PEI' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Proyecto Educativo Institucional
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'EquipoDocente' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Equipo Docente
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'EquipoDirectivo' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Equipo Directivo
              </router-link>
            </li>
          </ul>
        </li>
        <!-- Reglamento -->
        <li class="relative group">
          <span class="hover:text-primary transition uppercase cursor-pointer group-hover:text-primary">Reglamento</span>
          <!-- Dropdown -->
          <ul
            class="absolute left-0 bg-background shadow-lg rounded-lg p-3 hidden group-hover:block w-auto whitespace-nowrap border border-border "
          >
            <li>
              <router-link :to="{ name: 'Inicio' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Reglamento Interino 2025
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Inicio' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Protocolos
              </router-link>
            </li>
          </ul>
        </li>

        <!-- Consejo Escolar -->
        <li class="relative group">
          <span class="hover:text-primary transition uppercase cursor-pointer">Consejo Escolar</span>
          <!-- Dropdown -->
          
        </li>

        <!-- Noticias -->
        <li>
          <router-link :to="{ name: 'Noticias' }" class="hover:text-primary transition uppercase">
            Noticias
          </router-link>
        </li>
      </ul>

      <!-- Botón de acción -->
      <button
        class="bg-transparent text-primary-foreground py-2 px-6 rounded-lg font-medium"
      >
       
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>