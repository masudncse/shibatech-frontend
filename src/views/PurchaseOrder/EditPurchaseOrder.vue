<template>
  <div class="add-vendor">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/purchase-orders"
                >Purchase Orders</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing : Order 1...</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header
            title="Editing Purchase Order - Order 1"
            sub-title=""
          />
        </div>
      </a-col>
    </a-row>

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
              <a-form-item label="Subject" labelAlign="left" class="mb-1">
                <a-input
                  v-decorator="[
                    'Subject',
                    {
                      rules: [
                        { required: true, message: 'Please input your note!' },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Vendor Name" labelAlign="left" class="mb-1">
                <a-input placeholder="input search text">
                  <a-icon class="mr-2" slot="addonAfter" type="search" />

                  <a-icon class="" slot="addonAfter" type="plus" />
                </a-input>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item
                label="Requesting Number"
                labelAlign="left"
                class="mb-1"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Tracking Number"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'Tracking',
                    {
                      rules: [
                        { required: true, message: 'Please input your note!' },
                      ],
                    },
                  ]"
                  placeholder="input search text"
                >
                  <a-icon class="mr-2" slot="addonAfter" type="search" />

                  <a-icon class="" slot="addonAfter" type="plus" />
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Due Date" labelAlign="left" class="mb-1">
                <a-date-picker style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Carier" labelAlign="left" class="mb-1">
                <a-select default-value="Select One Option" style="width: 100%">
                  <a-select-opt-group>
                    <span slot="label"><a-icon type="user" />Stage One</span>
                    <a-select-option value="jack"> Jack </a-select-option>
                    <a-select-option value="lucy"> Lucy </a-select-option>
                  </a-select-opt-group>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Contact Name" labelAlign="left" class="mb-1">
                <a-input placeholder="input search text">
                  <a-icon class="mr-2" slot="addonAfter" type="search" />

                  <a-icon class="" slot="addonAfter" type="plus" />
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Sales Comittion"
                labelAlign="left"
                class="mb-1"
              >
                <a-input placeholder="input search text">
                  <a-icon class="mr-2" slot="addonAfter" type="search" />

                  <a-icon class="" slot="addonAfter" type="plus" />
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Excise Dutey" labelAlign="left" class="mb-1">
                <a-input placeholder="input search text">
                  <a-icon class="mr-2" slot="addonAfter" type="search" />

                  <a-icon class="" slot="addonAfter" type="plus" />
                </a-input>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Status" labelAlign="left" class="mb-1">
                <a-select default-value="Status" style="width: 100%">
                  <a-select-opt-group>
                    <span slot="label"><a-icon type="user" />Select one</span>
                    <a-select-option value="jack"> Active </a-select-option>
                    <a-select-option value="lucy"> UnActive </a-select-option>
                  </a-select-opt-group>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Assigned To" labelAlign="left" class="mb-1">
                <a-select default-value="Administator" style="width: 100%">
                  <a-select-opt-group>
                    <span slot="label"><a-icon type="user" />Stage One</span>
                    <a-select-option value="jack"> Jack </a-select-option>
                    <a-select-option value="lucy"> Lucy </a-select-option>
                  </a-select-opt-group>
                  <a-select-opt-group label="Engineer">
                    <a-select-option value="Yiminghe">
                      yiminghe
                    </a-select-option>
                  </a-select-opt-group>
                </a-select>
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
                  <a-form-item
                    label="Beling Adress"
                    labelAlign="left"
                    class="mb-1"
                  >
                    <a-select
                      default-value="Select Adress To Coppy"
                      style="width: 100%"
                    >
                      <a-select-opt-group>
                        <span slot="label"
                          ><a-icon type="user" />Select one</span
                        >
                        <a-select-option value="jack"> Active </a-select-option>
                        <a-select-option value="lucy">
                          UnActive
                        </a-select-option>
                      </a-select-opt-group>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item
                    label="Shipping Adress"
                    labelAlign="left"
                    class="mb-1"
                  >
                    <a-select
                      default-value="Select Adress To Coppy"
                      style="width: 100%"
                    >
                      <a-select-opt-group>
                        <span slot="label"
                          ><a-icon type="user" />Select one</span
                        >
                        <a-select-option value="jack"> Active </a-select-option>
                        <a-select-option value="lucy">
                          UnActive
                        </a-select-option>
                      </a-select-opt-group>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="Street" labelAlign="left" class="mb-1">
                    <a-textarea :auto-size="{ minRows: 3, maxRows: 6 }" />
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="PO Box" labelAlign="left" class="mb-1">
                    <a-input />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-form-item label="City" labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="State" labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Postal Code" labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Country" labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Description Details">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Description" labelAlign="left" class="mb-1">
                <a-textarea :auto-size="{ minRows: 4, maxRows: 6 }" />
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
                <th>Attributes</th>
                <th>Total</th>
                <th>Net Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><a-input placeholder="Search your item" allow-clear /></td>
                <td><a-input default-value="0" /></td>
                <td><a-input default-value="0" /></td>
                <td>
                  <a-button-group>
                    <a-checkbox
                      @change="handleShowAttribute"
                      :checked="showAttribute"
                    ></a-checkbox>
                  </a-button-group>
                </td>
                <td>0.00</td>
                <td>0.00</td>
              </tr>
              <tr v-show="showAttribute">
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
                            <a-input-number
                              style="width: 100%"
                            ></a-input-number>
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
                            <a-select
                              style="width: 120px"
                              @change="handleChange"
                            >
                              <a-select-option value="jack">
                                Jack
                              </a-select-option>
                              <a-select-option value="lucy">
                                Lucy
                              </a-select-option>
                              <a-select-option value="disabled" disabled>
                                Disabled
                              </a-select-option>
                              <a-select-option value="Yiminghe">
                                yiminghe
                              </a-select-option>
                            </a-select>
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
                            <a-input-number></a-input-number>
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
                            <a-select
                              style="width: 120px"
                              @change="handleChange"
                            >
                              <a-select-option value="jack">
                                Jack
                              </a-select-option>
                              <a-select-option value="lucy">
                                Lucy
                              </a-select-option>
                              <a-select-option value="disabled" disabled>
                                Disabled
                              </a-select-option>
                              <a-select-option value="Yiminghe">
                                yiminghe
                              </a-select-option>
                            </a-select>
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
                            <a-input-number></a-input-number>
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
                            <a-input></a-input>
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
                            <a-input-number></a-input-number>
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
                            <a-input></a-input>
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
                            <a-input-number></a-input-number>
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
                            <a-input></a-input>
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
                            <a-input></a-input>
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
                            <a-input></a-input>
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
            <tbody>
              <tr>
                <td>2</td>
                <td><a-input placeholder="Search your item" allow-clear /></td>
                <td><a-input default-value="0" /></td>
                <td><a-input default-value="0" /></td>
                <td>
                  <a-button-group>
                    <a-checkbox></a-checkbox>
                  </a-button-group>
                </td>
                <td>0.00</td>
                <td>0.00</td>
              </tr>
              <tr v-show="false">
                <td colspan="8">
                  <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" tab="Basic">
                      <a-row>
                        <a-col :span="12">
                          <a-form-item
                            label="Building Floors"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input-number></a-input-number>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Operation"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-select
                              style="width: 120px"
                              @change="handleChange"
                            >
                              <a-select-option value="jack">
                                Jack
                              </a-select-option>
                              <a-select-option value="lucy">
                                Lucy
                              </a-select-option>
                              <a-select-option value="disabled" disabled>
                                Disabled
                              </a-select-option>
                              <a-select-option value="Yiminghe">
                                yiminghe
                              </a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Person"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input-number></a-input-number>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Case Type"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-select
                              style="width: 120px"
                              @change="handleChange"
                            >
                              <a-select-option value="jack">
                                Jack
                              </a-select-option>
                              <a-select-option value="lucy">
                                Lucy
                              </a-select-option>
                              <a-select-option value="disabled" disabled>
                                Disabled
                              </a-select-option>
                              <a-select-option value="Yiminghe">
                                yiminghe
                              </a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Load (Kg)"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input-number></a-input-number>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Travel (mm)"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input></a-input>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Door"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input-number></a-input-number>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="All Floor Name"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input></a-input>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Speed"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input-number></a-input-number>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Front"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input></a-input>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Stops"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input></a-input>
                          </a-form-item>
                        </a-col>
                        <a-col :span="12">
                          <a-form-item
                            label="Rear Entrance"
                            labelAlign="left"
                            class="mb-1"
                          >
                            <a-input></a-input>
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

          <a-button type="default" icon="plus" class="mt-3">
            Add product
          </a-button>
        </a-card>
        <br />
        <a-card>
          <table class="table table-bordered">
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
      </a-layout-content>

      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          marginTop: '15px',
        }"
      >
        <a-form-item :wrapper-col="{ span: 24 }" class="text-right mb-0">
          <a-button type="primary" html-type="submit"> Update </a-button>
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
const column = [
  {
    title: "Item Total",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "Item Total" },
  },
  {
    title: "00",
    dataIndex: "number",
    key: "number",
    width: 80,
    scopedSlots: { customRender: "number" },
  },
];
const columns = [
  {
    title: "Item Name ",
    dataIndex: "",
    key: "name",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Quantity ",
    dataIndex: "",
    key: "quantity",
    sorter: true,
    scopedSlots: { customRender: "quantity" },
  },
  {
    title: "Selling Price  ",
    dataIndex: "",
    key: "Price",
    sorter: true,
    scopedSlots: { customRender: "selling price" },
  },
  {
    title: "Total  ",
    dataIndex: "",
    key: "total",
    sorter: true,
    scopedSlots: { customRender: "Total" },
  },
  {
    title: "Net price  ",
    dataIndex: "",
    key: "net ",
    sorter: true,
    scopedSlots: { customRender: "Net price" },
  },
];
const data = [
  {
    id: "1",
    name: "John Brown",
    quantity: "01676717945",
    SellinPrice: "example@gmail.com",
    total: "example@gmail.com",
    netprice: "example@gmail.com",
  },
];
const data2 = [
  {
    key: "1",
    name: "(-) Overall Discount (0)",
    number: "00",
  },
  {
    key: "2",
    name: "(+) Charges",
    number: "00",
  },
  {
    key: "3",
    name: "Pre Tax Total",
    number: "00",
  },
  {
    key: "4",
    name: "(+) Tax",
    number: "00",
  },
  {
    key: "5",
    name: "(+) Taxes On Charges",
    number: "00",
  },
  {
    key: "6",
    name: " (-) Deducted Taxes",
    number: "00",
  },
  {
    key: "7",
    name: " Grand total",
    number: "00",
  },
];

export default {
  data() {
    return {
      column,
      data,
      data2,
      pagination: { current: 1, pageSize: 2, total: 100 },
      loading: false,
      columns,
      selectedRowKeys: [],
      isOpenSearchForm: false,

      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Purchase Order",
        },
        {
          path: "second",
          breadcrumbName: "Editing this ",
        },
      ],
    };
  },
  methods: {
    handleSearch() {
      console.log("Search");
    },
    handleOpenSearchForm() {
      this.isOpenSearchForm = !this.isOpenSearchForm;
    },
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    handleDelete(key) {
      console.log(key);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
};
</script>