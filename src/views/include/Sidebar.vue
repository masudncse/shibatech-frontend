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
            <a-sub-menu key="vendors">
              <span slot="title"><a-icon type="user" />Vendors</span>
              <a-menu-item key="1">
                <router-link to="/vendors/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/vendors">All Vendor</router-link>
              </a-menu-item>
            </a-sub-menu>
             <a-sub-menu key="Units">
              <span slot="title"><a-icon type="deployment-unit" />Units</span>
              <a-menu-item key="3">
                <router-link to="/unit/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="4">
                <router-link to="/unit/all">All Units</router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
</template>>