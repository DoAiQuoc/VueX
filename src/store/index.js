import Vue from "vue";
import Vuex from "vuex";
import { products } from "./modules/product.module";
import { categories } from "./modules/category.module";
import { companies } from "./modules/company.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    categories,
    companies,
  },
  // plugins: [
  //   createPersistedState({
  //     paths: ['auth.user'],
  //     key: 'aeonmall_ls',
  //   }),
  // ],
});

export default store;
