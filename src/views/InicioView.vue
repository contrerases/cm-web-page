<template>
  <div
    class="min-h-screen bg-cover bg-center text-foreground flex flex-col items-center justify-center relative"
  >
    
      <!-- Imagen de fondo -->
     <div class="absolute inset-0 bg-cover bg-center">
        <img
          src="@/assets/img/Screenshot_1.png"
          alt="Fondo"
          class="w-full max-h-screen h-screen blur-sm object-cover"
        />
      </div>

    <!-- Filtro de color -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Encabezado -->
    <header class="text-center mb-8 p-12 rounded-lg z-10">
      <img
        src="@/assets/img/icono.png"
        alt="Logotipo"
        class="mx-auto mb-4 h-64 w-auto rounded-full shadow-2xl"
      />
      <h1 class="text-5xl font-bold text-primary-foreground uppercase">
        ¡Bienvenido a la comunidad Colegio Mistral!
      </h1>
      <p class="text-2xl text-primary-foreground mt-2 ">
        Formando personas autónomas, creativas y con sensibilidad social.
      </p>
    </header>

    <!-- Contenido principal -->
    <main class="z-10">
      <button
        class="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-80 cursor-pointer shadow-2xl"
        @click=""
      >
        Quiénes somos
      </button>
    </main>

    <!-- Pie de página -->
    <footer class="mt-12 text-sm bg-opacity-80 p-4 rounded-lg z-10 text-primary-foreground">
      <p>&copy; 2025 Colegio Mistral. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>


