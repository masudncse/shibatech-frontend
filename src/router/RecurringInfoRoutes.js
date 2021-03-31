export default [
  {
    path: "/recurring-infos",
    component: () => import("../views/RecurringInfo/RecurringInfoList.vue"),
  },
   
    {
      path: "/recurring-infos/add",
      component: () => import("../views/RecurringInfo/AddRecurringInfo.vue"),
    },
    {
      path: "/recurring-infos/:id/edit",
      component: () => import("../views/RecurringInfo/EditRecurringInfo.vue"),
    },
    {
      path: "/recurring-infos/:id/details",
      component: () => import("../views/RecurringInfo/RecurringInfoDetails.vue"),
    },
    
  ];
  