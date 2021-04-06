export default [
  {
    path: "/settings/company-info",
    component: () => import("../views/CompanyInfo/EditCompanyInfo.vue"),
  },
  {
    path: "/settings/currency-info",
    component: () => import("../views/CurrencyInfo/EditCurrencyInfo.vue"),
  },
];
