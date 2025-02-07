<template>
    <div>
        <div class="hero-banner">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="../assets/poryects/primacy-adminHome.png" class="d-block w-100">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-info">
            <div class="box-text">
                <h2>Primacy App Administrativa</h2>
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
                <div class="gallery">
                    <div class="box-img">
                        <img src="../assets/poryects/primacy-adminLogin.png">
                    </div>
                    <div class="box-img">
                        <img src="../assets/poryects/primacy-adminHome.png">
                    </div>
                    <div class="box-img">
                        <img src="../assets/poryects/primacy-adminEdit.png">
                    </div>
                    <div class="box-img">
                        <img src="../assets/poryects/primacy-adminDetails.png">
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
    background: #237a4c;
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
    justify-content: center;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.box-img img {
    width: 100%;
    max-width: 400px;
    height: 200px;
    border-radius: 16px;
    padding: 4px;
}

p, h2 {
    color: #fff;
}
</style>