<template>
  <div class="text">
    <slot></slot>
    <br>
    {{name}}
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: ['name']
}
</script>

<style scoped>
.text {
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
  margin: 0.2em;
}
</style>