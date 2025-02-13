<template>
    <div class="container">
        <div class="box-imgs">
            <div class="img-moon">
                <img src="/src/assets/poryects/mate-app/Space.png" alt="">
            </div>
            <div class="img-earth">
                <img src="/src/assets/poryects/mate-app/earth.png" alt="">
            </div>
            <div class="img-space">
                <img src="/src/assets/poryects/mate-app/Fire-ball.png" alt="">
            </div>
            <div class="img-astronaut">
                <img src="/src/assets/poryects/mate-app/Astronaut.png" alt="">
            </div>
        </div>
        <div class="container-form">
            <div class="content-text-titel">
                <h1>Recuperar Contraseña:</h1>
            </div>
            <div class="form">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Código:
                    </label>
                    <v-icon name="md-password" scale="2" color="#fff" class="icon-code" />
                    <input type="password" class="form-control input-code" v-model="code" @input="resetError('code')">
                </div>
                <p class="text-validation calidate-code" style="color: #ff0000; text-align: center;">{{ codeError }}</p>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Contraseña:
                    </label>
                    <v-icon name="co-keycdn" scale="2" color="#fff" class="icon" />
                    <input type="password" class="form-control new-password" v-model="newPassword"
                        @input="resetError('newPassword')">
                </div>
                <p class="text-validation newPassword" style="color: #ff0000; text-align: center;">{{ passwordError }}</p>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Repetir Contraseña:
                    </label>
                    <v-icon name="co-keycdn" scale="2" color="#fff" class="icon-pass" />
                    <input type="password" class="form-control confirm-pass" v-model="confirmPassword"
                        @input="resetError('confirmPassword')">
                </div>
                <p class="text-validation confirmPassword" style="color: #ff0000; text-align: center;">{{ confirmPasswordError }}</p>
                <button type="button" class="button" @click="clickReset">
                    Recuperar Contraseña
                    <v-icon name="fa-space-shuttle" scale="2" color="#fff" animation="float" class="icon-btn" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router';

const code = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const codeError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const authError = ref('');

const validateCode = () => {
    if (!code.value.trim()) {
        codeError.value = 'El campo Código no puede estar vacío.';
        return false;
    }
    codeError.value = '';
    return true;
};

const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!newPassword.value.trim()) {
        passwordError.value = 'El campo Contraseña no puede estar vacío.';
        return false;
    } else if (!passwordRegex.test(newPassword.value.trim())) {
        passwordError.value =
            'La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula y un número.';
        return false;
    }
    passwordError.value = '';
    return true;
};

const validateConfirmPassword = () => {
    if (newPassword.value !== confirmPassword.value) {
        confirmPasswordError.value = 'Las contraseñas no coinciden.';
        return false;
    }
    confirmPasswordError.value = '';
    return true;
};

const clickReset = async () => {
    const isCodeValid = validateCode();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isCodeValid && isPasswordValid && isConfirmPasswordValid) {
        await router.push({ name: 'mate-app' });
    } else {
        console.log('Por favor, corrige los errores antes de continuar.');
    }
};

