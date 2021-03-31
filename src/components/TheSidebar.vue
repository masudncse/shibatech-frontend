<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      theme="dark"
      :default-selected-keys="['dashboard']"
      :default-open-keys="['vendors']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="dashboard">
        <a-icon type="dashboard" />
        <span>Dashboard</span>
        <router-link to="/"></router-link>
      </a-menu-item>
      <a-menu-item key="company-info">
        <a-icon type="home" />
        <span>Company Info</span>
        <router-link to="/company-info"></router-link>
      </a-menu-item>
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
      <a-menu-item key="vendors">
        <a-icon type="apartment" />
        <span>Vendors</span>
        <router-link to="/vendors"></router-link>
      </a-menu-item>
      <a-menu-item key="units">
        <a-icon type="apartment" />
        <span>Units</span>
        <router-link to="/units"></router-link>
      </a-menu-item>
      <a-menu-item key="categories">
        <a-icon type="apartment" />
        <span>Catagories</span>
        <router-link to="/categories"></router-link>
      </a-menu-item>
      <a-menu-item key="countries">
        <a-icon type="apartment" />
        <span>Countries</span>
        <router-link to="/countries"></router-link>
      </a-menu-item>
      <a-menu-item key="states">
        <a-icon type="apartment" />
        <span>States</span>
        <router-link to="/states"></router-link>
      </a-menu-item>
      <a-menu-item key="cities">
        <a-icon type="apartment" />
        <span>Cities</span>
        <router-link to="/cities"></router-link>
      </a-menu-item>
      <a-menu-item key="products">
        <a-icon type="apartment" />
        <span>Products</span>
        <router-link to="/products"></router-link>
      </a-menu-item>
      <a-menu-item key="users">
        <a-icon type="apartment" />
        <span>Users</span>
        <router-link to="/users"></router-link>
      </a-menu-item>
      <a-menu-item key="roles">
        <a-icon type="apartment" />
        <span>Roles</span>
        <router-link to="/roles"></router-link>
      </a-menu-item>
      <a-menu-item key="permissions">
        <a-icon type="apartment" />
        <span>Permissions</span>
        <router-link to="/permissions"></router-link>
      </a-menu-item>
      <a-menu-item key="organizations">
        <a-icon type="apartment" />
        <span>Organizations</span>
        <router-link to="/organizations"></router-link>
      </a-menu-item>
      <a-menu-item key="contacts">
        <a-icon type="apartment" />
        <span>Contacts</span>
        <router-link to="/contacts"></router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>>