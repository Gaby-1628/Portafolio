<template>
    <div class="signup-view">
        <AuthSignup />
    </div>
</template>

<script setup>
import AuthSignup from '../../../components/Primacy/Primacy-user/AuthSignup.vue';


</script>

<style scoped>
.signup-view {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/poryects/assets-Primacy/signup.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>