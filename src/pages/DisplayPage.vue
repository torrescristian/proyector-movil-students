<template>
  <div class="display">
    <img class="display__img" :src="imagePath"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SocketIO from 'socket.io-client';

interface Io {
  on(key: string, cb: Function),
}

@Component
export default class DisplayPageComponent extends Vue {
  io: Io;
  imageName: string;

  constructor() {
    super();
    this.imageName = '';
  }

  mounted() {
    this.io = SocketIO() as Io;
    this.io.on('server:message', (data: { imageName: string }) => {
      this.imageName = data.imageName;
    });
  }

  get imagePath(): string {
    return this.imageName ? `/api/slide/${this.imageName}` : 'default.gif';
  };
}
</script>

<style lang="scss" scoped>
  .display {
    display: flex;
    justify-content: center;
    align-items: baseline;
    &__img {
      width: 100%;
      height: auto;
      object-fit: contain;
      @media only screen and (orientation: landscape) {  
        width: auto;
        height: 100vh;
        padding: 1vw;
      }
    }
  }
</style>
