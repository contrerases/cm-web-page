import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '@/views/InicioView.vue'
import HistoriaView from '@/views/nosostros/HistoriaView.vue'
import EquipoDirectivoView from '@/views/nosostros/EquipoDirectivoView.vue'
import EquipoDocenteView from '@/views/nosostros/EquipoDocenteView.vue'
import MisionVisionView from '@/views/nosostros/MisionVisionView.vue';
import PeiView from '@/views/nosostros/PeiView.vue';
import NoticiasView from '@/views/noticias/NoticiasView.vue';



const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: InicioView
  },

  {
    path: '/nosotros',
    name: 'Nosotros',

    children: [
      {
        path: '/historia',
        name: 'Historia',
        component: HistoriaView
      },

      {
        path: '/equipo-directivo',
        name: 'EquipoDirectivo',
        component: EquipoDirectivoView
      },

      {
        path: '/equipo-docente',
        name: 'EquipoDocente',
        component: EquipoDocenteView
      },

      {
        path: '/mision-vision',
        name: 'MisionVision',
        component: MisionVisionView
      },

      {
        path: '/proyecto_educativo-institucional',
        name: 'PEI',
        component: PeiView
      },
      
    ],
  },

  {
    path: '/reglamentos',
    name: 'Reglamentos',
    component: InicioView
    
  },

  {
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasView
  },

  {
    path: '/consejo-escolar',
    name: 'ConsejoEscolar',
    component: InicioView
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;