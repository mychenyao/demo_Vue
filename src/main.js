/**
 * Created by lenovo on 2017/7/29.
 */
//导入核心包VUE
import Vue from "vue";
//导入vue.App对象
import App from "./App.vue";

//将vueROuter对象绑定到vue上
import vueRouter from "vue-router";
//导入Ajax对象；
import vueResource from "vue-resource";
Vue.use(vueResource);
Vue.use(vueRouter);
//导入路由规则对应的组件对象；

import home from "./components/Home.vue";
import shopcar from "./components/shopcar/car.vue";
import newslist from "./components/news/newslist.vue";
import newsinfo from "./components/news/newsinfo.vue";

//定义路由规则
var router = new vueRouter({
    linkActiveClass: "mui-active",
    routes: [
        { path: "/", redirect: '/home' },
        { path: '/home', component: home }, //首页
        { path: "/showpcar", component: shopcar }, //购物车
        { path: "/news/newslist", component: newslist }, //新闻资讯列表
        { path: "/news/newsinfo/:id", component: newsinfo } //新闻资讯详细页面
    ]
});

//导入mint-ui的css文件
import "mint-ui/lib/style.min.css";

//导入mint-ui组件对象
import mintui from "mint-ui";
//注册mui 的css 样式；
import "../statics/mui/css/mui.css";
//导入css
import "../statics/css/site.css";
Vue.use(mintui);

//导入filter;
import moment from "moment";
//日期格式化
Vue.filter("datefmt",function(input,fmtstring){
    return moment(input).format(fmtstring);
});
new Vue({
    el: "#app",
    router: router,
    render: c => c(App)
});
