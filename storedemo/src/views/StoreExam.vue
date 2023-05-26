<template>
    <div>
        <h3>模块A</h3>
        <p>{{ ACount }}</p>
        <p>2倍count{{ ADoubleCount }}</p>
        <button @click="AIncrement">increment count</button>
        <br>
        <button @click="AIncrementAsync">incrementAsync count</button>

        <h3>模块B</h3>
        <p>{{ BMessage }}</p>
        <p>{{ BUpperCaseMessage }}</p>
        <input v-model="message" placeholder="Enter New Message">
        <button @click="BChangeMessage">Change Message</button>

    </div>
</template>

<script setup>

import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const ACount = computed(() => store.state.a.myCount)
const ADoubleCount = computed(() => store.getters['doubleCount'])
const AIncrement = () => {
    store.commit('increment')
}

// const increment = () => store.dispatch('incrementAsync')

const AIncrementAsync = () => {
    store.dispatch('incrementAsync')
}

const BMessage = computed(() => store.state.b.message )


const BUpperCaseMessage = computed(() => store.getters['upperCaseMessage'])

const message = computed({
    get: () => store.state.b.message,
    set: (value) => store.commit('changeMessage', value)
})

 
const BChangeMessage = () => store.dispatch('changeMessageAsync', message.value)


</script>