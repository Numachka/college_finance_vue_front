<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function () {
    return {

    }
  }
}
</script>

<style>

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background-color: #303030;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:hover {
  cursor: pointer;
}

@media only screen and (min-width: 1024px) {
  body {
    margin-top: 5em;
    display: grid;
    justify-items: center;
  }
}
</style>
