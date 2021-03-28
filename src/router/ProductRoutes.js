export default [
  {
    path: "/products",
    component: () => import("../views/Product/ProductList.vue"),
  },
  {
    path: "/products/add",
    component: () => import("../views/Product/ProductAdd.vue"),
  },
  {
    path: "/products/:id/edit",
    component: () => import("../views/Product/ProductEdit.vue"),
  },
  {
    path: "/products/:id/details",
    component: () => import("../views/Product/ProductDetails.vue"),
  },
];
