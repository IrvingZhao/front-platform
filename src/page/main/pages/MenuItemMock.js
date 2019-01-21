import Vue from 'vue';

const MenuItem = Vue.component("ElMenuItem");

export default {
    name: "menu-item-mock",
    mixins: [MenuItem.options],
    computed: {
        paddingStyle() {
            return {padding: "0px"};
        }
    }
}