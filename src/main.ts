import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";

import { Quasar, Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import "@/assets/css/index.css";
import "@/assets/scss/global.scss";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Quasar, {
  plugins: { Notify },
});
app.mount("#app");
