export default function ({ $axios, store, redirect }, inject) {
  $axios.onRequest((config) => {
    // const { token } = store.state
    // if (token) {
    //   config.headers.common.Authorization = `Bearer ${token}`
    // }
  });

  // const token = store.getters["getToken"];
  // console.log(token, "token");
  // if (token) {
  //   $axios.setToken(`${token}`, "Bearer", ["post", "put", "delete"]);
  // }

  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });

  // Inject to context as $api
  inject("api", api);
}
