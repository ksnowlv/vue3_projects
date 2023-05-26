<template>
  <div>
    <h3>第一种切换组件方法</h3>
    <button @click="toggleComponent">切换组件</button>
    <keep-alive>
      <component :is="flag ? ComponentA : ComponentB"></component>
    </keep-alive>

    <h3>另一种切换组件方法</h3>
    <button @click="handleComponentChange">切换组件</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <h3>---切换组件方法</h3>
    <AsyncComponent />

  </div>
</template>
  
<!-- 使用setup语法糖，这时候的is如果使用字符串会加载不出来，得使用组件实例 
<script>
  import ComponentA from './ComponentA.vue';
  import ComponentB from './ComponentB.vue';
  
  export default {
    components: {
      ComponentA,
      ComponentB,
    },
    data() {
      return {
        currentComponent: "ComponentA",
      }
    },
    methods: {
      toggleComponent() {
        this.currentComponent = this.currentComponent === "ComponentA" ? "ComponentB" : "ComponentA";
      }
    }
  };
</script> -->

<script setup>
import { ref, shallowRef } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import AsyncComponent from './AsyncComponent.vue'

const flag = ref(true)

const toggleComponent = () => {
  flag.value = !flag.value
}

//第二种切换组件方法
let currentComponent = shallowRef(ComponentA)

const handleComponentChange = () => {
  if (currentComponent.value == ComponentA) {
    currentComponent.value = ComponentB
  } else {
    currentComponent.value = ComponentA
  }
}

</script>

