<template>
  <div>
    <label>Type</label>
    <select :id="this.inputId">
      <option
          v-for="option in this.options"
          :key="option"
      >{{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: ["options", "inputId"]
}
</script>

<style scoped>
select {
  padding: 0.5em 0.2em;
  width: 20em;
  margin: 0.5em;
  color: #ffffff;
  font-size: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  background-color: #45454a;
  border: none;
  border-bottom: solid 1px #000000;
  border-radius: 0.3em;
}
label {
  transition: all linear 0.1s;
  color: #ffffff;
}
option {
  padding: 0;
}
</style>