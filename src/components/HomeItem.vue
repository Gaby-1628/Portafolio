<template>
    <div class="home" id="home">
        <div class="container">
            <div class="box-user">
                <div class="paintStainRed">
                    <div class="img-user">
                        <img src="../assets/user.png" alt="">
                    </div>
                </div>
                <div class="box-text">
                    <h1>Hola, soy <span style="color: #E51B23;">Gabriela</span></h1>
                    <h2 style="color: #1BE5DD;">Desarrolladora</h2>
                    <h2>Frontend</h2>
                    <div class="content-btn">
                        <button type="button" class="btn btn-outline-info" @click="downloadCV">
                            <span class="text-span">Descargar CV</span> <v-icon name="ri-file-list-3-line" />
                        </button>
                        <button type="button" class="btn btn-outline-danger mx-4" @click="downpage">
                            <span class="text-span">Comenzar</span> <v-icon name="px-arrow-down" />
                        </button>
                    </div>
                </div>
                <div class="icon-content">
                    <img src="../assets/logo_android_invert.jpg" alt="">
                </div>
                <div class="paintStainBlue">
                    <img src="../assets/paintStainBlue.jpg" alt="">
                    <div class="box-btn">
                        <a href="https://www.linkedin.com/in/gabriela-marisol-rodriguez-dos-santos-5b9196270/"
                            target="_blank" class="btn-icon"><v-icon name="co-linkedin-in" scale="2" class="icon" /></a>
                        <a href="https://github.com/Gaby-1628?tab=repositories" target="_blank" class="btn-icon"><v-icon
                                name="co-github" scale="2" class="icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=542975047240" target="_blank"
                            class="btn-icon"><v-icon name="co-whatsapp" scale="2" class="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const downloadCV = () => {
    const cvUrl = `${window.location.origin}/CV.pdf`;

    fetch(cvUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Gabriela_Rodriguez_CV.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error("Error al descargar el CV:", error);
            alert("Hubo un problema al descargar el CV. Inténtalo de nuevo.");
        });
};

const downpage = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

a {
    color: #000;
    text-decoration: none;
}

.home {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: #fff;
}

.container {
    position: absolute;
}

.box-user {
    width: 100%;
    display: flex;
}

.paintStainRed {
    position: relative;
    background-image: url(/public/img/paintStainRed.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    transform: translateY(-10%);
}

.img-user img {
    width: 700px;
    margin-top: 90px;
}

.icon-content {
    margin-left: 550px;
    margin-top: 50px;
}

.icon-content img {
    border-radius: 8px;
}

.box-text {
    position: absolute;
    width: 100%;
    font-family: 'Pixelify Sans';
    text-align: center;
    margin-top: 220px;
    margin-left: 250px;
    letter-spacing: 5px;
    z-index: 10;
}

.box-text h1,
.box-text h2 {
    font-size: 65px;
}

.paintStainBlue img {
    width: 400px;
    transform: translateY(400%);
    margin-left: -650px;
}

.box-btn {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(1200%);
    margin-left: -550px;
}

.btn-icon {
    transition: all .5s;
}

.btn-icon:hover {
    scale: 1.2;
}

/* ------------------------------------------------------------ */
/* ------------------------ RESPONSIVE ------------------------ */
/* ------------------------------------------------------------ */

@media screen and (max-width: 1300px) {
    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 220px;
        margin-left: 350px;
        letter-spacing: 5px;
        z-index: 10;
    }
}

@media screen and (max-width: 1024px) {
    .home {
        overflow: hidden;
        width: 100%;
        height: 500px;
        background-color: #000;
        color: #fff;
    }

    .paintStainRed {
        position: relative;
        background-image: url(/public/img/paintStainRed.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(5%);
    }

    .img-user img {
        width: 450px;
        margin-top: 10px;
        margin-left: -16px;
    }

    .icon-content {
        margin-left: 390px;
        margin-top: 20px;
    }

    .icon-content img {
        border-radius: 8px;
        width: 150px;
    }

    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 150px;
        margin-left: 120px;
        letter-spacing: 1px;
        z-index: 10;
    }

    .box-text h1,
    .box-text h2 {
        font-size: 45px;
    }

    .paintStainBlue img {
        width: 200px;
        transform: translateY(600%);
        margin-left: -440px;
    }

    .box-btn {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(940%);
        margin-left: -400px;
    }

    .icon {
        scale: .8;
    }

    .btn-icon {
        transition: all .5s;
    }

    .btn-icon:hover {
        scale: 1.2;
    }

    .content-btn {
        margin-left: 70px;
    }

    .text-span {
        display: block;
    }
}

@media screen and (max-width: 920px) {
    .home {
        overflow: hidden;
        width: 100%;
        height: 500px;
        background-color: #000;
        color: #fff;
    }

    .paintStainRed {
        position: relative;
        background-image: url(/public/img/paintStainRed.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(5%);
    }

    .img-user img {
        width: 450px;
        margin-top: 10px;
        margin-left: -16px;
    }

    .icon-content {
        margin-left: 320px;
        margin-top: 20px;
    }

    .icon-content img {
        border-radius: 8px;
        width: 120px;
    }

    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 150px;
        margin-left: 200px;
        letter-spacing: 1px;
        z-index: 10;
    }

    .box-text h1,
    .box-text h2 {
        font-size: 45px;
    }

    .paintStainBlue img {
        width: 250px;
        transform: translateY(470%);
        margin-left: -290px;
    }

    .box-btn {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(900%);
        margin-left: -250px;
    }

    .icon {
        scale: 1;
        margin: auto 10px;
    }

    .btn-icon {
        transition: all .5s;
    }

    .btn-icon:hover {
        scale: 1.2;
    }

    .content-btn {
        margin-left: 70px;
    }

    .text-span {
        display: block;
    }
}

