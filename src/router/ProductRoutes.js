export default [
  {
    path: "/products",
    component: () => import("../views/Product/ProductList.vue"),
  },
  {
    path: "/products/add",
    component: () => import("../views/Product/AddProduct.vue"),
  },
  {
    path: "/products/:id/edit",
    component: () => import("../views/Product/EditProduct.vue"),
  },
  {
    path: "/products/:id/details",
    component: () => import("../views/Product/ProductDetails.vue"),
  },
];
