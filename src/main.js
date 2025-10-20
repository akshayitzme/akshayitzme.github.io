import "./style.css";

import App from "./App.vue";
import router from "./router";
import Clarity from "@microsoft/clarity";

import { createApp } from "vue";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const projectId = "rt2qldwzil";
Clarity.init(projectId);

const app = createApp(App);

app.use(VueQueryPlugin, {
  queryClient,
});

app.use(router);
app.mount("#app");
