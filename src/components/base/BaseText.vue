<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseText"
}
</script>

<style scoped>

div {
  display: grid;
  color: #ffffff;
  max-width: 100%;
  line-height: 1.2em;
  overflow-wrap: break-word;
}

a {
  color: #ffffff;
  text-align: center;
}
</style>