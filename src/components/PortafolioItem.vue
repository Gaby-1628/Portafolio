<template>
    <div class="portafolio" id="portafolio">
        <div class="title">
            <div class="border-top"></div>
            <h1>Portafolio:</h1>
            <div class="border-bottom"></div>
        </div>
        <div class="container-proyects">
            <div class="box-proyect">
                <div class="content-img">
                    <img src="../assets/poryects/outit.png" alt="">
                </div>
                <div class="overlay">
                    <a href="https://outit.com.ar/" target="_blank" class="btn-icon">Ver Proyecto <v-icon
                            name="bi-arrow-bar-right" scale="1.2" /></a>
                </div>
            </div>
            <div class="box-proyect">
                <div class="content-img">
                    <img src="../assets/poryects/radanet.png" alt="">
                </div>
                <div class="overlay">
                    <a href="https://www.radanet.com.ar/" target="_blank" class="btn-icon">Ver Proyecto <v-icon
                            name="bi-arrow-bar-right" scale="1.2" /></a>
                </div>
            </div>
            <div class="box-proyect">
                <div class="content-img">
                    <img src="../assets/poryects/mateHome.png" alt="">
                </div>
                <div class="overlay">
                    <router-link to="/mate-web" class="btn-icon">Ver Proyecto <v-icon name="bi-arrow-bar-right"
                            scale="1.2" /></router-link>
                </div>
            </div>
            <div class="box-proyect">
                <div class="content-img">
                    <img src="../assets/poryects/mav-adminHome.png" alt="">
                </div>
                <div class="overlay">
                    <router-link to="/mav-admin" class="btn-icon">Ver Proyecto <v-icon name="bi-arrow-bar-right"
                            scale="1.2" /></router-link>
                </div>
            </div>
            <div class="box-proyect">
                <div class="content-img">
                    <img src="../assets/poryects/primacy-adminHome.png" alt="">
                </div>
                <div class="overlay">
                    <button @click="redirect" class="btn-icon">Ver Proyecto <v-icon name="bi-arrow-bar-right"
                            scale="1.2" /></button>
                </div>
            </div>
            <div class="box-proyect">
                <div class="content-img">
                    <img src="../assets/poryects/primacy-userHome.png" alt="">
                </div>
                <div class="overlay">
                    <router-link to="/primacy-user" class="btn-icon">Ver Proyecto <v-icon name="bi-arrow-bar-right"
                            scale="1.2" /></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import router from '../router';

const redirect = () => {
    Swal.fire({
        title: "Primacy CRM",
        text: "A continuación será redirigido a una maqueta interactiva de la App de Primacy CRM",
        icon: "info",
        showCancelButton: false,
        confirmButtonText: "OK",
        // allowOutsideClick: false,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
    }).then((result) => {
        if (result.isConfirmed) {
            router.push({ name: 'primacy-admin' });
        }
    });
};


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

a {
    text-decoration: none;
    color: #fff;
}

.portafolio {
    width: 100%;
    height: auto;
    background-color: #000;
    overflow: hidden;
}

.title {
    font-family: 'Pixelify Sans';
    color: #E51B23;
    margin: 100px 0 100px 100px;
}

.title h1 {
    font-size: 58px;
    letter-spacing: 5px;
}

.border-top {
    width: 200px;
    border: 4px solid #E51B23;
}

.border-bottom {
    width: 200px;
    border: 4px solid #E51B23;
}

.container-proyects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.content-img img {
    width: 350px;
    height: 200px;
    display: block;
    border-radius: 10px;
}

.box-proyect {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.box-proyect:hover {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
}

.box-proyect:hover .overlay {
    opacity: 1;
}

.overlay button {
    background: #E51B23;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
}

.overlay button:hover {
    background: #b8151b;
}

/* ------------------------------------------------------------ */
/* ------------------------ RESPONSIVE ------------------------ */
/* ------------------------------------------------------------ */

@media screen and (max-width: 1024px) {
    .container-proyects {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 20px;
    }
}

@media screen and (max-width: 600px) {
    .title {
        margin: 50px 0 50px 50px;
    }

    .title h1 {
        font-size: 40px;
    }

    .border-top {
        width: 150px;
    }

    .border-bottom {
        width: 150px;
    }

    .container-proyects {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 40px;
    }
}

@media screen and (width: 540px) {
    .container-proyects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 20px;
    }
}

@media screen and (max-width: 400px) {
    .container-proyects {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 20px;
    }
}
</style>