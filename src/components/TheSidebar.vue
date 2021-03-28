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
          <router-link to="/vendors">All Vendors</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="units">
        <span slot="title"><a-icon type="deployment-unit" />Units</span>
        <a-menu-item key="3">
          <router-link to="/units/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/units">All Units</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="categories">
        <span slot="title"><a-icon type="deployment-unit" />Catagories</span>
        <a-menu-item key="5">
          <router-link to="/categories/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link to="/categories">All Categories</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="countries">
        <span slot="title"><a-icon type="deployment-unit" />Countries</span>
        <a-menu-item key="7">
          <router-link to="/countries/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="8">
          <router-link to="/countries">All Countries</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="states">
        <span slot="title"><a-icon type="deployment-unit" />States</span>
        <a-menu-item key="9">
          <router-link to="/states/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/states">All States</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="cities">
        <span slot="title"><a-icon type="deployment-unit" />Cities</span>
        <a-menu-item key="11">
          <router-link to="/cities/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="12">
          <router-link to="/cities">All Cities</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="products">
        <span slot="title"><a-icon type="star" />Products</span>
        <a-menu-item key="13">
          <router-link to="/products/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="14">
          <router-link to="/products">All Products</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="users">
        <span slot="title"><a-icon type="star" />Users</span>
        <a-menu-item key="13">
          <router-link to="/users/add">Add New</router-link>
        </a-menu-item>
        <a-menu-item key="14">
          <router-link to="/users">All Users</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>>