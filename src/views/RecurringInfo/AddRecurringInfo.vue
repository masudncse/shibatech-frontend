<template>
  <div class="add-state">
    <a-row>
      <a-col :span="24">
        <div class="page--title">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><router-link to="/recurring-infos"
                >Recurring Infos</router-link
              ></a-breadcrumb-item
            >
            <a-breadcrumb-item>Adding new</a-breadcrumb-item>
          </a-breadcrumb>
          <a-page-header title="Creating New Recurring Info Item" sub-title="" />
        </div>
      </a-col>
    </a-row>

    <a-form
      :form="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }"
      @submit.prevent="handleSubmit"
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
              <a-form-item label="Project" labelAlign="left" class="">
                <a-select
                  show-search
                  :value="value"
                  placeholder="Search your Project"
                  style="width: 100%"
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
              </a-form-item>
            </a-col>
               <a-col :span="12">
              <a-form-item label="Sales Order" labelAlign="left" class="">
                <a-select
                  show-search
                  :value="value"
                  placeholder="Search your Sales Order"
                  style="width:100%"
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
              </a-form-item>
            </a-col>
              <a-col :span="12">
              <a-form-item
                label="Recurring Frequncy"
                labelAlign="left"
                class="mb-1 "
              >
                <a-input class=""
                  v-decorator="[
                    'Recurring Frequency',
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
                label="Payment Amount"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'Payment Amount',
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
                label=" Strat period"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'Strat Period',
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
                label="End Period"
                labelAlign="left"
                class="mb-1"
              >
                <a-input
                  v-decorator="[
                    'End Period',
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
                label="Last Recurring Date"
                labelAlign="left"
                class="mb-1"
              >
                  <a-date-picker />

            
              </a-form-item>
            </a-col>
                <a-col :span="12">
              <a-form-item
                label=" Payment Duration"
                labelAlign="left"
                class="mb-1"
              >
                  <a-date-picker  />
    
            
              </a-form-item>
            </a-col>
         
            <a-col :span="12">
              <a-form-item label="Active status" labelAlign="left" class="mb-1">
                <a-checkbox> </a-checkbox>
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
import jsonp from "fetch-jsonp";
import querystring from "querystring";

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: "utf-8",
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}
export default {
  data() {
    return {
      data: [],
      value: undefined,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "RecurringInfo",
        },
        {
          path: "second",
          breadcrumbName: "Creating",
        },
      ],
    };
  },
  methods: {
    handleSearch(value) {
      fetch(value, (data) => (this.data = data));
    },
    handleChange(value) {
      console.log(value);
      this.value = value;
      fetch(value, (data) => (this.data = data));
    },
  },
  onChange(e) {
    alert(`checked = ${e.target.checked}`);
  },
   time(date, dateString) {
      console.log(date, dateString);
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
};
</script>