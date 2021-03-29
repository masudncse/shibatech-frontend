export default [
  {
    path: "/permissions",
    component: () => import("../views/Permission/PermissionList.vue"),
  },
  {
    path: "/permissions/add",
    component: () => import("../views/Permission/AddPermission.vue"),
  },
  {
    path: "/permissions/:id/edit",
    component: () => import("../views/Permission/EditPermission.vue"),
  },
  {
    path: "/permissions/:id/details",
    component: () => import("../views/Permission/PermissionDetails.vue"),
  },
];
