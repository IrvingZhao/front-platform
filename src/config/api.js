import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push((request) => {
    return (response) => {
        //TODO 添加 Token
        if (response.status === 200) {
            const {code, msg} = response.body;
            if ("000000" !== code) {
                //TODO 弹出请求错误提示
            }
        }
    }
});