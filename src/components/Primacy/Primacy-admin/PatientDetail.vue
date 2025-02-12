<template>
    <div class="container">
        <div class="header" v-show="header">
            <div class="title">
                <h1>Datos de Usuario:</h1>
                <h3>{{ userName }}</h3>
            </div>
        </div>
        <div class="graphics">
            <div class="graphic-glycemia">
                <div class="glycemia_text">
                    <h5>Glucemia:</h5>
                    <span>{{ GraphDescription }}</span>
                </div>
                <div class="graph">
                    <GraphGlycemia :isLoading="isLoading" />
                </div>
            </div>
            <div class="graphic-pressure">
                <div class="pressure_text">
                    <h5>Presión:</h5>
                    <span>{{ GraphDescription }}</span>
                </div>
                <div class="graph">
                    <GraphPressure :isLoading="isLoading" />
                </div>
            </div>
        </div>
        <div class="container-info" v-show="info">
            <PathologieList :isLoading="isLoading" />
        </div>
    </div>
</template>

<script setup>
import {  onMounted, ref, defineProps } from 'vue';
import GraphGlycemia from './GraphGlycemia.vue';
import GraphPressure from './GraphPressure.vue';
import PathologieList from './PathologieList.vue';

const isLoading = ref(false);

const props = defineProps({
    userId: String,
    info: Boolean,
    btn: Boolean,
    header: Boolean
});

const userName = 'Nombre de usuario';
const GraphDescription = '22-enero/11-febrero';

onMounted(async () => {
    isLoading.value = true;
    isLoading.value = false;
});
</script>

<style scoped>
.header {
    width: 100%;
    height: 180px;
    padding: 50px 40px;
    border-radius: 28px;
    box-shadow: 0 10px 10px #0f9b0f;
}

.title {
    display: flex;
    align-items: center;
}

.title h3 {
    margin: 5px 20px;
    border-bottom: 2px solid #0f9b0f;
}

.graphics {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.graphic-glycemia,
.graphic-pressure {
    width: 600px;
    margin: 20px 40px;
}

.glycemia_text,
.pressure_text {
    display: flex;
}

.glycemia_text h5,
.pressure_text h5 {
    margin-right: 10px;
}

.container-info {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0px;
}

.box-list {
    width: 300px;
    padding: 15px;
    border-radius: 12px;
    margin-left: 100px;
}

.spinner {
    text-align: center;
    margin-top: 50px;
    margin-right: 200px;
    margin-left: 100px;
}

/* ----------------------------------------------------------------------------- */
/* ----------------------------- Código Responsivo ----------------------------- */
/* ----------------------------------------------------------------------------- */

@media screen and (max-width: 1024px) {
    .container {
        margin-left: 80px;
    }

    .header {
        width: 95%;
        height: 120px;
        padding: 40px;
    }

    .graphics {
        width: 95%;
    }

    .graphic-glycemia,
    .graphic-pressure {
        width: 450px;
        margin: 20px;
    }

    .graph {
        margin-left: -10px;
    }

    .content-card {
        margin-left: -20px;
    }
}

@media screen and (max-width: 920px) {
    .container {
        margin-left: 120px;
    }

    .header {
        width: 100%;
        height: 150px;
        padding: 40px;
    }

    .title {
        display: block;
        align-items: center;
    }

    .title h1 {
        width: 100%;
        text-align: center;
    }

    .title h3 {
        margin: auto;
        text-align: center;
    }

    .graphics {
        display: grid;
    }

    .graphic-glycemia,
    .graphic-pressure {
        width: 600px;
    }

    .container-info {
        display: grid;
    }

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
        margin-left: 0px;
    }

    .followUp {
        margin-bottom: 50px;
    }
}

@media screen and (max-width: 850px) {
    .container {
        margin-left: 80px;
    }

    .header {
        width: 95%;
        height: 150px;
        padding: 40px;
    }

    .graphics {
        width: 95%;
    }

    .graphic-glycemia,
    .graphic-pressure {
        width: 450px;
        margin: 20px;
    }

    .graph {
        margin-left: -10px;
    }

    .content-card {
        margin-left: -20px;
    }
}

@media screen and (max-width: 600px) {
    .container {
        margin-left: 0px;
    }

    .header {
        width: 100%;
        height: 110px;
        padding: 20px 40px;
    }

    .title {
        display: block;
        align-items: center;
    }

    .title h1 {
        width: 100%;
        text-align: center;
    }

    .title h3 {
        margin: auto;
        text-align: center;
    }

    .graphics {
        display: grid;
    }

    .graphic-glycemia,
    .graphic-pressure {
        width: 350px;
    }

    .container-info {
        display: grid;
    }

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
        margin-left: 0px;
    }

    .followUp {
        margin-bottom: 50px;
    }
}
</style>