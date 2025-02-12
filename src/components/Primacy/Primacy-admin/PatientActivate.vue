<template>
    <div>
        <div>
            <button class="btn btn-primary" @click="show()">Activar</button>
        </div>
        <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': showModal }">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Activar Paciente</h2>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-2">
                                <label for="recipient-country" class="col-form-label">País:</label>
                                <input type="text" class="form-control" v-model="userDocumentCountry">
                            </div>
                            <div class="mb-2">
                                <label class="label">Tipo de Documento:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Documento:</option>
                                    <option value="1">DNI</option>
                                    <option value="2">Cuil</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label for="recipient-id" class="col-form-label">Documento:</label>
                                <input type="text" class="form-control" v-model="userDocument">
                            </div>
                            <div class="mb-2">
                                <label for="recipient-id" class="col-form-label">Plan:</label>
                                <input type="text" class="form-control" v-model="userDocument">
                            </div>
                            <div class="mb-2">
                                <label class="col-form-label">Obra Social:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Obra Social:</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-outline-danger" @click="cancel()">Cancelar</button>
                        <button class="btn btn-outline-dark" @click="activateBtn" :disabled="isLoadingRef">
                            <span v-show="!isLoadingRef">Activar</span>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                                v-show="isLoadingRef"></span>
                            <span v-show="isLoadingRef">Activando...</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const show = () => {
    showModal.value = true;
};

const props = defineProps({
    userId: {
        type: String,
        required: true
    }
});

const isLoadingRef = ref(false);

const activateBtn = async () => {
    isLoadingRef.value = true;
    try {
        console.log('Paciente activado');
        alert('Paciente activado');
    } catch (error) {
        console.log('Error al activar paciente:', error);
        alert('Error al activar paciente');
    } finally {
        showModal.value = false;
        isLoadingRef.value = false;
    }
};

const cancel = () => {
    showModal.value = false;
}
</script>

<style scoped>
@media screen and (max-width: 400px) {
    .modal {
        margin-top: 0px;
    }
}
</style>