import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue-3'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from "@/routes/routes";
import {store} from "@/store/store";
import axios from "axios";

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.config.globalProperties.axios=axios
app.use(store)
app.use(BootstrapVue)
app.use(router)
app.mount('#app')
