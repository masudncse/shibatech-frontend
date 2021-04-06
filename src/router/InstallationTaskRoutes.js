export default [
    {
      path: "/installation-tasks",
      component: () => import("../views/InstallationTask/InstallationTaskList.vue"),
    },
    {
      path: "/installation-tasks/add",
      component: () => import("../views/InstallationTask/AddInstallationTask.vue"),
    },
    {
      path: "/installation-tasks/:id/edit",
      component: () => import("../views/InstallationTask/EditInstallationTask.vue"),
    },
    {
      path: "/installation-tasks/:id/details",
      component: () => import("../views/InstallationTask/InstallationTaskDetails.vue"),
    },
  ];