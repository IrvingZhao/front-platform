import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/packages/theme-chalk/src/index.scss';

import './config/api';
import XlbPlugin from 'xlb-plugin';

import StoreConfig from './config/store';
import RouterConfig from './config/router';

import App from './App';

import './assets/style/index.scss';
import './assets/style/iconfont.scss';

Vue.use(ElementUI);
Vue.use(StoreConfig);
Vue.use(XlbPlugin);

export default {
    getVue(routes) {
        let router = RouterConfig.getRouter(routes);
        let store = StoreConfig.getStore();

        return new Vue({
            router,
            render: h => h(App),
            store
        });
    }

}
