<template>
  <div class="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
export default {
  name: 'App',
  components: { TheHeader },
};
</script>

<style lang="scss">
.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}
</style>
