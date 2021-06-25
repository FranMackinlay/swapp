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
  data() {
    return {
      people: {},
      rootObject: {},
      page: 1,
    };
  },
  methods: {
    getPeople: async (page: number) => {
      const people = await PeopleSrv.getPeople(page);
      return people;
    },
    async prevPage(): Promise<void> {
      this.people = {};
      this.page -= 1;
      const data = await this.getPeople(this.page);
      this.rootObject = data;
      this.people = data.results;
    },
    async nextPage(): Promise<void> {
      this.people = {};
      this.page += 1;
      const data = await this.getPeople(this.page);
      this.rootObject = data;
      this.people = data.results;
    },
  },
  async created() {
    const data = await this.getPeople(this.page);
    this.rootObject = data;
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
