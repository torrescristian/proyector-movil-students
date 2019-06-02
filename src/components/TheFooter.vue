<template>
  <v-card class="footer">
    <v-bottom-nav
      class="footer__nav"
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark @click="redirect('/')">
        <span>Reproducir</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>
      <v-btn dark @click="redirect('/compartir')">
        <span>Compartir</span>
        <v-icon>share</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TheFooterComponent extends Vue {
  bottomNav: number;

  constructor() {
    super();
    this.bottomNav = 0;
  }

  // properties
  get color(): string {
    const colors = ["indigo", "teal"];
    return colors[this.bottomNav];
  }
  
  // methods
  redirect(page: string): void {
    this.$router.push(page);
  }

};
</script>

<style scoped lang="scss">
.footer {
  .footer__nav {
    position: fixed;
  }
  @media only screen and (orientation: landscape) {
    display: none;
  }
}
</style>
