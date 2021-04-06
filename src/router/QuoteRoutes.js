export default [
  {
    path: "/quotes",
    component: () => import("../views/Quote/QuoteList.vue"),
  },
  {
    path: "/quotes/add",
    component: () => import("../views/Quote/AddQuote.vue"),
  },
  {
    path: "/quotes/:id/edit",
    component: () => import("../views/Quote/EditQuote.vue"),
  },
  {
    path: "/quotes/:id/details",
    component: () => import("../views/Quote/QuoteDetails.vue"),
  },
];
