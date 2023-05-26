<template>
    <div>
        <p>parent component! </p>
        <child-props :myTitle="title" :myAge="age" :user="user" @increment_event="handleCounterIncreased" />
        <!-- <child-props  :myAge="-1"/> -->
        <br>
        <p>parent component </p>
        <p>子组件传过来的值 count: {{ count }}</p>
    </div>
</template>

<script setup>
import { defineComponent, reactive, ref } from 'vue';

import ChildProps from './ChildProps.vue';

const title = ref('Hello world')
const age = ref(10)

const user = reactive({
    name: "ksnowlv",
    phone: "15210797683",
    email: "ksnowlv@1999.com"
})

const count = ref(0)

console.log("title:", title)
console.log("age:", age)

const handleCounterIncreased = (counterValue) => {
    // console.log("handleCounterIncreased:", count)
    count.value = counterValue;
}

</script>