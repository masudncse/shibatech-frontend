<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      theme="dark"
      :default-selected-keys="defaultSelectedKeys"
      :default-open-keys="defaultOpenKeys"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="appstore">
        <a-icon type="appstore" />
        <span>Dashboard</span>
        <router-link to="/"></router-link>
      </a-menu-item>

      <a-sub-menu key="marketing" data-key="marketing">
        <span slot="title"
          ><a-icon type="appstore" /><span>Marketting</span></span
        >
        <a-menu-item key="contacts">
          <router-link to="/contacts"
            ><a-icon type="appstore" />Contacts</router-link
          >
        </a-menu-item>
        <a-menu-item key="organizations">
          <router-link to="/organizations"
            ><a-icon type="appstore" />Organizations</router-link
          >
        </a-menu-item>
        <a-menu-item key="inquiries">
          <router-link to="/inquiries"
            ><a-icon type="appstore" />Inquiries</router-link
          >
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sales">
        <span slot="title"><a-icon type="appstore" /><span>Sales</span></span>
        <a-menu-item key="quotes">
          <router-link to="/quotes"
            ><a-icon type="appstore" />Quotes</router-link
          >
        </a-menu-item>
        <a-menu-item key="sales-orders">
          <router-link to="/sales-orders"
            ><a-icon type="appstore" />Sales Orders</router-link
          >
        </a-menu-item>
        <a-menu-item key="invoices">
          <router-link to="/invoices"
            ><a-icon type="appstore" />Invoices</router-link
          >
        </a-menu-item>
        <a-menu-item key="lc-info">
          <a-icon type="appstore" />
          <span>Lc Info</span>
          <router-link to="/lc-infos"></router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="inventory">
        <span slot="title"
          ><a-icon type="appstore" /><span>Inventory</span></span
        >

        <a-menu-item key="products">
          <router-link to="/products"
            ><a-icon type="appstore" />Products</router-link
          >
        </a-menu-item>
        <a-menu-item key="purchase-orders">
          <router-link to="/purchase-orders"
            ><a-icon type="appstore" />Purchase Orders</router-link
          >
        </a-menu-item>
        <a-menu-item key="vendors">
          <router-link to="/vendors"
            ><a-icon type="appstore" />Vendors</router-link
          >
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="engineering">
        <span slot="title"
          ><a-icon type="appstore" /><span>Engineering</span></span
        >

        <a-menu-item key="installation-works">
          <router-link to="/installation-works"
            ><a-icon type="appstore" />Installation Works</router-link
          >
        </a-menu-item>
        <a-menu-item key="commission-works">
          <router-link to="/commission-works"
            ><a-icon type="appstore" />Commission Works</router-link
          >
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="operation">
        <span slot="title"
          ><a-icon type="appstore" /><span>Operation</span></span
        >

        <a-menu-item key="transactions">
          <router-link to="/transactions"
            ><a-icon type="appstore" />Transactions</router-link
          >
        </a-menu-item>
        <a-menu-item key="recurring-infos">
          <router-link to="/recurring-infos"
            ><a-icon type="appstore" />Recurring Infos</router-link
          >
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="supports">
        <span slot="title"><a-icon type="appstore" /><span>Support</span></span>
        <!-- <a-menu-item key="products">
          <router-link to="/products"
            ><a-icon type="appstore" />Installation</router-link
          >
        </a-menu-item> -->
      </a-sub-menu>

      <a-sub-menu key="projects">
        <span slot="title"
          ><a-icon type="appstore" /><span>Projects</span></span
        >
        <a-menu-item key="projects">
          <router-link to="/projects"
            ><a-icon type="appstore" />Projectes</router-link
          >
        </a-menu-item>
        <a-menu-item key="project-tasks">
          <router-link to="/project-tasks"
            ><a-icon type="appstore" />Project Tasks</router-link
          >
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="settings">
        <span slot="title"
          ><a-icon type="appstore" /><span>Settings</span></span
        >
        <a-sub-menu key="manage-users" title="Manage Users">
          <a-menu-item key="roles">
            <router-link to="/roles"
              ><a-icon type="appstore" />Roles</router-link
            >
          </a-menu-item>
          <a-menu-item key="permissions">
            <router-link to="/permissions"
              ><a-icon type="appstore" />Permissions</router-link
            >
          </a-menu-item>
          <a-menu-item key="users">
            <router-link to="/users"
              ><a-icon type="appstore" />Users</router-link
            >
          </a-menu-item>
          <a-menu-item key="login-history">
            <router-link to="/login-history"
              ><a-icon type="appstore" />Loigin History</router-link
            >
          </a-menu-item>
          <a-menu-item key="activity-logs">
            <a-icon type="appstore" />
            <span>Activity Log</span>
            <router-link to="/activity-logs"></router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="configurations" title="Configurations">
          <a-menu-item key="roles">
            <router-link to="/settings/company-info"
              ><a-icon type="appstore" />Company Info</router-link
            >
          </a-menu-item>
          <a-menu-item key="currencies">
            <router-link to="/settings/currency-info"
              ><a-icon type="appstore" />Currency Info</router-link
            >
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="locations" title="Locations">
          <a-menu-item key="countries">
            <router-link to="/countries"
              ><a-icon type="appstore" />Countries</router-link
            >
          </a-menu-item>
          <a-menu-item key="states">
            <router-link to="/states"
              ><a-icon type="appstore" />States</router-link
            >
          </a-menu-item>
          <a-menu-item key="cities">
            <router-link to="/cities"
              ><a-icon type="appstore" />Cities</router-link
            >
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="predefined" title="Predefined">
          <a-menu-item key="task-progress">
            <a-icon type="apartment" />
            <span>Task Progress</span>
            <router-link to="/task-progress"></router-link>
          </a-menu-item>
          <a-menu-item key="task-priorities">
            <a-icon type="apartment" />
            <span>Task Priorities</span>
            <router-link to="/task-priorities"></router-link>
          </a-menu-item>
          <a-menu-item key="task-statuses">
            <a-icon type="apartment" />
            <span>Task Statuses</span>
            <router-link to="/task-statuses"></router-link>
          </a-menu-item>
          <a-menu-item key="quote-stages">
            <a-icon type="apartment" />
            <span>Quote Stagess</span>
            <router-link to="/quote-stages"></router-link>
          </a-menu-item>
          <a-menu-item key="inquiry-stages">
            <a-icon type="apartment" />
            <span>Inquiry Stages</span>
            <router-link to="/inquiry-stages"></router-link>
          </a-menu-item>
          <a-menu-item key="recurring-infos">
            <a-icon type="apartment" />
            <span>Recurring Infos</span>
            <router-link to="/recurring-infos"></router-link>
          </a-menu-item>
          <a-menu-item key="carriers">
            <a-icon type="apartment" />
            <span>Carriers</span>
            <router-link to="/carriers"></router-link>
          </a-menu-item>
          <a-menu-item key="invoice-statuses">
            <a-icon type="apartment" />
            <span>Invoice Statuses</span>
            <router-link to="/invoice-statuses"></router-link>
          </a-menu-item>
          <a-menu-item key="units">
            <a-icon type="apartment" />
            <span>Units</span>
            <router-link to="/units"></router-link>
          </a-menu-item>
          <a-menu-item key="product-categories">
            <a-icon type="apartment" />
            <span>Product Catagories</span>
            <router-link to="/product-categories"></router-link>
          </a-menu-item>
          <a-menu-item key="particulars">
            <a-icon type="appstore" />
            <span>Particulars</span>
            <router-link to="/particulars"></router-link>
          </a-menu-item>
          <a-menu-item key="installation-tasks">
            <a-icon type="appstore" />
            <span>Installation Tasks</span>
            <router-link to="/installation-tasks"></router-link>
          </a-menu-item>
          <a-menu-item key="commission-tasks">
            <a-icon type="appstore" />
            <span>Commission Tasks</span>
            <router-link to="/commission-tasks"></router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>>

<script>
// import $ from "jquery";
export default {
  data: function () {
    return {
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
    };
  },
  mounted: function () {
    /* let path = this.$router.currentRoute.path.split("/")[1];
    this.defaultSelectedKeys.push(path);

    let link = $("a.router-link-exact-active");
    console.log(link.parent().closest("li")); */
  },
};
</script>
