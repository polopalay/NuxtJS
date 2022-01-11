export default function (context) {
  console.log("middle");
  if (process.client) context.store.dispatch("initAuth"); //Check với lần đầu tiên nó sẽ chạy ở trên server => k check localStorage. Mà chỉ check nếu nó là client
}
