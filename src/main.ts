import "./assets/css/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ui from "@nuxt/ui/vue-plugin";

import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(
  createRouter({
    routes: [{ path: "/", component: () => import("./pages/index.vue") }],
    history: createWebHistory(),
  })
);

app.use(pinia);
app.use(ui);

app.mount("#app");
