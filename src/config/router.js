import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Page404 = () => import(/* webpackChunkName: "error/404" */ '../page/public/404');
const MainPage = () => import(/* webpackChunkName: "base" */ "../page/main/pages/Main");
// import Page404 from '../page/public/404';
// import MainPage from '../page/main/pages/Main';


let baseRouteConfig = [
    {
        name: "404",
        path: "/404",
        component: Page404
    },
];

let rootRouteConfig = {
    name: "root",
    path: "/",
    component: MainPage,
    children: []
};

let router;

const getRouter = (routes) => {
    if (!router) {
        let routerConfig = [...baseRouteConfig];

        routes.forEach((item) => {
            rootRouteConfig.children.push(item);
        });

        rootRouteConfig.children.push({
            name: "main404",
            path: "*",
            component: Page404
        });

        routerConfig.push(rootRouteConfig);

        router = new VueRouter({
            mode: "hash",
            routes: routerConfig
        });
        router.beforeEach((to, from, next) => {
            //TODO 401  子页跳转
            if (!to.matched || to.matched.length === 0) {
                router.push({name: "main404"});
            } else {
                next();
            }
        });
    }
    return router;
};

const push = (path, onComplete, onAbort) => {
    const router = getRouter();
    router.push(path, onComplete, onAbort);
};

export default {
    getRouter,
    push
}
