<template>
  <div class="add-vendor">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/project-tasks"
                >Project Tasks</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing : Task 1...</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Editing Project Task - Task 1" sub-title="" />
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
              <a-form-item
                label="Task Name"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'Project Task',
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
              <a-form-item label="Piroty" labelAlign="left" class="mb-1">
                <a-select default-value="piority" style="width: 100%">
                  <a-select-opt-group>
                    <span slot="label"
                      ><a-icon type="user" />Select a option</span
                    >
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
            <a-col :span="12">
              <a-form-item label="Realted To" labelAlign="left" class="mb-1">
                <a-input placeholder="input search text">
                  <a-icon class="mr-2" slot="addonAfter" type="search" />

                  <a-icon class="" slot="addonAfter" type="plus" />
                </a-input>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Type" labelAlign="left" class="mb-1">
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
              <a-form-item label="Assigned To" labelAlign="left" class="mb-1">
                <a-select default-value="Selec one Option" style="width: 100%">
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
            <a-col :span="12">
              <a-form-item label="Status" labelAlign="left" class="mb-1">
                <a-select default-value="Administator" style="width: 100%">
                  <a-select-opt-group>
                    <span slot="label"><a-icon type="user" />Select one</span>
                    <a-select-option value="jack"> Active </a-select-option>
                    <a-select-option value="lucy"> UnActive </a-select-option>
                  </a-select-opt-group>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Custom Information">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-row :gutter="15">
                <a-col :span="12">
                  <a-form-item label="Progress" labelAlign="left" class="mb-1">
                    <a-select
                      default-value="Select one option"
                      style="width: 100%"
                    >
                      <a-select-opt-group>
                        <span slot="label"
                          ><a-icon type="user" />Select one</span
                        >
                        <a-select-option value="jack">
                          progress
                        </a-select-option>
                        <a-select-option value="lucy">
                          progress
                        </a-select-option>
                      </a-select-opt-group>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Working Hours" labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Start time" labelAlign="left" class="mb-1">
                <a-date-picker style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="End time" labelAlign="left" class="mb-1">
                <a-date-picker style="width: 100%" />
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
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Project Task",
        },
        {
          path: "second",
          breadcrumbName: "Editing new",
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