<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          <!-- @click.prevent để tránh bị nhảy khi mở modal -->
          Create a Deck
        </button>
      </div>
      <ul class="desks-list">
        <li>
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80"
                alt="Thumbnail card"
              />
              <div class="card-body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80"
                alt="Thumbnail card"
              />
              <div class="card-body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80"
                alt="Thumbnail card"
              />
              <div class="card-body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <!-- <input class="form_controler" type="text" id="text" v-model="deckID" placeholder="Please enter deckID">
            <button class="btn btn-success" @click="showDeck">Go to Deck</button> -->
    </div>

    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h2>Create a new Deck</h2>
        <form action="">
          <div class="from_group">
            <label for="">Name:</label>
            <input
              class="form_control"
              type="text"
              placeholder="Please enter name deck"
            />
          </div>
          <div class="from_group">
            <label for="">Description:</label>
            <textarea
              class="form_control"
              placeholder="Please enter description"
            ></textarea>
          </div>
          <div class="from_group">
            <label for="">Thumbnail:</label>
            <input type="file" />
            <div class="preview"></div>
          </div>
          <div class="from_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close
            </button>
            <button class="btn btn_success ml_3" @click.prevent="createDeck">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       deckID: "1",
  //     };
  //   },
  //   methods: {
  //     showDeck() {
  //       // this.$router.push('/decks/' + this.deckID)
  //       this.$router.push(`decks/${this.deckID}`);
  //     },
  //   },
  methods: {
    openModal() {
      // console.log("open modal");
      this.$modal.open({ name: "CreateDeckModal" });
    },

    closeModal() {
      console.log("close modal");
      this.$modal.close({ name: "CreateDeckModal" });
    },
  },
};
</script>

<style lang="scss">
.desks-list {
  .deck {
    display: block;
  }
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: auto;
    }
  }
}

.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>