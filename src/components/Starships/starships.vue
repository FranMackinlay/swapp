<template src="./starships.view.html"></template>

<script lang="ts">
import Vue from 'vue';
import { Starship } from '@/interfaces/starships.interface';
import Card from '../Card/card.vue';
import StarshipsSrv from '../../services/starships.service';

export default Vue.extend({
  name: 'Starships',
  components: {
    Card,
  },
  data: () => ({
    starships: {},
  }),
  methods: {
    getPeople: async () => {
      const starships = await StarshipsSrv.getStarships();
      return starships;
    },
  },
  async created() {
    const data = await this.getPeople();
    data.results = data.results.map((item: Starship) => {
      // eslint-disable-next-line no-param-reassign
      item.url = item.url.replace('https://swapi.dev/api', '');
      return item;
    });

    this.starships = data.results;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./starships.module.less"></style>
