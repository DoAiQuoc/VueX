import http from "@/plugins/axios";

class ProductsService {
  getListProduct(params) {
    return http
      .get("products", {
        params: {
          ...params,
        },
      })
      .then((res) => res)
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

const productsService = new ProductsService();

export default productsService;
