import Vue from "vue";
import axios from "axios";
import queryString from "query-string";

const options = {
  arrayFormat: "bracket",
};

// set up default config for http requests
const http = axios.create({
  baseURL: "http://localhost:8080/api/",
  paramsSerializer: (params) => queryString.stringify(params, options),
});

// add a request interceptor
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// add a response interceptor
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //   removeAuthenticated(); // remove authentication in local storage
      //   // Message({
      //   //   message: 'アカウントまたはパスワードが間違っています。',
      //   //   showClose: true,
      //   //   type: 'error',
      //   //   duration: 10000,
      //   // });
      //   setTimeout(() => {
      //     router.push('/login');
      //   });
    }
    // else if (error.response && error.response.status === 400 && error.response.config.url === 'api/v1/login') {
    //   removeAuthenticated(); // remove authentication in local storage
    //   Message({
    //     message: error.response.data.message,
    //     showClose: true,
    //     type: 'error',
    //     duration: 10000,
    //   });
    //
    //   setTimeout(() => {
    //     router.push('/login');
    //   });
    // }

    return Promise.reject(error);
  }
);

// add a global property
Vue.prototype.$http = http;

export default http;
