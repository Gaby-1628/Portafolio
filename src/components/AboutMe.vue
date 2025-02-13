<template>
    <div id="about" class="about">
        <div class="conainer-about">
            <div class="about-me">
                <div class="title">
                    <div class="border-top"></div>
                    <h1>SOBRE MI:</h1>
                    <div class="border-bottom"></div>
                </div>
                <div class="box-text">
                    <p class="paragraph">
                        Soy una desarrolladora frontend apasionada por la creación de experiencias digitales innovadoras y funcionales. Mi enfoque combina diseño y tecnología para construir interfaces intuitivas y atractivas.
                    </p>
                    <p class="paragraph">
                        Cuento con una certificación en Programación Web Full Stack avalada por la Universidad del Salvador y una formación en Project Management tras ser becada por Google. Esto me ha permitido desarrollar habilidades en organización, gestión de proyectos y metodologías ágiles de trabajo en equipo.
                    </p>
                    <p class="paragraph">
                        Además, he explorado el mundo del diseño y la programación de videojuegos, un área que me motiva a seguir aprendiendo y expandiendo mis conocimientos. Actualmente, trabajo como programadora autónoma, diseñando y desarrollando sitios web adaptados a las necesidades de cada cliente.
                    </p>
                    <p class="paragraph">
                        Siempre en búsqueda de nuevos desafíos, mi objetivo es seguir creciendo profesionalmente, aprender de otros expertos en el sector y aportar valor a proyectos innovadores.
                    </p>
                </div>
            </div>
            <div class="box-skins">
                <span v-for="tech in technologies" :key="tech.name" class="tech-item"
                    :style="{ color: tech.color, marginTop: tech.marginTop + 'px', marginLeft: tech.marginLeft + 'px' }">
                    {{ tech.name }} <v-icon :name="tech.icon" />
                </span>
            </div>
        </div>
        <div class="box-skins_responsive">
            <span v-for="techno in technoResponsive" :key="techno.name" class="tech-item_responsive"
                :style="{ color: techno.color }">
                {{ techno.name }} <v-icon :name="techno.icon" class="icon-responsive" />
            </span>
        </div>
        <div class="slaide-container_logo_invert">
            <div class="slaide-track_logo_invert">
                <div class="slaide" v-for="n in 30" :key="n">
                    <img src="/public/img/icon/logo_android_invert.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="slaide-container_logo">
            <div class="slaide-track_logo">
                <div class="slaide" v-for="n in 30" :key="n">
                    <img src="/public/img/icon/logo_android.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const technologies = ref([
    { name: "HTML5", icon: "co-html5", color: "#1BE5DD", marginTop: 230, marginLeft: 210 },
    { name: "CSS3", icon: "co-css3-shiled", color: "#fff", marginTop: 220, marginLeft: -250 },
    { name: "JavaScript", icon: "co-javascript", color: "#1BE5DD", marginTop: 220, marginLeft: 350 },
    { name: "Vue.js", icon: "co-vue-js", color: "#1BE5DD", marginTop: 400, marginLeft: -270 },
    { name: "React.js", icon: "co-react", color: "#E51B23", marginTop: 70, marginLeft: 20 },
    { name: "Figma", icon: "co-figma", color: "#E51B23", marginTop: 150, marginLeft: 0 },
    { name: "Webpack", icon: "co-webpack", color: "#fff", marginTop: 50, marginLeft: -350 },
    { name: "Bootstrap", icon: "co-bootstrap", color: "#1BE5DD", marginTop: 120, marginLeft: 40 },
    { name: "Git", icon: "bi-git", color: "#fff", marginTop: 180, marginLeft: 0 },
    { name: "Firebase", icon: "co-firebase", color: "#E51B23", marginTop: 165, marginLeft: -220 },
    { name: "Vitest", icon: "si-vite", color: "#1BE5DD", marginTop: 290, marginLeft: 0 },
    { name: "VisualStudio", icon: "co-visual-studio", color: "#1BE5DD", marginTop: 270, marginLeft: -250 },
    { name: "Node.js", icon: "fa-node-js", color: "#E51B23", marginTop: 100, marginLeft: -80 },
    { name: "APIrest", icon: "fa-database", color: "#E51B23", marginTop: 310, marginLeft: -150 },
    { name: "PWA", icon: "si-pwa", color: "#1BE5DD", marginTop: 220, marginLeft: 150 },
    { name: "Responsive", icon: "fa-mobile-alt", color: "#fff", marginTop: 330, marginLeft: 0 },
    { name: "GitHub", icon: "co-github", color: "#E51B23", marginTop: 380, marginLeft: -100 },
    { name: "ServiceWorker", icon: "ri-database-line", color: "#1BE5DD", marginTop: 350, marginLeft: -250 },
    { name: "GitLab", icon: "co-gitlab", color: "#fff", marginTop: 200, marginLeft: -200 },
    { name: "Tailwind", icon: "si-tailwindcss", color: "#1BE5DD", marginTop: 140, marginLeft: -120 },
    { name: "npn", icon: "co-npm", color: "#E51B23", marginTop: 180, marginLeft: -120 }
]);

