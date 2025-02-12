<template>
    <div class="headers">
        <div class="profile">
            <div class="box_profile">
                <div class="version">
                    <v-icon name="md-verified-twotone" color="#080" class="icon" />
                    <span>v: {{ version }}</span>
                </div>
                <h1 class="subtitle">Consejería</h1>
                <div class="border-bottom"></div>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="scroll-container">
            <div class="box-item" v-for="(element, index) in data" :key="index">
                <h1 v-if="element.type === 'title'" class="mx-auto" style="text-align: center;">
                    {{ element.content[0] }}
                </h1>
                <h4 v-if="element.type === 'subtitle'" class="mx-auto" style="text-align: center;">
                    {{ element.content[0] }}
                </h4>
                <ul class="paragraph" v-if="element.type === 'paragraph'">
                    <li v-for="(item, idx) in element.content" :key="idx">{{ item }}</li>
                </ul>
                <div v-if="element.type === 'image'">
                    <div v-if="element.content">
                        <img :src="element.content" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CouselingServiceApi } from '../../../service/couselingService';

const counselingService = new CouselingServiceApi;
const data = ref([]);
const version = '0.0.1';

const getDataForRoute = async () => {
    const result = await counselingService.getDataStress();
    data.value = result;
};

onMounted(() => {
    getDataForRoute();
});
</script>

<style scoped>
img {
    width: 450px;
    margin: 30px 200px;
    border-radius: 16px;
}

h1 {
    font-family: "Montserrat Subrayada";
    color: #fff;
}

h4 {
    font-family: "Montserrat Subrayada";
    font-size: 24px;
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
    display: flex;
    background-color: rgba(15, 155, 15, 0.8);
    padding: 30px 0;
}

.headers .profile .box_profile {
    width: 100%;
}

.headers .profile .version {
    margin-top: -20px;
    color: #fff;
}

.version span {
    margin: 0 5px;
}

.headers .profile .box_profile .title,
.headers .profile .box_profile .subtitle {
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
}

.scroll-container {
    max-height: 520px;
    margin-left: 80px;
    border-radius: 16px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    background-color: rgba(70, 179, 70, .5);
    overflow-y: auto;
}

.box-item {
    padding: 10px 20px;
}

li {
    list-style: none;
    font-size: 16px;
    /* color: #fff; */
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 1300px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 650px;
        margin-left: 80px;
        border-radius: 0px;
        font-size: 16px;
    }

    li {
        font-size: 22px;
    }
}

@media screen and (max-width: 1024px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 1200px;
        margin-left: 80px;
        border-radius: 0px;
        font-size: 18px;
    }
}

@media screen and (max-width: 912px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 1200px;
        margin-left: 80px;
        border-radius: 0px;
        font-size: 16px;
    }

    h1,
    h4 {
        margin: 0 20px;
    }

    li {
        margin-right: 40px;
    }
}

@media screen and (max-width: 860px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 1100px;
        margin-left: 80px;
        border-radius: 0px;
        font-size: 16px;
    }

    img {
        width: 350px;
        margin: 10px 180px;
        border-radius: 16px;
    }
}

@media screen and (max-width: 820px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 1000px;
        margin-left: 80px;
        border-radius: 0px;
        font-size: 16px;
    }

    img {
        width: 350px;
        margin: 10px 180px;
        border-radius: 16px;
    }

    .box-item {
        padding: 10px;
    }
}

@media screen and (max-width: 800px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 790px;
        margin-left: 0px;
        border-radius: 0px;
        font-size: 16px;
    }

    img {
        width: 350px;
        margin: 10px 180px;
        border-radius: 16px;
    }

    .box-item {
        padding: 10px;
    }
}

@media screen and (max-width: 600px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 665px;
        margin-left: 0px;
        border-radius: 0px;
        font-size: 14px;
    }

    img {
        width: 250px;
        margin: 10px 50px;
        border-radius: 16px;
    }

    .box-item {
        padding: 10px;
    }

    li {
        font-size: 20px;
        margin-right: 20px;
    }
}

@media screen and (width: 540px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 490px;
        margin-left: 0px;
        border-radius: 0px;
        font-size: 14px;
    }

    img {
        width: 250px;
        margin: 10px 50px;
        border-radius: 16px;
    }
}

@media screen and (max-width: 400px) {
    img {
        width: 250px;
        margin: 10px 50px;
        border-radius: 16px;
    }

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        width: 100%;
        max-height: 450px;
        margin-left: 0px;
        border-radius: 0px;
        font-size: 12px;
    }

    .box-item {
        padding: 10px;
    }

    li {
        font-size: 16px;
        margin-right: 20px;
    }
}

@media screen and (width: 344px) {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 660px;
        margin-left: 0px;
        border-radius: 0px;
        font-size: 14px;
    }

    .box-item {
        padding: 10px;
        margin-right: 15px;
    }

    li {
        font-size: 20px;
        margin-right: 20px;
    }
}

@media screen and (height: 740px) {
    img {
        width: 250px;
        margin: 10px 50px;
        border-radius: 16px;
    }

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .scroll-container {
        max-height: 520px;
        margin-left: 0px;
        border-radius: 0px;
        font-size: 12px;
    }

    .box-item {
        padding: 10px;
    }
}
</style>