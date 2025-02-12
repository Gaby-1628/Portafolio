<template>
    <div class="content__body">
        <div class="headers">
            <div class="profile">
                <div class="version">
                    <v-icon name="md-verified-twotone" color="#080" class="icon" />
                    <span>v: {{ version }}</span>
                </div>
                <h1 class="text-center">Controles</h1>
                <div class="border-bottom"></div>
            </div>
        </div>
        <div class="scroll-container">
            <div class="box-item">
                <div class="item mx-auto">
                    <router-link :to="{ name: 'glycemia' }" type="button" class="group-item glycemia">
                        <span class="item-text"><b>Glucemia</b> </span>
                    </router-link>
                </div>
                <div class="item mx-auto">
                    <router-link :to="{ name: 'pressure' }" type="button" class="group-item pressure">
                        <span class="item-text"><b>Tension Arterial</b> </span>
                    </router-link>
                </div>
            </div>
            <div class="calendar">
                <CalendarItem />
            </div>
        </div>
    </div>
</template>

<script setup>
import CalendarItem from './CalendarItem.vue';

const version = '0.0.1';
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
    width: 100%;
    height: 100vh;
    display: flex;
    margin-left: 150px;
}

.box-item {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.box-item .item .glycemia {
    background-image: url(/src/assets/poryects/assets-Primacy/Dark_analytics_bro.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
}

.box-item .item .pressure {
    background-image: url(/src/assets/poryects/assets-Primacy/Dark_analytics_pana.svg);
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

.glycemia .item-text {
    margin-top: 28px;
    color: #fff;
    font-size: 28px;
}

.pressure .item-text {
    width: 50%;
    display: flex;
    margin: 28px 0 0 50px;
    color: #fff;
    font-size: 28px;
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
        /* color: #000; */
        text-align: center;
    }

    /* .headers .profile h1 {
        color: #000;
    } */

    .scroll-container {
        width: 100%;
        height: 100vh;
        display: flex;
        margin-left: 380px;
    }

    .box-item {
        width: 20%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 40px;
    }

    .glycemia .item-text {
        margin-top: 10px;
        color: #fff;
        font-size: 28px;
    }

    .pressure .item-text {
        width: 50%;
        display: flex;
        margin: 10px 0 0 50px;
        color: #fff;
        font-size: 28px;
    }

    .calendar {
        margin-left: 130px;
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
        width: 100%;
        height: 100vh;
        display: flex;
        margin-left: 300px;
    }

    .box-item {
        width: 20%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .box-item .item {
        margin: 5px 0;
    }

    .glycemia .item-text {
        margin-top: 10px;
        color: #fff;
        font-size: 28px;
    }

    .pressure .item-text {
        width: 50%;
        display: flex;
        margin: 10px 0 0 50px;
        color: #fff;
        font-size: 28px;
    }

    .calendar {
        margin-left: 45px;
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
        width: 100%;
        height: 100vh;
        display: flex;
        margin-left: 50px;
    }

    .box-item {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .glycemia .item-text {
        margin-top: 28px;
        color: #fff;
        font-size: 28px;
    }

    .pressure .item-text {
        width: 50%;
        display: flex;
        margin: 28px 0 0 50px;
        color: #fff;
        font-size: 28px;
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
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }

    .box-item {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .glycemia .item-text {
        margin-top: 28px;
        color: #fff;
        font-size: 28px;
    }

    .pressure .item-text {
        width: 50%;
        display: flex;
        margin: 28px 0 0 50px;
        color: #fff;
        font-size: 28px;
    }

    .calendar {
        display: none;
    }
}

@media screen and (width: 540px) {
    .scroll-container {
        max-height: 450px;
        overflow-y: auto;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .glycemia .item-text {
        margin-top: 28px;
        color: #fff;
        font-size: 28px;
    }

    .pressure .item-text {
        width: 50%;
        display: flex;
        margin: 28px 0 0 50px;
        color: #fff;
        font-size: 28px;
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

    .headers .profile .title {
        margin: 10px;
        font-size: 20px;
        color: #fff;
        text-align: center;
    }

    .headers .profile h1 {
        color: #fff;
    }

    .scroll-container {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }

    .box-item {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .box-item .item {
        margin: 20px;
        width: 300px;
        height: 170px;
    }

    .box-item .item .group-item {
        width: 300px;
        height: 170px;
        border-radius: 16px;
    }

    .glycemia .item-text {
        margin-top: 10px;
        color: #fff;
        font-size: 28px;
    }

    .pressure .item-text {
        width: 50%;
        display: flex;
        margin: 10px 0 0 50px;
        color: #fff;
        font-size: 28px;
    }

    .calendar {
        display: none;
    }
}
</style>
