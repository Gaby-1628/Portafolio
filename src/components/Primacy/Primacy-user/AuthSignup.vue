<template>
    <div class="body__container">
        <div class="box__header">
            <div class="waves">
                <div class="wavesInTopLeft" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150"
                        preserveAspectRatio="none" style="height: 100%; width: 100%;">
                        <path d="M-6.54,155.01 C150.33,-9.35 187.02,153.04 267.72,-4.43 L169.52,-20.17 L-0.00,0.00 Z"
                            style="stroke: none; fill: #46B346;"></path>
                    </svg></div>
                <div class="wavesInTopRigth" style="height: 150px; overflow: hidden;">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                        <path
                            d="M238.93,-2.46 C320.20,279.02 385.10,-0.49 504.73,156.98 L505.87,157.97 L527.87,-22.14 Z"
                            style="stroke: none; fill: #488137;"></path>
                    </svg>
                </div>
            </div>
            <div class="waves__responsive wavesInTopLeft">
                <div style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                        style="height: 100%; width: 100%;">
                        <path d="M-9.93,163.86 C84.87,16.23 314.56,137.30 459.03,-6.40 L277.31,-16.23 L-0.00,0.00 Z"
                            style="stroke: none; fill: #488137;"></path>
                    </svg></div>
            </div>
        </div>
        <div class="box__main">
            <div class="container fadeIn">
                <div class="logo">
                    <img src="/src/assets/poryects/assets-Primacy/PRIMACY_LOGO.png" alt="">
                    <div class="border-bottom"></div>
                </div>
                <div class="login fadeIn">
                    <h1 class="welcome-message">SignUp</h1>
                    <div class="border-bottom"></div>
                </div>
                <div class="login-form fadeIn">
                    <div class="box mx-auto mt-3" :class="{ 'has-value': name !== '' }">
                        <input type="text" class="form-control" v-model="name">
                        <label for="exampleFormControlInput1" class="form-label">
                            <v-icon name="fa-regular-user" scale="1" />
                            Nombre
                        </label>
                    </div>
                    <div class="box mx-auto mt-3" :class="{ 'has-value': lastname !== '' }">
                        <input type="text" class="form-control" v-model="lastname">
                        <label for="exampleFormControlInput1" class="form-label">
                            <v-icon name="fa-regular-user" scale="1" />
                            Apellido
                        </label>
                    </div>
                    <div class="box mx-auto mt-3" :class="{ 'has-value': email !== '' }">
                        <input type="email" class="form-control" v-model="email" @input="validateEmail">
                        <label for="exampleFormControlInput1" class="form-label">
                            <v-icon name="md-alternateemail" scale="1" />
                            Email
                        </label>
                    </div>
                    <p class="text-validation" v-if="emailError">{{ emailError }}</p>
                    <div class="box mx-auto mt-3" :class="{ 'has-value': password !== '' }">
                        <input type="password" class="form-control" v-model="password" @input="validatePassword">
                        <label for="exampleFormControlInput1" class="form-label">
                            <v-icon name="ai-closed-access" scale="1.5" />
                            Contraseña
                        </label>
                    </div>
                    <p class="text-validation" v-if="passwordError">{{ passwordError }}</p>
                    <button class="btn btn-outline-success mt-4" @click="onClick" :disabled="isLoadingRef">
                        <span v-show="!isLoadingRef">SIGN UP</span>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                            v-show="isLoadingRef"></span>
                        <span v-show="isLoadingRef">SIGN UP...</span>
                    </button>
                    <p style="color: #46B346; text-align: center;">{{ textActivate }}</p>
                    <router-link :to="{ name: 'primacy-user' }" type="button" class="btn__arrow">
                        <v-icon class="icon__arrow" name="bi-arrow-bar-left" color="#080" />
                        <span class="span_text">Atras</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="box__footer">
            <div class="waves">
                <div class="wavesInTopLeft" style="height: 150px; overflow: hidden;">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                        <path d="M-5.41,-4.43 C150.00,149.60 108.01,-3.44 202.26,155.01 L185.32,153.04 L-0.00,149.60 Z"
                            style="stroke: none; fill: #9BC555;"></path>
                    </svg>
                </div>
                <div class="wavesInTopRigth" style="height: 150px; overflow: hidden;">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                        <path d="M240.63,153.04 C333.74,-3.44 429.68,153.04 504.17,3.45 L504.73,153.04 L346.73,150.09 Z"
                            style="stroke: none; fill: #9BC555;"></path>
                    </svg>
                </div>
            </div>
            <div class="waves__responsive wavesIn">
                <div style="height: 150px; overflow: hidden;">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                        <path
                            d="M126.07,155.01 C267.72,-16.23 336.56,151.07 523.92,-20.17 L500.00,149.60 L288.03,151.07 Z"
                            style="stroke: none; fill: #9BC555;"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../../router';
