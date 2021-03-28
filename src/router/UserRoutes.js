export default [
  {
    path: "/users",
    component: () => import("../views/User/UserList.vue"),
  },
  {
    path: "/users/add",
    component: () => import("../views/User/AddUser.vue"),
  },
  {
    path: "/users/:id/edit",
    component: () => import("../views/User/EditUser.vue"),
  },

  {
    path: "/users/:id/details",
    component: () => import("../views/User/UserDetails.vue"),
  },
];
