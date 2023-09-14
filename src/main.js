import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';

import "./assets/css/front/main.css";

//載入 axios 套件
import axios from 'axios';
import VueAxios from 'vue-axios';
// 載入 VueEasyLightbox 套件
import VueEasyLightbox from 'vue-easy-lightbox';

// 載入 AOS 套件
import AOS from "aos";
import "aos/dist/aos.css";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(VueEasyLightbox);
app.use(AOS);
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true
});


app.mount('#app');
