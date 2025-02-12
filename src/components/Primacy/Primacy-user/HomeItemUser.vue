<template>
    <div class="content__body">
        <div class="headers">
            <div class="profile">
                <div class="version">
                    <v-icon name="md-verified-twotone" color="#080" class="icon" />
                    <span>v: {{ version }}</span>
                </div>
                <h2 class="title">Hola! <b>{{ userName }}</b> es bueno verte de nuevo</h2>
                <div class="border-bottom"></div>
                <h1 class="subtitle">bienvenido</h1>
            </div>
        </div>
        <div class="scroll-container">
            <div class="box-item">
                <div class="item-paragraph mx-auto">
                    <p class="text">
                        En Primacy pensamos en la <b>practicidad y comodidad del paciente.</b> En esta seccion podras
                        encontrar y solicitar lo que necesite.
                    </p>
                </div>
                <div class="item mx-auto">
                    <router-link :to="{ name: 'seguimientos' }" type="button" class="group-item check">
                        <span class="item-text"><b>Seguimiento</b> </span>
                    </router-link>
                </div>
                <div class="item mx-auto">
                    <router-link :to="{ name: 'controls' }" type="button" class="group-item controls">
                        <span class="item-text"><b>Controles</b> </span>
                    </router-link>
                </div>
                <div class="item mx-auto">
                    <router-link :to="{ name: 'counseling' }" type="button" class="group-item counseling">
                        <span class="item-text"><b>Consejería</b> </span>
                    </router-link>
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

const userName = 'Nombre de usuario';
const version = '0.0.1';

onMounted(async () => {
    document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
    document.body.style.overflow = '';
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&display=swap');

h1 {
    font-family: "Montserrat Subrayada";
    color: #fff;
    text-align: center;
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
    height: 170px;
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
    height: 170px;
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

.headers .profile .title {
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

.scroll-container {
    width: 50%;
    height: 100vh;
    margin-left: 150px;
}

.box-item {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    padding: 50px;
}

.box-item .item {
    width: 300px;
    height: 180px;
    font-size: 30px;
    text-align: center;
    border: 2px solid #c3c3c3;
    border-radius: 16px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    transition: .5s;
}

.box-item .item .check {
    background-image: url(/src/assets/poryects/assets-Primacy/time_management.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
}

.box-item .item .controls {
    background-image: url(/src/assets/poryects/assets-Primacy/Dark_analytics_amico.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
    color: #fff;
}

.box-item .item .counseling {
    background-image: url(/src/assets/poryects/assets-Primacy/Health_profession.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
}

.box-item .item a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.item-text {
    margin: auto;
    color: #000;
    font-size: 28px;
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

.box-item .item:hover {
    width: 350px;
    height: 200px;
}

.calendar {
    margin-left: 50px;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 1300px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 50%;
        height: 100vh;
        margin-left: 50px;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto auto;
        gap: 50px;
        padding: 50px;
    }

    .box-item .item {
        width: 250px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        margin-left: 20px;
    }
}

@media screen and (height: 600px) {
    .scroll-container {
        width: 100%;
        max-height: 400px;
        margin-left: 0px;
        overflow-y: auto;
        margin-top: -150px;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
        padding: 10px;
    }
}

@media screen and (max-width: 1024px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 50%;
        height: 100vh;
        margin-left: 50px;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 50px;
        padding: 50px;
    }

    .box-item .item {
        width: 300px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        margin-left: 20px;
    }
}

@media screen and (max-width: 920px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 50%;
        height: 100vh;
        margin-left: 20px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
        padding: 50px;
    }

    .box-item .item {
        width: 250px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        margin-left: -20px;
    }
}

@media screen and (max-width: 800px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 50%;
        max-height: 750px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 50px;
        padding: 50px;
    }

    .box-item .item {
        width: 300px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        margin-left: 10px;
    }
}

@media screen and (max-width: 600px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 150px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 20px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 100%;
        max-height: 680px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 10px;
        padding: 10px;
    }

    .box-item .item {
        width: 300px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        display: none;
    }
}

@media screen and (width: 540px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 150px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 20px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 100%;
        max-height: 510px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 10px;
        padding: 10px;
    }

    .box-item .item {
        width: 300px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        display: none;
    }
}

@media screen and (max-width: 400px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 150px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 20px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 100%;
        max-height: 450px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 10px;
        padding: 10px;
    }

    .box-item .item {
        width: 300px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        display: none;
    }
}

@media screen and (width: 344px) {

    .headers,
    .headers .profile {
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0 0 28px 28px;
    }

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }

    .scroll-container {
        width: 100%;
        max-height: 620px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 10px;
        padding: 10px;
    }

    .box-item .item {
        width: 300px;
        height: 180px;
        font-size: 30px;
        text-align: center;
    }

    .calendar {
        display: none;
    }
}

@media screen and (height: 844px) {
    .scroll-container {
        width: 100%;
        max-height: 650px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .calendar {
        display: none;
    }
}

@media screen and (height: 740px) {
    .scroll-container {
        width: 100%;
        max-height: 540px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .calendar {
        display: none;
    }
}
</style>