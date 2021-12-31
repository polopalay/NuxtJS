import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        //call api và set trược tiếp data vào đây
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            //   vuexContext.commit('setDecks', {
            //     _id: 1,
            //     name: `Learn Enlish by deck ${context.params.id}`,
            //     description:
            //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            //     thumbnail:
            //       "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
            //   },)
            resolve({
              decks: [
                {
                  _id: 1,
                  name: "Learn Enlish",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  thumbnail:
                    "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
                },
                {
                  _id: 2,
                  name: "Learn Chinese",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  thumbnail:
                    "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
                },
                {
                  _id: 3,
                  name: "Learn Japanese",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  thumbnail:
                    "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
                },
              ],
            }); // Vì nó là hàm Promise lên bắt buộc có resolve
          }, 1500);
        }).then((data) => {
          vuexContext.commit("setDecks", data.decks);
        });
      },

      setDecks(vuexContext, decks) {
        vuexContext.commit("setDecks", decks);
      },
    },
    getters: {
      decks(state) {
        return state.decks;
      },
    },
  });
};

export default createStore;
