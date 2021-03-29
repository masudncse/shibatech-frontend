<template>
  <div class="vendor-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/company-info"
              >Company Info</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item>ABC Company</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
    </a-row>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        marginBottom: '15px',
      }"
    >
      <a-row>
        <a-col :span="12">
          <div class="info-block">
            <div class="info-block__icon">
              <a-icon type="user" />
            </div>
            <div class="info-block__info">
              <h5>ABC Company</h5>
              <a
                href="mailto:masud.ncse@gmail.com"
                class="text-black-50 d-block"
                >masud.ncse@gmail.com</a
              >
              <a href="tel:01676717945" class="text-black-50 d-block"
                >01676717945</a
              >
              <a
                href="http://google.com"
                target="_blank"
                class="text-black-50 d-block"
                >google.com</a
              >
            </div>
          </div>
        </a-col>
        <a-col :span="12" align="end">
          <div class="mb-2"></div>
          <a-button @click="$router.push('/company-info/edit')"
            >Edit Info</a-button
          >
        </a-col>
      </a-row>
    </a-layout-content>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        marginBottom: '15px',
      }"
    >
      <a-menu v-model="current" mode="horizontal" class="border-0">
        <a-menu-item key="details" class="pr-4"> Details </a-menu-item>
        <a-menu-item key="updates"> Updated </a-menu-item>
        <a-menu-item key="products" class="px-4">
          <a-tooltip>
            <template slot="title"> Products </template>
            <a-badge :count="99" :overflow-count="9">
              <a-icon type="import" :style="{ fontSize: '26px' }" />
            </a-badge>
          </a-tooltip>
        </a-menu-item>
        <a-menu-item key="purchase-order" class="px-4">
          <a-tooltip>
            <template slot="title"> Purchase Orders </template>
            <a-badge :count="1254" :overflow-count="9">
              <a-icon type="shop" :style="{ fontSize: '26px' }" />
            </a-badge>
          </a-tooltip>
        </a-menu-item>
        <a-menu-item key="email" class="px-4">
          <a-tooltip>
            <template slot="title"> Emails </template>
            <a-badge :count="5" :overflow-count="9">
              <a-icon type="red-envelope" :style="{ fontSize: '26px' }" />
            </a-badge>
          </a-tooltip>
        </a-menu-item>
      </a-menu>
    </a-layout-content>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
      }"
    >
      <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-card title="Company Logo">
          <a-row :gutter="15">
            <a-col :span="24">
              <img src="http://www.jpremit.com/images/logo.png" alt="" />
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Company Information">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-form-item label="Company Name" labelAlign="left" class="mb-2">
                ABC Company
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Address" labelAlign="left" class="mb-2">
                24, Gulshan Bonani
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="City" labelAlign="left" class="mb-2">
                Dhaka
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="State" labelAlign="left" class="mb-2">
                Dhaka
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Postal Code	" labelAlign="left" class="mb-2">
                1100
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Country" labelAlign="left" class="mb-2">
                Bangladesh
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Phone" labelAlign="left" class="mb-2">
                +8801676717945
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Fax" labelAlign="left" class="mb-2">
                +029588952
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Website" labelAlign="left" class="mb-2">
                http://example.com
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="VAT ID	" labelAlign="left" class="mb-2">
                3241567456145
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-form>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["details"],
      id: this.$route.params.id,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Vendors",
        },
        {
          path: "second",
          breadcrumbName: "Md. Masudul Kabir",
        },
      ],
    };
  },
  methods: {},
};
</script>