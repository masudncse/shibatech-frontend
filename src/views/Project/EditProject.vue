<template>
  <div class="edit-project">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/projects"
                >Projects</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing : Proje...</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Editing Project -  Project 1" sub-title="" />
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
              <a-form-item label="Project Name" labelAlign="left" class="mb-1">
                <a-input
                  v-decorator="[
                    'project_name',
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
              <a-form-item label="Start Date" labelAlign="left" class="mb-1">
                <a-date-picker style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Assigned To" labelAlign="left" class="mb-0">
                <a-input-group compact>
                  <a-select
                    show-search
                    :value="value"
                    placeholder="input search text"
                    style="width: 85%"
                    :default-active-first-option="false"
                    :show-arrow="false"
                    :filter-option="false"
                    :not-found-content="null"
                    @search="handleSearch"
                    @change="handleChange"
                  >
                    <a-select-option v-for="d in data" :key="d.value">
                      {{ d.text }}
                    </a-select-option>
                  </a-select>
                  <a-button style="width: 15%" icon="plus" />
                </a-input-group>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Target End Date"
                labelAlign="left"
                class="mb-0"
              >
                <a-date-picker style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Status " labelAlign="left" class="mb-0">
                <a-select default-value="Processing" style="width: 100%">
                  <a-select-option value="Processing">
                    Processing
                  </a-select-option>
                  <a-select-option value="Initiated">
                    Initiated
                  </a-select-option>
                  <a-select-option value="In Progress">
                    In Progress
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Custom Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item
                label="Target Budget "
                labelAlign="left"
                class="mb-1"
              >
                <a-input></a-input>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Priority" labelAlign="left" class="mb-1">
                <a-select default-value="Low" style="width: 100%">
                  <a-select-option value="Low"> Low </a-select-option>
                  <a-select-option value="Normal"> Normal </a-select-option>
                  <a-select-option value="High"> High </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Progress" labelAlign="left" class="mb-1">
                <a-select default-value="10" style="width: 100%">
                  <a-select-option value="10"> 10% </a-select-option>
                  <a-select-option value="20"> 20% </a-select-option>
                  <a-select-option value="50"> 50% </a-select-option>
                  <a-select-option value="800"> 80% </a-select-option>
                  <a-select-option value="100"> 100% </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
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
      id: this.$route.params.id,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
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