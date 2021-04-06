export default [
  {
    path: "/product-categories",
    component: () => import("../views/ProductCategory/ProductCategoryList.vue"),
  },
  {
    path: "/product-categories/add",
    component: () => import("../views/ProductCategory/AddProductCategory.vue"),
  },
  {
    path: "/product-categories/:id/edit",
    component: () => import("../views/ProductCategory/EditProductCategory.vue"),
  },
  {
    path: "/product-categories/:id/details",
    component: () =>
      import("../views/ProductCategory/ProductCategoryDetails.vue"),
  },
];
