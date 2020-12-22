import Vue from 'vue';
import VueRouter from 'vue-router';

//1、安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views'),
    children: [
      {
        path: 'customerManage',
        component: () => import('../views/customerManage')
      }
    ]
  }
]
//2、创建路由示例
const router = new VueRouter({
  routes
})

export default router