@media screen and (max-width: 860px) {
    .home {
        overflow: hidden;
        width: 100%;
        height: 500px;
        background-color: #000;
        color: #fff;
    }

    .paintStainRed {
        position: relative;
        background-image: url(/public/img/paintStainRed.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(5%);
    }

    .img-user img {
        width: 450px;
        margin-top: 10px;
        margin-left: -16px;
    }

    .icon-content {
        margin-left: 220px;
        margin-top: 20px;
    }

    .icon-content img {
        border-radius: 8px;
        width: 100px;
    }

    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 150px;
        margin-left: 200px;
        letter-spacing: 1px;
        z-index: 10;
    }

    .box-text h1,
    .box-text h2 {
        font-size: 45px;
    }

    .paintStainBlue img {
        width: 250px;
        transform: translateY(470%);
        margin-left: -290px;
    }

    .box-btn {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(900%);
        margin-left: -250px;
    }

    .icon {
        scale: 1;
        margin: auto 10px;
    }

    .btn-icon {
        transition: all .5s;
    }

    .btn-icon:hover {
        scale: 1.2;
    }

    .content-btn {
        margin-left: 70px;
    }

    .text-span {
        display: block;
    }
}

@media screen and (max-width: 600px) {
    .home {
        overflow: hidden;
        width: 100%;
        height: 300px;
        background-color: #000;
        color: #fff;
    }

    .paintStainRed {
        position: relative;
        background-image: url(/public/img/paintStainRed.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(5%);
    }

    .img-user img {
        width: 220px;
        margin-top: 10px;
        margin-left: -16px;
    }

    .icon-content {
        margin-left: 80px;
        margin-top: 10px;
    }

    .icon-content img {
        border-radius: 8px;
        width: 70px;
    }

    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 100px;
        margin-left: 70px;
        letter-spacing: 1px;
        z-index: 10;
    }

    .box-text h1,
    .box-text h2 {
        font-size: 20px;
    }

    .paintStainBlue img {
        width: 150px;
        transform: translateY(470%);
        margin-left: -140px;
    }

    .box-btn {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(520%);
        margin-left: -120px;
    }

    .icon {
        scale: .6;
        margin: auto 0px;
    }

    .btn-icon {
        transition: all .5s;
    }

    .btn-icon:hover {
        scale: 1.2;
    }

    .content-btn {
        margin-left: 70px;
    }

    .text-span {
        display: none;
    }
}

@media screen and (width: 540px) {
    .home {
        overflow: hidden;
        width: 100%;
        height: 300px;
        background-color: #000;
        color: #fff;
    }

    .paintStainRed {
        position: relative;
        background-image: url(/public/img/paintStainRed.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(5%);
    }

    .img-user img {
        width: 250px;
        margin-top: 10px;
        margin-left: -16px;
    }

    .icon-content {
        margin-left: 120px;
        margin-top: 10px;
    }

    .icon-content img {
        border-radius: 8px;
        width: 70px;
    }

    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 100px;
        margin-left: 70px;
        letter-spacing: 1px;
        z-index: 10;
    }

    .box-text h1,
    .box-text h2 {
        font-size: 20px;
    }

    .paintStainBlue img {
        width: 150px;
        transform: translateY(470%);
        margin-left: -140px;
    }

    .box-btn {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(520%);
        margin-left: -120px;
    }

    .icon {
        scale: .6;
        margin: auto 0px;
    }

    .btn-icon {
        transition: all .5s;
    }

    .btn-icon:hover {
        scale: 1.2;
    }

    .content-btn {
        margin-left: 70px;
    }

    .text-span {
        display: none;
    }
}

@media screen and (width: 344px) {
    .home {
        overflow: hidden;
        width: 100%;
        height: 250px;
        background-color: #000;
        color: #fff;
    }

    .paintStainRed {
        position: relative;
        background-image: url(/public/img/paintStainRed.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(5%);
    }

    .img-user img {
        width: 200px;
        margin-top: 10px;
        margin-left: -16px;
    }

    .icon-content {
        display: none;
    }

    .box-text {
        position: absolute;
        width: 100%;
        font-family: 'Pixelify Sans';
        text-align: center;
        margin-top: 50px;
        margin-left: 65px;
        letter-spacing: 1px;
        z-index: 10;
    }

    .box-text h1,
    .box-text h2 {
        font-size: 20px;
    }

    .paintStainBlue img {
        width: 128px;
        transform: translateY(440%);
        margin-left: 10px;
    }

    .box-btn {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(400%);
        margin-left: 15px;
    }

    .icon {
        scale: .5;
        margin: auto;
    }

    .btn-icon {
        transition: all .5s;
    }

    .btn-icon:hover {
        scale: 1.2;
    }

    .content-btn {
        margin-left: 70px;
    }

    .text-span {
        display: none;
    }
}
</style>