<template>
  <div class="c_3 mb_3">
    <div class="cards">
      <div class="card">
        <div class="front-card">
          <img :src="picture" />
        </div>
        <div class="back-card">{{ keyword }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
      require: true,
    },
  },
};
</script>