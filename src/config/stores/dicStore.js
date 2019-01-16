import Vue from 'vue';

const getDicByType = (typeKey) => {
    return Vue.http.get("/api/base/dic/" + typeKey);
};

let store = {
    namespaced: true,
    state: {},
    actions: {
        loadDicItem(context, dicType) {
            if (!context.state[dicType]) {
                getDicByType(dicType).then(({body}) => {
                    const {code, msg, data} = body;
                    if ("000000" === code) {
                        context.commit("updateDic", {dicType, data});
                    }
                })
            }
        }
    },
    mutations: {
        updateDic(state, {dicType, data}) {
            Vue.set(state, dicType, data);
        }
    }
};
let operator = (store) => {
    return {
        loadDicItem(dicType) {
            store.dispatch("dic/loadDicItem", dicType);
        },
        getDicItem(dicType) {
            if(store) {
                store.dispatch("dic/loadDicItem", dicType);
                return store.state.dic[dicType];
            }else{
                return {}
            }
        }
    }
};

export default {
    store, operator, name: "dic"
}