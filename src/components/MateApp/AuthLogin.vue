<template>
  <div class="container">
    <div class="box-imgs">
      <div class="img-moon">
        <img src="/src/assets/poryects/mate-app/luna.png" alt="">
      </div>
      <div class="img-earth">
        <img src="/src/assets/poryects/mate-app/earth.png" alt="">
      </div>
      <div class="img-space">
        <img src="/src/assets/poryects/mate-app/Outer space-amico (1).png" alt="">
      </div>
      <div class="img-astronaut">
        <img src="/src/assets/poryects/mate-app/Astronaut.png" alt="">
      </div>
    </div>
    <div class="container-form">
      <div class="content-text-titel">
        <h1>Bienvenido, ingresa con:</h1>
      </div>
      <div class="form">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Usuario:
          </label>
          <v-icon name="fa-user-astronaut" scale="2" color="#fff" class="icon-user" />
          <input type="email" class="form-control" v-model="username" @input="resetError('email')">
        </div>
        <p class="text-validation" style="color: #ff0000; text-align: center;">{{ emailError }}</p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Contraseña:
          </label>
          <v-icon name="co-keycdn" scale="2" color="#fff" class="icon-pass" />
          <input type="password" class="form-control" v-model="password" @input="resetError('password')">
        </div>
        <p class="text-validation validation-password" style="color: #ff0000; text-align: center;">{{ passwordError }}
        </p>
        <button @click="showModal" class="fargot">Olvidaste tu contraseña?</button>
        <RecoveryPasswordComponent :modal="isModalVisible" @close="hideModal" />
        <button type="button" class="button" @click="onClick">
          Iniciar Sesión
          <v-icon name="fa-space-shuttle" scale="2" color="#fff" animation="float" class="icon-btn" />
        </button>
        <div class="content-register-btn">
          <span class="register">No tienes una cuenta? Registrate...</span>
          <button type="button" @click="register" class="singUp">
            <v-icon name="gi-comet-spark" scale="2" color="#fff" animation="pulse" />
            Registrarse
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router';
import RecoveryPasswordComponent from './RecoveryPasswordComponent.vue';

const username = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const isModalVisible = ref(false);

const valiateEmailInput = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!username.value.trim()) {
    return 'El campo Username no puede estar vacío.';
  }
  if (!emailRegex.test(username.value.trim())) {
    return 'Ingresa un correo electrónico válido.';
  }
  return '';
}

const validatePasswordInput = () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!password.value.trim()) {
    return 'El campo Contraseña no puede estar vacío.';
  }
  if (!passwordRegex.test(password.value.trim())) {
    return 'La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula y un número.';
  }
  return '';
}

const onClick = async () => {
  const emailErrorValue = valiateEmailInput();
  const passwordErrorValue = validatePasswordInput();

  if (emailErrorValue || passwordErrorValue) {
    emailError.value = emailErrorValue;
    passwordError.value = passwordErrorValue;
    return;
  }
  await router.push({ name: 'home-mate-app' });
}

const resetError = (field) => {
  if (field === 'email') {
    emailError.value = '';
  } else if (field === 'password') {
    passwordError.value = '';
  }
};

const register = () => {
  router.push({ name: 'register' });
}

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
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
  transform: translateX(350%);
  margin-top: -250px;
}

.box-imgs .img-moon img {
  width: 300px;
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
  transform: translateX(-400%);
  margin-top: -450px;
}

.box-imgs .img-space img {
  width: 200px;
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

.form .icon-user {
  position: fixed;
  margin-top: 55px;
  margin-left: 350px;
}

.form .icon-pass {
  position: fixed;
  margin-top: 55px;
  margin-left: 320px;
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
    margin-top: -420px;
  }

  .box-imgs .img-moon img {
    width: 400px;
    object-fit: cover;
  }

  .img-earth {
    transform: translateX(-80%);
    margin-top: 500px;
  }

  .box-imgs .img-earth img {
    width: 550px;
    object-fit: cover;
  }

  .img-space {
    transform: translateX(-420%);
    margin-top: -500px;
  }

  .box-imgs .img-space img {
    width: 200px;
    object-fit: cover;
  }

  .img-astronaut {
    transform: translateX(-100%);
    margin-top: 450px;
  }

  .box-imgs .img-astronaut img {
    width: 150px;
    object-fit: cover;
  }
}

@media screen and (max-width: 1024px) {
  .img-moon {
    transform: translateX(200%);
    margin-top: -1100px;
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
    margin-top: -1000px;
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
    margin-top: -850px;
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
    transform: translateX(220%);
    margin-top: -550px;
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
    transform: translateX(-50%);
    margin-top: -450px;
  }

  .box-imgs .img-space img {
    width: 100px;
    object-fit: cover;
  }

  .img-astronaut {
    transform: translateX(-150%);
    margin-top: 500px;
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

  .form .icon-user {
    margin-top: 45px;
    margin-left: 170px;
  }

  .form .icon-pass {
    margin-top: 45px;
    margin-left: 150px;
  }

  .text-validation {
    width: 280px;
    margin-bottom: 10px;
    /* font-size: 10px; */
  }
}

@media screen and (max-width: 400px) {
  .img-moon {
    transform: translateX(220%);
    margin-top: -550px;
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
    transform: translateX(-50%);
    margin-top: -450px;
  }

  .box-imgs .img-space img {
    width: 100px;
    object-fit: cover;
  }

  .img-astronaut {
    transform: translateX(-150%);
    margin-top: 500px;
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

  .form .icon-user {
    margin-top: 45px;
    margin-left: 170px;
  }

  .form .icon-pass {
    margin-top: 45px;
    margin-left: 150px;
  }

  .text-validation {
    font-size: 12px;
    margin-bottom: 12px;
  }

  .fargot {
    width: 100%;
    margin-top: -16px;
    font-size: 10px;
    display: flex;
    justify-content: right;
    color: #fff;
  }
}
</style>