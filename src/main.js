import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuex from "vuex"
import LoginPage from "@/components/pages/LoginPage";
import StudentPage from "@/components/pages/StudentPage";
import WorkerPage from "@/components/pages/WorkerPage";
import ManagerPage from "@/components/pages/ManagerPage";
import ReportPage from "@/components/pages/ReportPage";
import CreateStudentPage from "@/components/pages/CreateStudentPage";
import CreateWorkerPage from "@/components/pages/CreateWorkerPage";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: LoginPage},
        {path: '/student/:id', component: StudentPage},
        {path: '/worker/:id', component: WorkerPage},
        {path: '/manager', component: ManagerPage},
        {path: '/report', component: ReportPage},
        {path: '/create-page/student', component: CreateStudentPage},
        {path: '/create-page/worker', component: CreateWorkerPage},
    ]
})

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        sessionServerURLPrefix: "https://integrative-demo.herokuapp.com",
        sessionCurrentURLPrefix: "http://localhost:8080",
        sessionSpace: "2021b.Shahar.Hilel.Michael",
        sessionEmail: "",
        sessionID: "",
        sessionRole: "",
        sessionUsername: "",
        sessionAvatar: "",
    },
    mutations: {
        setSessionEmail(state, newEmail) {
            state.sessionEmail = newEmail;
        },
        setSessionId(state, newID) {
            state.sessionID = newID;
        },
        setSessionRole(state, newRole) {
            state.sessionRole = newRole;
        },
        setSessionUsername(state, newUsername) {
            state.sessionUsername = newUsername;
        },
        setSessionAvatar(state, newAvatar) {
            state.sessionAvatar = newAvatar;
        }
    }
})

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
