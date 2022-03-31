import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views'

//1、安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: '首页',
        component: () => import('../views/dashboard')
      },
      {
        path: 'customerManage',
        name: '客户管理',
        component: () => import('../views/customerManage')
      },
      {
        path: 'location',
        name: '位置管理',
        component: () => import('../views/location')
      },
      {
        path: 'formManage',
        name: '表单管理',
        component: () => import('../views/formManage')
      },
      {
        path: 'tableManage',
        name: '表格管理',
        component: () => import('../views/tableManage')
      },
      {
        path: 'customComponent',
        name: '自定义组件model',
        component: () => import('../views/customComponent')
      },
      {
        path: 'tableTree',
        name: '表格树',
        component: () => import('../views/tableTree')
      },
      {
        path: 'fileUpload',
        name: '大文件上传',
        component: () => import('../views/fileUpload')
      }
    ]
  }
]
//2、创建路由示例
const router = new VueRouter({
  routes
})

export default router