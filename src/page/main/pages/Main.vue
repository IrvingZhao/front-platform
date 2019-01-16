<template>
    <el-container class="pj-main">
        <el-aside class="aside" :class="{'layout-hide-text': isCollapse}" :width="isCollapse?'64px':'135px'">
            <div class="aside-title">
                <img v-if="!isCollapse" src="../asset/logo-all.png" class="logo-title big-logo">
                <img v-else="!isCollapse" src="../asset/logo-small.png" class="logo-title small-logo">
            </div>
            <el-menu class="aside-menu" v-mock-scroll="" :collapse="isCollapse"
                     :collapse-transition="false" @open="menuOpen" @close="menuClose" @select="menuSelect">
                <menu-item :menu-data="item" v-for="(item,index) in menuList" :key="index"></menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="main-header" height="54px">
                <div class="menu-collapse">
                    <span class="el-icon-my-menu" @click="toggleMenu"></span>
                </div>
                <div class="bread-nav">
                    <template v-for="(item,index) in breadList">
                        <span class="bread-split" v-if="index!==0">/</span>
                        <span :class="{'bread-item':true,'point':item.path||item.click}"
                              @click="breadClick(item,index)">{{item.name}}</span>
                    </template>
                </div>
                <div class="head-split"></div>
                <div class="user-info">
                    <div class="company-name">单位名称</div>
                    <div class="user-icon">
                        <img/>
                    </div>
                    <div class="real-name">用户名</div>
                    <div class="split"></div>
                    <div class="exit">退出</div>
                </div>
            </el-header>
            <el-main class="page-content-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

    import MenuItem from './MenuItem';
    import Service from '../config/api';

    export default {
        data() {
            return {
                isCollapse: false,//是否折叠
                menuList: [],
                scrollBarParam: {
                    createElements: false
                },
            }
        },
        created() {
            Service.getUserMenu().then(({body}) => {
                const {code, data, msg} = body;
                if ("000000" === code) {
                    this.menuList = this.$util.generateTree(data);
                }
            });
            this.$bread.set([
                {
                    name: "首页"
                }
            ]);
        },
        components: {
            MenuItem
        },
        computed: {
            breadList() {
                return this.$store.state.bread.breadNav;
            },
        },
        methods: {
            breadClick(item, index) {
                if (item.path) {
                    this.$router.push(item.path);
                } else if (item.click) {
                    this.item.click();
                    this.$bread.splice(index + 1);
                }
            },
            toggleMenu() {
                this.isCollapse = !this.isCollapse;
            },
            menuSelect(menuIndex, menuIndexTree, component) {
                if (component.route) {
                    this.$router.push({name: component.route});
                }
            },
            menuOpen() {
                if (this.scrollBarParam.instance) {
                    setTimeout(() => {
                        this.scrollBarParam.instance.update();
                    }, 400);//延迟时间大于页面展开时间
                }
            },
            menuClose() {
                if (this.scrollBarParam.instance) {
                    setTimeout(() => {
                        this.scrollBarParam.instance.update();
                    }, 400);
                }
            }
        },
    }
</script>

<style lang="less" src="../css/main.less">

</style>
