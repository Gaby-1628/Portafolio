<template>
    <div class="bottom-nav">
        <div class="nav-item">
            <div type="button" class="btn">
                <v-icon name="fa-regular-user-circle" color="#080" class="icon" />
                <span>{{ userName }}</span>
            </div>
        </div>
        <div class="nav-item active">
            <router-link :to="{ name: 'home' }" class="btn">
                <v-icon name="fa-home" color="#080" class="icon" />
                <span>Inicio</span>
            </router-link>
        </div>
        <div class="nav-item">
            <button @click="handleLogout" type="button" class="btn">
                <v-icon name="ri-user-received-fill" color="#080" class="icon" />
                <span>Logout</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '../../../router';

const user = 'Nombre de usuario'
const userMe = ref({});
const userName = ref('');

const handleLogout = () => {
    router.push({ name: 'home' });
};

onMounted(async () => {
    try {
        userMe.value = user;
        if (userMe) {
            userName.value = userMe.value.name;
        } else {
            userName.value = '';
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
    }
});
</script>

<style scoped>
.bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #46b346;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 28px 28px 0 0;
    padding: 10px 0;
}

.nav-item {
    text-align: center;
    color: #999;
    flex-grow: 1;
}

.nav-item i {
    display: block;
    font-size: 24px;
    margin-bottom: 5px;
}

.nav-item span {
    font-size: 12px;
}

.nav-item.active {
    color: #7c4dff;
}

.icon-home::before {
    content: "\1F3E0";
}

.icon-bell::before {
    content: "\1F514";
}

.icon-settings::before {
    content: "\2699";
}

@media screen and (max-width: 400px) {
    .bottom-nav {
        height: 50px;
    }
}
</style>