const resetError = (field) => {
    if (field === 'newPassword') {
        passwordError.value = '';
    } else if (field === 'confirmPassword') {
        confirmPasswordError.value = '';
    } else if (field === 'code') {
        codeError.value = '';
    }
    authError.value = '';
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');

a {
    text-decoration: none;
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.box-imgs {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    overflow-y: hidden;
    overflow-x: hidden;
}

.box-imgs img {
    animation: float 5s ease-in-out infinite;
}

.img-moon {
    transform: translateX(220%);
    margin-top: -250px;
}

.box-imgs .img-moon img {
    width: 400px;
    object-fit: cover;
}

.img-earth {
    transform: translateX(-150%);
    margin-top: 550px;
}

.box-imgs .img-earth img {
    width: 400px;
    object-fit: cover;
}

.img-space {
    transform: translateX(-350%);
    margin-top: -400px;
}

.box-imgs .img-space img {
    width: 250px;
    object-fit: cover;
}

.img-astronaut {
    transform: translateX(100%);
    margin-top: 550px;
}

.box-imgs .img-astronaut img {
    width: 150px;
    object-fit: cover;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}

.container-form {
    position: absolute;
    z-index: 100;
}

.content-text-titel h1 {
    font-family: 'Lemon';
    font-weight: 400;
    font-style: normal;
    color: #fff;
}

.form {
    width: 500px;
    margin: auto;
    margin-top: 20px;
}

.form .form-label {
    transform: translateY(200%);
    margin: 10px 20px;
    color: #fff;
    transition: all .5s;
}

.form .form-control {
    height: 60px;
    padding-left: 110px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 16px;
    color: #fff;
}

.form .confirm-pass {
    padding-left: 160px;
}

.form .icon-code {
    position: fixed;
    margin-top: 55px;
    margin-left: 350px;
}

.form .icon {
    position: fixed;
    margin-top: 55px;
    margin-left: 330px;
}

.form .icon-pass {
    position: fixed;
    margin-top: 55px;
    margin-left: 280px;
}

.text-validation {
    color: #ff0000;
    margin-bottom: 10px;
    text-align: left;
}

.fargot {
    width: 100%;
    border: none;
    background-color: transparent;
    margin-top: -16px;
    display: flex;
    justify-content: right;
    color: #fff;
}

.button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #A7A164;
    border-radius: 16px;
    margin-top: 50px;
    cursor: pointer;
}

.icon-btn {
    transition: all .5s;
    margin: auto 10px;
}

.button:hover .icon-btn {
    margin-left: 50px;
}

.content-register-btn {
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
}

.register {
    color: #fff;
    margin: 20px;
}

.singUp {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 16px;
    cursor: pointer;
    color: #fff;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */
@media screen and (max-width: 1300px) {
    .img-moon {
        transform: translateX(240%);
        margin-top: -380px;
    }

    .box-imgs .img-moon img {
        width: 400px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-60%);
        margin-top: 800px;
    }

    .box-imgs .img-earth img {
        width: 600px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-120%);
        margin-top: 500px;
    }

    .box-imgs .img-astronaut img {
        width: 150px;
        object-fit: cover;
    }
}

@media screen and (max-width: 1024px) {
    .img-moon {
        transform: translateX(200%);
        margin-top: -800px;
    }

    .box-imgs .img-moon img {
        width: 400px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-60%);
        margin-top: 1000px;
    }

    .box-imgs .img-earth img {
        width: 600px;
        object-fit: cover;
    }

    .img-space {
        transform: translateX(-400%);
        margin-top: -400px;
    }

    .box-imgs .img-space img {
        width: 200px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-150%);
        margin-top: 1000px;
    }

    .box-imgs .img-astronaut img {
        width: 150px;
        object-fit: cover;
    }

    .content-text-titel h1 {
        position: fixed;
        width: 700px;
        margin: auto;
    }

    .text-validation {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .content-register-btn {
        margin-top: 20px;
    }
}

@media screen and (max-width: 1000px) {
    .img-moon {
        transform: translateX(200%);
        margin-top: -800px;
    }

    .box-imgs .img-moon img {
        width: 300px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-60%);
        margin-top: 700px;
    }

    .box-imgs .img-earth img {
        width: 400px;
        object-fit: cover;
    }

    .img-space {
        transform: translateX(-280%);
        margin-top: -750px;
    }

    .box-imgs .img-space img {
        width: 200px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-150%);
        margin-top: 700px;
    }

    .box-imgs .img-astronaut img {
        width: 100px;
        object-fit: cover;
    }
}

@media screen and (max-width: 600px) {
    .img-moon {
        transform: translateX(150%);
        margin-top: -650px;
    }

    .box-imgs .img-moon img {
        width: 200px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-60%);
        margin-top: 750px;
    }

    .box-imgs .img-earth img {
        width: 200px;
        object-fit: cover;
    }

    .img-space {
        transform: translateX(-210%);
        margin-top: -650px;
    }

    .box-imgs .img-space img {
        width: 150px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-250%);
        margin-top: 700px;
    }

    .box-imgs .img-astronaut img {
        width: 50px;
        object-fit: cover;
    }

    .content-text-titel h1 {
        position: relative;
        width: 300px;
        margin: auto;
    }

    .form {
        width: 100%;
        margin: auto;
        margin-top: 0px;
    }

    .form .form-label {
        font-size: 12px;
        transform: translateY(240%);
    }

    .form .form-control {
        height: 50px;
        padding-left: 80px;
        background: transparent;
        border: 2px solid #fff;
        border-radius: 16px;
        color: #fff;
        font-size: 12px;
    }

    .form .confirm-pass {
        padding-left: 125px;
    }

    .form .icon-code {
        scale: .8;
        margin-top: 45px;
        margin-left: 170px;
    }

    .form .icon {
        scale: .8;
        margin-top: 45px;
        margin-left: 150px;
    }

    .form .icon-pass {
        scale: .8;
        margin-top: 45px;
        margin-left: 110px;
    }

    .text-validation {
        width: 280px;
        margin-bottom: 10px;
    }
}

