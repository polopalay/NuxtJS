<template>
  <li>
    <nuxt-link class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />
        <div class="card-body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: String,
      require: true,
    },
  },
};
</script>