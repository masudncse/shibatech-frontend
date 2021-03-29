export default [
  {
    path: "/roles",
    component: () => import("../views/Role/RoleList.vue"),
  },
  {
    path: "/roles/add",
    component: () => import("../views/Role/AddRole.vue"),
  },
  {
    path: "/roles/:id/edit",
    component: () => import("../views/Role/EditRole.vue"),
  },
  {
    path: "/roles/:id/details",
    component: () => import("../views/Role/RoleDetails.vue"),
  },
];
