<template>
  <div class="dashboard">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1"> nav 1 </a-menu-item>
          <a-menu-item key="2"> nav 2 </a-menu-item>
          <a-menu-item key="3"> nav 3 </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout>
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
            <a-sub-menu key="vendors">
              <span slot="title"><a-icon type="user" />Vendors</span>
              <a-menu-item key="1">
                <router-link to="/vendors/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/vendors">All Vendor</router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <router-view></router-view>
          <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>