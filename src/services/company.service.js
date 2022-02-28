import http from "@/plugins/axios";

class CompanyService {
  getListCompany() {
    return http
      .get("/companies_all")
      .then((res) => res)
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

const companyService = new CompanyService();

export default companyService;
