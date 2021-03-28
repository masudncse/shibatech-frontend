export default [
  {
    path: "/categories",
    component: () => import("../views/Category/CategoryList.vue"),
  },
  {
    path: "/categories/add",
    component: () => import("../views/Category/AddCategory.vue"),
  },
  {
    path: "/categories/:id/edit",
    component: () => import("../views/Category/EditCategory.vue"),
  },
  {
    path: "/categories/:id/details",
    component: () => import("../views/Category/CategoryDetails.vue"),
  },
];
