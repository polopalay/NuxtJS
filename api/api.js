import PostApi from "~/api/post";

export default ($axios) => ({
  post: PostApi($axios),
});
