export default [
  {
    path: "/invoices",
    component: () => import("../views/Invoice/InvoiceList.vue"),
  },
  {
    path: "/invoices/:id/details",
    component: () => import("../views/Invoice/InvoiceDetails.vue"),
  },
];
