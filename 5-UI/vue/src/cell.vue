<template>
  <div class="cell" :style="cellStyle"></div>
</template>
<script>
export default {
  name: "Cell",
  props: ["isLive"],
  computed: {
    cellStyle() {
      return { backgroundColor: this.isLive ? "black" : "white" };
    }
  }
};
</script>
<style>
.cell {
  border: solid 1px #ccc;
  vertical-align: middle;
  text-align: center;
}
</style>
