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
    <button
      type="submit"
      class="btn btn_danger"
      @click.prevent="callFuncDelete"
    >
      Delete
    </button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
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
  methods: {
    callFuncDelete() {
      this.$emit("deleteItem", this.id);
    },
  },
};
</script>
