const resource = "post";

export default ($axios) => ({
  all() {
    // return $axios.get(`${resource}`);
    return $axios.get(`https://localhost:44348/api/v1.0/Parameter`);
  },

  // show(id) {
  //   return $axios.get(`${resource}/${id}`);
  // },

  // create(payload) {
  //   return $axios.post(`${resource}`, payload);
  // },

  // update(id, payload) {
  //   return $axios.post(`${resource}/${id}`, payload);
  // },

  // delete(id) {
  //   return $axios.delete(`${resource}/${id}`);
  // },
});