@media screen and (width: 540px) {
    .img-moon {
        transform: translateX(180%);
        margin-top: -500px;
    }

    .box-imgs .img-moon img {
        width: 200px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-100%);
        margin-top: 700px;
    }

    .box-imgs .img-earth img {
        width: 200px;
        object-fit: cover;
    }

    .img-space {
        transform: translateX(-250%);
        margin-top: -500px;
    }

    .box-imgs .img-space img {
        width: 150px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-200%);
        margin-top: 600px;
    }

    .box-imgs .img-astronaut img {
        width: 50px;
        object-fit: cover;
    }

    .content-text-titel h1 {
        position: relative;
        width: 300px;
        margin: auto;
    }

    .form {
        width: 100%;
        margin: auto;
        margin-top: 0px;
    }

    .form .form-label {
        font-size: 12px;
        transform: translateY(240%);
    }

    .form .form-control {
        height: 50px;
        padding-left: 80px;
        background: transparent;
        border: 2px solid #fff;
        border-radius: 16px;
        color: #fff;
        font-size: 12px;
    }

    .form .confirm-pass {
        padding-left: 125px;
    }

    .form .icon-code {
        scale: .8;
        margin-top: 45px;
        margin-left: 170px;
    }

    .form .icon {
        scale: .8;
        margin-top: 45px;
        margin-left: 150px;
    }

    .form .icon-pass {
        scale: .8;
        margin-top: 45px;
        margin-left: 110px;
    }

    .text-validation {
        width: 280px;
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 400px) {
    .img-moon {
        transform: translateX(195%);
        margin-top: -480px;
    }

    .box-imgs .img-moon img {
        width: 150px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-60%);
        margin-top: 600px;
    }

    .box-imgs .img-earth img {
        width: 200px;
        object-fit: cover;
    }

    .img-space {
        transform: translateX(-250%);
        margin-top: -525px;
    }

    .box-imgs .img-space img {
        width: 100px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-150%);
        margin-top: 550px;
    }

    .box-imgs .img-astronaut img {
        width: 50px;
        object-fit: cover;
    }

    .content-text-titel h1 {
        position: relative;
        width: 300px;
        margin: auto;
    }

    .form {
        width: 100%;
        margin: auto;
        margin-top: 0px;
    }

    .form .form-label {
        font-size: 12px;
        transform: translateY(240%);
    }

    .form .form-control {
        height: 50px;
        padding-left: 80px;
        background: transparent;
        border: 2px solid #fff;
        border-radius: 16px;
        color: #fff;
    }

    .form .confirm-pass {
        padding-left: 125px;
    }

    .form .icon {
        margin-top: 45px;
        margin-left: 150px;
    }

    .text-validation {
        font-size: 12px;
        margin-bottom: 12px;
    }
}

@media screen and (width: 344px) {
    .img-moon {
        transform: translateX(180%);
        margin-top: -650px;
    }

    .box-imgs .img-moon img {
        width: 150px;
        object-fit: cover;
    }

    .img-earth {
        transform: translateX(-60%);
        margin-top: 700px;
    }

    .box-imgs .img-earth img {
        width: 200px;
        object-fit: cover;
    }

    .img-space {
        transform: translateX(-250%);
        margin-top: -700px;
    }

    .box-imgs .img-space img {
        width: 100px;
        object-fit: cover;
    }

    .img-astronaut {
        transform: translateX(-200%);
        margin-top: 700px;
    }

    .box-imgs .img-astronaut img {
        width: 50px;
        object-fit: cover;
    }
}
</style>