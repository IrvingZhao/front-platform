import Vue from 'vue';
const Submenu = Vue.component("ElSubmenu");

export default {
    name: "sub-menu-mock",
    mixins: [Submenu.options],
    props:["route"],
    computed: {
        paddingStyle() {
            return {padding: "0px"};
        }
    }
}