import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home/home.vue';
import People from '../components/People/people.vue';
import Starships from '../components/Starships/starships.vue';
import Planets from '../components/Planets/planets.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
  },
  {
    path: '/people/:id',
    name: 'PersonDetails',
    // component: PersonDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
