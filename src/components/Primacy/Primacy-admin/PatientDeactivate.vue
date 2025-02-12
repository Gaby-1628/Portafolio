<template>
    <div>
        <div>
            <button class="btn btn-danger" @click="show()">Desactivar</button>
        </div>

        <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': showModal }">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Desactivar Paciente</h2>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-country" class="col-form-label">País:</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="label">Tipo de Documento:</label>
                                <DocumentItem />
                            </div>
                            <div class="mb-3">
                                <label for="recipient-id" class="col-form-label">Documento:</label>
                                <input type="text" class="form-control">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-outline-danger" @click="cancel()">Cancelar</button>
                        <button class="btn btn-outline-dark" @click="deactivateBtn" :disabled="isLoadingRef">
                            <span v-show="!isLoadingRef">Desactivar</span>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                                v-show="isLoadingRef"></span>
                            <span v-show="isLoadingRef">Desactivando...</span>
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

const deactivateBtn = async () => {
    isLoadingRef.value = true;
    try {
        console.log('Paciente desactivado');
        alert('Paciente desactivado');
    } catch (error) {
        console.log('Error al desactivar paciente');
        alert('Error al desactivar paciente');
    } finally {
        showModal.value = false;
        isLoadingRef.value = false;
    }
}

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