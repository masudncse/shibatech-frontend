export default [
    {
      path: "/carriers",
      component: () => import("../views/Carrier/CarrierList.vue"),
    },
    {
      path: "/carriers/add",
      component: () => import("../views/Carrier/AddCarrier.vue"),
    },
    {
      path: "/carriers/:id/edit",
      component: () => import("../views/Carrier/EditCarrier.vue"),
    },
    {
      path: "/carriers/:id/details",
      component: () => import("../views/Carrier/CarrierDetails.vue"),
    },
  ];