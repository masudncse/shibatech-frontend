export default [
  {
    path: "/commission-works",
    component: () => import("../views/CommissionWork/CommissionWorkList.vue"),
  },
  {
    path: "/commission-works/add",
    component: () => import("../views/CommissionWork/AddCommissionWork.vue"),
  },
  {
    path: "/commission-works/:id/edit",
    component: () => import("../views/CommissionWork/EditCommissionWork.vue"),
  },
  {
    path: "/commission-works/:id/details",
    component: () =>
      import("../views/CommissionWork/CommissionWorkDetails.vue"),
  },
];
