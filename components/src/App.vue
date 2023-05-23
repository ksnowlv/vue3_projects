<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <Parent />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Parent from './views/Parent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parent
  }
}
</script>
