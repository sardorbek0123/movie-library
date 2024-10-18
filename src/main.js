import {createApp} from "vue";
import "@/style.css";
import router from "@/router";
import {store} from "@/store/indes.ts";

import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
