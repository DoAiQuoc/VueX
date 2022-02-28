import { GET_LIST_PRODUCT } from "@/constants/constants";
import productsService from "@/services/product.service";

export const products = {
  namespaced: true,
  state: {
    productList: [],
    pagination: {},
    filter: {
      _page: 1,
      _size: 5,
    },
  },
  getters: {
    getListProduct: (state) => state.productList,
    getPagination: (state) => state.pagination,
    getFilter: (state) => state.filter,
  },
  mutations: {
    [GET_LIST_PRODUCT](state, { pagination, products }) {
      state.productList = products;
      state.pagination = pagination;
    },
  },
  actions: {
    [GET_LIST_PRODUCT]({ commit }, { filter }) {
      return productsService.getListProduct(filter).then((res) => {
        if (res && res.data) {
          commit(GET_LIST_PRODUCT, {
            pagination: res.pagination,
            products: res.data,
          });
        }
      });
    },
  },
};
