<template>
  <!-- logic lên để trong page chứ k lên viết trong các component. Bộ quy tắc sẽ giúp tường minh code -->
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
        <deck-list
          v-for="deck in decks"
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
          @deleteItem="onDeleteItem"
        />
      </ul>
      <!-- <input class="form_controler" type="text" id="text" v-model="deckID" placeholder="Please enter deckID">
            <button class="btn btn-success" @click="showDeck">Go to Deck</button> -->
    </div>
  </div>
</template>

<script>
import DeckList from "@/components/Decks/DeckList.vue";
export default {
  middleware: "auth",
  head: {
    title: "Own Decks | Learning Languages By Flash Card Online",
  },
  components: {
    DeckList,
  },
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
  // fetch(context) {
  //   console.log("asyncData is excuted!");

  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         decks: [
  //           {
  //             _id: 1,
  //             name: "Learn Enlish",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //             thumbnail:
  //               "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
  //           },
  //           {
  //             _id: 2,
  //             name: "Learn Chinese",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //             thumbnail:
  //               "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
  //           },
  //           {
  //             _id: 3,
  //             name: "Learn Japanese",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //             thumbnail:
  //               "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
  //           },
  //         ],
  //       });
  //     }, 1500);
  //     // reject(new Error());
  //   })
  //     .then((data) => {
  //       // console.log(data, "data");

  //       // -, Nếu sử dung asyncData thì data (VD: decks: []) được định nghĩa trong hàm sẽ gọi được bằng cú pháp this.decks => sử dụng asyncData nó sẽ set luôn data = decks.
  //       // Nhưng vs fetch nó sẽ k set đc
  //       // return data; // Dùng asyncData nó sẽ tự convert dc;
  //       context.store.dispatch("setDecks", data.decks); //nếu sd hàm fetch sẽ sử dụng th này để add nó vào vuex
  //     })
  //     .catch((e) => {
  //       // console.log(e);
  //       context.error(e);
  //     });
  // },

  // created() {
  //   this.$store.dispatch("setDecks", this.decks);
  //   console.log(this.$store.getters.decks, "this.$store.getters.decks");
  // },// Sd asyncData
  computed: {
    //tạo ra biến để decks lấy trong state bằng getter
    decks() {
      return this.$store.getters.decks;
    },
  },

  methods: {
    onDeleteItem(id) {
      this.$store
        .dispatch("deleteDeck", id)
        .then(() => this.$router.push("/decks"));
    },

    openModal() {
      // console.log("open modal");
      this.$modal.open({ name: "DeckFormModal" });
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
