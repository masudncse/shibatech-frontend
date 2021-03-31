export default [
    {
      path: "/task-statuses",
      component: () => import("../views/TaskStatus/TaskStatusList.vue"),
    },
    {
      path: "/task-statuses/add",
      component: () => import("../views/TaskStatus/AddTaskStatus.vue"),
    },
    {
      path: "/task-statuses/:id/edit",
      component: () => import("../views/TaskStatus/EditTaskStatus.vue"),
    },
    {
      path: "/task-statuses/:id/details",
      component: () => import("../views/TaskStatus/TaskStatusDetails.vue"),
    },
  ];
  