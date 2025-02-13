<template>
    <section class="menu-view">
        <div class="menu-btn position" @click="show = true">
            <v-icon name="hi-menu" scale="2" color="#E51B23" />
        </div>

        <div class="overlay" v-show="show" @click.self="closeMenu">
            <transition name="slide">
                <div class="side-bar" v-show="show">
                    <div class="close-btn" @click="closeMenu">
                        <v-icon name="io-close-sharp" color="#E51B23" />
                    </div>
                    <div class="menu">
                        <div class="scroll-container">
                            <div class="item">
                                <button class="router-link" @click="displaceHomeAndClose">
                                    <v-icon name="px-home" scale="1.4" style="margin-right: 10px;" />
                                    Inicio
                                </button>
                            </div>
                            <div class="item">
                                <button class="router-link" @click="displaceAboutAndClose">
                                    <v-icon name="px-user" scale="1.4" style="margin-right: 10px;" />
                                    Sobre Mi
                                </button>
                            </div>
                            <div class="item">
                                <button class="router-link" @click="displacePortafolioAndClose">
                                    <v-icon name="ri-briefcase-5-line" scale="1.4" style="margin-right: 10px;" />
                                    Portafolio
                                </button>
                            </div>
                            <div class="item">
                                <a href="https://www.linkedin.com/in/gabriela-marisol-rodriguez-dos-santos-5b9196270/"
                                    target="_blank" class="btn-icon">
                                    <v-icon name="bi-linkedin" scale="1.5" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="https://github.com/Gaby-1628?tab=repositories" target="_blank"
                                    class="btn-icon">
                                    <v-icon name="co-github" scale="1.5" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="https://api.whatsapp.com/send?phone=542975047240" target="_blank"
                                    class="btn-icon">
                                    <v-icon name="co-whatsapp" scale="1.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);

const closeMenu = () => {
    show.value = false;
};

const displaceHomeAndClose = () => {
    closeMenu();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
};

const displaceAboutAndClose = () => {
    closeMenu();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
};

const displacePortafolioAndClose = () => {
    closeMenu();
    document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.menu-view {
    height: 100vh;
    position: absolute;
    z-index: 100;
}

.menu-btn {
    position: absolute;
    margin: 10px 4px;
    color: #fff;
    cursor: pointer;
}

/* --- Fondo difuminado cuando el menú está abierto --- */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
}

/* --- Barra lateral --- */
.side-bar {
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20px;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
}

/* --- Botón de cierre --- */
.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}

/* --- Transición de la barra lateral --- */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}

/* --- Menú con ítems centrados --- */
.scroll-container {
    max-height: 350px;
    overflow-y: auto;
    padding: 20px;
}

.item {
    margin-bottom: 15px;
}

.item a {
    margin-left: -220px;
    transition: all .5s;
}

.item a:hover {
    color: #fff;
}

.router-link {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    text-align: left;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
}

.router-link:hover {
    color: #E51B23;
    transition: 0.3s;
}

.btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* ------------------------------------------------------------ */
/* ------------------------ RESPONSIVE ------------------------ */
/* ------------------------------------------------------------ */

@media screen and (max-width: 800px) {
    .side-bar {
        width: 250px;
    }

    .item a {
        margin-left: -170px;
        transition: all .5s;
    }
}
</style>
