import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import LoginPage from "@/components/pages/LoginPage";
import StudentPage from "@/components/pages/StudentPage";
import WorkerPage from "@/components/pages/WorkerPage";
import ManagerPage from "@/components/pages/ManagerPage";
import ReportPage from "@/components/pages/ReportPage";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: LoginPage},
        {path: '/student/:id', component: StudentPage},
        {path: '/worker/:id', component: WorkerPage},
        {path: '/manager', component: ManagerPage},
        {path: '/report', component: ReportPage}
    ]
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
