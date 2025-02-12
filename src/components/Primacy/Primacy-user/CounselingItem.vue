<template>
    <div class="content__body">
        <div class="headers">
            <div class="profile">
                <div class="version">
                    <v-icon name="md-verified-twotone" color="#080" class="icon" />
                    <span>v: {{ version }}</span>
                </div>
                <h1 class="text-center">Consejería</h1>
                <div class="border-bottom"></div>
            </div>
        </div>
        <div class="scroll-container">
            <div class="box-item">
                <div class="item mx-auto">
                    <router-link :to="{ name: 'fitness' }" type="button" class="group-item fitness">
                        <span class="item-text"><b>Ejercicios</b> </span>
                    </router-link>
                </div>
                <div class="item mx-auto">
                    <router-link :to="{ name: 'diet' }" type="button" class="group-item diet">
                        <span class="item-text"><b>Dietas</b> </span>
                    </router-link>
                </div>
                <div class="item mx-auto">
                    <router-link :to="{ name: 'stress' }" type="button" class="group-item stress">
                        <span class="item-text"><b>Estres</b> </span>
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
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    padding: 40px;
}

.box-item .item {
    margin: 20px;
    width: 300px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 2px solid #c3c3c3;
    border-radius: 16px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    transition: .5s;
}

.box-item .item .group-item {
    width: 300px;
    height: 180px;
    border-radius: 16px;
}

.fitness {
    background-image: url(/src/assets/poryects/assets-Primacy/fitness.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
}

.diet {
    background-image: url(/src/assets/poryects/assets-Primacy/breakfast.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
}

.stress {
    background-image: url(/src/assets/poryects/assets-Primacy/neutral_face.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
}

.item-text {
    width: 100%;
    height: 400px;
    line-height: 100px;
    color: #000;
    font-size: 28px;
    margin-left: 80px;
}

.box-item .item:hover {
    width: 350px;
    height: 200px;
}

.calendar {
    margin-left: 50px;
}

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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
    }

    .calendar {
        margin-left: 20px;
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
    }

    .calendar {
        margin-left: -20px;
    }
}

@media screen and (max-width: 800px) {
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
    }

    .calendar {
        margin-left: 10px;
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
        height: 200px;
        margin: 0;
        /* padding: 40px 15px; */
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

    .scroll-container {
        width: 100%;
        max-height: 650px;
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
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

    .scroll-container {
        width: 100%;
        max-height: 460px;
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
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
        height: 200px;
        margin: 0;
        /* padding: 40px 15px; */
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
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
        border: 2px solid #c3c3c3;
        border-radius: 16px;
        box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
        transition: .5s;
    }

    .calendar {
        display: none;
    }
}

@media screen and (height: 844px) {
    .scroll-container {
        width: 100%;
        max-height: 600px;
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
        max-height: 500px;
        margin-left: 0px;
        overflow-y: auto;
    }

    .calendar {
        display: none;
    }
}
</style>
