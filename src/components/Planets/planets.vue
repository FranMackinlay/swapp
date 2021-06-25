<template src="./planets.view.html"></template>

<script lang="ts">
import Vue from 'vue';
import { Planet } from '@/interfaces/planets.interface';
import Card from '../Card/card.vue';
import PlanetsSrv from '../../services/planets.service';

export default Vue.extend({
  name: 'Planets',
  components: {
    Card,
  },
  data: () => ({
    planets: {},
  }),
  methods: {
    getPeople: async () => {
      const planets = await PlanetsSrv.getPlanets();
      return planets;
    },
  },
  async created() {
    const data = await this.getPeople();
    data.results = data.results.map((item: Planet) => {
      // eslint-disable-next-line no-param-reassign
      item.url = item.url.replace('https://swapi.dev/api', '');
      return item;
    });
    this.planets = data.results;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./planets.module.less"></style>
