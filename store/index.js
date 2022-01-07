import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      addDecks(state, newDecks) {
        state.decks.push(newDecks);
      },
      editDecks(state, editDecks) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === editDecks.id
        );

        state.decks[deckIndex] = editDecks;
      },
      setDecks(state, decks) {
        state.decks = decks;
      },
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   //call api và set trược tiếp data vào đây
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       //   vuexContext.commit('setDecks', {
      //       //     _id: 1,
      //       //     name: `Learn Enlish by deck ${context.params.id}`,
      //       //     description:
      //       //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      //       //     thumbnail:
      //       //       "https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80",
      //       //   },)
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
      //       }); // Vì nó là hàm Promise lên bắt buộc có resolve
      //     }, 1500);
      //   }).then((data) => {
      //     vuexContext.commit("setDecks", data.decks);
      //   });
      // },

      nuxtServerInit(vuexContext, context) {
        console.log(process.env.baseApiUrl, "process.env.baseApiUrl");

        return context.app.$axios
          .$get(process.env.baseApiUrl + "/decks.json")
          .then((data) => {
            const decksArr = [];
            for (const key in data) {
              decksArr.push({ ...data[key], id: key });

              vuexContext.commit("setDecks", decksArr);
            }
          })
          .catch((e) => context.error(e));
      },

      addDeck(vuexContext, deckData) {
        return this.$axios
          .$post(process.env.baseApiUrl + "/decks.json", deckData)
          .then((data) => {
            vuexContext.commit("addDecks", {
              ...deckData,
              id: data.name,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      },

      editDeck(vuexContext, deckData) {
        const deckId = deckData.id;
        delete deckData.id;

        return this.$axios
          .$put(process.env.baseApiUrl + `/decks/${deckId}.json`, deckData)
          .then((data) => {
            vuexContext.commit("editDecks", {
              ...data,
              id: deckId,
            });
          })
          .catch((e) => {
            console.log(e);
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
