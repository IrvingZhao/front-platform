import Vue from 'vue';

export default {
    getDicByType(typeKey) {
        return Vue.http.get("/api/base/dic/" + typeKey);
    },
    getUserMenu() {
        return Vue.http.get("/api/base/menu");
    }
}