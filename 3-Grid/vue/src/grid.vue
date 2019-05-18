<template>
  <div v-if="this.gameGrid" class="grid" :style="gridStyle">
    <Cell v-for="(cell, index) in this.gameGrid" :key="index" :isLive="cell.live"/>
  </div>
</template>

<script>
import Cell from "./cell.vue";
export default {
  name: "Grid",
  components: { Cell },
  props: ["gameGrid"],
  data() {
    let cols = 0;
    let rows = 0;

    this.gameGrid.forEach(cell => {
      if (cell.x > cols) {
        cols = cell.x;
      }
      if (cell.y > rows) {
        rows = cell.y;
      }
    });

    return {
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight,
        rows,
        cols
      }
    };
  },
  computed: {
    gridStyle() {
      const cellSize = Math.floor(
        Math.min(
          ...[
            ((this.dimensions.width - 100) * 0.8) / this.dimensions.cols,
            (this.dimensions.height * 0.8) / this.dimensions.rows,
            200
          ]
        )
      );

      return {
        width: `${this.dimensions.cols * cellSize}px`,
        gridTemplateColumns: `repeat(${this.dimensions.cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${this.dimensions.rows}, ${cellSize}px)`
      };
    }
  }
};
</script>

<style scoped>
.grid {
  margin: 50px auto;
  border: solid 2px;
  display: grid;
  grid-gap: 0px;
  width: 250px;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(5, 50px);
}
</style>


