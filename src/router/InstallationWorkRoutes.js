export default [
  {
    path: "/installation-works",
    component: () => import("../views/InstallationWork/InstallationWorkList.vue"),
  },
  {
    path: "/installation-works/add",
    component: () => import("../views/InstallationWork/AddInstallationWork.vue"),
  },
  {
    path: "/installation-works/:id/edit",
    component: () => import("../views/InstallationWork/EditInstallationWork.vue"),
  },
  {
    path: "/installation-works/:id/details",
    component: () => import("../views/InstallationWork/InstallationWorkDetails.vue"),
  },
];
