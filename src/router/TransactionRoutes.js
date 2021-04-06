export default [
  {
    path: "/transactions",
    component: () => import("../views/Transaction/TransactionList.vue"),
  },
  {
    path: "/transactions/add",
    component: () => import("../views/Transaction/AddTransaction.vue"),
  },
  {
    path: "/transactions/:id/edit",
    component: () => import("../views/Transaction/EditTransaction.vue"),
  },
  {
    path: "/transactions/:id/details",
    component: () => import("../views/Transaction/TransactionDetails.vue"),
  },
];
