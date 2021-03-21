import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/vendors",
        component: () => import("../views/vendor/VendorList.vue"),
      },
      {
        path: "/vendors/add",
        component: () => import("../views/vendor/AddVendor.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/forgot",
    component: () => import("../views/auth/Forgot.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
