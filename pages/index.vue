<template>
  <div class="ct">
    <!-- <div>
      <h1>Homepage is here....</h1>
    </div>

    <NuxtLink to="/test">Home page</NuxtLink>

    <h1>FKKKKKKKK</h1>

    <test />

    <bangOcCho v-if="show" />

    <button v-if="!show" @click="show = true">Show List</button>

    <a href="https://luong.vnpost.vn/ProfessionalStaff/CalculateSalary"
      >Lương</a
    > -->
    <div class="banner">
      <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center my_3">3 Popular Decks For You</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bangOcCho from "./thanh/bangOcCho.vue";
export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    // bangOcCho,
    dirs: ["~/components"],
  },
  async asyncData({ $content, params }) {},
};
</script>

<style lang="scss">
.banner {
  height: 220px;
  margin-top: 3rem;
  .thumbnail-banner {
    height: inherit;
    background: url("~assets/images/banner.webp") center center;
    background-size: cover;
  }
}
</style>