import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import uploader from 'vue-simple-uploader'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.less'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'


Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(uploader)

Vue.use(ViewUI);
Vue.use(VXETable)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
