<template>
    <article class="col-10 mx-auto mt-4">
        <div class="users_container">
            <h1>Lista de Usuarios</h1>
            <div class="box">
                <div class="content_input mb-3">
                    <input type="text" class="form-control" placeholder="Buscar por usuario" v-model="searchTerm"
                        @input="updateFilteredUsers">
                    <div class="icon">
                        <v-icon name="bi-search" scale="1.4" color="#080" />
                    </div>
                </div>
            </div>
            <div class="box_user">
                <div class="scroll-container_user">
                    <div class="scroll-container">
                        <div class="box-item" v-if="filteredUsers.length > 0">
                            <div class="item mx-auto" v-for="user in filteredUsers" :key="user.id"
                                @click="selectUser(user.userId)">
                                <button type="button" class="btn_user">
                                    {{ user.name }} {{ user.lastname }}
                                </button>
                            </div>
                        </div>
                        <div v-else class="spinner">
                            <div class="sk-cube-grid">
                                <div class="sk-cube sk-cube1"></div>
                                <div class="sk-cube sk-cube2"></div>
                                <div class="sk-cube sk-cube3"></div>
                                <div class="sk-cube sk-cube4"></div>
                                <div class="sk-cube sk-cube5"></div>
                                <div class="sk-cube sk-cube6"></div>
                                <div class="sk-cube sk-cube7"></div>
                                <div class="sk-cube sk-cube8"></div>
                                <div class="sk-cube sk-cube9"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card_active_user">
                    <UserDetailItem v-if="selectedUserId" :userId="selectedUserId" @close="close" :btn="true" />
                    <div v-else>
                        <span>
                            <img src="/src/assets/poryects/assets-Primacy/user-defoult.svg" alt="">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import UserDetailItem from './UserDetailItem.vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const users = ref([]);
const searchTerm = ref('');
const filteredUsers = ref([]);
const selectedUserId = ref(null);

const userList = [
    {
        name: 'Christopher',
        lastname: 'Staler',
        userId: 1
    },
    {
        name: 'Robert',
        lastname: 'Cook',
        userId: 2
    },
    {
        name: 'Dario',
        lastname: 'West',
        userId: 3
    },
    {
        name: 'Emily',
        lastname: 'Rush',
        userId: 4
    },
    {
        name: 'Rosaly',
        lastname: 'La Bourn',
        userId: 5
    },
]

const selectUser = (userId) => {
    selectedUserId.value = userId;
};

const close = () => {
    selectedUserId.value = null;
};

const updateFilteredUsers = () => {
    const searchLowerCase = searchTerm.value.toLowerCase().trim();
    const searchTerms = searchLowerCase.split(" ");

    filteredUsers.value = users.value.filter(user => {
        const fullName = `${user.name ? user.name.toString().toLowerCase() : ''} ${user.lastname ? user.lastname.toString().toLowerCase() : ''}`.trim();
        return searchTerms.every(term => fullName.includes(term));
    });
};

onMounted(async () => {
    users.value = userList;
    filteredUsers.value = [...users.value];
    document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
    document.body.style.overflow = '';
});

watch(users, () => {
    updateFilteredUsers();
});
</script>

<style scoped>
.spinner {
    text-align: center;
    margin: 50px 328px;
}

.sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
}

.sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #080;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}

.sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
}

.sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

.sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
}

.sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
}

.sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
}

.sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

.sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

.sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
}

.sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {

    0%,
    70%,
    100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
    }

    35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
    }
}

@keyframes sk-cubeGridScaleDelay {

    0%,
    70%,
    100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
    }

    35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
    }
}

a {
    text-decoration: none;
    font-size: 20px;
}

.box_user {
    width: 100%;
    display: flex;
}

.card_active_user {
    width: 40%;
    margin-top: -50px;
    margin-left: 40px;
}

.scroll-container {
    width: 100%;
    max-height: 450px;
    overflow-y: auto;
}

.box-item {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    padding: 10px;
}

.box-item .item {
    width: 300px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    background-color: rgba(15, 155, 15, .5);
    background-image: url(/src/assets/poryects/assets-Primacy/user.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
    overflow: hidden;
    cursor: pointer;
}

.box-item .item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
}

.btn_user {
    border: none;
    background: transparent;
    /* margin: 80px auto; */
    color: #000;
    font-weight: bold;
    letter-spacing: .1cm;
}

.users_container {
    width: 100%;
}

.users_container h1 {
    width: 100%;
    font-size: 40px;
    margin-top: 5px;
    margin-left: 100px;
}

.box {
    display: flex;
    margin-bottom: 50px;
    padding-bottom: 5px;
    border-bottom: #fff solid 2px;
}

.content_input {
    display: flex;
    width: 100%;
}

