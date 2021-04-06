<template>
  <div class="project-list">
    <a-row>
      <a-col :span="12">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/projects"
              >Projects</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item>All</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
      <a-col :span="12" align="end">
        <a-button
          type="primary"
          icon="plus"
          class="mt-2"
          @click="$router.push('/projects/add')"
          >Add Project</a-button
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
          <a-input placeholder="Project Name"> </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="Primary Phone"> </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="Primary Email"> </a-input>
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
        <span slot="project_name" slot-scope="text">{{ text }}</span>
        <a slot="phone" slot-scope="text">{{ text }}</a>
        <a slot="email" slot-scope="text">{{ text }}</a>
        <a slot="progress" slot-scope="text">
          <a-badge :count="text" />
        </a>
        <a slot="status" slot-scope="text">
          <a-badge
            :count="text"
            :number-style="{
              backgroundColor: '#52c41a',
              color: '#fff',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }"
          />
        </a>
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
              @click="$router.push(`/projects/${record.id}/edit`)"
              icon="edit"
            />
            <a-button
              type="default"
              @click="$router.push(`/projects/${record.id}/details`)"
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
    title: "Project Name ",
    dataIndex: "project_name",
    key: "project_name",
    sorter: true,
    scopedSlots: { customRender: "project_name" },
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    key: "start_date",
    sorter: true,
    scopedSlots: { customRender: "start_date" },
  },
  {
    title: "Target End Date",
    dataIndex: "target_end_date",
    key: "target_end_date",
    sorter: true,
    scopedSlots: { customRender: "target_end_date" },
  },
  {
    title: "Actual End Date",
    dataIndex: "actual_end_date",
    key: "actual_end_date",
    sorter: true,
    scopedSlots: { customRender: "actual_end_date" },
  },
  {
    title: "Target Budget",
    dataIndex: "target_budget",
    key: "target_budget",
    sorter: true,
    scopedSlots: { customRender: "target_budget" },
  },
  {
    title: "Progress",
    dataIndex: "progress",
    key: "progress",
    sorter: true,
    scopedSlots: { customRender: "progress" },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: true,
    scopedSlots: { customRender: "status" },
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
    project_name: " Project 1",
    start_date: "01 Jun, 2021",
    actual_end_date: "25 Jul, 2021",
    target_end_date: "30 Jan, 2022",
    target_budget: "25,00,000",
    progress: "20%",
    status: "Process",
  },
  {
    id: "2",
    project_name: " Project 2",
    start_date: "05 Mar, 2019",
    actual_end_date: "02 Apr, 2020",
    target_end_date: "05 Jan, 2020",
    target_budget: "50,00,000",
    progress: "100%",
    status: "Completed",
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