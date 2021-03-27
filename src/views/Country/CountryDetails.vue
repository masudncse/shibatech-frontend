<template>
  <div class="country-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/country/all">countries</router-link></a-breadcrumb-item
          >
          <a-breadcrumb-item>Electronic</a-breadcrumb-item>
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
              <h5>Japan</h5>
           
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
          <a-button
            type="primary"
            icon="plus"
            @click="$router.push('/country/add')"
            >Country Add</a-button
          >
          <div class="mb-2"></div>
          <a-button @click="$router.push('/catagorey/1/edit')">Edit</a-button>
          <a-button class="ml-2">Send Email</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> Delete Country </a-menu-item>
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
              <a-form-item label="Country Name" labelAlign="left" class="mb-1">
                Japan
              </a-form-item>
            </a-col>
              <a-col :span="12">
              <a-form-item label="Active Status" labelAlign="left" class="mb-1">
                               <a-checkbox @change="onChange" default-checked>
    
  </a-checkbox>
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
       
     
        <a-card title="Description Details">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-form-item
                label="Description"
                :label-col="{ span: 3 }"
                :wrapper-col="{ span: 18 }"
                class="mb-0"
                labelAlign="left"
              >
                <p class="mb-0" style="line-height: 1rem">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  voluptas nostrum commodi ullam aperiam non architecto illum
                  consequuntur facilis reiciendis! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Accusamus sed expedita
                  temporibus laboriosam quaerat eligendi blanditiis odio impedit
                  ducimus? Aliquam nemo ad repellat illo deserunt, atque, quod
                  perferendis magnam necessitatibus similique cum? Eveniet,
                  aliquam non. Voluptates repellat ullam ut illo iusto nam
                  laborum, commodi recusandae minima impedit saepe aut. Aperiam!
                </p>
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
          breadcrumbName: "Country",
        },
        {
          path: "second",
          breadcrumbName: "Japan",
        },
      ],
    };
  },
  methods: {},
};
</script>