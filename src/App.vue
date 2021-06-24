<template>
  <div id="app" class="bg-white h-screen p-8">
    <Tailwind />
  </div>
</template>

<script>
import Tailwind from './components/Tailwind.vue';

export default {
  name: 'App',
  components: {
    Tailwind
  }
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
