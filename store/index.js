import Vuex from "vuex";
import Cookies from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
      token: null,
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
      deleteDeck(state, deleteDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === deleteDeck.id
        );

        state.decks.split(deckIndex, 1);
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
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

      deleteDeck(vuexContext, deckId) {
        return this.$axios
          .$delete(process.env.baseApiUrl + `/decks/${deckId}.json`)
          .then((data) => {
            vuexContext
              .commit("deleteDeck", {
                ...data,
                id: deckId,
              })
              .catch((e) => {
                console.log(e);
              });
          });
      },

      authenticateUser(vuexContext, credentials) {
        return new Promise((resolve, reject) => {
          // check login or register
          let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`;

          if (!credentials.isLogin) {
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`;
          }

          // Call api to firebase
          this.$axios
            .$post(authUrlApi, {
              email: credentials.email,
              password: credentials.password,
              returnSecureToken: true,
            })
            .then((result) => {
              vuexContext.commit("setToken", result.idToken);

              localStorage.setItem("token", result.idToken);
              localStorage.setItem(
                "tokenExpiration",
                new Date().getTime() + result.expiresIn * 1000
              ); //Set với lần thứ 2, khi mà nó chạy ở client

              //Sử lý với lần thứ 1, khi mà nó chạy ở server gửi về
              Cookies.set("token", result.idToken);
              Cookies.set(
                "tokenExpiration",
                new Date().getTime() + result.expiresIn * 1000
              );

              vuexContext.dispatch("setLogoutTimer", result.expiresIn * 1000);
              resolve({ success: true });
            })
            .catch((error) => {
              reject(error.response);
            });
        });
      },

      setDecks(vuexContext, decks) {
        vuexContext.commit("setDecks", decks);
      },

      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit("clearToken");
        }, duration);
      },

      initAuth(vuexContext, req) {
        let token, tokenExpiration;

        if (req && req.headers.cookie) {
          //Lần thứ 1: Handle first time go to page
          if (!req.headers.cookie) return false;
          const tokenKey = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("token="));
          const tokenExpirationKey = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("tokenExpiration="));
          if (!tokenKey || !tokenExpirationKey) return false;
          token = tokenKey.split("=")[1];
          tokenExpiration = tokenExpirationKey.split("=")[1];
        } else {
          token = localStorage.getItem("token");
          tokenExpiration = localStorage.getItem("tokenExpiration");

          if (new Date().getTime() > tokenExpiration || !token) {
            return false;
          }
        }

        vuexContext.dispatch(
          "setLogoutTimer",
          tokenExpiration - new Date().getTime()
        );
        vuexContext.commit("setToken", token);
      },
    },
    getters: {
      decks(state) {
        return state.decks;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
    },
  });
};

export default createStore;
