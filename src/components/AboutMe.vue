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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cum dolor enim, molestias culpa
                        a?
                        Aliquid ab laboriosam quia ex totam! Molestiae nihil doloribus quos, obcaecati nostrum
                        blanditiis
                        ratione delectus.
                    </p>
                    <p class="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cum dolor enim, molestias culpa
                        a?
                        Aliquid ab laboriosam quia ex totam! Molestiae nihil doloribus quos, obcaecati nostrum
                        blanditiis
                        ratione delectus.
                    </p>
                    <p class="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere cum dolor enim, molestias culpa
                        a?
                        Aliquid ab laboriosam quia ex totam! Molestiae nihil doloribus quos, obcaecati nostrum
                        blanditiis
                        ratione delectus.
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
    { name: "HTML5", icon: "co-html5", color: "#1BE5DD", marginTop: 0, marginLeft: 210 },
    { name: "CSS3", icon: "co-css3-shield", color: "#fff", marginTop: 220, marginLeft: -250 },
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
    text-align: center;
    color: #fff;
    margin-top: -20px;
    margin-left: 50px;
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
    margin-top: 70px;
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
</style>