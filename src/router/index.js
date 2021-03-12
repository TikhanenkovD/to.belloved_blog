import { createWebHistory, createRouter } from "vue-router";
import HomePage from "/src/pages/home/home-page";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
