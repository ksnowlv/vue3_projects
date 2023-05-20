<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <MyProps />
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

import MyProps from './components/MyProps.vue';

export default {
  name: 'App',
  components: {
    MyProps,
  }
}

</script>
