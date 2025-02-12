<template>
    <div class="login-view">
        <AuthLogin />
    </div>
</template>

<script setup>
import AuthLogin from '../../../components/Primacy/Primacy-user/AuthLogin.vue';


</script>

<style scoped>
.login-view {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/poryects/assets-Primacy/Tablet_login_cuate.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>