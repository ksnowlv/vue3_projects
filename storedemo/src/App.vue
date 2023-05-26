<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <StoreExam />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import StoreExam from './views/StoreExam.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StoreExam,
  }
}
</script>
