<template>
    <div class="user-item">
        <div class="nav">
            <NavBar />
        </div>
        <div class="box__user">
            <PatientDetail :info="true" :header="true" />
        </div>
        <div class="nav_item">
            <NavItem />
        </div>
    </div>
</template>

<script setup>
import NavBar from '../../../components/Primacy/Primacy-admin/NavBar.vue';
import NavItem from '../../../components/Primacy/Primacy-admin/NavItem.vue';
import PatientDetail from '../../../components/Primacy/Primacy-admin/PatientDetail.vue';

</script>

<style scoped>
.user-item {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/poryects/assets-Primacy/human-profile-monochromatic.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.box__user {
    width: 100%;
    max-height: 700px;
    overflow-y: auto;
    padding: 20px;
}

.nav {
    position: fixed;
    z-index: 1000;
    height: 100vh;
}

.nav_item {
    display: none;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-width: 800px) {
    .box__user {
        width: 100%;
        max-height: 950px;
        overflow-y: auto;
        padding: 20px;
    }
}

@media screen and (max-width: 600px) {
    .box__user {
        width: 100%;
        max-height: 850px;
        overflow-y: auto;
        padding: 20px;
    }

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
    .box__user {
        width: 100%;
        max-height: 750px;
        overflow-y: auto;
        padding: 20px;
    }
}

@media screen and (height: 740px) {
    .box__user {
        width: 100%;
        max-height: 700px;
        overflow-y: auto;
        padding: 20px;
    }
}
</style>