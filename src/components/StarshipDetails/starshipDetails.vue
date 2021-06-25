<template src="./starshipDetails.view.html"></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StarshipDetails',
  props: {
    item: {},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./starshipDetails.module.less"></style>
