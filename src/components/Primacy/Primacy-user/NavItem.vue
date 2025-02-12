<template>
    <div class="bottom-nav">
        <div class="nav-item active">
            <div class="btn">
                <v-icon name="bi-calendar-week" color="#080" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Seguimiento</span>
            </div>
        </div>
        <div class="nav-item active">
            <div class="btn">
                <v-icon name="fa-chart-area" color="#080" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Controles</span>
            </div>
        </div>
        <div class="nav-item active home">
            <div class="btn">
                <v-icon name="fa-home" color="#fff" scale="2" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Inicio</span>
            </div>
        </div>
        <div class="nav-item active">
            <div class="btn">
                <v-icon name="hi-solid-users" color="#080" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Consejería</span>
            </div>
        </div>
        <div class="nav-item">
            <button @click="handleLogout" type="button" class="btn">
                <v-icon name="ri-user-received-fill" color="#080" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Logout</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '../../../router';

const isMiniBarraLateral = ref(true);

const handleLogout = () => {
    router.push({ name: 'home' });
};

onMounted(async () => {
    document.body.style.overflow = 'hidden';
});
</script>

<style scoped>
.bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: rgba(70, 179, 70, 0.8);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 28px 28px 0 0;
    padding: 10px 0;
}

.nav-item {
    text-align: center;
    color: #999;
    flex-grow: 1;
}

.nav-item i {
    display: block;
    font-size: 24px;
    margin-bottom: 5px;
}

.nav-item span {
    font-size: 10px;
}

.nav-item.active {
    color: #7c4dff;
}

.icon-home::before {
    content: "\1F3E0";
    /* Unicode for home icon */
}

.icon-bell::before {
    content: "\1F514";
    /* Unicode for bell icon */
}

.icon-settings::before {
    content: "\2699";
    /* Unicode for settings icon */
}

.home {
    border-radius: 50%;
}

.home span {
    color: #fff;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 800px) {
    .nav-item span {
        font-size: 14px;
        margin-left: 14px;
    }

    .home {
        width: auto;
        height: auto;
        margin-top: 0px;
    }

    .icon {
        scale: 1.5;
    }

    .bottom-nav {
        height: 80px;
    }
}

@media screen and (max-width: 600px) {
    .nav-item span {
        font-size: 12px;
        margin-left: 0px;
    }

    .home {
        width: 90px;
        height: 80px;
        margin-top: -8px;
    }

    .icon {
        scale: 1.5;
    }
}

@media screen and (width: 540px) {
    .nav-item span {
        font-size: 14px;
        margin-left: 5px;
    }

    .home {
        width: 90px;
        height: 80px;
        margin-top: -8px;
    }

    .icon {
        scale: 1.5;
    }
}

@media screen and (max-width: 400px) {
    .nav-item span {
        font-size: 12px;
        margin-left: 0px;
    }

    .bottom-nav {
        height: 70px;
    }

    .home {
        width: 80px;
        height: 70px;
        margin-top: -8px;
    }

    .icon {
        scale: 1;
    }
}

@media screen and (width: 344px) {
    .nav-item span {
        display: none;
    }

    .icon {
        scale: 1.5;
    }
}

@media screen and (height: 740px) {
    .nav-item span {
        font-size: 10px;
        margin-left: 0px;
    }

    .bottom-nav {
        height: 70px;
    }

    .home {
        width: 80px;
        height: 70px;
        margin-top: -8px;
    }

    .icon {
        scale: 1;
    }
}
</style>