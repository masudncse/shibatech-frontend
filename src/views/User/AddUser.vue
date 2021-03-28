<template>
  <div class="add-vendor">
    <a-row>
      <a-col :span="24">
        <a-page-header
          class="page--title"
          title="Creating New Vendor"
          :breadcrumb="{ props: { routes } }"
          sub-title=""
        />
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
              <a-form-item label="Vendor Name" labelAlign="left" class="mb-1">
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
              <a-form-item label="Primary Email" labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Primary Phone" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Website" labelAlign="left" class="mb-0">
                <a-input />
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
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Vendors",
        },
        {
          path: "second",
          breadcrumbName: "Adding new",
        },
      ],
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