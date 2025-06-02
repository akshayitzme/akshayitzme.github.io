import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Clarity from "@microsoft/clarity";

const projectId = "rt2qldwzil";
Clarity.init(projectId);

createApp(App).use(router).mount("#app");
