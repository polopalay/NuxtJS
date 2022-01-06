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
import axios from "axios";

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
        axios
          .post(
            "https://nuxt-learning-english-2bb5d-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json",
            deckData
          )
          .then((data) => {
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        const deckId = deckData.id;
        delete deckData.id;

        axios
          .put(
            `https://nuxt-learning-english-2bb5d-default-rtdb.asia-southeast1.firebasedatabase.app/decks/${deckId}.json`,
            deckData
          )
          .then((data) => {
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>
