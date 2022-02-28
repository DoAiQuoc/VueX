import http from "@/plugins/axios";

class CategoryService {
  getListCategory() {
    return http
      .get("get-all-category")
      .then((res) => res)
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

const categoryService = new CategoryService();

export default categoryService;
