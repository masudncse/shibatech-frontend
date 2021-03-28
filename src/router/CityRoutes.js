export default [
  {
    path: "/cities",
    component: () => import("../views/City/CityList.vue"),
  },
  {
    path: "/cities/add",
    component: () => import("../views/City/CityAdd.vue"),
  },
  {
    path: "/cities/:id/edit",
    component: () => import("../views/City/CityEdit.vue"),
  },
  {
    path: "/cities/:id/details",
    component: () => import("../views/City/CityDetails.vue"),
  },
];
