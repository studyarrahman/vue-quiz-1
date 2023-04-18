import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";


//import './assets/main.css'

createApp(App).use(router).use(bootstrap).mount('#app')