input {
    width: 80%;
    height: 40px;
    margin-top: 50px;
    margin-right: 10px;
    background-color: rgba(255, 255, 255, 0.404);
}

.icon {
    margin-top: 60px;
    margin-right: 10px;
}

.btn-create {
    width: 300px;
    margin-top: 50px;
    margin-left: 120px;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (height: 600px) {
    .scroll-container_user .scroll-container {
        width: 80%;
        max-height: 400px;
        margin-top: -20px;
        margin-left: 50px;
        position: absolute;
        overflow-y: auto;
    }
}

@media screen and (max-width: 1280px) {
    .card_active_user {
        margin-top: -20px;
        margin-left: 20px;
    }

    .users_container h1 {
        font-size: 40px;
        margin-left: 40px;
        border-bottom: 2px solid #000;
    }

    input {
        margin-top: 20px;
        margin-left: 40px;
    }

    .icon {
        margin-top: 25px;
    }

    .btn-create {
        width: auto;
        margin-top: 20px;
        margin-left: 40px;
        margin-right: 50px;
    }

    .btn-text {
        display: none;
    }

    .scroll-container {
        width: 100%;
        max-height: 600px;
        margin-top: -20px;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
        transform: translateX(-2%);
    }

    .box-item .item {
        width: 250px;
        height: 150px;
        font-size: 20px;
    }

    .box-item .item:hover {
        width: 250px;
        height: 150px;
    }

    .card_active_user {
        width: 100%;
    }
}

@media screen and (max-width: 1024px) {
    .scroll-container {
        width: 100%;
        max-height: 1100px;
        margin-top: 0px;
        position: absolute;
        overflow-y: auto;
    }

    .box-item .item {
        width: 300px;
        height: 150px;
        font-size: 20px;
    }

    .box-item .item:hover {
        width: 300px;
        height: 150px;
    }

    .card_active_user {
        margin-top: -50px;
    }

    .card_active_user img {
        display: none;
    }
}

@media screen and (max-width: 900px) {
    .scroll-container {
        width: 100%;
        max-height: 800px;
        margin-top: 0px;
        overflow-y: auto;
    }
}

@media screen and (max-width: 820px) {
    .scroll-container {
        width: 100%;
        max-height: 900px;
        margin-top: -10px;
        overflow-y: auto;
    }
}

@media screen and (max-width: 800px) {
    .scroll-container {
        width: 100%;
        max-height: 750px;
        margin-top: -10px;
        overflow-y: auto;
    }
}

@media screen and (max-width: 600px) {
    .spinner {
        margin-top: 50px;
        margin-left: -100px;
        margin-right: 0;
    }

    .users_container h1 {
        font-size: 35px;
        margin-left: 10px;
        border-bottom: 2px solid #000;
    }

    input {
        margin-top: 20px;
        margin-left: 10px;
    }

    .icon {
        margin-top: 25px;
    }

    .btn-create {
        width: auto;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 0px;
    }

    .scroll-container {
        width: 100%;
        max-height: 650px;
        margin-top: -40px;
        position: absolute;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
        margin-right: 50px;
    }
}

@media screen and (width: 540px) {
    .spinner {
        margin-top: 0px;
        transform: translateX(-20%);
    }

    .users_container h1 {
        font-size: 35px;
        margin-left: 10px;
        border-bottom: 2px solid #000;
    }

    input {
        margin-top: 20px;
    }

    .icon {
        margin-top: 25px;
    }

    .btn-create {
        width: auto;
        margin-top: 20px;
        margin-left: 10px;
    }

    .scroll-container {
        width: 100%;
        max-height: 500px;
        margin-top: -40px;
        margin-left: -40px;
        position: absolute;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
        margin-right: 0px;
    }

    .box-item .item {
        width: 240px;
        height: 150px;
        font-size: 20px;
        z-index: 10;
    }

    .box-item .item:hover {
        width: 240px;
        height: 150px;
    }
}

@media screen and (max-width: 400px) {
    .spinner {
        margin-top: 50px;
        margin-left: -50px;
        margin-right: 0;
    }

    .scroll-container {
        width: 100%;
        max-height: 450px;
        margin-top: -40px;
        position: absolute;
        overflow-y: auto;
    }
}

@media screen and (width: 344px) {
    .spinner {
        margin-top: 0px;
        transform: translateX(-20%);
    }

    .scroll-container {
        width: 100%;
        max-height: 650px;
        margin-top: -40px;
        margin-left: -25px;
        position: absolute;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
        transform: translateX(2%);
    }
}

@media screen and (height: 740px) {
    .scroll-container {
        width: 100%;
        max-height: 500px;
        margin-top: -40px;
        position: absolute;
        overflow-y: auto;
    }

    .box-item {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
        transform: translateX(0%);
    }
}
</style>