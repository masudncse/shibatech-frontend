export default [
  {
    path: "/states",
    component: () => import("../views/State/StateList.vue"),
  },
  {
    path: "/states/add",
    component: () => import("../views/State/StateAdd.vue"),
  },
  {
    path: "/states/:id/edit",
    component: () => import("../views/State/StateEdit.vue"),
  },
  {
    path: "/states/:id/details",
    component: () => import("../views/State/StateDetails.vue"),
  },
];
