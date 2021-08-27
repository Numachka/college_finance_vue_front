<template>
  <div>
    <fieldset>
      <legend>
        <label :for="this.labelFor">{{ this.label }}</label>
      </legend>
      <input :type="this.inputType"
           :id="this.inputId"
           :name="this.inputName"
      >
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: ["inputId", "inputType", "inputName", "label", "labelFor"],
  emits: ["value"],
  methods: {
    onSubmit() {
      this.$emit('submitted', this.name);
    }
  }
}
</script>

<style scoped>
input {
  width: 18em;
  margin: 0 0.5em ;
  color: #ffffff;
  font-size: 1em;
  background-color: #303030;
  border: none;
}

input:focus {
  outline: none;
}

fieldset {
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 0.3em;
}

legend {
  padding: 0 0.5em;
}

label {
  transition: all linear 0.1s;
  color: rgba(255, 255, 255, 0.5);
}

</style>