import Swal from 'sweetalert2';

const name = ref('');
const lastname = ref('');
const email = ref('');
const emailError = ref('');
const password = ref('');
const passwordError = ref('');
const textActivate = ref('');
const isLoadingRef = ref(false);

const validateEmail = () => {
    if (!username.value.includes('@')) {
        emailError.value = 'Debe ingresar un email válido';
    } else {
        emailError.value = '';
    }
};

const validatePassword = () => {
    if (password.value.length < 6) {
        passwordError.value = 'La contraseña debe tener al menos 6 caracteres';
    } else {
        passwordError.value = '';
    }
};

const onClick = async (e) => {
    e.preventDefault();
    if (!name.value || !lastname.value || !email.value || !password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios.'
        });
        return;
    }
    isLoadingRef.value = true;
    router.push({ name: 'primacy-user' });
};
</script>

<style scoped>
a {
    text-decoration: none;
    cursor: pointer;
}

.body__container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.box__header {
    width: 100%;
    height: auto;
}

.waves {
    display: flex;
    justify-content: space-between;
    margin-top: 0;
}

.container {
    width: 90%;
    max-width: 400px;
    height: auto;
    background-color: rgba(255, 255, 255);
    border-radius: 16px;
    box-shadow: 0 10px 16px rgba(18, 159, 51, 0.8);
    margin: -150px auto 20px;
}

.logo__header img {
    width: 100px;
    text-align: center;
}

.logo {
    text-align: center;
}

.logo img {
    margin-top: -20px;
    height: 150px;
}

.login {
    margin-bottom: 20px;
}

.welcome-message {
    font-size: 28px;
    color: #77B951;
    margin-bottom: 10px;
    text-align: center;
}

.border-bottom {
    width: 100%;
    height: 4px;
    background: #000000;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0f9b0f, #000000);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0f9b0f, #000000);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin-bottom: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.box {
    position: relative;
    margin-bottom: 20px;
    border-bottom: 2px solid #000000;
    width: 300px;
}

.box input {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    border: none;
    padding: 5px;
    font-size: 14px;
    outline: none;
}

.box label {
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 14px;
    color: #181818;
    transition: all 0.3s ease-out;
}

.box.has-value label,
.box input:focus~label {
    top: -10px;
    font-size: 12px;
    color: #0f9b0f;
}

.text-validation {
    color: #ff0000;
    margin-bottom: 10px;
    text-align: left;
}

.forgot-password {
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    float: right;
}

.btn {
    margin-bottom: 20px;
}

.btn__arrow {
    height: 50px;
    border: none;
    margin-top: 0px;
    margin-left: 30px;
}

.span_text {
    color: #0f9b0f;
    font-size: 12px;
    transition: .5s;
}

.span_text:hover {
    font-size: 16px;
}

.waves__responsive {
    display: none;
}

