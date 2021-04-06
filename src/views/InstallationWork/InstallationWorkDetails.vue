<template>
  <div class="vendor-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/installation-works"
              >Installation Works</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item>Project 1</a-breadcrumb-item>
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
              <h5>Project 1</h5>
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
          <a-button
            type="primary"
            icon="plus"
            @click="$router.push('/installation-works/add')"
            >Add Installation Work</a-button
          >
          <div class="mb-2"></div>
          <a-button @click="$router.push('/installation-works/1/edit')"
            >Edit</a-button
          >
          <a-button class="ml-2">Send Email</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> Delete Installation Work </a-menu-item>
              <a-menu-item key="2"> Duplicate </a-menu-item>
              <a-menu-item key="3"> Create Purchase Order </a-menu-item>
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

    <a-form
      :form="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
        }"
      >
        <a-card title="Basic Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Project Name" labelAlign="left" class="mb-1">
                Project 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Project Duration"
                labelAlign="left"
                class="mb-1"
              >
                12 Feb, 2021
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Project Start Date"
                labelAlign="left"
                class="mb-0"
              >
                18 Nov, 2020
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Prodject End Date"
                labelAlign="left"
                class="mb-0"
              >
                22 Oct, 2022
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-layout-content>

      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          marginTop: '15px',
        }"
      >
        <a-card title="Address Details">
          <table class="table">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Task Description</th>
                <th>Task Duration</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Meterial check</td>
                <td>0</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Scaffolding</td>
                <td>2</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Plumbing</td>
                <td>2</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Main line rail side bracket INST</td>
                <td>1</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>5</td>
                <td>C/W side rail beracket INST</td>
                <td>2</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Buffer base installation</td>
                <td>0</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Main guide & C/W guide INST</td>
                <td>1</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Jamb Installation</td>
                <td>1</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Sill Header Installation</td>
                <td>2</td>
                <td>12 Feb, 2021</td>
                <td>12 Feb, 2021</td>
              </tr>
            </tbody>
          </table>
        </a-card>
      </a-layout-content>

      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          marginTop: '15px',
        }"
      >
        <a-card title="Description Details">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Description" labelAlign="left" class="mb-0">
                <a-textarea :auto-size="{ minRows: 4, maxRows: 6 }" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-layout-content>

      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          marginTop: '15px',
        }"
      >
        <a-form-item :wrapper-col="{ span: 24 }" class="text-right mb-0">
          <a-button type="primary" html-type="submit"> Submit </a-button>
          <a-button
            type="danger"
            html-type="reset"
            onClick="javascript: history.back();"
            class="ml-2"
            >Cancel</a-button
          >
        </a-form-item>
      </a-layout-content>
    </a-form>
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
          breadcrumbName: "Installation Works",
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