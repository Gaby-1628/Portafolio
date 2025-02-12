<template>
    <article class="content-main">
        <div class="header" v-show="header">
            <div class="title">
                <h1>Datos de Usuario</h1>
            </div>
            <div class="box_btn">
                <div class="btn_edit">
                    <button type="button" class="btn btn-success" @click="toggleEdit">
                        <span class="btn-text">{{ editRef ? '' : 'Editar' }}</span>
                        <v-icon name="fa-user-edit" />
                    </button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box_content">
                <div class="box_backgroundImage">
                    <div class="box_btn" v-show="btn">
                        <div class="btn_edit">
                            <button type="button" class="btn btn-success" @click="toggleEdit">
                                <span class="btn-text">{{ editRef ? '' : 'Editar' }}</span>
                                <v-icon name="fa-user-edit" />
                            </button>
                        </div>
                        <div class="view-detail" v-show="btn">
                            <button type="button" class="btn btn-dark" @click="detaildUser">
                                <span class="btn-view">{{ editRef ? '' : 'Ver detalles' }}</span>
                                <v-icon name="fa-eye" />
                            </button>
                        </div>
                        <div class="btn_update">
                            <button class="btn btn-success" v-show="editRef" @click="saveChanges">Guardar</button>
                        </div>
                        <div class="box_btn_close" v-show="btn">
                            <button type="button" class="btn_close" @click="$emit('close')">
                                <v-icon name="io-close" />
                            </button>
                        </div>
                        <div class="active_desactive" v-if="editRef">
                            <div class="btn__activate">
                                <PatientActivate />
                            </div>
                            <div class="btn__deactivate">
                                <PatientDeactivate />
                            </div>
                        </div>
                    </div>
                    <div class="scroll_box">
                        <div class="scroll-container">
                            <div class="box-item">
                                <div class="item mx-auto">
                                    <label class="label">Nombre:</label>
                                    <input type="text" :readonly="!editRef">
                                </div>
                                <div class="item mx-auto">
                                    <label class="label">Apellido:</label>
                                    <input type="text" :readonly="!editRef">
                                </div>
                                <div class="item mx-auto">
                                    <label class="label">Username:</label>
                                    <input type="text" :readonly="!editRef">
                                </div>
                                <div class="item mx-auto">
                                    <label class="label">País:</label>
                                    <input type="text">
                                </div>
                                <div class="item mx-auto" v-show="editRef">
                                    <label class="label">Tipo de Documento:</label>
                                    <select class="form-select" aria-label="Default select example"
                                        :readonly="!editRef">
                                        <option selected>Documento:</option>
                                        <option value="1">DNI</option>
                                        <option value="2">Cuil</option>
                                    </select>
                                </div>
                                <div class="item mx-auto">
                                    <label class="label">Documento:</label>
                                    <input type="text" :readonly="!editRef">
                                </div>
                                <div class="item mx-auto" :readonly="true" v-show="!editRef">
                                    <label class="label">Obra Social:</label>
                                    <input type="text" :readonly="true" v-show="!editRef">
                                </div>
                                <div class="item mx-auto" v-show="editRef">
                                    <label class="label">Obra Social:</label>
                                    <select class="form-select" aria-label="Default select example"
                                        :readonly="!editRef">
                                        <option selected>Obra Social:</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="item mx-auto">
                                    <label class="label">Plan:</label>
                                    <input type="text" :readonly="!editRef">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import { ref } from 'vue';
import PatientActivate from './PatientActivate.vue';
import PatientDeactivate from './PatientDeactivate.vue';
import router from '../../../router';

const props = defineProps({
    userId: String,
    info: Boolean,
    btn: Boolean,
    header: Boolean
});

const editRef = ref(false);

const toggleEdit = () => {
    editRef.value = !editRef.value;
};

const detaildUser = async () => {
    router.push({ name: 'detail-crm' });
};

const saveChanges = () => {
    console.log('Guardar cambios');
    toggleEdit();
};
</script>

<style scoped>
.spinner {
    text-align: center;
    margin-top: 50px;
    margin-right: 200px;
    margin-left: 100px;
}

.header {
    width: 100%;
    height: 180px;
    padding: 28px 40px;
    border-radius: 28px;
    box-shadow: 0 10px 10px #0f9b0f;
}

.header .title,
.header .box_btn {
    margin-left: 100px;
}

.container {
    display: flex;
    gap: 30px;
    margin: auto;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
}

