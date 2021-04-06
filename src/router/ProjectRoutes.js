export default [
  {
    path: "/projects",
    component: () => import("../views/Project/ProjectList.vue"),
  },
  {
    path: "/projects/add",
    component: () => import("../views/Project/AddProject.vue"),
  },
  {
    path: "/projects/:id/edit",
    component: () => import("../views/Project/EditProject.vue"),
  },
  {
    path: "/projects/:id/details",
    component: () => import("../views/Project/ProjectDetails.vue"),
  },
];
