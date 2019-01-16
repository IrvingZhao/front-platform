import {Submenu} from 'element-ui';

export default {
    name: "sub-menu-mock",
    mixins: [Submenu],
    computed: {
        paddingStyle() {
            return {padding: "0px"};
        }
    }
}