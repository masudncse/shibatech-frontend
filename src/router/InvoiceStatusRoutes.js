export default [
    {
      path: "/invoice-statuses",
      component: () => import("../views/InvoiceStatus/InvoiceStatusList.vue"),
    },
    {
      path: "/invoice-statuses/add",
      component: () => import("../views/InvoiceStatus/AddInvoiceStatus.vue"),
    },
    {
      path: "/invoice-statuses/:id/edit",
      component: () => import("../views/InvoiceStatus/EditInvoiceStatus.vue"),
    },
    {
      path: "/invoice-statuses/:id/details",
      component: () => import("../views/InvoiceStatus/InvoiceStatusDetails.vue"),
    },
  ];
  