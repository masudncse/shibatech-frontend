<template>
  <div class="State-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/activity-logs"
              >Activity Logs</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item>Example Log 1</a-breadcrumb-item>
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
              <a-icon type="deployment-unit" />
            </div>
            <div class="info-block__info">
              <h5>Example Log 1</h5>

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

          <a-button class="ml-2">Send Email</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> Delete recurirnginfos </a-menu-item>
              <a-menu-item key="2"> Duplicate </a-menu-item>
            </a-menu>
            <a-button class="ml-2"> More <a-icon type="down" /> </a-button>
          </a-dropdown>
          <a-button-group class="ml-2">
            <a-button>
              <a-icon type="left" />
            </a-button>
            <a-button>
              <a-icon type="right" />
            </a-button>
          </a-button-group>
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
        <a-card title="Basic Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Log Name" labelAlign="left" class="mb-1">
                Log Name
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Discription" labelAlign="left" class="mb-1">
                Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet,
                consecte Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor
                sit amet, consecte
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Subject" labelAlign="left" class="mb-1">
                Example Subject
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Subject Type" labelAlign="left" class="mb-1">
                Example Subject Type
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Causer" labelAlign="left" class="mb-1">
                Example Causer 6
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Causer Type " labelAlign="left" class="mb-1">
                Example Causer Type
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label=" Properties " labelAlign="left" class="mb-1">
                Example Properties
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Created Time" labelAlign="left" class="mb-1">
                2021-01-27 04:03 AM
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Website" labelAlign="left" class="mb-1">
                http://google.com
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Modified Time" labelAlign="left" class="mb-1">
                2021-01-27 04:03 AM
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
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
          breadcrumbName: "Activity Log",
        },
        {
          path: "second",
          breadcrumbName: "Log Name",
        },
      ],
    };
  },
  methods: {},
};
</script>