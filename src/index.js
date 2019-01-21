import './config/api';
import XlbPlugin from 'xlb-plugin';

import StoreConfig from './config/store';
import RouterConfig from './config/router';

import App from './App';

import './assets/style/index.scss';
import './assets/style/iconfont.scss';

export default {
    // getVue(routes) {
    //     let router = RouterConfig.getRouter(routes);
    //     let store = StoreConfig.getStore();
    //
    //     return new Vue({
    //         router,
    //         render: h => h(App),
    //         store
    //     });
    // },
    getVueConfig(routes) {
        let router = RouterConfig.getRouter(routes);
        let store = StoreConfig.getStore();
        return {
            router,
            store,
            render: h => h(App),
        }
    },
    install(Vue) {
        Vue.use(StoreConfig);
        Vue.use(XlbPlugin);
    }
}
