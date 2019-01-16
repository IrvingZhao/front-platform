<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "app",
        components: {
            // MainPage
        },
        data() {
            // console.info(this.$store)
            return {
                // test: this.$store.state.test
            }
        },
        created() {
            //TODO  create时，进行数据请求，computed 进行数据读取计算，用于 字典项，参数等公共数据
            //TODO 检查用户状态，正常，则不做处理，异常，跳转登录页
        },
        computed: {
            // test() {
            //   return this.$store.state.test;
            // }
        },
        mounted() {
            console.info("mounted");
            // this.$store.dispatch("initTest");
        }

    }
</script>

<style scoped>

</style>
