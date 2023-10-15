import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ajoutez tous les icônes solid (fa* classes) à la bibliothèque
library.add(fas);


import EntreApp from './page/EntreApp.vue'
import ConnexionPage from './page/Connexion.vue'
import InscriptionPage from './page/Inscription.vue'
import Accueil from './page/Acceuil.vue'
import Propos from './page/Apropos.vue'
import Services from './page/Services.vue'
import Contact from './page/Contact.vue'
import AlternativeDetail from "./components/AlternativeDetail.vue";
import alternative from './page/Alternatives.vue'
import ConseilsGIR from './page/ConseilsGIR.vue'
import GestionEcologique from './page/GestionEcologique.vue'
import BaseComplete from './page/Base.vue'
import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'EntreApp',
        component: EntreApp

    },
    {
        path: '/connexion',
        name: 'ConnexionPage',
        component: ConnexionPage
    },
    {
        path: '/inscription',
        name: 'InscriptionPage',
        component: InscriptionPage
    },
    {
        path: '/Accueil',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/A Propos',
        name: 'Propos',
        component: Propos
    },
    {
        path: '/Services',
        name: 'Services',
        component: Services
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: "/alternatives/:id",
        name: "AlternativeDetail",
        component: AlternativeDetail
    },
    {
        path: "/alternative",
        name: "alternative",
        component: alternative
    },
    {
        path: "/ConseilsGIR",
        name: "ConseilsGIR",
        component: ConseilsGIR
    },
    {
        path: "/GestionEcologique",
        name: "GestionEcologique",
        component: GestionEcologique
    },
    {
        path: "/BaseComplete",
        name: "BaseComplete",
        component: BaseComplete
    },


];

// create router object
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
