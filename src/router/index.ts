import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';

const routes = [
    { path: '/', name: 'MainComponent', component: MainView, public: true }
    // { path: '/Login', name: 'LoginComponent', component: LoginComponent },
    // { path: '/Register', name: 'RegisterComponent', component: RegisterComponent },
    // { path: '/Protected', name: 'ProtectedComponent', component: ProtectedComponent },
    // { path: '/Logout', name: 'LogoutComponent', component: LogoutComponent }
]


const router = new VueRouter({
    routes
});

export function pathIsPublic(path: string): boolean {
    const route = routes.find(r => r.path === path);
    return route ? route.public : false;
}

export default router;