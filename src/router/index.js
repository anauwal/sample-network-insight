import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home";

const router = createRouter({
  history: createWebHashHistory(),   // hash
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
  ]
});

export default router;