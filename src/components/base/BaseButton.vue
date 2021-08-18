<template>
<button><slot></slot></button>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style scoped>
button{
  padding: 0.5em 0;
  width: 15em;
  margin: 0.5em;
  color: #ffffff;
  font-size: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #1aa000;
  border: none;
  border-radius: 0.3em;
}
</style>