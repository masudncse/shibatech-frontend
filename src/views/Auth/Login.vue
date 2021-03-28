<template>
  <div class="login">
    <a-row>
      <a-col
        :span="12"
        class="login__inner d-flex justify-content-center align-items-center vh-100"
      >
        <a-form
          :form="form"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
          @submit="handleSubmit"
          style="width: 45%"
        >
          <div class="brand-logo mb-4">
            <img
              src="https://www.bootstrapdash.com/demo/bogy/template/images/logo.svg"
              alt="logo"
            />
          </div>
          <h4 class="mb-1">Welcome back!</h4>
          <h6 class="font-weight-light mb-4">Happy to see you again!</h6>

          <a-form-item label="Email Address" class="mb-2">
            <a-input
              placeholder="Enter your email"
              size="large"
              v-decorator="[
                'email',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item label="Password">
            <a-input
              placeholder="Enter your password"
              size="large"
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please input your password!' },
                  ],
                },
              ]"
            />
          </a-form-item>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <a-checkbox @change="onChange"> Keep me signed in </a-checkbox>
            <router-link to="/forgot" class="text-black-50"
              >Forget password?</router-link
            >
          </div>
          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button type="primary" block size="large" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
          <div class="text-center mt-4 font-weight-light">
            Don't have an account?
            <a href="register-2.html" class="text-primary">Create</a>
          </div>
        </a-form>
      </a-col>
      <a-col
        :span="12"
        class="login__banner vh-100 d-flex justify-content-center align-items-end"
      >
        <p class="text-white">Copyright © 2018 All rights reserved.</p>
      </a-col>
    </a-row>
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

<style lang="scss">
.login {
  background-color: #f7f7fa;

  &__form {
    &--inner {
      width: 55%;
    }
  }

  &__banner {
    background-image: url("https://www.bootstrapdash.com/demo/bogy/template/images/auth/login-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>