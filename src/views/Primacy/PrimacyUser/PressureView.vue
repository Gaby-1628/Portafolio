<template>
    <div class="arterial">
        <div class="nav">
            <NavBar />
        </div>
        <div class="nav_item">
            <NavItem />
        </div>
        <div class="box__arterial">
            <PressureItem />
        </div>
    </div>
</template>

<script setup>
import NavBar from '../../../components/Primacy/Primacy-user/NavBar.vue';
import NavItem from '../../../components/Primacy/Primacy-user/NavItem.vue';
import PressureItem from '../../../components/Primacy/Primacy-user/PressureItem.vue';
</script>

<style scoped>
.arterial {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/poryects/assets-Primacy/human-profile-monochromatic.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.nav {
    position: fixed;
    z-index: 100;
    height: 100vh;
}

.nav_item {
    display: none;
}

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