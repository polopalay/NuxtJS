<template>
  <!-- Với một modal sử đụng dể vừa làm modal create vừa làm model edit => lên hứng là một object thay vì hứng từng prop như component -->
  <div>
    <form @submit.prevent="onSave">
      <div class="from_group">
        <label for="">Name:</label>
        <input
          v-model="editedDeck.name"
          class="form_control"
          type="text"
          placeholder="Please enter name deck"
        />
      </div>
      <div class="from_group">
        <label for="">Description:</label>
        <textarea
          v-model="editedDeck.description"
          class="form_control"
          placeholder="Please enter description"
        ></textarea>
      </div>
      <div class="from_group">
        <label for="">Thumbnail:</label>
        <input
          v-model="editedDeck.thumbnail"
          class="form_control"
          type="text"
          placeholder="https://example.com/foo.png"
        />
        <div class="preview"></div>
      </div>
      <div class="from_group d_flex justify_content_end">
        <button class="btn btn_danger" @click.prevent="closeModal">
          Close
        </button>
        <button class="btn btn_success ml_3" type="submit">
          <!-- phải có type="submit" thì nó mới có thể nhận sự kiện @submit.prevent -->
          {{ editedDeck && editedDeck.id ? "Edit" : "Create" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      //   require: false,
      default: () => ({
        name: "",
        description: "",
        thumbnail: "",
      }),
    },
  },
  data() {
    return {
      editedDeck: this.deck //Tạo ra biến trung gian, vì có thể biến đó k thể ghi đè trên vùng nhớ đó => cần mọt biến trung gian để giải quyết vấn đề này
        ? { ...this.deck }
        : {
            name: "",
            description: "",
            thumbnail: "",
          },
    };
  },
  methods: {
    closeModal() {
      console.log("close modal");
      this.$modal.close({ name: "DeckFormModal" });
    },
    onSave() {
      this.$emit("submit", this.editedDeck);
    },
  },
};
</script>
