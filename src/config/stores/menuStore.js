import Vue from "vue";

const getUserMenu = () => {
    return Vue.http.get("/api/base/menu");
};

const store = {
    namespaced: true,
    state: {
        menuTreeList: null,
    },
    mutations: {
        updateMenu(state, menus) {
            state.menuTreeList = menus;
        }
    },
    actions: {
        loadMenu(context) {
            getUserMenu().then(({body}) => {
                const {code, msg, data} = body;
                if ("000000" === code) {
                    let menuTree = Vue.$util.generateTree(data);
                    context.commit("updateMenu", menuTree);
                }
            });
        }
    }
};
const operator = (store) => {
    return {
        reloadMenu() {
            store.dispatch("menu/loadMenu");
        },
        getMenu() {
            if (!store.state.menu.menuTreeList) {
                store.dispatch("menu/loadMenu");
            }
            return store.state.menu.menuTreeList;
        }
    }
};

export default {
    store, operator, name: "menu"
}