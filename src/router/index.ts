import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home/home.vue';
import People from '../components/People/people.vue';
import Starships from '../components/Starships/starships.vue';
import Planets from '../components/Planets/planets.vue';
import PlanetDetails from '../components/PlanetDetails/planetDetails.vue';
import StarshipDetails from '../components/StarshipDetails/starshipDetails.vue';
import PersonDetails from '../components/PersonDetails/personDetails.vue';

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
    component: PersonDetails,
    props: true,
  },
  {
    path: '/starships/:id',
    name: 'StarshipDetails',
    component: StarshipDetails,
    props: true,
  },
  {
    path: '/planets/:id',
    name: 'PlanetDetails',
    component: PlanetDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
