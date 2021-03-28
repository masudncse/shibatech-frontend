export default [
  {
    path: "/units",
    component: () => import("../views/Unit/UnitList.vue"),
  },
  {
    path: "/units/add",
    component: () => import("../views/Unit/AddUnit.vue"),
  },
  {
    path: "/units/:id/edit",
    component: () => import("../views/Unit/UnitEdit.vue"),
  },
  {
    path: "/units/:id/details",
    component: () => import("../views/Unit/UnitDetails.vue"),
  },
];
