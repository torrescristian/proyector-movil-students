<template>
  <main class="share">
    <div class="share__image">
      <img src="/api/qr">
    </div>
    <div class="share__text">
      <p>Si el teléfono del alumno no cuenta 
        <br/>con lector de QR puede ingresar 
        <br/>a la siguiente página web:
      </p>
      <br/>
      <h2>{{ shareUrl }}</h2>
      <br/>
      <p>
        IMPORTANTE: Esta computadora y 
        <br/> el teléfono del alumno
        <br/> deben de estar en la misma red WiFi.
      </p>  
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class SharePageComponent extends Vue {
  shareUrl: string;

  constructor() {
    super();
    this.shareUrl = '';
  }

  mounted(): void {
    axios.get('/api/share-url').then((res) => {
      this.shareUrl = res.data.url as string;
    });
  };
  
};
</script>

<style lang="scss">
.share {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas: 
    'image'
    'text';
  &__image {
    grid-area: image;
    display: flex;
    justify-content: center;
  }
  &__text {
    grid-area: text;
  }
}
</style>