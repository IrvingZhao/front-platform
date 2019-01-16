import Vue from 'vue';
import Vuex from 'vuex';

import DicStore from './stores/dicStore';
import BreadStore from './stores/breadStore';

Vue.use(Vuex);

let stores = [
    DicStore, BreadStore
];

let store;

const getStore = () => {
    if (!store) {
        let storeModules = {};
        stores.forEach((item) => {
            if (item.store) {
                storeModules[item.name] = item.store;
            }
        });
        store = new Vuex.Store({
            strict: process.env.NODE_ENV !== 'production',
            modules: storeModules
        });
    }
    return store;
};

export default {
    getStore,
    install(Vue) {
        stores.forEach((item) => {
            if (item.operator) {
                let operator = item.operator(getStore());
                Vue.prototype["$" + item.name] = operator;
                Vue["$" + item.name] = operator;
            }
        });
    }
};
