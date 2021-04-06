export default [
    {
      path: "/commission-tasks",
      component: () => import("../views/CommissionTask/CommissionTaskList.vue"),
    },
    {
      path: "/commission-tasks/add",
      component: () => import("../views/CommissionTask/AddCommissionTask.vue"),
    },
    {
      path: "/commission-tasks/:id/edit",
      component: () => import("../views/CommissionTask/EditCommissionTask.vue"),
    },
    {
      path: "/commission-tasks/:id/details",
      component: () => import("../views/CommissionTask/CommissionTaskDetails.vue"),
    },
  ];