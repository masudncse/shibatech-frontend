export default [
  {
    path: "/countries",
    component: () => import("../views/Country/CountryList.vue"),
  },
  {
    path: "/countries/add",
    component: () => import("../views/Country/AddCountry.vue"),
  },
  {
    path: "/countries/:id/edit",
    component: () => import("../views/Country/EditCountry.vue"),
  },
  {
    path: "/countries/:id/details",
    component: () => import("../views/Country/CountryDetails.vue"),
  },
];
