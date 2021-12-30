<template>
  <div modal="true">
    <div>
      <div :data-modal="name" v-if="visible" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal_mask"
        >
          <div class="modal_body">
            <slot :payload="payload" />/*khi người dùng muốn ng dùng có thể
            custom dc giao diện bên trong modals này*/
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VModal from "./handle";

export default {
  props: {
    //visible: //mặc định là true hoặc false thể hiện ẩn hiện modal cho ng dùng. Nhưng vs một pugins thì k lên để mặc định vào props cho ng dùng
    name: {
      type: String,
      required: true,
      default: "",
    },
  },

  data() {
    return {
      payload: null,
      visible: false,
    };
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on("open", (params) => {
      console.log(params.name, "params.name");
      // console.log(this.name, "this.name");
      if (this.name === params.name) {
        this.open(params);
      }
    });

    //Close event
    VModal.EventBus.$on("close", (params) => {
      if (this.name === params.name) {
        this.close(params);
      }
    });
    // this.$modal.open({ name: "modal-1" });
  },
  methods: {
    close(params) {
      this.visible = false;
    },
    open(params) {
      // console.log("open");
      this.visible = true;
      //TO DO SOMETHING
    },
  },
};
</script>


<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
  // &__body {
  //   background: #fff;
  // }
}
</style>