<template>
  <div class="edit-transaction">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/transactions"
                >Transactions</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Editing : Md. Masudu...</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header
            title="Editing Transaction - Md. Masudul Kabir"
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
        <a-card title="Basic Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Subject" labelAlign="left" class="mb-0">
                <a-input
                  v-decorator="[
                    'transaction_name',
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
              <a-form-item label="Project Name" labelAlign="left" class="mb-0">
                <a-date-picker style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Project Name" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Invoie No" labelAlign="left" class="mb-0">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Receive" labelAlign="left" class="mb-0">
                <a-input prefix="$" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Payment" labelAlign="left" class="mb-0">
                <a-input prefix="$" />
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
        <a-card>
          <table class="table table-bordered table-hovered">
            <tbody>
              <tr>
                <th class="text-right">Total Receive:</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">Total Payment:</th>
                <td>0.00</td>
              </tr>
              <tr>
                <th class="text-right">Balance:</th>
                <td>0.00</td>
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