<template>
  <div>
    <input type="email" id="email" name="email" placeholder="manager or student1@example.com">
  </div>
</template>

<script>
export default {
  name: "BaseInput"
}
</script>

<style scoped>
input {
  padding: 0.5em ;
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

::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
</style>