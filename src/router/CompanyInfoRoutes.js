export default [
  {
    path: "/company-info",
    component: () => import("../views/CompanyInfo/CompanyInfoDetails.vue"),
  },
  {
    path: "/company-info/edit",
    component: () => import("../views/CompanyInfo/EditCompanyInfo.vue"),
  },
];
