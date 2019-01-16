<template>
  <sub-menu-mock v-if="menuData.children" :index="menuData.id" :route="menuData.routerName">
    <template slot="title">
      <i class="el-icon-my-menu"></i>
      <span class="menu-title">{{menuData.name}}</span>
    </template>
    <menu-item v-for="(childMenu,index) in menuData.children" :menu-data="childMenu" :key="index"></menu-item>
  </sub-menu-mock>
  <menu-item-mock :route="menuData.routerName" :index="menuData.id" v-else>
    <i v-if="menuData.icon" :class="menuData.icon"></i>
    <span class="menu-title-text" slot="title">{{menuData.name}}</span>
  </menu-item-mock>
</template>

<script>

  import MenuItemMock from './MenuItemMock';
  import SubMenuMock from './SubMenuMock';


  export default {
    name: 'MenuItem',
    components: {MenuItemMock, SubMenuMock},
    props: ['menuData'],
  }
</script>
