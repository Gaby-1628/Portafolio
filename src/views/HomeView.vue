<template>
    <div class="container-all">
        <div class="init">
            <HomeItem />
        </div>
        <div class="about">
            <AboutMe />
        </div>
        <div class="portafolio">
            <PortafolioItem />
        </div>
        <div class="footer">
            <FooterItem />
        </div>
        <div class="nav">
            <NavBar />
        </div>
    </div>
</template>

<script setup>
import AboutMe from '../components/AboutMe.vue';
import FooterItem from '../components/FooterItem.vue';
import HomeItem from '../components/HomeItem.vue';
import NavBar from '../components/NavBar.vue';
import PortafolioItem from '../components/PortafolioItem.vue';

</script>

<style scoped>
.container-all {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.nav {
    position: fixed;
    z-index: 200;
}

.about {
    z-index: 100;
}
</style>