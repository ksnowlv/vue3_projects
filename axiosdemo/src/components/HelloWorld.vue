<template>
  <div>
    <h2 网络请求示例 />
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref } from 'vue'

const title = 'My Blog'
const posts = ref([])

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log("response", response)
    if (response.status === 200) {
      posts.value = response.data
      console.log("axios---", posts.value)
    } else {
      console.log("axios---", response.statusText)
    }
  })
  .catch(error => {
    console.log(error)
  })

</script>
