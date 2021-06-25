<template src="./planetDetails.view.html"></template>

<script lang="ts">
import { Planet } from '@/interfaces/planets.interface';
import PlanetsSrv from '@/services/planets.service';
import Vue from 'vue';

export default Vue.extend({
  name: 'PlanetDetails',
  data: () => ({
    planet: {},
  }),
  methods: {
    getPerson: async (id: number): Promise<Planet> => {
      const people = await PlanetsSrv.getPlanet(id);
      return people;
    },
    normalizeData: (planet: Planet) => {
      const normalizedPlanet: Planet = planet;
      normalizedPlanet.residents = normalizedPlanet.residents.map((resident: string) => resident.replace('https://swapi.dev/api', ''));
      return normalizedPlanet;
    },
  },
  async created() {
    let data = await this.getPerson(parseInt(this.$router.currentRoute.params.id, 0));
    data = this.normalizeData(data);
    this.planet = data;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./planetDetails.module.less"></style>
