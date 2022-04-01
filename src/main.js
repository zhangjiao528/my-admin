import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import uploader from 'vue-simple-uploader'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.less'


Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(uploader)




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
