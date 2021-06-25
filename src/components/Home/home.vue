<template>
  <div class="home">
    <img data-aos="fade-down"
      v-bind:data-aos-offset="10"
      v-bind:data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-in-out" class="mt-5" alt="Vue logo" src="https://res.cloudinary.com/ducmbpfde/image/upload/v1624631190/swapp-logo_s8jbhs.png">
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
