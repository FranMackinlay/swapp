<template src="./people.view.html"></template>

<script lang="ts">
import Vue from 'vue';
import { Person } from '@/interfaces/people.interface';
import Card from '../Card/card.vue';
import PeopleSrv from '../../services/people.service';

export default Vue.extend({
  name: 'People',
  components: {
    Card,
  },
  data: () => ({
    people: {},
  }),
  methods: {
    getPeople: async () => {
      const people = await PeopleSrv.getPeople();
      return people;
    },
  },
  async created() {
    const data = await this.getPeople();
    data.results = data.results.map((item: Person) => {
      // eslint-disable-next-line no-param-reassign
      item.url = item.url.replace('https://swapi.dev/api', '');
      return item;
    });
    this.people = data.results;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./people.module.less"></style>
