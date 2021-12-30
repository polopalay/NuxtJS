import Layout from "./layout"

const VModal = {
    install(Vue) {
        this.EventBus = new Vue()

        Vue.component('v-modal', Layout)

        Vue.prototype.$modal = {
            open(params) {
                // console.log(params ,"config open modal");
                VModal.EventBus.$emit('open', params)//params của EventBus chỉ là 1, nếu muốn dùng nhiều thì sử dụng object
            },
            close(params) {
                console.log(params, 'close modal')
                VModal.EventBus.$emit('close', params)
            }
        }
    }
}

export default VModal