<template>
    <section class="bg-background text-foreground py-12 mt-16">
        <TitleImage 
            title="Misión y Visión"
        />
        
        
    <div class="container mx-auto max-w-6xl px-6">
            <!-- Breadcrumbs -->
            <div class="mb-8">
              <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Contenido principal -->
                <div class="flex-1">
                    <!-- Texto principal -->
                    <div class="bg-card py-6 rounded-lg shadow-md text-justify space-y-12 mr-20">

                        
                        <!-- Misión -->
                        <section id="mision">
                            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Misión</h2>
                            <div class="flex justify-center mb-12">
                                <img src="" alt="Misión y Visión" class="w-full h-90 rounded-lg shadow-md"/>
                            </div>
                            <p>
                                El Colegio Mistral es una comunidad educativa que promueve el desarrollo integral de los estudiantes, 
                                fomentando su autonomía, creatividad y pensamiento crítico. Buscamos formar ciudadanos responsables, 
                                comprometidos con su entorno y capaces de enfrentar los desafíos del mundo actual.
                            </p>
                        </section>

                        <!-- Visión -->
                        <section id="vision">
                            <h2 class="text-4xl font-bold mb-12 text-secondary-foreground">Visión</h2>
                            <div class="flex justify-center mb-6">
                                <img src="" alt="Misión y Visión" class="w-full h-90 rounded-lg shadow-md"/>
                            </div>
                            <p>
                                Nuestra visión es ser un colegio inclusivo y de excelencia académica, donde cada estudiante se sienta valorado 
                                y motivado a alcanzar su máximo potencial. Aspiramos a ser un referente en educación en la región, promoviendo 
                                valores de respeto, solidaridad y compromiso social.
                            </p>
                        </section>
                    </div>
                </div>

                <aside class="w-full lg:w-64 bg-card  p-6 self-start pl-12  border-l border-border">
                    <h2 class="font-bold mb-4 uppercase">En esta seccion:</h2>
                    <ul class="space-y-3">
                      <li>
                        <a href="#mision" class="text-primary hover:underline font-semibold">
                          Misión
                        </a>
                      </li>
                      <li>
                        <a href="#vision" class="text-primary hover:underline font-semibold">
                          Visión
                        </a>
                      </li>
                    </ul>
                  </aside>
            </div>
    </div>
    </section>
    
</template>
<script setup lang="ts">
import TitleImage from '../../components/TitleImage.vue';
import Breadcrumbs from '../../components/Breadcrumbs.vue';

const breadcrumbs = [
  { label: 'Inicio', link: "{name : 'Inicio'}", underline: true },
  { label: 'Nosotros', link: '', underline: false },
  { label: 'Misión y Visión', link : '' , underline: false },
];

</script>
