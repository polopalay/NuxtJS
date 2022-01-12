export default function (context) {
  // if (process.client) {}:check xem đây là lần chạy 1 <=> chạy ở server, hay lần 2 <=> chạy ở client
  context.store.dispatch("initAuth", context.req); //Check với lần đầu tiên nó sẽ chạy ở trên server => k check localStorage. Mà chỉ check nếu nó là client
}
