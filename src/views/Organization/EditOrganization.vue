<template>
  <div class="edit-organization">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/organizations"
                >Organizations</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing : ABC Comp...</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header
            title="Editing Organization - ABC Company"
            sub-title=""
          />
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
        <a-card title="Organization Details">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item
                label="Organization Name"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'organization_name',
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
              <a-form-item label="Website " labelAlign="left" class="mb-1">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Fax " labelAlign="left" class="mb-0">
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
              <a-form-item label="Employees 	" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Primary Email 		"
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
              <a-form-item label="Ownership " labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Industry " labelAlign="left" class="mb-0">
                <a-select default-value="Banking" style="width: 100%">
                  <a-select-option value="Banking"> Banking </a-select-option>
                  <a-select-option value="Biotechnology">
                    Biotechnology
                  </a-select-option>
                  <a-select-option value="Communnication">
                    Communnication
                  </a-select-option>
                  <a-select-option value="Consulting">
                    Consulting
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Rating " labelAlign="left" class="mb-0">
                <a-select default-value="Active" style="width: 100%">
                  <a-select-option value="Acquired"> Acquired </a-select-option>
                  <a-select-option value="Active"> Active </a-select-option>
                  <a-select-option value="Market Failed">
                    Market Failed
                  </a-select-option>
                  <a-select-option value="Project Cancelled">
                    Project Cancelled
                  </a-select-option>
                  <a-select-option value="Shutdown"> Shutdown </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Annual Revenue 	"
                labelAlign="left"
                class="mb-0"
              >
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