<template>
  <!-- <HelloWorld :msg="hello" /> -->
  <div>
    <h1>Vue 3 Router Example</h1>
    <router-link to="/">Home|</router-link>
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/"> </router-link> -->
    <router-view></router-view>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>
