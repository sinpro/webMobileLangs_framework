// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './routes/router';

Vue.config.productionTip = false;

import Remjs from './assets/js/rem.js';     //引入公用js
import $ from 'jquery';
import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueWechatTitle);

import VueAwesomeSwiper from 'vue-awesome-swiper';//轮播图
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';

import FastClick from 'fastclick';
FastClick.attach(document.body);

import Cookies from 'js-cookie';
Vue.prototype.Cookies = Cookies;
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: store.getters.languages,
  messages: {
   'zh-CN': require('./assets/js/lang/zh'),  // 中文语言包
   'en-US': require('./assets/js/lang/en')  // 英文语言包
  }
})

import layer from 'vue-layer';//vue_layer
Vue.prototype.$layer = layer(Vue);
Vue.use(layer);

import {post} from "./api/globalapi"
Vue.prototype.$post=post;
import globalfn from "./api/globalfn"
Vue.prototype.$globalfn=globalfn;

import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store';

import Editor from 'wangeditor';
import 'wangeditor/release/wangEditor.css';

Vue.config.devtools = process.env.NODE_ENV === 'development';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,i18n, 
  render: h => h(App)
})
