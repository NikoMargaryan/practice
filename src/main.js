import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'
import router from './router'
import store from './store'
import SimplePlugin from './plugins/simplePlugin'
import VueRouter from 'vue-router'
// import router from './router/index'




import '@/assets/Style/main.scss';
import {marked} from "marked";



Vue.use(VueRouter)
Vue.filter('marked', marked)
Vue.config.productionTip = false
Vue.use(SimplePlugin)


new Vue({
  router,
  store,
  render: function (h) { return h(Test) },
  el:'#test'
})
    // .$mount('')
// import {BootstrapVue, IconsPlugin } from "bootstrap-vue";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'

// Vue.use(SimplePlugin)
// Vue.use(BootstrapVue)
//     Vue.use(IconsPlugin)



