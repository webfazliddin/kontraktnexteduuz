import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import VueYoutube from "vue-youtube";
import axios from "axios";
import Scrollspy from "vue2-scrollspy";
var VueScrollTo = require("vue-scrollto");
import i18n from "./lang/index.js";
Vue.config.productionTip = false;
import "vue-select/dist/vue-select.css";
import "@/assets/scss/style.scss";
import "@/assets/scss/new_design/style.scss";
import "@/assets/scss/new_design/responsive.scss";
import "@/assets/css/materialdesignicons.min.css";
import "vue2-datepicker/index.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import VueCurrencyFilter from "vue-currency-filter";
import VueMask from "v-mask";
import { VueMaskDirective } from "v-mask";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import ApiService from "@/services/api.service";
Vue.component("VueSlider", VueSlider);
Vue.use(VueYoutube);
Vue.directive("mask", VueMaskDirective);
Vue.use(VueMask);
Vue.use(Scrollspy);
Vue.use(VueScrollTo);
Vue.use(VueToast, {
  position: "top",
});
ApiService.mount401Interceptor();
// Install BootstrapVue
Vue.use(BootstrapVue);
axios.defaults.baseURL = "https://kontraktnext-api.edu.uz/";
//  axios.defaults.baseURL = "http://mymvb-api.apptest.uz/";
// axios.defaults.baseURL = "https://kontrakt-api.edu.uz/";

if (window.location.href.indexOf("https://kontrakt.edu.uz") > -1) {
  axios.defaults.baseURL = "https://kontrakt-api.edu.uz/";
}
if (window.location.href.indexOf("https://kontrakttest.edu.uz/") > -1) {
  axios.defaults.baseURL = "https://kontrakttest-api.edu.uz/";
}
if (window.location.href.indexOf("http://kontrakttest.edu.uz/") > -1) {
  axios.defaults.baseURL = "http://kontrakt-api.edu.uz/";
}
if (window.location.href.indexOf("http://kontraktnext.edu.uz/") > -1) {
  axios.defaults.baseURL = "http://kontraktnext-api.edu.uz/";
}
if (window.location.href.indexOf("https://kontraktnext.edu.uz/") > -1) {
  axios.defaults.baseURL = "https://kontraktnext-api.edu.uz/";
}
if (window.location.href.indexOf("http://mymyb-prod.apptest.uz/") > -1) {
  axios.defaults.baseURL = "http://mymvb-api.apptest.uz/";
}
if (window.location.href.indexOf("https://mymyb-prod.apptest.uz/") > -1) {
  axios.defaults.baseURL = "https://mymvb-api.apptest.uz/";
}
Vue.use(VueCurrencyFilter, {
  symbol: "c",
  thousandsSeparator: " ",
  fractionCount: 0,
  fractionSeparator: ",",
  symbolPosition: "back",
  symbolSpacing: true,
});
localStorage.getItem("locale") === null
  ? localStorage.setItem("locale", "uz_latn")
  : "";
axios.interceptors.request.use((request) => requestInterceptor(request));
const requestInterceptor = (request) => {
  request.withCredentials = true;
  return request;
};

router.beforeEach((to, from, next) => {
  const newTitle = to.meta.title || 'EDU Kontrakt'; // Use the route's meta title or a default if not set
  document.title = newTitle;
  next();
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
