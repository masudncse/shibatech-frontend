export default [
  {
    path: "/cities",
    component: () => import("../views/City/CityList.vue"),
  },
  {
    path: "/cities/add",
    component: () => import("../views/City/AddCity.vue"),
  },
  {
    path: "/cities/:id/edit",
    component: () => import("../views/City/EditCity.vue"),
  },
  {
    path: "/cities/:id/details",
    component: () => import("../views/City/CityDetails.vue"),
  },
];
