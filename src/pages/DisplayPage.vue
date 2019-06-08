<template>
  <div class="display">
    <img class="display__img"
      :src="imagePath"
      @click="handleClickFullscreen"
    />
    <div class="display__instructions">
      <p>
        <br/>
        <v-icon color="indigo">crop_rotate</v-icon>
        <br/>
        Gire la pantalla para ocultar la barra de navegación
      </p>
      <p>
        <br/>
        <v-icon color="green">touch_app</v-icon>
        <br/>
        Toque la <span class="display__instructions--highlighted">filmina</span> para verla en pantalla completa.
      </p>
      <p>
        <br/>
        <v-icon color="red">zoom_in</v-icon>
        <br/>
        <span class="display__instructions--highlighted">No</span> puede aumentar el tamaño
        <br/> de la imagen (hacer <em>zoom</em>) en pantalla completa.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SocketIO from 'socket.io-client';

@Component
export default class DisplayPageComponent extends Vue {
  io: SocketIOClient.Socket;
  imageName: string;

  constructor() {
    super();
    this.imageName = '';
  };

  mounted() {
    this.io = SocketIO();
    this.io.on('server:message', (data: { imageName: string }) => {
      this.imageName = data.imageName;
    });
  };

  get imagePath(): string {
    return this.imageName ? `/api/slide/${this.imageName}` : 'default.gif';
  };

  handleClickFullscreen(event) {
    const imgElem: HTMLImageElement = event.target;   
    imgElem.requestFullscreen();
  };
  
}
</script>

<style lang="scss" scoped>
  .display {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    @media only screen and (orientation: landscape) {
      grid-template-rows: 1fr;
    }
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
    &__instructions {
      @media only screen and (orientation: landscape) {
        display: none;
      }
      &--highlighted {
        text-decoration: underline;
      }
    }
  }
</style>
