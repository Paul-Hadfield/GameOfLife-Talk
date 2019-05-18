<template>
  <div>{{this.isLive ? "X" : "0"}}</div>
</template>
<script>
export default {
  name: "Cell",
  props: ["isLive"]
};
</script>
<style>
</style>
