export default [
  {
    path: "/sales-orders",
    component: () => import("../views/SalesOrder/SalesOrderList.vue"),
  },
  {
    path: "/sales-orders/add",
    component: () => import("../views/SalesOrder/AddSalesOrder.vue"),
  },
  {
    path: "/sales-orders/:id/edit",
    component: () => import("../views/SalesOrder/EditSalesOrder.vue"),
  },
  {
    path: "/sales-orders/:id/details",
    component: () => import("../views/SalesOrder/SalesOrderDetails.vue"),
  },
];
