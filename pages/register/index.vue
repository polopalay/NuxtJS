<template>
  <div>
    <section class="page">
      <div class="card card-form">
        <div class="card_body">
          <h3 class="text_center">Register</h3>
          <form @submit.prevent="onSubmit">
            <div class="form_group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="email"
                class="form_control"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="form_group">
              <label for="password">Password</label>
              <input
                id="password"
                v-model="password"
                class="form_control"
                type="password"
                placeholder="Please enter password"
              />
            </div>
            <div class="form_group">
              <label for="password">Re-Password</label>
              <input
                id="re-password"
                v-model="rePassword"
                class="form_control"
                type="password"
                placeholder="Please enter re-password"
              />
            </div>
            <div class="form_group">
              <button type="submit" class="btn btn_success btn_submit">
                Register
              </button>
            </div>
          </form>
          <div class="orther">
            <span
              >Have your account?
              <nuxt-link class="other text_center" tag="a" to="/login"
                >Login here</nuxt-link
              >
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword;
    },
    onSubmit() {
      const validPassword = this.checkValidPassword;

      if (validPassword) {
        //call api to firebase
        this.$store
          .dispatch("authenticateUser", {
            email: this.email,
            password: this.password,
          })
          .then((result) => {
            if (result.success) this.$router.push("/decks");
          });
      } else {
        console.log("Password is not valid");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .card-form {
    width: 500px;
  }
  .btn-submit {
    width: 100%;
  }
}
</style>
