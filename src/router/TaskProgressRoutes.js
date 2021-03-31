export default [
    {
      path: "/task-progress",
      component: () => import("../views/TaskProgress/TaskProgressList.vue"),
    },
    {
      path: "/task-progress/add",
      component: () => import("../views/TaskProgress/AddTaskProgress.vue"),
    },
    {
      path: "/task-progress/:id/edit",
      component: () => import("../views/TaskProgress/EditTaskProgress.vue"),
    },
    {
      path: "/task-progress/:id/details",
      component: () => import("../views/TaskProgress/TaskProgressDetails.vue"),
    },
  ];
  