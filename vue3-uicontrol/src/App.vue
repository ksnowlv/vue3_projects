<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <MyText />
  <MyProps />

  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyText from './views/MyText.vue';
import MyProps from './views/MyProps.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    MyText,
    MyProps,
  }
}
</script>
