//---------------------bootstrap---------------------------
import "./scss/customBootStrap.scss"; //优先引入bootstrap入口文件，使其可以被后续自定义样式与自定义主题覆盖
import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import * as Pinia from 'pinia';
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  };
}
// #endif