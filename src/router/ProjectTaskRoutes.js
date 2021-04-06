export default [
    {
      path: "/project-tasks",
      component: () => import("../views/ProjectTask/ProjectTaskList.vue"),
    },
    {
      path: "/project-tasks/add",
      component: () => import("../views/ProjectTask/AddProjectTask.vue"),
    },
    {
      path: "/project-tasks/:id/edit",
      component: () => import("../views/ProjectTask/EditProjectTask.vue"),
    },
    {
      path: "/project-tasks/:id/details",
      component: () => import("../views/ProjectTask/ProjectTaskDetails.vue"),
    },
  ];
  