<template>
  <div class="edit-contact">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/contacts"
                >Contacts</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing : Md. Motiur...</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Editing Contact - Md. Motiur Rahman" sub-title="" />
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
              <a-form-item label="First Name" labelAlign="left" class="mb-2">
                <a-input
                  v-decorator="[
                    'contact_name',
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
              <a-form-item label="Last Name " labelAlign="left" class="mb-2">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Office Phone  "
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Organization Name"
                labelAlign="left"
                class="mb-0"
              >
                <a-select
                  default-value="ABC Company"
                  style="width: 100%"
                  @change="handleChange"
                >
                  <a-select-option value="ABC Company">
                    ABC Company
                  </a-select-option>
                  <a-select-option value="XYZ Company">
                    XYZ Company
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Mobile Phone  	"
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Home Phone" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Title " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Secondary Phone "
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Department " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Fax 	" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Primary Email 	"
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Date of Birth "
                labelAlign="left"
                class="mb-0"
              >
                <a-date-picker />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Assistant " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Assistant Phone"
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Secondary Email 	"
                labelAlign="left"
                class="mb-0"
              >
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Do Not Call" labelAlign="left" class="mb-0">
                <a-checkbox />
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
                  <a-form-item label="Street" labelAlign="left" class="mb-2">
                    <a-textarea :auto-size="{ minRows: 3, maxRows: 6 }" />
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="PO Box" labelAlign="left" class="mb-2">
                    <a-input />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-form-item label="City" labelAlign="left" class="mb-2">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="State" labelAlign="left" class="mb-2">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Postal Code" labelAlign="left" class="mb-2">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Country" labelAlign="left" class="mb-2">
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
        <br />
        <a-card title="Profile Picture">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item
                label="Contact Image "
                labelAlign="left"
                class="mb-0"
              >
                <div class="d-flex flex-column align-items-center">
                  <img
                    src="https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg"
                    width="100px"
                    class="img-thumbnail mb-2"
                    alt=""
                  />
                  <a-upload
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  >
                    <a-button> <a-icon type="upload" />Upload </a-button>
                  </a-upload>
                </div>
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