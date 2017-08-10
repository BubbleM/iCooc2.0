// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import index from './components/index'
import friendList from './components/friendList'
import message from './components/message'
import my from './components/my'

Vue.use(VueRouter) // 安装路由模块
Vue.use(VueResource) // 全局注册

const routes = [
  {path: '/', redirect: '/index'}, // 默认项目启动自动跳转到index页面
  {path: '/index', component: index},
  {path: '/friendList', component: friendList},
  {path: '/message', component: message},
  {path: '/my', component: my}
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
