<template>
    <div class="container">
        <div class="box-cards">
            <h4>Patologías</h4>
            <div v-if="isLoadingRef" class="spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="content-card">
                <div class="card-item pathology-card" v-for="pathology in pathologiesList" :key="pathology">
                    <div class="card-body">{{ pathology.name }}</div>
                </div>
            </div>
        </div>

        <div class="box-cards">
            <h4>Seguimiento:</h4>
            <div v-if="isLoadingRef" class="spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="content-card follow-up">
                <div class="card-item follow-up-card" v-for="attendant in cardsData" :key="attendant">
                    <div class="card-body">
                        <h5 class="card-title">Especialista: {{ attendant.attendantType }}</h5>
                        <h6 class="card-subtitle">Consulta: {{ attendant.summaryDate }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    userId: String,
    isLoading: Boolean,
    pathologiesList: Array,
    cardsData: Array
});

const isLoadingRef = ref(props.isLoading);

const pathologiesList = [
    { name: 'Hipotiroidismo' },
    { name: 'Asma' },
    { name: 'Artrosis' }
];

const cardsData = [
    {
        attendantType: 'Clínico',
        summaryDate: 'Diciembre 2024'
    },
    {
        attendantType: 'Laboratorio',
        summaryDate: 'Diciembre 2024'
    },
    {
        attendantType: 'Nutricionista',
        summaryDate: 'Diciembre 2024'
    },
    {
        attendantType: 'Endocrinologo',
        summaryDate: 'Diciembre 2024'
    },
    {
        attendantType: 'Neumologo',
        summaryDate: 'Mayo 2025'
    },
    {
        attendantType: 'Traumatologo',
        summaryDate: 'Diciembre 2024'
    },
]
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
}
.box-cards {
    width: 100%;
    margin-left: 40px;
}

.scroll-cards {
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
    padding: 20px;
}

.content-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.card-item {
    flex: 1 1 calc(50% - 20px);
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 920px) {
    .box-cards {
        margin-left: 10px;
    }

    .scroll-cards {
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        padding: 20px;
    }

    .content-card {
        width: 90%;
        margin-left: 0px;
    }
}
</style>