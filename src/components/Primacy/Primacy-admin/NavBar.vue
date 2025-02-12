<template>
    <div class="barra-lateral" :class="{ 'mini-barra-lateral': !isMiniBarraLateral }">
        <div class="menu-icon" @click="toggleBarraLateral">
            <img src="/src/assets/poryects/assets-Primacy/logo.jpg" class="icon"
                :class="{ 'hidden': isMiniBarraLateral }">
        </div>
        <div class="content-box">
            <div class="box">
                <router-link :to="{ name: 'home-crm' }" class="btn"
                    :class="{ 'mini-barra-lateral': isMiniBarraLateral }">
                    <v-icon name="md-spacedashboard" scale="2" color="#080" class="icon" />
                    <span :class="{ 'hidden': isMiniBarraLateral }">Inicio</span>
                </router-link>
            </div>
            <div class="content-profile">
                <div class="profile">
                    <button @click="handleLogout" type="button" class="btn">
                        <v-icon name="ri-user-received-fill" scale="2" color="#080" class="icon" />
                        <span :class="{ 'hidden': isMiniBarraLateral }">Logout</span>
                    </button>
                </div>
                <div class="profileMe">
                    <div type="button" class="btn" :class="{ 'mini-barra-lateral': isMiniBarraLateral }">
                        <v-icon name="fa-regular-user-circle" scale="2" color="#080" class="icon" />
                        <span :class="{ 'hidden': isMiniBarraLateral }">{{ userName }}</span>
                    </div>
                    <div class="version" :class="{ 'mini-barra-lateral': !isMiniBarraLateral }">
                        <v-icon name="md-verified-twotone" color="#080" class="icon" />
                        <span :class="{ 'hidden': !isMiniBarraLateral }">v: {{ version }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '../../../router';

const version = '0.0.1';
const user = 'Nombre de usuario'
const userMe = ref({});
const userName = ref('');
const isMiniBarraLateral = ref(true);

const toggleBarraLateral = () => {
    isMiniBarraLateral.value = !isMiniBarraLateral.value;
};

const handleLogout = () => {
    router.push({ name: 'home' });
};

onMounted(async () => {
    try {
        userMe.value = user;
        if (userMe) {
            userName.value = userMe.value.name;
        } else {
            userName.value = '';
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
    }
});
</script>

<style scoped>
.barra-lateral {
    width: 80px;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0 10px 16px rgba(18, 160, 55, 1);
    background-color: #fff;
    transition: width 0.5s ease;
}

.mini-barra-lateral {
    width: 250px;
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
    border-bottom: 4px solid #090;
    background-color: #3ea83e;
}

.barra-lateral .menu-icon .icon {
    cursor: pointer;
    width: 80px;
    margin: auto;
}

.barra-lateral .btn {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
}

.content-profile {
    margin-top: 10px;
    border-top: 4px solid #080;
    padding: 20px;
}

.instal_app {
    margin-top: 220px;
    padding-top: 10px;
    border-top: 4px solid #080;
}

.content-profile .profileMe {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 4px solid #080;
}

.content-profile .version {
    margin-left: 9px;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 1024px) {
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

    .content-profile .profileMe {
        margin-top: 250px;
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