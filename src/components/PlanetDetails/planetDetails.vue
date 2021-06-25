<template src="./planetDetails.view.html"></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PlanetDetails',
  props: {
    item: {},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./planetDetails.module.less"></style>
