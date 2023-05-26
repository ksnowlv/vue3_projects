<template>
    <div>
        <h3>异步组件验证</h3>
        <button @click="handleButtonEvent">测试异步组件</button>
        <component v-if="curComponent" :is="curComponent"></component>
    </div>
</template>

<script  setup>

import { defineAsyncComponent, shallowRef } from "vue"

const curComponent = shallowRef(null)

async function handleButtonEvent() {
    if (curComponent.value === null) {
        const componentA = await defineAsyncComponent(
            () => import('./AsyncComponentDemo.vue')
        )
        curComponent.value = componentA
    } else {
        curComponent.value = null
    }
}

</script>