.container-info {
    max-width: 50%;
    display: grid;
    flex-direction: column;
    grid-template-columns: auto auto;
    gap: 20px;
    margin-top: 50px;
}

.box-list {
    width: 300px;
    padding: 15px;
    border-radius: 12px;
}

.card {
    margin: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.box_content {
    width: 630px;
    height: 65vh;
    padding: 20px;
    margin-top: 50px;
    margin-left: -20px;
    border-radius: 16px;
    background-color: #fff;
    z-index: 100;
}

.box_backgroundImage {
    width: 630px;
    height: 65vh;
    background-image: url(../assets/user.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.box_btn {
    width: 100%;
    display: flex;
}

.box_btn .btn_edit,
.box_btn .btn__activate,
.box_btn .btn__deactivate,
.box_btn .btn_update {
    padding: 10px;
}

.view-detail {
    padding-top: 10px;
}

.box_btn_close {
    position: fixed;
}

.btn_close {
    border: none;
    background-color: transparent;
    transform: translateX(1800%);
    margin-top: 10px;
}

.active_desactive {
    display: flex;
    padding: 0;
}

.scroll-container {
    width: 100%;
    max-height: 350px;
    overflow-y: auto;
    margin: 10px;
}

.scroll-cards {
    width: 100%;
    max-height: 450px;
    overflow-y: auto;
    margin: 10px;
}

.box-item {
    width: 50%;
    height: auto;
    display: grid;
    grid-template-columns: auto auto;
}

.box-item .item {
    margin: 20px;
}

.label {
    color: #1c1b1b;
    font-weight: 700;
}

.item input {
    width: 200px;
    background-color: rgba(15, 155, 15, .8);
    border: none;
    border-radius: 16px;
    border-bottom: 2px solid #0f9b0f;
    box-shadow: 0 0 2px 0 rgba(55, 109, 129, 1);
    margin: 20px 10px;
    padding: 5px 16px;
    text-align: center;
    color: #fff;
    font-weight: 700;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (height: 600px) {
    .container .box_content {
        width: 92%;
        height: auto;
        padding: 10px;
        margin-top: -50px;
        margin-left: -20px;
        border-radius: 16px;
        background-color: #fff;
        overflow: hidden;
    }

    .scroll_box .scroll-container {
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        margin: 0 20px;
    }
}

@media screen and (max-width: 1300px) {
    .box_content {
        width: 590px;
        height: 580px;
        padding: 20px;
        margin-top: 20px;
        margin-left: -20px;
        border-radius: 16px;
        background-color: rgba(15, 155, 15, .5);
        z-index: 100;
    }

    .box_backgroundImage {
        width: 650px;
        height: 60vh;
    }

    .btn_close {
        transform: translateX(1650%);
        margin-top: 0px;
    }

    .scroll-container {
        width: 100%;
        max-height: 500px;
        overflow-y: auto;
        margin: 0px 20px;
    }

    .box-item {
        width: 70%;
        height: auto;
        display: grid;
        grid-template-columns: auto;
    }

    .label {
        font-weight: 700;
    }

    .item input {
        background-color: rgba(15, 155, 15, .8);
        font-weight: 700;
        letter-spacing: .1cm;
    }
}

@media screen and (max-width: 1024px) {
    .box_content {
        width: 100%;
        height: 750px;
        transform: translateX(10%);
        margin-top: 20px;
        background-color: #fff;
    }

    .box_backgroundImage {
        width: auto;
        height: auto;
    }

    .scroll-container {
        width: 100%;
        max-height: 650px;
        overflow-y: auto;
        margin: 0 50px;
    }

    .box-item {
        width: 70%;
        height: auto;
        display: grid;
        grid-template-columns: auto;
    }

    .box-item .item {
        margin: 10px;
    }

    .label {
        font-weight: 700;
    }

    .item input {
        background-color: rgba(15, 155, 15, .8);
        font-weight: 700;
        letter-spacing: .1cm;
    }

    .btn_close {
        transform: translateX(2150%);
    }
}

@media screen and (max-width: 912px) {
    .btn_close {
        transform: translateX(1700%);
    }
}

@media screen and (max-width: 820px) {
    .btn_close {
        transform: translateX(1650%);
    }
}

@media screen and (max-width: 800px) {
    .btn_close {
        transform: translateX(1500%);
    }

    .box-item {
        width: 80%;
        height: auto;
        display: grid;
        grid-template-columns: auto;
    }
}

@media screen and (max-width: 600px) {
    .header {
        width: 100%;
        height: 120px;
        padding: 20px;
        border-radius: 28px;
        margin-bottom: 40px;
        box-shadow: 0 10px 10px #0f9b0f;
    }

    .header .title,
    .header .box_btn {
        margin-left: 5px;
    }

    .header .btn_update {
        transform: translateX(0%)
    }

    .header .btn_edit,
    .header .btn__activate,
    .header .btn__deactivate {
        margin-left: -10px;
    }

    .container {
        width: 100%;
        max-height: 700px;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: auto;
        gap: 30px;
    }

    .container-info {
        width: 80%;
        display: block;
        margin: auto;
        gap: 0px;
        transform: translateX(-30%);
    }

    .box-cards {
        width: 280px;
    }

    .box_content {
        width: 380px;
        height: auto;
        transform: translateX(2%);
        margin-top: -10px;
    }

    .box_backgroundImage {
        width: auto;
        height: auto;
    }

    .box_btn {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-template-columns: auto auto auto;
    }

    .btn_update {
        transform: translateX(-150%);
    }

    .scroll-container {
        width: 100%;
        max-height: 500px;
        overflow-y: auto;
        margin: 0 20px;
    }

    .box-item {
        width: 50%;
        height: auto;
        display: grid;
        grid-template-columns: auto;
    }

    .box-item .item {
        margin: 10px;
    }

    .label {
        font-weight: 700;
    }

    .item input {
        background-color: rgba(15, 155, 15, .8);
        font-weight: 700;
        letter-spacing: .1cm;
    }

    .btn_close {
        transform: translateX(900%);
    }
}

@media screen and (width: 540px) {
    .box_content {
        width: 100%;
        max-height: 480px;
        transform: translateX(2%);
        margin-top: -40px;
        overflow: hidden;
    }

    .box_backgroundImage {
        width: auto;
        height: auto;
    }

    .box_btn {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-template-columns: auto auto auto;
    }

    .box_btn .btn_update {
        transform: translateX(-140%);
    }

    .scroll-container {
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        margin: 0px;
    }

    .box-item {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: auto;
    }

    .box-item .item {
        margin: 10px;
    }

    .label {
        font-weight: 700;
    }

    .item input {
        width: 200px;
        background-color: rgba(15, 155, 15, .8);
        font-weight: 700;
        letter-spacing: .1cm;
    }

    .btn_close {
        transform: translateX(1100%);
    }
}

@media screen and (max-width: 400px) {
    .header {
        width: 100%;
        height: 120px;
        padding: 20px;
        border-radius: 28px;
        margin-bottom: 40px;
        box-shadow: 0 10px 10px #0f9b0f;
    }

    .header .title,
    .header .box_btn {
        margin-left: 5px;
    }

    .header .btn_update {
        transform: translateX(-10%)
    }

    .header .btn_edit,
    .header .btn__activate,
    .header .btn__deactivate {
        margin-left: -10px;
    }

    .container {
        width: 100%;
        max-height: 450px;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: auto;
        gap: 30px;
    }

    .container-info {
        width: 80%;
        display: block;
        margin: auto;
        gap: 0px;
        transform: translateX(-30%);
    }

    .box-cards {
        width: 280px;
    }

    .box_content {
        width: 300px;
        transform: translateX(5%);
        margin-top: -10px;
    }

    .box_btn {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-template-columns: auto auto auto;
    }

    .btn_close {
        transform: translateX(800%);
    }

    .scroll-container {
        width: 100%;
        max-height: 400px;
        overflow-y: auto;
        margin: 0 10px;
    }
}

@media screen and (width: 344px) {
    .box_content {
        width: 350px;
        transform: translateX(-12%);
        margin-top: -50px;
    }

    .btn_close {
        transform: translateX(850%);
    }

    .scroll-container {
        width: 100%;
        max-height: 450px;
        overflow-y: auto;
        margin: 0 50px;
    }
}

@media screen and (height: 740px) {
    .header .btn_update {
        margin-left: -5px;
    }

    .header .btn_edit,
    .header .btn__activate,
    .header .btn__deactivate {
        margin-left: -14px;
    }

    .container {
        width: 100%;
        max-height: 520px;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: auto;
        gap: 30px;
    }

    .container-info {
        width: 80%;
        display: block;
        margin: auto;
        gap: 0px;
        transform: translateX(-30%);
    }

    .box_content {
        width: 300px;
        transform: translateX(0%);
        margin-top: 0px;
    }

    .scroll-container {
        width: 100%;
        max-height: 400px;
        overflow-y: auto;
        margin: 0 20px;
    }
}
</style>
