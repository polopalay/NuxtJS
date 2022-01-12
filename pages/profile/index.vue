<template>
  <div>
    <h1>Profile is here</h1>
  </div>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
};
</script>
