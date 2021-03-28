<template>
  <div class="add-user">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/users">Users</router-link></a-breadcrumb-item
            >
            <a-breadcrumb-item>Adding new</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Creating New User" sub-title="" />
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
        <a-card title="User Login & Role">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="User Name" labelAlign="left" class="mb-0">
                <a-input
                  v-decorator="[
                    'user_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Primary Email" labelAlign="left" class="mb-0">
                <a-input
                  v-decorator="[
                    'primary_email',
                    {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="First Name" labelAlign="left" class="mb-0">
                <a-input
                  v-decorator="[
                    'first_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your first name!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Last Name" labelAlign="left" class="mb-0">
                <a-input
                  v-decorator="[
                    'last_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your last_name!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Password" labelAlign="left" class="mb-0">
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Confirm Password"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'confirm_password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your confirm password!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Role" labelAlign="left" class="mb-0">
                <a-select
                  v-decorator="[
                    'role',
                    {
                      rules: [
                        { required: true, message: 'Please select your role!' },
                      ],
                    },
                  ]"
                  default-value="lucy"
                  style="width: 120px"
                >
                  <a-select-option value="jack"> Admin </a-select-option>
                  <a-select-option value="Yiminghe"> Manager </a-select-option>
                  <a-select-option value="lucy"> Editor </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="More Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Title " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Fax " labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Department " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Other Email " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Office Phone 	" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Secondary Email 	"
                labelAlign="left"
                class="mb-1"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Mobile Phone 	" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Home Phone 	" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Secondary Phone 	"
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Signature " labelAlign="left" class="mb-0">
                <a-upload
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  :headers="headers"
                >
                  <a-button>
                    <a-icon type="upload" /> Click to Upload
                  </a-button>
                </a-upload>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Address Information">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-row :gutter="15">
                <a-col :span="12">
                  <a-form-item label="Street" labelAlign="left" class="mb-0">
                    <a-textarea :auto-size="{ minRows: 3, maxRows: 6 }" />
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="PO Box" labelAlign="left" class="mb-0">
                    <a-input />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-form-item label="City" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="State" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Postal Code" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Country" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="User Photograph">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="User Image" labelAlign="left" class="mb-0">
                <a-upload
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  :headers="headers"
                >
                  <a-button>
                    <a-icon type="upload" /> Click to Upload
                  </a-button>
                </a-upload>
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