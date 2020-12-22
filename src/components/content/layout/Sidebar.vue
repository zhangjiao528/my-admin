<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
    </el-menu>
</template>