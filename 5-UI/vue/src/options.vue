<template>
  <form v-on:submit.prevent>
    <div class="options">
      <div>
        <input
          type="Radio"
          id="blinker"
          name="pattern"
          @change="typeChanged"
          value="blinker"
          :checked="pattern === 'blinker'"
        >
        <label for="blinker" selected>Blinker</label>
      </div>
      <div>
        <input
          type="Radio"
          id="toad"
          name="pattern"
          @change="typeChanged"
          value="toad"
          :checked="pattern === 'toad'"
        >
        <label for="toad" selected>Toad</label>
      </div>
      <div>
        <input
          type="Radio"
          id="beacon"
          name="pattern"
          @change="typeChanged"
          value="beacon"
          :checked="pattern === 'beacon'"
        >
        <label for="beacon" selected>Beacon</label>
      </div>
      <div>
        <input
          type="Radio"
          id="pulsar"
          name="pattern"
          @change="typeChanged"
          value="pulsar"
          :checked="pattern === 'pulsar'"
        >
        <label for="pulsar" selected>Pulsar</label>
      </div>
      <div>
        <input
          type="Radio"
          id="acorn"
          name="pattern"
          @change="typeChanged"
          value="acorn"
          :checked="pattern === 'acorn'"
        >
        <label for="acorn" selected>Acorn</label>
      </div>
      <div>
        <input
          type="Radio"
          id="diehard"
          name="pattern"
          @change="typeChanged"
          value="diehard"
          :checked="pattern === 'diehard'"
        >
        <label for="diehard" selected>Diehard</label>
      </div>
      <div>
        <input
          type="Radio"
          id="random"
          name="pattern"
          @change="typeChanged"
          value="random"
          :checked="pattern === 'random'"
        >
        <label for="random">Random</label>
      </div>
    </div>
    <button @click="restartClicked">Restart</button>
  </form>
</template>
<script>
export default {
  props: ["pattern"],
  methods: {
    restartClicked(event) {
      this.$emit("restartClicked");
      event.stopPropagation();
    },
    typeChanged(event) {
      this.$emit("typeChanged", event.path[0].value);
    }
  }
};
</script>
<style scoped>
form {
  padding-top: 50px;
  padding-right: 20px;
}

form,
button {
  font-size: 1.5em;
}
.options {
  text-align: left;
  margin-bottom: 20px;
}

.options div {
  height: 2.5em;
  vertical-align: baseline;
}
.options label {
  margin-left: 20px;
}
</style>
