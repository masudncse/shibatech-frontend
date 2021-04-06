<template>
  <div class="edit-vendor">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/installation-works"
                >Installation Works</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing </a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Editing Installation Work" sub-title="" />
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
                    'vendor_name',
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
              <a-form-item
                label="Project Duration"
                labelAlign="left"
                class="mb-1"
              >
                <a-input-number />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Project Start Date"
                labelAlign="left"
                class="mb-0"
              >
                <a-date-picker />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Prodject End Date"
                labelAlign="left"
                class="mb-0"
              >
                <a-date-picker />
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
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Scaffolding</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Plumbing</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Main line rail side bracket INST</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>C/W side rail beracket INST</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Buffer base installation</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Main guide & C/W guide INST</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Jamb Installation</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Sill Header Installation</td>
                <td><a-input-number></a-input-number></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-date-picker></a-date-picker></td>
                <td><a-button>Clear</a-button></td>
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