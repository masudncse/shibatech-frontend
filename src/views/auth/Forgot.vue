<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <div
                class="col-md-6 login__form vh-100 d-flex justify-content-center align-items-center"
        >
          <div class="login__form--inner">
            <div class="login__form--brand-logo mb-4">
              <img src="https://www.bootstrapdash.com/demo/bogy/template/images/logo.svg" alt=""/>
            </div>

            <h4>Forget password?</h4>
            <h6 class="font-weight-light">Please complete the form.</h6>

            <form class="pt-3">
              <div class="form-group">
                <label for="email">Your Email: <span class="text-danger">*</span></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent border-right-0 rounded-0">
                      <i class="fa fa-user text-black-50"></i>
                    </span>
                  </div>
                  <input type="text" id="email"
                         class="form-control bg-transparent rounded-0"/>
                </div>
              </div>
              <div class="my-3">
                <button type="submit"
                        class="btn btn-block btn-primary btn-lg rounded-0 font-weight-medium auth-form-btn"
                >SUBMIT
                </button>
              </div>
              <div class="text-center mt-4 font-weight-light">
                Have an account?
                <router-link to="/login">Login</router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 login__banner vh-100 d-flex justify-content-center align-items-end">
          <p class="text-white">Copyright © 2018 All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formLayout: "horizontal",
        form: this.$form.createForm(this, {name: "coordinated"}),
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
    background-color: #F7F7FA;

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