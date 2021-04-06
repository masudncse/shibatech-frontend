<template>
  <div class="catagorey-list">
    <a-row>
      <a-col :span="12">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/activity-logs"
              >Activity Logs</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item>All</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
      <a-col :span="12" align="end">
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
          <a-input placeholder="Activity Log"> </a-input>
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
        <a slot="Log name" slot-scope="text">{{ text }}</a>

        <a slot="Description" slot-scope="text">{{ text }}</a>
        <a slot="Subject" slot-scope="text">{{ text }}</a>
        <a slot="Subject type" slot-scope="text">{{ text }}</a>
        <a slot="Causer" slot-scope="text">{{ text }}</a>
        <a slot="Causer type" slot-scope="text">{{ text }}</a>
        <a slot="Properties" slot-scope="text">{{ text }}</a>

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
              @click="$router.push(`/activity-logs/${record.id}/details`)"
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
    title: "Log Name ",
    dataIndex: "name",
    key: "name",
    sorter: true,
    scopedSlots: { customRender: "Log name" },
  },

  {
    title: "Discription ",
    dataIndex: "discription",
    key: "discription",
    scopedSlots: { customRender: "Discription" },
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    sorter: true,
    scopedSlots: { customRender: "Subject" },
  },
  {
    title: "Subject Type",
    dataIndex: "subject_type",
    key: "subject",
    sorter: true,
    scopedSlots: { customRender: "Subject Type" },
  },
  {
    title: "Causer",
    dataIndex: "causer",
    key: "causer",
    sorter: true,
    scopedSlots: { customRender: "Causer" },
  },
  {
    title: "Causer Type",
    dataIndex: "causer_type",
    key: "cuser",
    sorter: true,
    scopedSlots: { customRender: "Causer Type" },
  },
  {
    title: "Properties",
    dataIndex: "properties",
    key: "properties",
    sorter: true,
    scopedSlots: { customRender: "Properties" },
  },

  {
    title: "Action",
    dataIndex: "",
    key: "xt",
    width: "10%",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    id: "1",
    name: "Log Name",
    discription:
      "Lorem ipsum dolor sit amet, consecte Lorem",
    subject: "Subject",
    subject_type: "Subject Type",
    causer: "Example causer",
    causer_type: "Causer Type",
    properties: "Properties",
  },
  {
    id: "2",
    name: "Log Name",
    discription:
      "Lorem ipsum dolor sit amet",
    subject: "Subject",
    subject_type: "Subject Type",
    causer: "Example causer",
    causer_type: "Causer Type",
    properties: "Properties",
  },
  {
    id: "3",
    name: "Log Name",
    discription: "Lorem ipsum dolor sit amet, consecte Lorem ipsum.",

    subject: "example subject",
    subject_type: "example subject type",
    causer: "Example causer",
    causer_type: "Exaple Causer Type",
    properties: "Example Properties",
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