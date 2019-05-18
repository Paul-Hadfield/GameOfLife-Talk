<template>
  <div id="app">
    <Grid :gameGrid="this.grid" :key="restartKey"/>
    <Options
      @restartClicked="handleRestartClicked"
      @typeChanged="handleTypeChanged"
      pattern="random"
    />
  </div>
</template>
<script>
import GameEngine from "./engine/gameengine";
import Grid from "./grid.vue";
import Options from "./options.vue";
import { log } from "util";

export default {
  name: "app",
  components: { Grid, Options },
  created() {
    console.log("Created");

    if (this.grid == null) {
      this.grid = this.populateGrid("blinker");
    }
    this.timer = setInterval(() => {
      this.grid = this.grid.map(cell =>
        GameEngine.determineNewState(cell, this.grid)
      );
    }, 1000);
  },
  beforeDestroy() {
    console.log("destroy");
    clearInterval(this.timer);
  },
  data() {
    return {
      grid: null,
      restartKey: 0
    };
  },
  methods: {
    handleRestartClicked() {
      this.grid = this.populateGrid(pattern);
      this.restartKey++;
    },
    handleTypeChanged(pattern) {
      this.grid = this.populateGrid(pattern);
      this.restartKey++;
    },
    populateGrid(pattern) {
      switch (pattern) {
        case "blinker":
          return GameEngine.setupBlinker();
        case "toad":
          return GameEngine.setupToad();
        case "beacon":
          return GameEngine.setupBeacon();
        case "pulsar":
          return GameEngine.setupPulsar();
        case "acorn":
          return GameEngine.setupAcorn();
        case "diehard":
          return GameEngine.setupDiehard();
        default:
          return GameEngine.setupRandom();
      }
    }
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



