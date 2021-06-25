<template src="./people.view.html"></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'People',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./people.module.less"></style>
