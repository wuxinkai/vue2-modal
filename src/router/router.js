import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 创建路由， 懒加载形式
const router = new Router({
    mode: "hash", // history 模式
    routes: [{
        path: '/',
        redirect: 'unityWebGl', // 默认路由
    },
    {
        path: '/unityWebGl',
        name: 'unityWebGl',
        component: () => import('../components/HelloWorld.vue')
       
    }]
})

// 将路由暴露出去
export default router
