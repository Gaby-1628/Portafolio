<template>
    <div>
        <div class="hero-banner">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="../assets/poryects/mav-admin-menu.png" class="d-block w-100">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../assets/poryects/mavCity.png" class="d-block w-100">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../assets/poryects/mavSchedules.png" class="d-block w-100">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../assets/poryects/mav-adminHome.png" class="d-block w-100">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-info">
            <div class="box-text">
                <h2>MAV app administrativa</h2>
                <p>
                    Mav es una aplicacion administrativa, diseñada y desarrollada para una empresa dedicada al
                    transporte de personal y equipamiento para empresas petroleras. Esta aplicacion busca resolver de
                    forma eficiente, la forma en la que se crean las ordenes para cada viaje, manteniendo toda la
                    informacion en un solo lugar, facil de acceder para un administrador, y facil de generar. Ademas de
                    generar ordenes mantiene una base de datos para todos los vehiculos y conductores, entre otras
                    funciones, para facilitar el manejo de informacion.
                </p>
            </div>
            <div class="content-info">
                <div class="box-image">
                    <img src="../assets/poryects/mav-login.png">
                </div>
                <div class="gallery">
                    <div class="box-img">
                        <img src="../assets/poryects/mav-admin-menu.png">
                    </div>
                    <div class="box-img">
                        <img src="../assets/poryects/mavUser.png">
                    </div>
                    <div class="box-img">
                        <img src="../assets/poryects/mavDelet.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hero-banner {
    width: 100%;
    height: 300px;
    background: #1B2D32;
}

.container-info {
    width: 100%;
    display: flex;
    overflow: hidden;
    position: absolute;
    background: #237A57;
    margin-top: 50px;
}

.box-text {
    width: 50%;
    margin: auto;
    padding: 40px;
}

.content-info {
    width: 60%;
    display: flex;
    margin-top: 50px;
}

.box-image img {
    width: 400px;
    height: 558px;
    border-radius: 16px;
    padding: 4px;
}

.gallery {
    display: block;
}

.box-img img {
    width: 400px;
    border-radius: 16px;
    padding: 4px;
}

p, h2 {
    color: #fff;
}
</style>