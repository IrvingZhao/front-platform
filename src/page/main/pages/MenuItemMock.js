import {MenuItem} from 'element-ui';

export default {
    name: "menu-item-mock",
    mixins: [MenuItem],
    computed: {
        paddingStyle() {
            return {padding: "0px"};
        }
    }
}