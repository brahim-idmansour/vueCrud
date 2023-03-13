import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/students/View.vue";
import StudentsCreate from "../views/students/Create.vue";
import StudentsEdit from "../views/students/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: StudentView,
    },
    {
      path: "/students/create",
      name: "studentCreate",
      component: StudentsCreate,
    },
    {
      path: "/students/:id/edit",
      name: "studentEdit",
      component: StudentsEdit,
    },
  ],
});

export default router;
