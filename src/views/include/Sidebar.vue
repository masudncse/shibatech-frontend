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
                    <a-sub-menu key="catagory">
              <span slot="title"><a-icon type="deployment-unit" />Catagorey</span>
              <a-menu-item key="5">
                <router-link to="/catagorey/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="6">
                <router-link to="/catagorey/all">All Catagorey</router-link>
              </a-menu-item>
            </a-sub-menu>
                     <a-sub-menu key="countries">
              <span slot="title"><a-icon type="deployment-unit" />Countries</span>
              <a-menu-item key="7">
                <router-link to="/country/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="8">
                <router-link to="/country/all">All Countries</router-link>
              </a-menu-item>
            </a-sub-menu>
                     <a-sub-menu key="States">
              <span slot="title"><a-icon type="deployment-unit" />States</span>
              <a-menu-item key="9">
                <router-link to="/state/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="10">
                <router-link to="/state/all">All State</router-link>
              </a-menu-item>

            </a-sub-menu>
                  <a-sub-menu key="City">
              <span slot="title"><a-icon type="deployment-unit" />City</span>
              <a-menu-item key="11">
                <router-link to="/city/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="12">
                <router-link to="/city/all">All city</router-link>
              </a-menu-item>
            </a-sub-menu>
            
                  <a-sub-menu key="product">
              <span slot="title"><a-icon type="star" />Product</span>
              <a-menu-item key="13">
                <router-link to="/product/add">Add New</router-link>
              </a-menu-item>
              <a-menu-item key="14">
                <router-link to="/product/all">All Product</router-link>
              </a-menu-item>
            </a-sub-menu>

          </a-menu>
        </a-layout-sider>
</template>>