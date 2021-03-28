export default [
  {
    path: "/vendors",
    component: () => import("../views/Vendor/VendorList.vue"),
  },
  {
    path: "/vendors/add",
    component: () => import("../views/Vendor/AddVendor.vue"),
  },
  {
    path: "/vendors/:id/edit",
    component: () => import("../views/Vendor/EditVendor.vue"),
  },
  {
    path: "/vendors/:id/details",
    component: () => import("../views/Vendor/VendorDetails.vue"),
  },
];
