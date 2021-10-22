import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './routes/index'
import store from './store/index'
import './assets/style/reset.scss'

Vue.use(VueRouter)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#root')
