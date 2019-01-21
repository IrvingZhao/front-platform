import Vue from 'vue';
import Platform from "../src/index";
import ElementUI from 'element-ui';
import 'element-ui/packages/theme-chalk/src/index.scss';

Vue.use(ElementUI);
Vue.use(Platform);

let vueConfig = Platform.getVueConfig([]);

new Vue(vueConfig).$mount("#app");
