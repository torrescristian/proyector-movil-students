<template>
  <main class="share">
    <img class="share__img" src="/api/qr"/>
  </main>
</template>

<script>
export default {
  name: 'SharePage',
};
</script>

<style lang="scss" scoped>
.share {
  display: flex;
  justify-content: center;
  &__img {
    height: 50vh;
  }
}
</style>


