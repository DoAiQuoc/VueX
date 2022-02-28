import { GET_LIST_CATEGORY } from "@/constants/constants";
import categoryService from "@/services/category.service";

export const categories = {
  namespaced: true,
  state: {
    categoryList: [],
  },
  getters: {
    getCategoryMap: (state) =>
      state.categoryList.reduce((map, category) => {
        map[category.id] = category;
        return map;
      }, {}),
    getCategoryList: (state) => state.categoryList,
  },
  mutations: {
    [GET_LIST_CATEGORY](state, { categories }) {
      state.categoryList = categories;
    },
  },
  actions: {
    [GET_LIST_CATEGORY]({ commit }) {
      return categoryService.getListCategory().then((res) => {
        if (res) {
          commit(GET_LIST_CATEGORY, {
            categories: res,
          });
        }
      });
    },
  },
};
