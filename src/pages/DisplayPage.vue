<template>
  <div class="display">
    <v-img
      :src="imgPath"
      contain
    ></v-img>
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