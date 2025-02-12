<template>
    <div class="home-component">
        <div class="nav">
            <NavBar />
        </div>
        <div class="nav_item">
            <NavItem />
        </div>
        <div class="box__controls">
            <HomeItemUser />
        </div>
    </div>
</template>

<script setup>
import HomeItemUser from '../../../components/Primacy/Primacy-user/HomeItemUser.vue';
import NavBar from '../../../components/Primacy/Primacy-user/NavBar.vue';
import NavItem from '../../../components/Primacy/Primacy-user/NavItem.vue';

</script>

<style scoped>
.home-component {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/poryects/assets-Primacy/human-profile-monochromatic.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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