<template src="./personDetails.view.html"></template>

<script lang="ts">
import { Person } from '@/interfaces/people.interface';
import Vue from 'vue';
import PeopleSrv from '../../services/people.service';

export default Vue.extend({
  name: 'PersonDetails',
  data: () => ({
    person: {},
  }),
  methods: {
    getPerson: async (id: number): Promise<Person> => {
      const people = await PeopleSrv.getPerson(id);
      return people;
    },
    normalizeData: (person: Person) => {
      const normalizedPerson: Person = person;
      normalizedPerson.homeworld = person.homeworld.replace('https://swapi.dev/api', '');
      normalizedPerson.starships = normalizedPerson.starships.map((starship: string) => starship.replace('https://swapi.dev/api', ''));
      console.log('normalizedPerson.starships', normalizedPerson.starships);
      return normalizedPerson;
    },
  },
  async created() {
    let data = await this.getPerson(parseInt(this.$router.currentRoute.params.id, 0));
    data = this.normalizeData(data);
    this.person = data;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./personDetails.module.less"></style>
