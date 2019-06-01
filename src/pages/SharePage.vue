<template>
  <main class="share">
    <img class="share__img" src="/api/qr"/>
  </main>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SharePageComponent extends Vue {
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


