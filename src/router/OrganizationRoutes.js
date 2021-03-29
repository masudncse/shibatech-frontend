export default [
  {
    path: "/organizations",
    component: () => import("../views/Organization/OrganizationList.vue"),
  },
  {
    path: "/organizations/add",
    component: () => import("../views/Organization/AddOrganization.vue"),
  },
  {
    path: "/organizations/:id/edit",
    component: () => import("../views/Organization/EditOrganization.vue"),
  },
  {
    path: "/organizations/:id/details",
    component: () => import("../views/Organization/OrganizationDetails.vue"),
  },
];
