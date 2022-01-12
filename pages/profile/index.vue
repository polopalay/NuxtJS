<template>
  <div class="ct">
    <h1 class="text-3xl font-bold text-current">Profile is here</h1>
    <button class="btn btn_danger" @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
