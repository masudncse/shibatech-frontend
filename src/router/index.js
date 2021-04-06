import Vue from "vue";
import VueRouter from "vue-router";
import UserRoutes from "./UserRoutes";
import VendorRoutes from "./VendorRoutes";
import UnitRoutes from "./UnitRoutes";
import CountryRoutes from "./CountryRoutes";
import ProductCategoryRoutes from "./ProductCategoryRoutes";
import StateRoutes from "./StateRoutes";
import CityRoutes from "./CityRoutes";
import ProductRoutes from "./ProductRoutes";
import Layout from "../views/Dashboard/Layout.vue";
import Dashboard from "../views/Dashboard/index.vue";
import RoleRoutes from "./RoleRoutes";
import PermissionRoutes from "./PermissionRoutes";
import OrganizationRoutes from "./OrganizationRoutes";
import ContactRoutes from "./ContactRoutes";
import TaskProgressRoutes from "./TaskProgressRoutes";
import TaskPriorityRoutes from "./TaskPriorityRoutes";
import TaskStatusRoutes from "./TaskStatusRoutes";
import InquiryStageRoutes from "./InquiryStageRoutes";
import RecurringInfoRoutes from "./RecurringInfoRoutes";
import InvoiceStatusRoutes from "./InvoiceStatusRoutes";
import CarrierRoutes from "./CarrierRoutes";
import QuoteStageRoutes from "./QuoteStageRoutes";

import InstallationTaskRoutes from "./InstallationTaskRoutes";
import CommissionTaskRoutes from "./CommissionTaskRoutes";
import ActivityLogRoutes from "./ActivityLogRoutes";
import QuoteRoutes from "./QuoteRoutes";
import ProjectTaskRoutes from "./ProjectTaskRoutes";
import PurchaseOrderRoutes from "./PurchaseOrderRoutes";
import LcInfoRoutes from "./LcInfoRoutes";
import LoginHistoryRoutes from "./LoginHistoryRoutes";
import ParticularsRoutes from "./ParticularsRoutes";
import ProjectRoutes from "./ProjectRoutes";
import SettingRoutes from "./SettingRoutes";
import SalesOrderRoutes from "./SalesOrderRoutes";
import InvoiceRoutes from "./InvoiceRoutes";
import InquiryRoutes from "./InquiryRoutes";
import TransactionRoutes from "./TransactionRoutes";
import InstallationWorkRoutes from "./InstallationWorkRoutes";
import CommissionWorkRoutes from "./CommissionWorkRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Dashboard,
      },
      ...UserRoutes,
      ...VendorRoutes,
      ...UnitRoutes,
      ...ProductCategoryRoutes,
      ...CountryRoutes,
      ...StateRoutes,
      ...CityRoutes,
      ...ProductRoutes,
      ...RoleRoutes,
      ...PermissionRoutes,
      ...OrganizationRoutes,
      ...ContactRoutes,
      ...TaskProgressRoutes,
      ...TaskPriorityRoutes,
      ...TaskStatusRoutes,
      ...InquiryStageRoutes,
      ...QuoteStageRoutes,
      ...RecurringInfoRoutes,
      ...InvoiceStatusRoutes,
      ...CarrierRoutes,
      ...ParticularsRoutes,
      ...InstallationTaskRoutes,
      ...CommissionTaskRoutes,
      ...ActivityLogRoutes,
      ...QuoteRoutes,
      ...ProjectTaskRoutes,
      ...PurchaseOrderRoutes,
      ...LcInfoRoutes,
      ...LoginHistoryRoutes,
      ...ProjectRoutes,
      ...SettingRoutes,
      ...SalesOrderRoutes,
      ...InvoiceRoutes,
      ...InquiryRoutes,
      ...TransactionRoutes,
      ...InstallationWorkRoutes,
      ...CommissionWorkRoutes,
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Auth/Login.vue"),
  },
  {
    path: "/forgot",
    component: () => import("../views/Auth/Forgot.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
