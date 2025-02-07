<template>
    <div class="home" id="home">
        <div class="container">
            <div class="box-user">
                <div class="paintStainRed">
                    <div class="img-user">
                        <img src="/public/img/user.png" alt="">
                    </div>
                </div>
                <div class="box-text">
                    <h1>Hola, soy <span style="color: #E51B23;">Gabriela</span></h1>
                    <h2 style="color: #1BE5DD;">Desarrolladora</h2>
                    <h2>Frontend</h2>
                    <button type="button" class="btn btn-outline-info" @click="downloadCV">Descargar CV <v-icon name="ri-file-list-3-line" /></button>
                    <button type="button" class="btn btn-outline-danger mx-4" @click="downpage">Comenzar <v-icon name="px-arrow-down"/></button>
                </div>
                <div class="icon-content">
                    <img src="/public/img/icon/logo_android_invert.jpg" alt="">
                </div>
                <div class="paintStainBlue">
                    <img src="/public/img/paintStainBlue.jpg" alt="">
                    <div class="box-btn">
                        <a href="https://www.linkedin.com/in/gabriela-marisol-rodriguez-dos-santos-5b9196270/"
                            target="_blank" class="btn-icon"><v-icon name="co-linkedin-in" scale="2" /></a>
                        <a href="https://github.com/Gaby-1628?tab=repositories" target="_blank" class="btn-icon"><v-icon
                                name="co-github" scale="2" /></a>
                        <a href="https://api.whatsapp.com/send?phone=542975047240" target="_blank"
                            class="btn-icon"><v-icon name="co-whatsapp" scale="2" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Gabriela_Rodriguez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
</style>