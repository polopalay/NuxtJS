<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to="/settings">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/deck">Deck</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/scheduled">Scheduled</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: "router-log",
};
</script>

<style lang="scss">
// .page {
//     display: flex;
.main {
  margin-left: 3rem;
}
// }
</style>
