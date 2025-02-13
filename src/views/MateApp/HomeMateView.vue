<template>
    <div class="home-component">
        <div class="nav">
            <NavbarMate />
        </div>
        <div class="nav_item">
            <NavItemMate />
        </div>
        <div class="box__controls">
            <HomeMateItem />
        </div>
    </div>
</template>

<script setup>
import HomeMateItem from '../../components/MateApp/HomeMateItem.vue';
import NavbarMate from '../../components/MateApp/NavbarMate.vue';
import NavItemMate from '../../components/MateApp/NavItemMate.vue';
</script>

<style scoped>
.home-component {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: #D1C5AC;
    z-index: 100;
}

.nav {
    position: fixed;
    z-index: 10;
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
        z-index: 10;
        position: absolute;
    }
}
</style>