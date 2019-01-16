let store = {
    namespaced: true,
    state: {
        breadNav: []
    },
    mutations: {
        addBreadNav(state, breads) {
            if (breads instanceof Array) {
                breads.forEach((item) => {
                    state.breadNav.push(item);
                })
            } else {
                state.breadNav.push(breads);
            }
        },
        set(state, breads) {
            state.breadNav = breads || [];
        },
        splice(state, index) {
            state.breadNav.splice(index);
        }
    }
};
let operator = (store) => {
    return {
        set(breads) {
            store.commit("bread/set", breads);
            return this;
        },
        push(breads) {
            store.commit("bread/addBreadNav", breads);
            return this;
        },
        clear() {
            store.commit("bread/set", []);
            return this;
        },
        splice(index) {
            store.commit("bread/splice", index);
        }
    }
};
export default {
    store, operator, name: "bread"
}