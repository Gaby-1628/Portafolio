<template>
    <div>
        <div class="table_scroll-container">
            <div class="spinner" v-if="isLoading">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            <table class="table" v-else>
                <thead class="thead-fixed">
                    <tr class="text-center">
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>{{ name }}</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <template v-if="dataTable.length > 0">
                        <tr v-for="(item, index) in dataTable" :key="index">
                            <td style="width: 25%;">{{ item.datestamp }}</td>
                            <td style="width: 25%;">{{ item.timestamp }}</td>
                            <td style="width: 25%;">{{ item.value }}</td>
                        </tr>
                    </template>
                    <tr v-else>
                        <td colspan="3">No hay datos disponibles</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isLoading: Boolean,
    dataTable: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        default: 'Glucemia'
    }
});
</script>

<style scoped>
.table_scroll-container {
    width: 550px;
    max-height: 350px;
    overflow-y: auto;
    border-radius: 8px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
}

.thead-fixed {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
}

.spinner {
    margin: 100px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
}

.spinner>div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

.spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {

    0%,
    40%,
    100% {
        -webkit-transform: scaleY(0.4)
    }

    20% {
        -webkit-transform: scaleY(1.0)
    }
}

@keyframes sk-stretchdelay {

    0%,
    40%,
    100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }

    20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 900px) {
    .table_scroll-container {
        width: 600px;
        max-height: 300px;
        overflow-y: auto;
        border-radius: 8px;
    }

    .thead-fixed {
        font-size: 14px;
    }
}

@media screen and (max-width: 800px) {
    .table_scroll-container {
        width: 600px;
        max-height: 150px;
        overflow-y: auto;
        border-radius: 8px;
    }

    .thead-fixed {
        font-size: 14px;
    }
}

@media screen and (max-width: 600px) {
    .table_scroll-container {
        width: 350px;
        max-height: 150px;
        overflow-y: auto;
        border-radius: 8px;
    }

    .thead-fixed {
        font-size: 14px;
    }

    tr td {
        font-size: 12px;
    }
}

@media screen and (width: 540px) {
    .table_scroll-container {
        width: 500px;
        max-height: 150px;
        overflow-y: auto;
        border-radius: 8px;
    }
}

@media screen and (max-width: 400px) {
    .table_scroll-container {
        width: 350px;
        max-height: 100px;
        overflow-y: auto;
        border-radius: 8px;
    }

    .thead-fixed {
        font-size: 12px;
    }

    tr td {
        font-size: 12px;
    }
}
</style>