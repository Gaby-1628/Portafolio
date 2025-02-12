<template>
    <div class="content__body">
        <div class="nav">
            <NavBar />
        </div>
        <div class="nav_item">
            <NavItem />
        </div>
        <div class="main">
            <CounselingStress />
        </div>
    </div>
</template>

<script setup>
import CounselingStress from '../../../components/Primacy/Primacy-user/CounselingStress.vue';
import NavBar from '../../../components/Primacy/Primacy-user/NavBar.vue';
import NavItem from '../../../components/Primacy/Primacy-user/NavItem.vue';
</script>

<style scoped>
.content__body {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: auto;
    background-image: url(/src/assets/poryects/assets-Primacy/human-profile-monochromatic.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
}

.nav {
    position: fixed;
    z-index: 100;
    height: 100vh;
}

.nav_item {
    display: none;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 800px) {
    .nav {
        display: none;
    }

    .nav_item {
        display: block;
        z-index: 100;
        position: absolute;
    }
}
</style>