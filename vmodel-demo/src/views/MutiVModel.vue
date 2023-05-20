<template>
    <div>
        <p>多个 v-model 绑定</p>
        <input type="text" :value="firstName" @input="handleUpdateFirstName($event)" placeholder="请输入first name"/>
        <br>
        <input type="text" :value="lastName" @input="handleUpdateLastName($event)" placeholder="请输入last name"/>
        
    </div>
</template>

<script setup>

const props = defineProps({
    firstName: {
        type: String,
        default: "",
    },
    // firstNameModifiers: {
    //     type: String,
    // },
    lastName: {
        type: String,
        default: ""
    }
})

const EMIT_UPDATE_FIRSTNAME = 'update:firstName'
const EMIT_UPDATE_LASTNAME = 'update:lastName'

const emits = defineEmits([
    EMIT_UPDATE_FIRSTNAME,
    EMIT_UPDATE_LASTNAME,
])

const handleUpdateFirstName = (event) => {
    console.log("handleUpdateFirstName---", event)
    emits(EMIT_UPDATE_FIRSTNAME, event.target.value)
}

const handleUpdateLastName = (event) => {
    console.log("handleUpdateLastName---", event)
    emits(EMIT_UPDATE_LASTNAME, event.target.value)
}

</script>