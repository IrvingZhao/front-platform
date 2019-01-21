import Vue from 'vue';

const getDicByType = (typeKey) => {
    return Vue.http.get("/api/base/dic/" + typeKey);
};

let store = {
    namespaced: true,
    state: {},
    actions: {
        loadDicItem(context, dicType) {
            getDicByType(dicType).then(({body}) => {
                const {code, msg, data} = body;
                if ("000000" === code) {
                    context.commit("updateDic", {dicType, data});
                }
            })
        }
    },
    mutations: {
        updateDic(state, {dicType, data}) {
            if (!state[dicType]) {
                Vue.set(state, dicType, {});
            }
            let dicMap = {};
            data.forEach((item) => {
                dicMap[item.key] = item.value;
            });
            Vue.set(state[dicType], "list", data);
            Vue.set(state[dicType], "map", dicMap);
        }
    }
};
let operator = (store) => {
    return {
        reloadDicItem(dicType) {
            store.dispatch("dic/loadDicItem", dicType);
        },
        getDicItemMap(dicType) {
            if (!store.state.dic[dicType]) {
                store.dispatch("dic/loadDicItem", dicType);
            }
            return store.state.dic[dicType].map;
        },
        getDicItemArray(dicType) {
            if (!store.state.dic[dicType]) {
                store.dispatch("dic/loadDicItem", dicType);
            }
            return store.state.dic[dicType].list;
        }
    }
};

export default {
    store, operator, name: "dic"
}