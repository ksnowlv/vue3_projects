<template>
    <div>
      <h2>User profile:</h2>
      <p>Name: {{ username }}</p>
      <p>Age: {{ age }}</p>
    </div>
</template>
  
<script lang="ts">

export default {
    props: {
      username: String,
      age: Number,
    },
  };

</script>