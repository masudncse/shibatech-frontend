<template>
  <div class="vendor-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/purchase-orders"
              >Purchase Orders</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item> Order 1</a-breadcrumb-item>
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
              <h5>Order 1</h5>

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
            @click="$router.push('/purchase-orders/add')"
            >Add New Order</a-button
          >
          <div class="mb-2"></div>
          <a-button @click="$router.push('/purchase-orders/1/edit')"
            >Edit</a-button
          >
          <a-button class="ml-2">Send Email</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> Delete parchesorders </a-menu-item>
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
              <a-form-item label="Subject " labelAlign="left" class="mb-1">
                Order 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Vendor Name " labelAlign="left" class="mb-1">
                Vendor 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Requesting  Number"
                labelAlign="left"
                class="mb-1"
              >
                3654654
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Tracking Number"
                labelAlign="left"
                class="mb-1"
              >
                78055
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Carier" labelAlign="left" class="mb-1">
                Carier 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Contact Name" labelAlign="left" class="mb-1">
                Contact 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Sales Comition"
                labelAlign="left"
                class="mb-1"
              >
                10%
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Excise Duty" labelAlign="left" class="mb-1">
                545.50
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Status " labelAlign="left" class="mb-1">
                Status 1
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Due Date" labelAlign="left" class="mb-1">
                19-2-2020
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Assign To" labelAlign="left" class="mb-1">
                Example Assign To
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
        <a-card title="Address Details">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-row :gutter="15">
                <a-col :span="12">
                  <a-form-item label="Street" labelAlign="left" class="mb-1">
                    26, Nobendronath Basak Lane, Nawabpur Road
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="PO Box" labelAlign="left" class="mb-1">
                    1100
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-form-item label="City" labelAlign="left" class="mb-1">
                Dhaka
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="State" labelAlign="left" class="mb-1">
                Dhaka
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Postal Code" labelAlign="left" class="mb-1">
                1100
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Country" labelAlign="left" class="mb-1">
                Bangladesh
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
        <br />
        <a-card title="Item Details">
          <table class="table">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Selling Price</th>
                <th>Total</th>
                <th>Net Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Product 1</td>
                <td>Category 1</td>
                <td>0.00</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td colspan="8">
                  <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" tab="Basic">
                      <a-row :gutter="15">
                        <a-col :span="8">
                          <a-form-item
                            label="Building Floors"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            23
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Operation"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            12 h
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Person"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            12
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Case Type"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            Standard
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Load (Kg)"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            1200kg
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Travel (mm)"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            320mm
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Door"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            2
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="All Floor Name"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            Yes
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Speed"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            200rpm
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Front"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            Standard
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Stops"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            Yes
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item
                            label="Rear Entrance"
                            labelAlign="left"
                            class="mb-1"
                            :label-col="{ span: 8 }"
                            :wrapper-col="{ span: 16 }"
                          >
                            Formal
                          </a-form-item>
                        </a-col>
                      </a-row>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Car Items" force-render>
                      Content of Tab Pane 2
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Hall Items">
                      Content of Tab Pane 3
                    </a-tab-pane>
                    <a-tab-pane key="4" tab="Extra Items">
                      Content of Tab Pane 4
                    </a-tab-pane>
                  </a-tabs>
                </td>
              </tr>
            </tbody>
          </table>
        </a-card>
        <br />
        <a-card>
          <table class="table table-bordered table-hovered">
            <tbody>
              <tr>
                <th class="text-right">Item Total</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">(-) Overall Discount (0)</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">(+) Charges</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">Pre Tax Total</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">(+) Tax</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">(+) Taxes On Charges</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">(-) Deducted Taxes</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">Grand total</th>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
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
          breadcrumbName: "Quotes",
        },
        {
          path: "second",
          breadcrumbName: "subject",
        },
      ],
    };
  },
  methods: {},
};
</script>