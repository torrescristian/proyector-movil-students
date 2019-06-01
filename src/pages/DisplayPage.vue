<template>
  <div class="display">
    <img class="display__img" :src="imgPath"/>
  </div>
</template>

<script>
import SocketIO from 'socket.io-client'

export default {
  name: 'DisplayPage',
  data() {
    return {
      io: null,
      imageName: '',
    };
  },
  computed: {
    imgPath: {
      get() {
        return this.imageName ? `/api/slide/${this.imageName}` : 'default.gif';
      },
    },
  },
  mounted() {
    this.io = SocketIO();
    this.io.on('server:message', (data) => {
      this.imageName = data.imageName;
    })
  },
}
</script>

<style lang="scss" scoped>
  .display {
    display: flex;
    justify-content: center;
    &__img {
      height: 80vh;
      width: 100%;
    }
  }
</style>
