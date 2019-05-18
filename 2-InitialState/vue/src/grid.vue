<template>
  <div v-if="this.gameGrid">
    <Cell v-for="(cell, index) in this.gameGrid" :key="index" :isLive="cell.live"/>
  </div>
</template>

<script>
import Cell from "./cell.vue";
export default {
  name: "Grid",
  components: { Cell },
  props: ["gameGrid"]
};
</script>

<style scoped>
</style>


