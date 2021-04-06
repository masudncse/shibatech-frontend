export default [
  {
    path: "/purchase-orders",
    component: () => import("../views/PurchaseOrder/PurchaseOrderList.vue"),
  },
  {
    path: "/purchase-orders/add",
    component: () => import("../views/PurchaseOrder/AddPurchaseOrder.vue"),
  },
  {
    path: "/purchase-orders/:id/edit",
    component: () => import("../views/PurchaseOrder/EditPurchaseOrder.vue"),
  },
  {
    path: "/purchase-orders/:id/details",
    component: () => import("../views/PurchaseOrder/PurchaseOrderDetails.vue"),
  },
];
