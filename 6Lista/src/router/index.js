import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Profile from '../views/profile.vue';
import Login from '../views/login.vue';
import Signup from '../views/signup.vue';
import FormularioTzeet from '../components/FormularioTzeet.vue';
import ItemsMenu from '../components/ItemsMenu.vue';
import Navegacao from '../components/Navegacao.vue';
import PaginaCentral from '../components/Pagina-Central.vue';
import SegundaParteCadastro from '../components/SegundaParteCadastro.vue';
import Tzeet from '../components/Tzeet.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Home,
            children: [{
                path: "/home",
                name: "home",
                component: Home,
            },
            {
                path: "/profile",
                name: "profile",
                component: Profile,
            },],
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup,
        },
    ],
});

export default router;