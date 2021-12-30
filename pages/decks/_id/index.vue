<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: {{ $route.params.id }} learn english by sky alber</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create card
          </button>
        </div>
        <hr class="divide" />
        <div class="r">
          <div class="c_3" v-for="card in cards" :key="card._id">
            <div class="cards">
              <div class="card">
                <div class="front-card">
                  <img :src="card.picture" />
                </div>
                <div class="back-card">{{ card.keyword }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <v-modal name="CreateCardModal">
      <div class="modal_body">
        <h2>Create a new Card</h2>
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
            <button class="btn btn_success ml_3" @click.prevent="openModal">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    /* async */
    //context
    // console.log(context)

    // nhớ phải return trả về
    return /^[0-9]$/.test(params.id); //(^) từ đầu. ($) đến cuối. [0-9] chỉ nhập số. {9,12} nhập từ 9-12 ký tự
    // return /^[0-9]{9,12}$/.test(params.id)
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            "https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg",
          keyword: "Road",
        },
        {
          _id: 2,
          picture:
            "https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg",
          keyword: "Road",
        },
        {
          _id: 3,
          picture:
            "https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg",
          keyword: "Road",
        },
        {
          _id: 4,
          picture:
            "https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg",
          keyword: "Road",
        },
      ],
    };
  },
  methods: {
    openModal() {
      // console.log("open modal");
      this.$modal.open({ name: "CreateCardModal" });
    },

    closeModal() {
      console.log("close modal");
      this.$modal.close({ name: "CreateCardModal" });
    },
  },
};
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 2rem 0;
  }
}

.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>