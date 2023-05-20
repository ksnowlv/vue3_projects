<template>
    <div>
        <p>{{ text }}</p>
        <br>
        <button @click="handleUpdateText"> update text</button>
        <br>
        <input :value="myValue" @input="handleUpdateMyValue($event)" placeholder="请输入内容"/>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"

const props = defineProps({
    text: {
        type: String,
        default: '',
        required: true,

    },
    myValue: {
      type: String,
      default: ''
    }
})

const EMIT_UPDATE_VALUE = 'update_value'
const EMIT_UPDATE_MY_VALUE = 'update:myValue'

const emits = defineEmits([EMIT_UPDATE_VALUE, EMIT_UPDATE_MY_VALUE]
)

const count = ref(0)


// const value = computed(() => ({
//     get() {
//         return this.myValue
//       },
//       set(val) {
//         emits(EMIT_UPDATE_MY_VALUE, val)
//       }
// }))

const handleUpdateText = () => {
    count.value ++
    emits(EMIT_UPDATE_VALUE, "Hello New Value", count.value)
}

const handleUpdateMyValue = (event) => {
    emits(EMIT_UPDATE_MY_VALUE, event.target.value)
}

</script>