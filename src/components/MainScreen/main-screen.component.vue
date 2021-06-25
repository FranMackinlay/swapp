<template src="./main-screen.view.html"></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainScreen',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./main-screen.module.less"></style>
