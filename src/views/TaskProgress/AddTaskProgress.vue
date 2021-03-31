<template>
  <div class="add-TaskProgress">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/task-progress"
                >Task Progress</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Adding new</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Creating New Progress Item" sub-title="" />
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
              <a-form-item label=" Progress" labelAlign="left" class="mb-1">
                <a-input
                  v-decorator="[
                    'Progress',
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
              <a-form-item label="Sort Order" labelAlign="left" class="mb-1">
                <a-input
                  v-decorator="[
                    'Sort Order',
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
              <a-form-item label="Color" labelAlign="left" class="mb-1">
                <a-input
                  v-decorator="[
                    'Color',
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
              <a-form-item label="Active status" labelAlign="left" class="mb-1">
                <a-checkbox @change="onChange">
    
  </a-checkbox>
              </a-form-item>
            </a-col>
           
           
            
          </a-row>
        </a-card>
        <br />
      
        <br />
      
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
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Task Progress",
        },
        {
          path: "second",
          breadcrumbName: "Creating",
        },
      ],
    };
  },
  methods: {
     onChange(e) {
      alert(`checked = ${e.target.checked}`);
    },
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