<template>
    <section class="all-users">
        <div class="nav">
            <NavBar />
        </div>
        <div class="home_component">
            <HomeItem />
        </div>
        <div class="nav_item">
            <NavItem />
        </div>
    </section>
</template>

<script setup>
import NavBar from '../../../components/Primacy/Primacy-admin/NavBar.vue';
import HomeItem from '../../../components/Primacy/Primacy-admin/HomeItem.vue';
import NavItem from '../../../components/Primacy/Primacy-admin/NavItem.vue';

</script>

<style scoped>
.all-users {
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
    z-index: 10;
    height: 100vh;
}

.nav_item {
    display: none;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 600px) {
    .nav {
        display: none;
    }

    .nav_item {
        display: block;
        z-index: 10;
        position: absolute;
    }
}

@media screen and (max-width: 400px) {
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