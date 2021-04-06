export default [
    {
      path: "/activity-logs",
      component: () => import("../views/ActivityLog/ActivityLogList.vue"),
    },
   
    {
      path: "/activity-logs/:id/details",
      component: () => import("../views/ActivityLog/ActivityLogDetails.vue"),
    },
  ];