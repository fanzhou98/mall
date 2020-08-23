import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/1.png')
});

import fastClick from 'fastclick'
fastClick.attach(document.body);

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

import toast from 'components/common/toast'
Vue.use(toast);

import 'swiper/dist/css/swiper.min.css'
//swiper,在开发时需要
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
  Vue.use(VueAwesomeSwiper)
}
//bootstrap引入
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//font-awesome引入
import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false;
//创建$bus变量
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
