export default [
  {
    path: "/contacts",
    component: () => import("../views/Contact/ContactList.vue"),
  },
  {
    path: "/contacts/add",
    component: () => import("../views/Contact/AddContact.vue"),
  },
  {
    path: "/contacts/:id/edit",
    component: () => import("../views/Contact/EditContact.vue"),
  },
  {
    path: "/contacts/:id/details",
    component: () => import("../views/Contact/ContactDetails.vue"),
  },
];
