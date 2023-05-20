<template>
    <div>
        <h2> child props</h2>
        <p>title: {{ myTitle }}</p>
        <p>age: {{ myAge }}</p>

        <p>name: {{ user.name }}</p>
        <p>phone: {{ user.phone }}</p>
        <p>email: {{ user.email }}</p>
        <br>
        <p>---子组件emit---</p>
        <button @click="handlIncrementEvent"> {{ count }}</button>
        
    </div>
</template>

<script setup>

import { ref } from 'vue';

const EMIT_INCREMENT_EVENT = 'increment_event'

const emitters = defineEmits({
    EMIT_INCREMENT_EVENT: (count) => {
       console.log("EMIT_INCREMENT_EVENT---",count)
    }
})

const props = defineProps({
    myTitle: {
            type: String,
            required: true,
            default: "default"
        },

        myAge: {
            type: Number,
            default: 0
        },

        user: {
            type: Object,
            required: true,
            default: () => {},
            validator: (value) => {
                return typeof value === "object" && value !== null;
            },
        }
})

const count = ref(0)

const handlIncrementEvent = () => {
    count.value++;
    emitters(EMIT_INCREMENT_EVENT,count.value)
}

</script>