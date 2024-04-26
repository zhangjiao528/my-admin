<template>
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link :to="item.path" v-for="item in routes" :key="item.id">
        <el-menu-item :index="item.path" @click="menuClick(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      routes: [
        {
          id: 1,
          name: '首页',
          path: '/dashboard',
          icon: 'el-icon-menu'
        },
        {
          id: 2,
          name: '客户管理',
          path: '/customerManage',
          icon: 'el-icon-document'
        },
        {
          id: 3,
          name: '位置管理',
          path: '/location',
          icon: 'el-icon-document'
        },
        {
          id: 4,
          name: '表单管理',
          path: '/formManage',
          icon: 'el-icon-document'
        },
        {
          id: 5,
          name: '表格管理',
          path: '/tableManage',
          icon: 'el-icon-document'
        },
        {
          id: 6,
          name: '自定义组件model',
          path: '/customComponent',
          icon: 'el-icon-document'
        },
        {
          id: 7,
          name: '表格树',
          path: '/tableTree',
          icon: 'el-icon-document'
        },
        {
          id: 8,
          name: '大文件上传',
          path: '/fileUpload',
          icon: 'el-icon-document'
        },
        {
          id: 9,
          name: '获取视频第一帧截图',
          path: '/videoUrl',
          icon: 'el-icon-document'
        },
        {
          id: 10,
          name: '组件递归',
          path: '/componentRecursion',
          icon: 'el-icon-document'
        },
        {
          id: 11,
          name: '合并单元格',
          path: '/mergeCells',
          icon: 'el-icon-document'
        },
        {
          id: 12,
          name: '左侧树管理',
          path: '/leftTree',
          icon: 'el-icon-document'
        },
        {
          id: 13,
          name: 'gis地图',
          path: '/bimGis',
          icon: 'el-icon-document'
        }
      ]
    }
  },
  methods: {
    menuClick(data) {
      console.log(data)
    }
  }
}
</script>