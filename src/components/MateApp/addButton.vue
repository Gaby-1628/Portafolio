<template>
    <div>
        <div class="modal fade" :class="{ 'd-block': modal, 'show': modal }" v-if="modal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Agregar Data</h1>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3" v-for="(label, key) in formFields" :key="key">
                                <label :for="key" class="col-form-label">{{ label }}:</label>
                                <input type="text" class="form-control" v-model="newData[key]" />
                            </div>
                        </form>
                        <button type="button" class="btn btn-outline-primary" @click="saveData">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modal: Boolean,
    newData: Object,
});

const emit = defineEmits(['close', 'addData']);

const formFields = {
    User: 'User',
    Profile: 'Profile',
    Network: 'Network',
    IpLocal: 'Ip Local',
    IpRemota: 'Ip Remota',
    txBytes: 'TX Bytes',
    rxBytes: 'RX Bytes',
    Status: 'Status',
    lastDisconnect: 'Last Disconnect',
};

const closeModal = () => {
    emit('close');
};

const saveData = () => {
    console.log('Datos a guardar:', props.newData);
    emit('addData', { ...props.newData });
    emit('close');
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Guardado",
        showConfirmButton: false,
        timer: 1500
    });
};
</script>

<style scoped></style>