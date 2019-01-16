import Vue from 'vue';

const getOperator = (menuKey) => {
    return Vue.http.get("/api/base/operator/" + menuKey);
};

const store = {
    namespaced: true,
    state: {},
    actions: {
        loadMenuOperator(context, menuKey) {
            getOperator(menuKey).then(({body}) => {
                const {code, msg, data} = body;
                if ("000000" === code) {
                    context.commit("updateOperators", {menuKey, operators: data});
                }
            });
        }
    },
    mutations: {
        updateOperators(state, {menuKey, operators}) {
            Vue.set(state, menuKey, operators);
        }
    }
};
const operator = (store) => {
    return {
        reloadOperator(menuKey) {
            store.dispatch("operator/loadMenuOperator", menuKey);
        },
        getOperator(menuKey) {
            if (!store.state.operator[menuKey]) {
                store.dispatch("operator/loadMenuOperator", menuKey);
            }
            return store.state.operator[menuKey];
        }
    }
};

export default {
    store, operator, name: "operator"
}