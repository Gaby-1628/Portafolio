import { createApp } from 'vue';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiFileList3Line, CoLinkedinIn, CoGithub, CoWhatsapp, CoHtml5, CoReact, CoCss3Shiled, CoJavascript, CoVueJs, FaNodeJs, CoFigma, CoVisualStudio, BiGit, CoGitlab, CoBootstrap, SiPwa, FaDatabase, CoFirebase, FaMobileAlt, CoWebpack, RiDatabaseLine, SiVite, SiTailwindcss, BiArrowBarRight, PxArrowDown, HiMenu, FaLongArrowAltRight, GiPlasmaBolt, FaSpaceShuttle, FaLaptopHouse, CoNpm, CoLan, RiFileShield2Line, MdGroups, FaUserAstronaut, GiSpaceship, FaUserLock, FaHandshake, LaCopyright, MdEmail, IoCloseSharp, BiLinkedin, PxHome, PxUser, RiBriefcase5Line, FaRegularUser, AiClosedAccess, MdInstallmobile, BiArrowBarLeft, MdAlternateemail, MdSpacedashboard, RiUserReceivedFill, MdVerifiedTwotone, FaRegularUserCircle, FaHome, FaUserEdit, FaEye, IoClose, BiCalendarWeek, FaChartArea, HiSolidUsers, MdKeyboarddoublearrowleftTwotone, MdKeyboarddoublearrowright, CoMinutemailer, CoKeycdn, BiPlusSquareFill, FaEdit, RiDeleteBin5Fill, BiSearch, GiRingedPlanet, GiCometSpark, MdPassword, FaUser, GiPadlock } from "oh-vue-icons/icons";
import VueApexCharts from "vue3-apexcharts";

addIcons(RiFileList3Line, CoLinkedinIn, CoGithub, CoWhatsapp, CoHtml5, CoReact, CoCss3Shiled, CoJavascript, CoVueJs, FaNodeJs, CoFigma, CoVisualStudio, BiGit, CoGitlab, CoBootstrap, SiPwa, FaDatabase, CoFirebase, FaMobileAlt, CoWebpack, RiDatabaseLine, SiVite, SiTailwindcss, BiArrowBarRight, PxArrowDown, HiMenu, FaLongArrowAltRight, GiPlasmaBolt, FaSpaceShuttle, FaLaptopHouse, CoNpm, CoLan, RiFileShield2Line, MdGroups, FaUserAstronaut, GiSpaceship, FaUserLock, FaHandshake, LaCopyright, MdEmail, IoCloseSharp, BiLinkedin, PxHome, PxUser, RiBriefcase5Line, FaRegularUser, AiClosedAccess, MdInstallmobile, BiArrowBarLeft, MdAlternateemail, MdSpacedashboard, RiUserReceivedFill, MdVerifiedTwotone, FaRegularUserCircle, FaHome, FaUserEdit, FaEye, IoClose, BiCalendarWeek, FaChartArea, HiSolidUsers, MdKeyboarddoublearrowleftTwotone, MdKeyboarddoublearrowright, CoMinutemailer, CoKeycdn, BiPlusSquareFill, FaEdit, RiDeleteBin5Fill, BiSearch, GiRingedPlanet, GiCometSpark, MdPassword, FaUser, GiPadlock);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(VueApexCharts);

app.use(router).mount('#app')
