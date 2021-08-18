<template>
  <div>
    <span>X</span>
    Welcome to the demo tutorial.
    Clicking...
    long explanation will be in here...
  </div>
</template>

<script>
export default {
  name: "TutorialOverlay"
}
</script>

<style scoped>
  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 95vw;
    z-index: 10;
    background-color: rgba(176, 178, 181, 0.4);
    color: #ffffff;
    border-radius: 0.2em;
  }
  span {
    position: absolute;
    top: 1em;
    right: 1em;
  }
</style>