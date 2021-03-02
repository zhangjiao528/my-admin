<template>
  <div class="g-layout">
    <!-- 侧边栏 -->
    <div class="g-sider">
      <sidebar class="sidebar-container"></sidebar>
    </div>
    <!-- 右侧 -->
    <div class="g-main">
      <div class="g-top">
        <navbar></navbar>
      </div>
      <div class="g-main-box">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '@/components/content/layout/Sidebar.vue'
import AppMain from '@/components/content/layout/AppMain.vue'
import Navbar from '@/components/content/layout/Navbar.vue'

export default {
  name: 'Index',
  components: {
    Sidebar,
    AppMain,
    Navbar
  }
}
</script>
<style scoped lang="less">
.g-layout{
  position: relative;
  height: 100%;
  width: 100%;

  .g-sider{
    transition: width 0.28s;
    width: 220px !important;
    border: 1px solid red;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    .sidebar-container{
      height: 100%;
    }
  }
  .g-main{
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 220px;
    position: relative;
    .g-top{
      height: 50px;
      border: 1px solid red;
    }
    .g-main-box{
      width: 100%;
      min-height: 800px;
      overflow: hidden;
    }
  }
}

</style>