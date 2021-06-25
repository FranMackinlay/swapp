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
    page: 1,
    rootObject: {},
  }),
  methods: {
    getPlanets: async (page: number) => {
      const planets = await PlanetsSrv.getPlanets(page);
      return planets;
    },
    async prevPage(): Promise<void> {
      this.planets = {};
      this.page -= 1;
      const data = await this.getPlanets(this.page);
      this.rootObject = data;
      this.planets = data.results;
    },
    async nextPage(): Promise<void> {
      this.planets = {};
      this.page += 1;
      const data = await this.getPlanets(this.page);
      this.rootObject = data;
      this.planets = data.results;
    },
  },
  async created() {
    const data = await this.getPlanets(this.page);
    this.rootObject = data;
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
