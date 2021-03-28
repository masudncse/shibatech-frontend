<template>
  <div class="catagorey-list">
    <a-row>
      <a-col :span="12">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/product/all"
              >Product
            </router-link></a-breadcrumb-item
          >
          <a-breadcrumb-item>All</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
      <a-col :span="12" align="end">
        <a-button
          type="primary"
          icon="plus"
          class="mt-2"
          @click="$router.push('/product/add')"
          >Add Product</a-button
        >
        <a-button class="mt-2 ml-2" @click="handleOpenSearchForm"
          >Search <a-icon :type="isOpenSearchForm ? 'up' : 'down'"
        /></a-button>
      </a-col>
    </a-row>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
      }"
      v-if="isOpenSearchForm"
      class="mb-3"
    >
      <a-form layout="inline" @submit.prevent="handleSearch">
        <a-form-item>
          <a-input placeholder="Product Name"> </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">
            <a-icon type="search" /> Submit
          </a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
      }"
    >
      <div class="mb-3">
        <a-row>
          <a-col :span="12">
            <a-button
              type="primary"
              :disabled="!hasSelected"
              :loading="loading"
              @click="start"
              class="mr-2"
            >
              Reload
            </a-button>
            <span :class="hasSelected ? 'mr-2' : ''">
              <template v-if="hasSelected">
                {{ `Selected ${selectedRowKeys.length} items` }}
              </template>
            </span>
            <a-button class="mr-2"> Clear filters and shorters </a-button>
            <a-button> Delete selected </a-button>
          </a-col>
          <a-col :span="12" align="end"> Showing 1-10 of 200 </a-col>
        </a-row>
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :loading="loading"
        rowKey="id"
        :pagination="pagination"
        @change="handleTableChange"
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
      >
        <span slot="name" slot-scope="text">{{ text }}</span>
        <a slot="Catagorey name" slot-scope="text">{{ text }}</a>

        <a slot="Minufecture name" slot-scope="text">{{ text }}</a>
        <a slot="Vendor name" slot-scope="text">{{ text }}</a>
        <a slot="Unit name" slot-scope="text">{{ text }}</a>
        <a slot="Stock Quantity" slot-scope="text">{{ text }}</a>
        <a slot="Recoder Lavel" slot-scope="text">{{ text }}</a>

        <div slot="Active Status" slot-scope="">
          <a-checkbox> </a-checkbox>
        </div>

        <div slot="action" slot-scope="text, record">
          <a-button-group>
            <a-popconfirm
              title="Sure to delete?"
              @confirm="() => handleDelete(record.id)"
            >
              <a-button type="default" icon="close" />
            </a-popconfirm>
            <a-button
              type="default"
              @click="$router.push(`/product/${record.id}/edit`)"
              icon="edit"
            />
            <a-button
              type="default"
              @click="$router.push(`/product/${record.id}/details`)"
              icon="info"
            />
          </a-button-group>
        </div>
      </a-table>
    </a-layout-content>
  </div>
</template>
  
<script>
import reqwest from "reqwest";

const columns = [
  {
    title: "Product Name ",
    dataIndex: "name",
    key: "name",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "City name" },
  },
  {
    title: "Catagorey name ",
    dataIndex: "catagorey",
    key: "catagorey",
    sorter: true,
    scopedSlots: { customRender: "Catagorey Name" },
  },
  {
    title: "Minufecture name",
    dataIndex: "minufecture",
    key: "minufecture",
    width: "10%",
    scopedSlots: { customRender: "Minufecture name" },
  },
  {
    title: "Vendor name",
    dataIndex: "vendor",
    key: "vendor",
    width: "10%",
    scopedSlots: { customRender: "Vendor name" },
  },
  {
    title: "Unit name",
    dataIndex: "unit",
    key: "unit",
    width: "10%",
    scopedSlots: { customRender: "Unit name" },
  },
  {
    title: "Recoder lavel",
    dataIndex: "recoder",
    key: "lavel",
    width: "10%",
    scopedSlots: { customRender: "Unit name" },
  },
  {
    title: "Active Status",
    dataIndex: "",
    key: "xe",
    width: "10%",
    scopedSlots: { customRender: "Active Status" },
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    width: "10%",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    id: "1",
    name: "Fan",
    catagorey: "Electronic",
    minufecture: "walton",
    vendor: "Hardid Sing",
    unit: "A",
    recoder: "example",
  },
  {
    id: "2",
    name: "Fridge",
    catagorey: "Electronic",
    minufecture: "Jumuna",
    vendor: "Maidul islam",
    unit: "B",
    recoder: "example",
  },
  {
    id: "3",
    name: "Ac",
    catagorey: "Electronic",
    minufecture: "walton",
    vendor: "Hardid Sing",
    unit: "C",
    recoder: "example",
  },
];

export default {
  data() {
    return {
      data,
      pagination: { current: 1, pageSize: 2, total: 100 },
      loading: false,
      columns,
      selectedRowKeys: [],
      isOpenSearchForm: false,
    };
  },
  mounted() {},
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
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
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;

      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      console.log("params:", params);
      this.loading = true;

      reqwest({
        url: "https://randomuser.me/api",
        method: "get",
        data: {
          results: 10,
          ...params,
        },
        type: "json",
      }).then((data) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    },
  },
};
</script>