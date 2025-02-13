<template>
    <div class="barra-lateral" :class="{ 'mini-barra-lateral': !isMiniBarraLateral }">
        <div class="menu-icon" @click="toggleBarraLateral">
            <img src="/src/assets/poryects/mate-app/logo.png" class="icon" :class="{ 'hidden': !isMiniBarraLateral }">
        </div>
        <div class="content-box">
            <div class="box">
                <router-link :to="{ name: 'home' }" class="btn" :class="{ 'mini-barra-lateral': !isMiniBarraLateral }">
                    <v-icon name="md-spacedashboard" scale="1.5" color="#D1C5AC" class="icon" />
                    <span :class="{ 'hidden': !isMiniBarraLateral }">Inicio</span>
                </router-link>
            </div>
            <div class="content-profile">
                <div class="profile">
                    <button @click="handleLogout" type="button" class="btn">
                        <v-icon name="ri-user-received-fill" scale="1.5" color="#D1C5AC" class="icon" />
                        <span :class="{ 'hidden': isMiniBarraLateral }">Logout</span>
                    </button>
                </div>
                <div class="version" :class="{ 'mini-barra-lateral': !isMiniBarraLateral }">
                    <v-icon name="md-verified-twotone" color="#D1C5AC" class="icon" />
                    <span :class="{ 'hidden': !isMiniBarraLateral }">v: {{ version }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router';

const isMiniBarraLateral = ref(true);
const version = '0.0.1';

const toggleBarraLateral = () => {
    isMiniBarraLateral.value = !isMiniBarraLateral.value;
};

const handleLogout = () => {
    router.push({ name: 'home' });
};
</script>

<style scoped>
.barra-lateral {
    width: 80px;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0 10px 16px rgba(29, 59, 67, .8);
    background-color: #1d3b43;
    transition: width 0.5s ease;
}

.mini-barra-lateral {
    width: 150px;
}

.barra-lateral span {
    opacity: 0;
    width: 0;
    white-space: nowrap;
    transition: opacity 0.5s ease, width 0.5s ease;
}

.barra-lateral span.hidden {
    opacity: 0;
    width: 0;
}

.barra-lateral.mini-barra-lateral span {
    opacity: 1;
    width: auto;
}

.box {
    padding: 5px;
}

.barra-lateral .menu-icon {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 4px solid #a7a164;
    background-color: #1d3b43;
}

.barra-lateral .menu-icon .icon {
    cursor: pointer;
    width: 50px;
    margin: auto;
}

.barra-lateral .btn {
    width: 100%;
    height: 50px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #D1C5AC;
    font-size: 14px;
    font-weight: bold;
}

.btn span {
    margin-top: 10px;
}

.content-profile {
    margin-top: 10px;
    border-top: 4px solid #a7a164;
    padding: 20px;
}

.instal_app {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 4px solid #080;
}

.content-profile .profileMe {
    margin-top: 100px;
    padding-top: 10px;
    border-top: 4px solid #080;
}

.content-profile .version {
    margin-top: 20px;
    color: #D1C5AC;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 1024px) {
    .barra-lateral .menu-icon .icon {
        cursor: pointer;
        width: 50px;
        margin: auto;
    }

    .barra-lateral .box {
        padding: 0;
        margin: 0;
    }

    .barra-lateral.mini-barra-lateral span {
        width: 100px;
        white-space: nowrap;
        font-size: 18px;
        text-align: left;
        margin-left: 10px;
        opacity: 1;
        transition: opacity 0.5s ease, width 0.5s ease;
    }

    .barra-lateral.mini-barra-lateral span.hidden {
        opacity: 1;
        width: auto;
    }

    .content-profile .profileMe {
        margin-top: 150px;
        padding-top: 10px;
        border-top: 4px solid #080;
    }
}

@media screen and (max-width: 800px) {
    .barra-lateral .menu-icon .icon {
        cursor: pointer;
        width: 80px;
        margin: auto;
    }

    .barra-lateral .box {
        padding: 0;
        margin: 0;
    }

    .barra-lateral.mini-barra-lateral span {
        width: 100px;
        white-space: nowrap;
        font-size: 18px;
        text-align: left;
        margin-left: 10px;
        opacity: 1;
        transition: opacity 0.5s ease, width 0.5s ease;
    }

    .barra-lateral.mini-barra-lateral span.hidden {
        opacity: 1;
        width: auto;
    }
}
</style>