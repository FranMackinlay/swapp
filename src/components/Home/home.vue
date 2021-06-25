<template>
  <div class="home">
    <img class="mt-5" alt="Vue logo" src="../assets/swapp-logo.png">
    <MainScreen msg="Welcome to Swapp"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainScreen from '../MainScreen/main-screen.component.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    MainScreen,
  },
});
</script>

<style scoped lang="less" src="./home.module.less"></style>
