<template>
    <div class="modal fade" :class="{ 'd-block': modal, 'show': modal }" v-if="modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Recuperar contraseña</h1>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Email:</label>
                            <input type="email" class="form-control" id="recipient-name"
                                placeholder="ingrese su correo..." v-model="email" @input="resetError('email')"
                                required>
                        </div>
                        <p class="text-validation" style="color: #ff0000; text-align: center;">{{ emailError }}</p>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" @click="clickRecovery">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import router from "../../router";

const props = defineProps({
    modal: Boolean
});

const emit = defineEmits(['close']);

const email = ref('');
const emailError = ref('');

const closeModal = () => {
    emit('close');
}

const valiateEmailInput = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.trim()) {
        return 'El campo Username no puede estar vacío.';
    }
    if (!emailRegex.test(email.value.trim())) {
        return 'Ingresa un correo electrónico válido.';
    }
    return '';
}

const clickRecovery = async () => {
    const emailErrorValue = valiateEmailInput();

    if (emailErrorValue) {
        emailError.value = emailErrorValue;
        return;
    }
    await router.push({ name: 'recovery' });
}

const resetError = (field) => {
    if (field === 'email') {
        emailError.value = '';
    }
};
</script>

<style scoped>
.text-validation {
    color: #ff0000;
    margin-bottom: 10px;
    text-align: left;
}
</style>