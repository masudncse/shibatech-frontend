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
import Layout from "../views/Dashboard/Layout.vue";
import Dashboard from "../views/Dashboard/index.vue";
import RoleRoutes from "./RoleRoutes";
import PermissionRoutes from "./PermissionRoutes";
import CompanyInfoRoutes from "./CompanyInfoRoutes";
import OrganizationRoutes from "./OrganizationRoutes";
import ContactRoutes from "./ContactRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
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
      ...RoleRoutes,
      ...PermissionRoutes,
      ...CompanyInfoRoutes,
      ...OrganizationRoutes,
      ...ContactRoutes,
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
