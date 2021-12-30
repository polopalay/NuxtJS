<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: #{{ $route.params.id }}: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create card
          </button>
        </div>
        <hr class="divide" />
        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
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
import CardList from "@/components/Cards/CardList.vue";

export default {
  validate({ params }) {
    /* async */
    //context
    // console.log(context)

    // nhớ phải return trả về
    return /^[0-9]$/.test(params.id); //(^) từ đầu. ($) đến cuối. [0-9] chỉ nhập số. {9,12} nhập từ 9-12 ký tự
    // return /^[0-9]{9,12}$/.test(params.id)
  },
  components: {
    CardList,
  },

  asyncData(context) {
    // -, Không thể viết this ở trong asyncData vì: $this là giá trị của 1 dom. Mà async chạy trước khi dom dc tạo => k thể sử dụng $this trong hàm asyncData.
    // Thay vì đó ta sẽ sử dụng hàm context trong hàm asyncData để lấy parameter về, thay vì lấy từ roter ở client. Tức là với lần đầu mà server render nó vẫn lấy dc parameter

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          deck: {
            _id: 1,
            name: `Learn Enlish by deck ${context.params.id}`,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            thumbnail:
              "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
          },
        });
      }, 1500);
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
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