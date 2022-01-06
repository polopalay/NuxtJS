<template>
  <!-- để có thể chuyền giá trị cho slot. Thì khi muốn gửi gtri từ slot đấy cần khai báo thêm v-slot="my-key" trong thẻ cha để có thể hứng đc gtri từ slot đó -->
  <div>
    <default-header />
    <nuxt />
    <!-- Modal -->
    <v-modal v-slot="payload" name="DeckFormModal">
      <div class="modal_body">
        <!-- {{ payload }} -->
        <h2>
          {{ payload && payload.payload ? "Edit a Deck" : "Create a new Deck" }}
        </h2>
        <deck-from :deck="payload.payload" @submit="onSubmit" />
      </div>
    </v-modal>
    <default-footer />
  </div>
</template>

<script>
import DefaultHeader from "../components/Header/DefaultHeader";
import DefaultFooter from "@/components/Footer/DefaultFooter";
import DeckFrom from "@/components/Decks/DeckFrom.vue";

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    DeckFrom,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store
          .dispatch("addDeck", deckData)
          .then(() => this.$modal.close({ name: "DeckFormModal" }));
      } else {
        this.$store.dispatch("editDeck", deckData).then(() => {
          this.$modal.close({ name: "DeckFormModal" });
          this.$router.push("/decks");
        });
      }
    },
  },
};
</script>
