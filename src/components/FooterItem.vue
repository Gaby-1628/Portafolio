<template>
    <div class="footer">
        <div class="content-logo">
            <img src="../assets/logo_android.jpg" alt="">
            <span style="color: #E51B23;">Diseño</span>
            <span>y</span>
            <span style="color: #1BE5DD;">desarrollo</span>
        </div>
        <div class="contact">
            <span><v-icon name="md-email" scale="1.5" color="#fff" /> RodriguezDS_Gabriela@hotmail.com <v-icon
                    name="co-minutemailer" scale="1.5" color="#1BE5DD" /></span>
        </div>
        <div class="copy">
            <span><v-icon name="la-copyright" /> Copyright | Gabriela Rodriguez | gabyfrontend.com</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

.footer {
    overflow: hidden;
    width: 100%;
    height: auto;
    background-color: #161616;
    color: #fff;
    display: flex;
}

.content-logo img {
    width: 100px;
    border-radius: 28px;
    margin: 40px;
}

.content-logo span {
    font-family: 'Pixelify Sans';
    padding: 20px 5px;
    letter-spacing: 2px;
    font-size: 18px;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
}

.contact {
    margin-top: 70px;
}

.contact span {
    margin-left: 50px;
    color: #E51B23;
}

.copy {
    margin-top: 140px;
    margin-left: 150px;
}

/* ------------------------------------------------------------ */
/* ------------------------ RESPONSIVE ------------------------ */
/* ------------------------------------------------------------ */

@media screen and (max-width: 1024px) {
    .footer {
        display: grid;
        flex-direction: column;
        grid-auto-columns: auto auto;
    }

    .content-logo img {
        width: 50px;
        border-radius: 28px;
        margin: 30px;
    }

    .content-logo span {
        padding: 10px 5px;
        font-size: 12px;
    }

    .contact {
        margin-top: 10px;
    }

    .contact span {
        margin-left: 50px;
        font-size: 12px;
    }

    .copy {
        text-align: center;
        font-size: 12px;
        margin-top: 40px;
        margin-left: -30px;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 600px) {
    .footer {
        display: grid;
    }

    .content-logo img {
        width: 50px;
        border-radius: 28px;
        margin: 30px;
    }

    .content-logo span {
        padding: 10px 5px;
        font-size: 12px;
    }

    .contact {
        margin-top: 10px;
    }

    .contact span {
        margin-left: 50px;
        font-size: 12px;
    }

    .copy {
        text-align: center;
        font-size: 12px;
        margin-top: 40px;
        margin-left: -30px;
        margin-bottom: 20px;
    }
}
</style>