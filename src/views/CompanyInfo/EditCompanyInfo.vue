<template>
  <div class="edit-vendor">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/settings/company-info"
                >Company Info</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Editing Company Information" sub-title="" />
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
        <a-card title="Company Logo">
          <a-row :gutter="15">
            <a-col :span="12" class="d-flex align-items-center">
              <a-upload
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                class="mr-5"
              >
                <a-button> <a-icon type="upload" /> Upload Logo</a-button>
              </a-upload>
              <img src="http://www.jpremit.com/images/logo.png" alt="" />
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
        <a-card title="Company Information">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-form-item label="Company Name" labelAlign="left" class="mb-2">
                <a-input value="Shibatech Corporation Ltd." />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Address" labelAlign="left" class="mb-2">
                <a-textarea
                  :auto-size="{ minRows: 5, maxRows: 5 }"
                  value="Level-21, Ahmed Tower, Kemal Ataturk Ave"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="City" labelAlign="left" class="mb-2">
                <a-input value="Dhaka" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="State" labelAlign="left" class="mb-2">
                <a-input value="Dhaka" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Postal Code	" labelAlign="left" class="mb-2">
                <a-input value="1213" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Country" labelAlign="left" class="mb-2">
                <a-input value="Bangladesh" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Phone" labelAlign="left" class="mb-2">
                <a-input value="+8801676717945" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Fax" labelAlign="left" class="mb-2">
                <a-input value="+0221254525" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Website" labelAlign="left" class="mb-2">
                <a-input value="example.com" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="VAT ID" labelAlign="left" class="mb-2">
                <a-input value="245561567654116" />
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