import createApi from "~/api/api.js";

export default (ctx, inject) => {
  inject("apis", createApi(ctx.$axios)); //cài các api vào trong context đễ sử dụng trong mọi vòng đời của component => Dễ thấy ở trên ta đã lấy hết mọi thứ trong api chung đã tạo để đưa vào trong biến $api của context API. Thế là từ giờ, ta chỉ cần sử dụng biến $api là có thể truy cập vào bên trong lớp api
};
