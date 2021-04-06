export default [
    {
      path: "/particulars",
      component: () => import("../views/Particular/ParticularList.vue"),
    },
    {
      path: "/particulars/add",
      component: () => import("../views/Particular/AddParticular.vue"),
    },
    {
      path: "/particulars/:id/edit",
      component: () => import("../views/Particular/EditParticular.vue"),
    },
    {
      path: "/particulars/:id/details",
      component: () => import("../views/Particular/ParticularDetails.vue"),
    },
  ];