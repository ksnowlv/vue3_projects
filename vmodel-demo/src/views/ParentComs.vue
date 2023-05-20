<template>
    <div>
        <h2>provide 和 inject示例</h2>
        <p>父组件的消息:{{ data.message }}</p>
        <ChildComs/>
        
    </div>
</template>

<script setup>
import { provide, reactive } from "vue";
import ChildComs from "./ChildComs.vue";

const PROVIDE_DATA = 'data'

const data = reactive({
    message: 'hello from parent!'
})

provide(PROVIDE_DATA, data)

</script>

