<template>
  <sub-menu-mock v-if="menuData.children" :index="menuData.id">
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

  let me;

  export default {
    name: 'MenuItem',
    components: {MenuItemMock, SubMenuMock},
    props: ['menuData'],
    created() {
      me = this;
      this.$set(this.menuData, "active", false);
    },
    directives: {
      "actives": {
        // inserted(el, binding) {
        //     let data = binding.value;
        //     // me.$set(data, "active", false);
        // },
        update(el, binding) {
          let data = binding.value;
          if (data.active) {
            el.style.height = el.scrollHeight + "px";
          } else {
            el.style.height = "0px";
          }
        }
      }
    },
    methods: {
      menuItemClick() {
        if (this.menuData.path) {
          this.$router.push(this.menuData.path);
        }
        this.$set(this.menuData, "active", !this.menuData.active);
      }
    }
  }
</script>
