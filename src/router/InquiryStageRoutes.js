export default [
    {
      path: "/inquiry-stages",
      component: () => import("../views/InquiryStage/InquiryStageList.vue"),
    },
    {
      path: "/inquiry-stages/add",
      component: () => import("../views/InquiryStage/AddInquiryStage.vue"),
    },
    {
      path: "/inquiry-stages/:id/edit",
      component: () => import("../views/InquiryStage/EditInquiryStage.vue"),
    },
    {
      path: "/inquiry-stages/:id/details",
      component: () => import("../views/InquiryStage/InquiryStageDetails.vue"),
    },
  ];
  