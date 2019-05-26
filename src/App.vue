<template>
  <div id="wrapper">
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
export default {
  name: 'App',
  components: { TheFooter },
}
</script>


<style lang="scss">
</style>
