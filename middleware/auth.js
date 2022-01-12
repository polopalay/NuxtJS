export default function (context) {
  if (!context.store.getters.isAuthenticated) {
    context.redirect("/login"); //Fix nhanh thì lần đầu để load vào homepage hay trang public k check middleware
  }
}
