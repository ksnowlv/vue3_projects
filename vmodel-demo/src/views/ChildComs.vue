<template>
    <div>
        <h3>子组件</h3>
        <p>子组件的消息:{{ message }}</p>
    </div>
</template>

<script setup>

import { inject } from "vue";

const data = inject('data')
console.log("data:", data)

const message = data.message

</script>