<template>
    <div class="bottom-nav">
        <div class="nav-item active">
            <div class="btn">
                <v-icon name="md-verified-twotone" color="#a7a164" scale="1" class="icon" />
                    <span :class="{ 'hidden': !isMiniBarraLateral }">v: {{ version }}</span>
            </div>
        </div>
        <div class="nav-item active home">
            <router-link :to="{ name: 'home' }" class="btn">
                <v-icon name="fa-home" color="#fff" scale="2" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Inicio</span>
            </router-link>
        </div>
        <div class="nav-item active">
            <router-link :to="{ name: 'home' }" class="btn">
                <v-icon name="ri-user-received-fill" color="#a7a164" class="icon" />
                <span :class="{ 'hidden': isMiniBarraLateral }">Logout</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isMiniBarraLateral = ref(true);
const version = '0.0.1';

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
    background-color: #1d3b43;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 28px 28px 0 0;
    padding: 10px 0;
}

.nav-item {
    text-align: center;
    flex-grow: 1;
}

.nav-item span {
    font-size: 12px;
    color: #a7a164;
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