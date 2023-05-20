<template>
    <child-component :username="user.name" :age="user.age"/>
</template>
  
<script lang="ts">
  import ChildComponent from "./ChildComponent.vue";
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        user: {
          name: "Tom",
          age: 25,
        },
      };
    },
  };
</script>