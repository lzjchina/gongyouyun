// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import VueProgressBar from 'vue-progressbar'
Vue.use(VueSocketio, socketio('192.168.1.131:8000'))// 与服务端链接
// Vue.use(VueSocketio, socketio('192.168.199.121:10008'))// 与服务端链接

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}
Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
