<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <!-- Título con imagen -->
    <TitleImage title="Historia" />

    <div class="container mx-auto max-w-6xl px-6">
      <!-- Breadcrumbs -->
      <div class="mb-8">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Contenido principal -->
        <div class="flex-1">
          <!-- Video -->
          <div id="fundacion" class="rounded-lg shadow-md overflow-hidden mb-6">
            <video controls class="w-full h-auto rounded-lg border border-border">
              <source src="" type="video/mp4" />
              Tu navegador no soporta este formato de video.
            </video>
          </div>

          <!-- Texto principal -->
          <div class="bg-card py-6 rounded-lg shadow-md text-justify space-y-12">
            <!-- Fundación y Propósito -->
            <section id="fundacion">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Fundación y Propósito</h2>
              <p>
                El Colegio Mistral nace en el año <strong>1998</strong> a partir del sueño de los profesores básicos municipales
                <strong>Hugo Martínez Cabello</strong> y <strong>Mireya Pavez Riveros</strong>, quienes buscaban consagrar la educación como
                un medio para alcanzar la realización personal y colectiva de los niños y jóvenes de <strong>Las Cabras</strong>.
                Este sueño comenzó con <strong>84 estudiantes</strong>, docentes, asistentes comprometidos y familias que apoyaron
                la propuesta educativa expresada en el <strong>Proyecto Educativo Institucional (PEI)</strong>.
              </p>
            </section>

            <!-- Reconocimiento Oficial -->
            <section id="reconocimiento">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Reconocimiento Oficial</h2>
              <p>
                El Colegio Mistral fue reconocido oficialmente por el <strong>Estado de Chile</strong> como un establecimiento educacional
                Particular Subvencionado mediante la <strong>Resolución Exenta N° 158 del 02 de febrero de 1998</strong>.
              </p>
            </section>

            <!-- Inspiración en Gabriela Mistral -->
            <section id="gabriela">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Inspiración en Gabriela Mistral</h2>
              <p>
                La inspiración del Colegio está cimentada en la vida y obra de la poeta nacional <strong>Gabriela Mistral</strong>. Para ella, la
                educación es un proceso vivo de aprendizaje centrado en "aprender a aprender". Sus ideas giran en torno a la libertad,
                autonomía y emancipación.
              </p>
              <p>
                Gabriela Mistral afirmó: "Todos tienen derecho a una educación de calidad, pobres y ricos". También expresó:
                "Solo la educación es capaz de expresar el sentimiento y tatuar los deberes en la mitad del pecho humano."
              </p>
            </section>

            <!-- Ingreso al Sistema de Gratuidad -->
            <section id="gratuidad">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Ingreso al Sistema de Gratuidad</h2>
              <p>
                Desde el año <strong>2017</strong>, el Colegio Mistral forma parte del sistema de gratuidad y es sostenido por la
                <strong>Fundación Educacional Martínez Pavez</strong>. Su RBD es <strong>15624-8</strong>.
              </p>
            </section>

            <!-- Compromiso y Desarrollo Integral -->
            <section id="desarrollo">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Compromiso y Desarrollo Integral</h2>
              <p>
                El Colegio promueve un desarrollo integral para sus estudiantes, destacando actividades deportivas y culturales
                que mejoran el desarrollo cognitivo. Los docentes y asistentes muestran un gran compromiso con el PEI, logrando
                la confianza y credibilidad de la comunidad mistraliana.
              </p>
            </section>
          </div>
        </div>

        <!-- Aside: Navegación interna -->
        <aside class="w-full lg:w-64 bg-card  p-6 self-start pl-12  border-l border-border">
          <h2 class="font-bold mb-4 uppercase">En esta seccion:</h2>
          <ul class="space-y-3">
            <li>
              <a href="#fundacion" class="text-primary hover:underline font-semibold">
                Fundación y Propósito
              </a>
            </li>
            <li>
              <a href="#reconocimiento" class="text-primary hover:underline font-semibold">
                Reconocimiento Oficial
              </a>
            </li>
            <li>
              <a href="#gabriela" class="text-primary hover:underline font-semibold">
                Inspiración en Gabriela Mistral
              </a>
            </li>
            <li>
              <a href="#gratuidad" class="text-primary hover:underline font-semibold">
                Ingreso al Sistema de Gratuidad
              </a>
            </li>
            <li>
              <a href="#desarrollo" class="text-primary hover:underline font-semibold">
                Compromiso y Desarrollo Integral
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
  { label: 'Inicio', link: '/', underline: true },
  { label: 'Nosotros', link: '', underline: false },
  { label: 'Historia', link: '/nosotros/historia', underline: false },
];
</script>