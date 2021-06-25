<template src="./starshipDetails.view.html"></template>

<script lang="ts">
import { Starship } from '@/interfaces/starships.interface';
import StarshipsSrv from '@/services/starships.service';
import Vue from 'vue';

export default Vue.extend({
  name: 'StarshipDetails',
  data: () => ({
    starship: {},
  }),
  methods: {
    getPerson: async (id: number): Promise<Starship> => {
      const people = await StarshipsSrv.getPerson(id);
      return people;
    },
    normalizeData: (starship: Starship) => {
      const normalizedStarship: Starship = starship;
      normalizedStarship.pilots = normalizedStarship.pilots.map((pilot: string) => pilot.replace('https://swapi.dev/api', ''));
      return normalizedStarship;
    },
  },
  async created() {
    let data = await this.getPerson(parseInt(this.$router.currentRoute.params.id, 0));
    data = this.normalizeData(data);
    this.starship = data;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./starshipDetails.module.less"></style>
