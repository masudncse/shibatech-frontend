export default [
  {
    path: "/inquiries",
    component: () => import("../views/Inquiry/InquiryList.vue"),
  },
  {
    path: "/inquiries/add",
    component: () => import("../views/Inquiry/AddInquiry.vue"),
  },
  {
    path: "/inquiries/:id/edit",
    component: () => import("../views/Inquiry/EditInquiry.vue"),
  },
  {
    path: "/inquiries/:id/details",
    component: () => import("../views/Inquiry/InquiryDetails.vue"),
  },
];
