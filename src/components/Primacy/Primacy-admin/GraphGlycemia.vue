<template>
    <div>
        <div class="spinner" v-if="isLoading">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
        <div class="graph" v-else>
            <apexchart class="graphic_area" type="area" :options="chartOptions" :series="series" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);

const series = ref([
    {
        name: "Glycemia",
        data: [100, 80, 50, 110, 80, 100],
    },
    {
        name: "Referencia Nivel 1",
        data: Array(6).fill(140),
    },
    {
        name: "Referencia Nivel 2",
        data: Array(6).fill(70),
    },
]);

const chartOptions = ref({
    chart: {
        height: 350,
        type: "line",
    },
    yaxis: [{}],
    xaxis: {
        categories: [],
        labels: {
            style: {
                fontSize: "12px",
            },
        },
    },
    stroke: {
        curve: "smooth",
        width: [2, 2, 2, 2],
        dashArray: [2, 2, 2, 0],
    },
    colors: ["rgba(70, 179, 70)", "rgba(0, 0, 255, 0.2)", "rgba(255, 0, 0, 0.4)"],
    dataLabels: {
        enabled: false,
    },
});
</script>

<style scoped>
.graph {
    background-color: #fff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
}

.graphic_area {
    width: 100%;
}

.spinner {
    margin: 100px auto;
    width: 40px;
    height: 40px;
    position: relative;
}

.cube1,
.cube2 {
    background-color: #333;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
    animation-delay: -0.9s;
}

@keyframes sk-cubemove {
    25% {
        transform: translateX(42px) rotate(-90deg) scale(0.5);
    }
    50% {
        transform: translateX(42px) translateY(42px) rotate(-180deg);
    }
    75% {
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    }
    100% {
        transform: rotate(-360deg);
    }
}
</style>