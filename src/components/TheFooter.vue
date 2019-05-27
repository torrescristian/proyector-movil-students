<template>
  <v-card class="v-card">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
      class="v-bottom-nav"
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

<script>
export default {
  data() {
    return {
      bottomNav: 0
    };
  },
  methods: {
    redirect(page) {
      this.$router.push(page);
    }
  },
  computed: {
    color() {
      const colors = ["indigo", "teal"];
      return colors[this.bottomNav];
    }
  }
};
</script>

<style scoped lang="scss">
.v-card {
  .v-bottom-nav {
    position: fixed;
  }
  @media only screen and (orientation: landscape) {
    display: none;
  }
}
</style>
