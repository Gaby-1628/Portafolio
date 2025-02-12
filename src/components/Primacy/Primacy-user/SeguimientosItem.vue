<template>
    <div class="content__body">
        <div class="headers">
            <div class="profile">
                <div class="version">
                    <v-icon name="md-verified-twotone" color="#080" class="icon" />
                    <span>v: {{ version }}</span>
                </div>
                <h1 class="subtitle">Próximos turnos</h1>
                <div class="border-bottom"></div>
            </div>
        </div>
        <div class="main">
            <div class="scroll-container">
                <div class="box-card">
                    <div v-for="card in cardsData" :key="card" class="card mx-auto">
                        <img :src="card.icon" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{ card.attendantType }}</h5>
                            <span class="card-text">{{ card.summaryDate }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="calendar">
            <CalendarItem />
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import CalendarItem from './CalendarItem.vue';

const version = '0.0.1';

const cardsData = [
    {
        icon: '/src/assets/poryects/assets-Primacy/clínico.svg',
        attendantType: 'Clínico',
        summaryDate: 'Diciembre 2025'
    },
    {
        icon: '/src/assets/poryects/assets-Primacy/laboratory.svg',
        attendantType: 'Laboratorio',
        summaryDate: 'Diciembre 2025'
    },
    {
        icon: '/src/assets/poryects/assets-Primacy/cardiologist.svg',
        attendantType: 'Cardiologo',
        summaryDate: 'Diciembre 2025'
    },
    {
        icon: '/src/assets/poryects/assets-Primacy/endocrinologo.svg',
        attendantType: 'Endocrinologo',
        summaryDate: 'Diciembre 2025'
    },
    {
        icon: '/src/assets/poryects/assets-Primacy/lungs.svg',
        attendantType: 'Neumologo',
        summaryDate: 'Mayo 2025'
    },
    {
        icon: '/src/assets/poryects/assets-Primacy/radiography.svg',
        attendantType: 'Traumatologo',
        summaryDate: 'Diciembre 2025'
    },
];

onMounted(async () => {
    document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
    document.body.style.overflow = '';
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&display=swap');

.card {
    width: 250px;
    background-color: rgba(70, 179, 70, .2);
    backdrop-filter: blur(16px);
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

h1 {
    font-family: "Montserrat Subrayada";
    color: #fff;
    margin: 10px 0;
}

a {
    text-decoration: none;
}

.content__body {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.headers {
    width: 100%;
    height: 172px;
    margin-left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    background-image: url(/src/assets/poryects/assets-Primacy/App_data.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.headers .profile {
    width: 100%;
    height: 172px;
    background-color: rgba(15, 155, 15, 0.8);
    padding: 30px 0;
}

.headers .profile .version {
    margin-top: -20px;
    color: #fff;
}

.version span {
    margin: 0 5px;
}

.headers .profile .title,
.headers .profile .subtitle {
    width: 60%;
    text-align: center;
    color: #fff;
}

.border-bottom {
    width: 50%;
    height: 4px;
    background-color: #fff;
    margin-bottom: 20px;
    margin-left: 120px;
}

.main {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-item {
    display: flex;
    margin-left: 120px;
    margin-bottom: 180px;
}

.box-item .item-paragraph {
    width: 300px;
    height: 180px;
    font-size: 30px;
    text-align: center;
    border: 2px solid #c3c3c3;
    border-radius: 16px;
    box-shadow: 0 10px 16px rgba(18, 159, 51, 0.8);
    transition: .5s;
}

.box-item .item-paragraph .text {
    margin: 28px;
    font-size: 16px;
}

.scroll-container {
    max-height: 550px;
    overflow-y: auto;
    margin-top: -150px;
    transform: translateX(10%);
}

.box-card {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    padding: 40px;
}

.calendar {
    margin-left: 50px;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 1300px) {
    .content__body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile {
        width: 100%;
        height: 200px;
        background-color: rgba(15, 155, 15, .7);
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0px;
    }

    .scroll-container {
        max-height: 550px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto auto;
    }

    .calendar {
        display: none;
    }
}

@media screen and (max-height: 600px) {
    .scroll-container {
        max-height: 600px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
    }

    .box-card {
        grid-template-columns: auto auto;
    }

    .calendar {
        display: block;
        margin-left: 300px;
        transform: translateY(-36%);
    }
}

@media screen and (max-width: 1024px) {
    .box-item {
        display: none;
    }

    .scroll-container {
        max-height: 1100px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto auto;
    }

    .calendar {
        display: none;
    }
}

@media screen and (max-width: 920px) {
    .content__body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile {
        width: 100%;
        height: 200px;
        background-color: rgba(15, 155, 15, .7);
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title,
    .headers .profile .subtitle {
        width: 100%;
        text-align: center;
        color: #fff;
    }

    .border-bottom {
        width: 50%;
        height: 4px;
        background-color: #fff;
        margin-bottom: 20px;
        margin: auto;
    }

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0px;
        margin-right: 0px;
    }

    .scroll-container {
        max-height: 1100px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto auto;
    }

    .calendar {
        display: none;
    }
}

@media screen and (max-width: 820px) {
    .box-item {
        display: none;
    }

    .scroll-container {
        max-height: 1000px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(8%);
    }
}

@media screen and (max-width: 800px) {
    .box-item {
        display: none;
    }

    .scroll-container {
        max-height: 750px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }
}

@media screen and (max-width: 600px) {
    .content__body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 150px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile {
        width: 100%;
        height: 150px;
        background-color: rgba(15, 155, 15, .7);
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title,
    .headers .profile .subtitle {
        width: 100%;
        text-align: center;
        color: #fff;
    }

    .border-bottom {
        width: 50%;
        height: 4px;
        background-color: #fff;
        margin-bottom: 20px;
        margin: auto;
    }

    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0px;
    }

    .box-item {
        display: block;
        margin-left: 0;
    }

    .scroll-container {
        max-height: 650px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto;
    }

    .card {
        width: 250px;
    }

    .calendar {
        display: none;
    }
}

@media screen and (width: 540px) {
    .content__body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile {
        width: 100%;
        height: 200px;
        background-color: rgba(15, 155, 15, .7);
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .box-item {
        display: none;
    }

    .scroll-container {
        max-height: 450px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto auto;
    }

    .card {
        width: 200px;
    }

    .calendar {
        display: none;
    }
}

@media screen and (max-width: 400px) {
    .content__body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 150px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile {
        width: 100%;
        height: 150px;
        background-color: rgba(15, 155, 15, .7);
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title,
    .headers .profile .subtitle {
        width: 100%;
        text-align: center;
        color: #fff;
    }

    .border-bottom {
        width: 50%;
        height: 4px;
        background-color: #fff;
        margin-bottom: 20px;
        margin: auto;
    }

    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0px;
    }

    .box-item {
        display: block;
        margin-left: 0px;
        z-index: 10;
    }

    .box-item .item-paragraph {
        width: 250;
        height: 120px;
        font-size: 20px;
    }

    .box-item .item-paragraph .text {
        margin: 20px;
        font-size: 14px;
    }

    .scroll-container {
        max-height: 450px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto;
    }

    .card {
        width: 250px;
    }

    .card-img-top {
        height: 100px;
        object-fit: cover;
    }

    .calendar {
        display: none;
    }
}

@media screen and (width: 344px) {
    .content__body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 150px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile {
        width: 100%;
        height: 150px;
        background-color: rgba(15, 155, 15, .7);
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        max-height: 650px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto;
    }

    .calendar {
        display: none;
    }
}

@media screen and (height: 844px) {
    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0px;
    }



    .calendar {
        display: none;
    }
}

@media screen and (height: 740px) {
    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0px;
    }

    .scroll-container {
        max-height: 520px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: 10px;
        transform: translateX(0%);
    }

    .box-card {
        grid-template-columns: auto;
    }

    .calendar {
        display: none;
    }
}
</style>