const technoResponsive = ref([
    { name: "HTML5", icon: "co-html5", color: "#1BE5DD" },
    { name: "CSS3", icon: "co-css3-shiled", color: "#fff" },
    { name: "JavaScript", icon: "co-javascript", color: "#1BE5DD" },
    { name: "Vue.js", icon: "co-vue-js", color: "#1BE5DD" },
    { name: "React.js", icon: "co-react", color: "#E51B23" },
    { name: "Figma", icon: "co-figma", color: "#E51B23" },
    { name: "Webpack", icon: "co-webpack", color: "#fff" },
    { name: "Bootstrap", icon: "co-bootstrap", color: "#1BE5DD" },
    { name: "Git", icon: "bi-git", color: "#fff" },
    { name: "Firebase", icon: "co-firebase", color: "#E51B23" },
    { name: "Vitest", icon: "si-vite", color: "#1BE5DD" },
    { name: "VisualStudio", icon: "co-visual-studio", color: "#1BE5DD" },
    { name: "Node.js", icon: "fa-node-js", color: "#E51B23" },
    { name: "APIrest", icon: "fa-database", color: "#E51B23" },
    { name: "PWA", icon: "si-pwa", color: "#1BE5DD" },
    { name: "Responsive", icon: "fa-mobile-alt", color: "#fff" },
    { name: "GitHub", icon: "co-github", color: "#E51B23" },
    { name: "ServiceWorker", icon: "ri-database-line", color: "#1BE5DD" },
    { name: "GitLab", icon: "co-gitlab", color: "#fff" },
    { name: "Tailwind", icon: "si-tailwindcss", color: "#1BE5DD" },
    { name: "npn", icon: "co-npm", color: "#E51B23" }
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
@import "tailwindcss";

.about {
    width: 100%;
    height: auto;
    background-color: #161616;
    overflow: hidden;
}

.conainer-about {
    width: 100%;
    display: flex;
}

.about-me {
    width: 70%;
}

.title {
    font-family: 'Pixelify Sans';
    color: #fff;
    margin: 100px 0 100px 100px;
}

.title h1 {
    font-size: 58px;
    letter-spacing: 5px;
}

.border-top {
    width: 200px;
    border: 4px solid #fff;
}

.border-bottom {
    width: 200px;
    border: 4px solid #fff;
}

.box-text {
    width: 70%;
    text-align: justify;
    color: #fff;
    margin-top: -40px;
    margin-left: 100px;
}

.paragraph {
    font-family: 'Pixelify Sans';
    letter-spacing: 2px;
}

.slaide-container_logo_invert,
.slaide-container_logo {
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}

.slaide-container_logo_invert {
    transform: rotate(5deg);
    margin-top: 80px;
    margin-bottom: 50px;
}

.slaide-container_logo {
    transform: rotate(-5deg);
    margin-top: -80px;
    margin-bottom: 100px;
}

.slaide-track_logo_invert,
.slaide-track_logo {
    display: flex;
    width: max-content;
    animation: scroll 20s linear infinite;
}

.slaide {
    flex: 0 0 auto;
    margin: 0;
}

.slaide img {
    width: 50px;
    height: auto;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.box-skins {
    width: 40%;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    transform: translateX(-50%);
    flex-wrap: wrap;
}

@keyframes floatAnimation {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.tech-item {
    font-weight: 700;
    cursor: pointer;
    transition: all 0.5s;
    animation: floatAnimation 3s ease-in-out infinite alternate;
}

.tech-item_responsive {
    display: none;
}

/* ------------------------------------------------------------ */
/* ------------------------ RESPONSIVE ------------------------ */
/* ------------------------------------------------------------ */

@media screen and (max-width: 1300px) {
    .box-skins {
        width: 40%;
        display: flex;
        justify-content: center;
        margin-top: -100px;
        transform: translateX(-50%);
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 1024px) {
    .about-me {
        width: 100%;
    }

    .title {
        width: 100%;
        margin: 50px 0 50px 50px;
    }

    .title h1 {
        font-size: 50px;
    }

    .border-top {
        width: 170px;
    }

    .border-bottom {
        width: 170px;
    }

    .box-text {
        width: 100%;
        text-align: justify;
        margin-left: 120px;
    }

    .paragraph {
        letter-spacing: 2px;
        font-size: 18px;
    }

    .tech-item {
        display: none;
    }

    .box-skins_responsive {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px;
        padding: 10px;
        justify-items: center;
    }

    .tech-item_responsive {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 8px 10px;
        text-align: center;
        transition: transform 0.3s ease-in-out;
        width: 100%;
    }

    .tech-item_responsive .icon-responsive {
        margin-left: 15px;
        scale: 2.2;
    }

    .slaide-container_logo_invert,
    .slaide-container_logo {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .about-me {
        width: 100%;
    }

    .title {
        width: 100%;
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

    .box-text {
        width: 100%;
        text-align: justify;
        margin-left: 60px;
    }

    .paragraph {
        letter-spacing: 2px;
        font-size: 14px;
    }

    .tech-item {
        display: none;
    }

    .box-skins_responsive {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 10px;
        padding: 10px;
        justify-items: center;
    }

    .tech-item_responsive {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 8px 10px;
        text-align: center;
        transition: transform 0.3s ease-in-out;
        width: 100%;
    }

    .tech-item_responsive .icon-responsive {
        margin-left: 5px;
        scale: 1;
    }

    .slaide-container_logo_invert,
    .slaide-container_logo {
        display: none;
    }
}

@media screen and (max-width: 400px) {
    .box-text {
        width: 100%;
        text-align: justify;
        margin-left: 50px;
    }

    .paragraph {
        letter-spacing: 1px;
        font-size: 12px;
    }
}
</style>