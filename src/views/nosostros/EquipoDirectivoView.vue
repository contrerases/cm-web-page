<template lang="">
    <section class="bg-background pt-12 top-10 mt-10 mb-10">
        <TitleImage
            title="Equipo Directivo"
            image="https://res.cloudinary.com/dqj0v1x8g/image/upload/v1698236482/IMG_20231024_123028_1_1_1_1_1_1_1_1_1_1_1_1_1_1.jpg"
            alt="Imagen de equipo directivo"
        />

        <div class="container mx-auto max-w-6xl px-6">
            <div class="flex items-center justify-center gap-20">
                <DirectivaCard
                    v-for="(member, index) in direccion"
                    :key="index"
                    :directiva="member"
                />
            </div>
            <div class="flex items-center justify-center gap-20 mt-10">
                <DirectivaCard
                    v-for="(member, index) in utp"
                    :key="index"
                    :directiva="member"
                />
            </div>
            <div class="flex items-center justify-center gap-20 mt-10">
                <DirectivaCard
                    v-for="(member, index) in convivencia_escolar"
                    :key="index"
                    :directiva="member"
                />
            </div>
            <div class="flex items-center justify-center gap-20 mt-10">
                <DirectivaCard
                    v-for="(member, index) in inspectores"
                    :key="index"
                    :directiva="member"
                />
            </div>
            
        </div>

    </section>
    


</template>
<script lang="ts" setup>
import TitleImage from '../../components/TitleImage.vue';
import DirectivaCard from '../../components/DirectivaCard.vue';

interface DirectivaCardProps {
    image: string;
    name: string;
    position: string;
  }


const direccion : DirectivaCardProps[] = [
    {
        name: 'Hugo Martinez Cabello',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'Director',
    }, 
    {
        name: 'Sandra Navarro Donoso',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'Directora Académica',
    },
];

const utp : DirectivaCardProps[] = [
    {
        name: 'Danitza Vargas Fuentes',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'UTP (Pre-Básica)',
    }, 
    {
        name: 'M. Angelica Castro Romero',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'UTP (Básica)',
    },
    {
        name: 'Esteban Hernandez Donoso',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'UTP (Media)',
    },
];
const convivencia_escolar : DirectivaCardProps[] = [
    {
        name: 'M. Teresa Cartagena',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',        
        position: 'Encargada de Convivencia (Media)',
    }, 
    {
        name: 'Pamela Urra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'Encargada de Convivencia (Básica)',
    },
];

const inspectores : DirectivaCardProps[] = [
    {
        name: 'Ingrid Nuñez Ramirez',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        position: 'Inspectora General (Media)',
    }, 
  

];

</script>
