import Vue from "vue";
import VueRouter from "vue-router";
import Master from "../views/layouts/Master.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Master,
    children: [
      {
        path: "",
        component: () => import("../views/dashboard/Dashboard.vue"),
      },
      {
        path: "/vendors",
        component: () => import("../views/vendor/VendorList.vue"),
      },
      {
        path: "/vendors/add",
        component: () => import("../views/vendor/AddVendor.vue"),
      },
      {
        path: "/vendors/:id/edit",
        component: () => import("../views/vendor/EditVendor.vue"),
      },

      {
        path: "/vendors/:id/details",
        component: () => import("../views/vendor/VendorDetails.vue"),
      },
      {
        path: "/unit/all",
        component: () => import("../views/Unit/UnitList.vue"),
      },
      {
        path: "/unit/add",
        component: () => import("../views/Unit/AddUnit.vue"),
      },
      {
        path: "/unit/:id/edit",
        component: () => import("../views/Unit/UnitEdit.vue"),
      },
      {
        path: "/unit/:id/details",
        component: () => import("../views/Unit/UnitDetails.vue"),
      },
      {
        path: "/catagorey/add",
        component: () => import("../views/Catagorey/CatagoreyAdd.vue"),
      },
      {
        path: "/catagorey/all",
        component: () => import("../views/Catagorey/CatagoreyList.vue"),
      },
      {
        path: "/catagorey/:id/edit",
        component: () => import("../views/Catagorey/CatagoreyEdit.vue"),
      },
      {
        path: "/Catagorey/:id/details",
        component: () => import("../views/Catagorey/CatagoreyDetails.vue"),
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
