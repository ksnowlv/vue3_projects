<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <VModelDemo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VModelDemo from './views/VModelDemo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    VModelDemo,
  }
}
</script>
