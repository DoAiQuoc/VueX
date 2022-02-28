import { GET_LIST_COMPANY } from "@/constants/constants";
import companyService from "@/services/company.service";

export const companies = {
  namespaced: true,
  state: {
    companyList: [],
  },
  getters: {
    getCompanyMap: (state) =>
      state.companyList.reduce((map, company) => {
        map[company.id] = company;
        return map;
      }, {}),
    getCompanyLít: (state) => state.companyList,
  },
  mutations: {
    [GET_LIST_COMPANY](state, { companies }) {
      state.companyList = companies;
    },
  },
  actions: {
    [GET_LIST_COMPANY]({ commit }) {
      return companyService.getListCompany().then((res) => {
        if (res) {
          commit(GET_LIST_COMPANY, {
            companies: res,
          });
        }
      });
    },
  },
};
