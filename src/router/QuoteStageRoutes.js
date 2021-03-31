export default [
    {
      path: "/quote-stages",
      component: () => import("../views/QuoteStage/QuoteStageList.vue"),
    },
    {
      path: "/quote-stages/add",
      component: () => import("../views/QuoteStage/AddQuoteStage.vue"),
    },
    {
      path: "/quote-stages/:id/edit",
      component: () => import("../views/QuoteStage/EditQuoteStage.vue"),
    },
    {
      path: "/quote-stages/:id/details",
      component: () => import("../views/QuoteStage/QuoteStageDetails.vue"),
    },
  ];
  