export default [
    {
      path: "/task-priorities",
      component: () => import("../views/TaskPriority/TaskPriorityList.vue"),
    },
    {
      path: "/task-priorities/add",
      component: () => import("../views/TaskPriority/AddTaskPriority.vue"),
    },
    {
      path: "/task-priorities/:id/edit",
      component: () => import("../views/TaskPriority/EditTaskPriority.vue"),
    },
    {
      path: "/task-priorities/:id/details",
      component: () => import("../views/TaskPriority/TaskPriorityDetails.vue"),
    },
  ];
  