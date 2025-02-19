<template>
    <section class="home">
        <article class="header">
            <div class="container-header">
                <div class="box-img">
                    <img src="/src/assets/poryects/AppData.png" alt="">
                </div>
                <div class="box-title">
                    <h1 class="title">Hola Bienvenidos</h1>
                    <h2 class="subtitle">MAV - Administración</h2>
                </div>
            </div>
        </article>
        <article class="main">
            <div class="container-info">
                <div class="box-text">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, corporis sapiente repellendus
                        cupiditate rerum autem officia ipsam molestiae delectus, eum alias aliquam quod beatae, quisquam
                        asperiores? Adipisci, quia! Quidem, porro.
                    </p>
                </div>
                <div class="box-image">
                    <div class="image laptop">
                        <img src="/src/assets/poryects/login.png" alt="">
                    </div>
                    <div class="image">
                        <img src="/src/assets/poryects/login-movil.png" alt="">
                    </div>
                    <div class="image">
                        <img src="/src/assets/poryects/login-table.png" alt="">
                    </div>
                </div>
            </div>
            <!-- <div class="container-info">
                <div class="box-text">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, corporis sapiente repellendus cupiditate rerum autem officia ipsam molestiae delectus, eum alias aliquam quod beatae, quisquam asperiores? Adipisci, quia! Quidem, porro.
                    </p>
                </div>
                <div class="box-image"></div>
            </div> -->
            <!-- <div class="container-info">
                <div class="box-text">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, corporis sapiente repellendus cupiditate rerum autem officia ipsam molestiae delectus, eum alias aliquam quod beatae, quisquam asperiores? Adipisci, quia! Quidem, porro.
                    </p>
                </div>
                <div class="box-image"></div>
            </div> -->
        </article>
    </section>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');

.home {
    width: 100%;
    height: auto;
    background: #093028;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #237A57, #093028);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #237A57, #093028);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: absolute;
}

.header {
    width: 100%;
    display: flex;
    font-family: 'Lemon';
    color: #fff;
}

.container-header {
    width: 100%;
    display: flex;
    padding: 50px 100px;
}

.box-img img {
    width: 550px;
}

.title {
    width: 550px;
    font-size: 60px;
    padding: 50px;
    margin-top: 50px;
    border-bottom: 8px solid #fff;
}

.subtitle {
    margin: 50px;
}

.container-info {
    width: 100%;
    display: flex;
    overflow: hidden;
}

.box-text {
    width: 50%;
    color: #fff;
}

.box-image {
    width: 50%;
    display: flex;
    overflow: hidden;
}

.image img {
    width: 200px;
}

.laptop img {
    width: 400px;
}
</style>