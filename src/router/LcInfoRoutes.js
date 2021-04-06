export default [
  {
    path: "/lc-infos",
    component: () => import("../views/LcInfo/LcInfoList.vue"),
  },
  {
    path: "/lc-infos/add",
    component: () => import("../views/LcInfo/AddLcInfo.vue"),
  },
  {
    path: "/lc-infos/:id/edit",
    component: () => import("../views/LcInfo/EditLcInfo.vue"),
  },
  {
    path: "/lc-infos/:id/details",
    component: () => import("../views/LcInfo/LcInfoDetails.vue"),
  },
];
