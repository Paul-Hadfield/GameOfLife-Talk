<template>
  <div id="app">
    <Grid :gameGrid="this.grid" />
  </div>
</template>
<script>
import GameEngine from "./engine/gameengine";
import Grid from "./grid.vue";

export default {
  name: "app",
  components: { Grid },
  data() {
    return {
      grid: GameEngine.setupBlinker()
    };
  }
};
</script>
<style>
#app,
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 200px;
  text-align: center;
}
</style>