.box__footer {
    margin-top: -150px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes wavesInTopLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes wavesInTopRigth {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes wavesIn {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeIn {
    animation: fadeIn 2s ease-in-out;
}

.wavesInTopLeft {
    animation: wavesInTopLeft 4s ease-in-out;
}

.wavesInTopRigth {
    animation: wavesInTopRigth 4s ease-in-out;
}

.wavesIn {
    animation: wavesIn 4s ease-in-out;
}


/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */


@media screen and (max-height: 600px) {
    .box__main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 80%;
        padding: 20px;
        margin: auto;
    }

    .logo img {
        width: 200px;
        height: 200px;
        margin-top: 0px;
        margin-bottom: -10px;
    }

    .welcome-message {
        display: none;
    }

    .box {
        width: 80%;
        margin: auto;
    }

    .login-form {
        margin-top: -25px;
    }

    .btn__arrow {
        margin-top: -50px;
    }
}

@media screen and (max-width: 1300px) {
    .box__main {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 80%;
        height: 750px;
        padding: 20px;
        margin: -150px auto 0px;
    }

    .logo img {
        margin-top: 40px;
        width: 200px;
        height: 200px;
    }

    .box {
        width: 80%;
        margin: auto;
    }

    .box {
        margin-bottom: 0px;
    }

    .btn__arrow {
        margin-top: 0px;
    }

    .box__footer {
        display: block;
        margin-top: -140px;
    }
}

@media screen and (max-width: 1024px) {
    .box__main {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 80%;
        height: 800px;
        padding: 20px;
        margin: -80px auto 100px;
    }

    .logo img {
        width: 200px;
    }

    .box {
        width: 80%;
        margin: auto;
    }

    .login-form {
        margin-top: -25px;
    }

    .login-form .btn {
        width: 80%;
        margin: auto;
        margin-top: 40px;
    }

    .forgot-password {
        margin-right: 100px;
        margin-top: 20px;
    }

    .box {
        margin-bottom: 0px;
    }

    .box input {
        height: 30px;
        margin-top: 20px;
        border: none;
        padding: 8px;
        font-size: 10px;
    }

    .box label {
        position: absolute;
        top: 22px;
        left: 12px;
        font-size: 12px;
        color: #181818;
        transition: all 0.3s ease-out;
    }

    .btn__arrow {
        margin-top: 50px;
    }

    .box__footer {
        margin-top: -25px;
    }
}

@media screen and (max-width: 900px) {
    .container {
        width: 80%;
        padding: 20px;
        margin: -80px auto -100px;
    }

    .logo img {
        width: 200px;
    }

    .box__footer {
        position: fixed;
        margin-top: -60px;
    }
}

@media screen and (max-width: 800px) {
    .container {
        width: 80%;
        height: 700px;
        padding: 80px;
        margin: 0px auto 100px;
    }

    .logo img {
        width: 250px;
        height: 250px;
        margin-top: -100px;
    }

    .login {
        display: none;
    }

    .logo {
        display: block;
        text-align: center;
    }

    .waves {
        display: none;
    }

    .waves__responsive {
        display: block;
        width: 100%;
    }

    .box__footer .waves__responsive {
        position: fixed;
        margin-top: 50px;
    }

    .box {
        width: 100%;
    }

    .box__footer .waves__responsive {
        position: fixed;
        margin-top: -35px;
    }
}

@media screen and (max-width: 600px) {
    .container {
        width: 80%;
        height: 700px;
        padding: 40px;
        margin: -120px auto 0px;
    }

    .logo img {
        width: 200px;
    }

    .login {
        display: none;
    }

    .logo {
        display: block;
        text-align: center;
    }

    .waves {
        display: none;
    }

    .waves__responsive {
        display: block;
    }

    .box__footer .waves__responsive {
        position: fixed;
    }

    .box {
        width: 250px;
    }

    .box__footer {
        display: block;
        margin-top: -80px;
    }
}

@media screen and (width: 540px) {
    .body__container {
        height: 100vh;
        overflow: hidden;
    }

    .container {
        width: 80%;
        height: 600px;
        padding: 20px;
        margin: -150px auto 0px;
    }

    .logo img {
        width: 150px;
        height: 150px;
        margin-top: -50px;
    }

    .box {
        margin-bottom: 0px;
    }

    .box input {
        height: 30px;
        margin-top: 20px;
        border: none;
        padding: 8px;
        font-size: 10px;
    }

    .box label {
        position: absolute;
        top: 22px;
        left: 12px;
        font-size: 12px;
        color: #181818;
        transition: all 0.3s ease-out;
    }

    .btn__arrow {
        margin-top: 10px;
    }

    .box__footer {
        margin-top: -100px;
    }
}

@media screen and (max-width: 400px) {
    .body__container {
        height: 100vh;
        overflow: hidden;
    }

    .container {
        width: 80%;
        height: 550px;
        padding: 20px;
        margin: -200px auto 0px;
    }

    .logo img {
        width: 150px;
        height: 150px;
        margin-top: -50px;
    }

    .box {
        margin-bottom: 0px;
    }

    .box input {
        height: 30px;
        margin-top: 20px;
        border: none;
        padding: 8px;
        font-size: 10px;
    }

    .box label {
        position: absolute;
        top: 22px;
        left: 12px;
        font-size: 12px;
        color: #181818;
        transition: all 0.3s ease-out;
    }

    .btn__arrow {
        margin-top: 10px;
    }

    .box__footer {
        display: block;
        margin-top: -100px;
    }
}

@media screen and (width: 344px) {
    .body__container {
        height: 100vh;
        overflow: hidden;
    }

    .container {
        width: 80%;
        height: 570px;
        padding: 20px;
        margin: -150px auto -20px;
    }

    .logo img {
        width: 150px;
    }

    .box {
        margin-bottom: 0px;
    }

    .box input {
        height: 30px;
        margin-top: 20px;
        border: none;
        padding: 8px;
        font-size: 10px;
    }

    .box label {
        position: absolute;
        top: 22px;
        left: 12px;
        font-size: 12px;
        color: #181818;
        transition: all 0.3s ease-out;
    }

    .btn__arrow {
        margin-top: 16px;
    }

    .box__footer .waves__responsive {
        position: fixed;
        margin-top: -20px;
    }
}
</style>