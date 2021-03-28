import Vue from "vue";
import VueRouter from "vue-router";
import UserRoutes from "./UserRoutes";
import VendorRoutes from "./VendorRoutes";
import UnitRoutes from "./UnitRoutes";
import CountryRoutes from "./CountryRoutes";
import CategoryRoutes from "./CategoryRoutes";
import StateRoutes from "./StateRoutes";
import CityRoutes from "./CityRoutes";
import ProductRoutes from "./ProductRoutes";
import DashboardLayout from "../views/Dashboard/Layout.vue";
import Dashboard from "../views/Dashboard/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "",
        component: Dashboard,
      },
      ...UserRoutes,
      ...VendorRoutes,
      ...UnitRoutes,
      ...CategoryRoutes,
      ...CountryRoutes,
      ...StateRoutes,
      ...CityRoutes,
      ...ProductRoutes,
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Auth/Login.vue"),
  },
  {
    path: "/forgot",
    component: () => import("../views/Auth/Forgot.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
