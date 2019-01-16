import {Submenu} from 'element-ui';

export default {
    name: "sub-menu-mock",
    mixins: [Submenu],
    props:["route"],
    computed: {
        paddingStyle() {
            return {padding: "0px"};
        }
    }
}