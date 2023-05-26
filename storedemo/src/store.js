import {createStore } from 'vuex'

const moduleA = {
    state: () =>({
        myCount: 0,
    }),
    mutations: {
        increment(state) {
            state.myCount++
            console.log("increment:",state.myCount)
        }
    },
    actions: {
        incrementAsync({commit}) {
            setTimeout( () => {
                commit('increment')
            }, 1000)
        }
    },

    getters: {
        doubleCount(state) {
            return state.myCount * 2
        }
    }
}

const moduleB = {
    state: () => ({
        message: "Hello VueX!"
    }),
    mutations: {
        changeMessage(state, message) {
            state.message = message
        }
    },
    actions: {
        changeMessageAsync ({commit}, message) {

            console.log("changeMessageAsync---", message)
            setTimeout(() => {
                commit('changeMessage', message)
            }, 1000);
        }
    },
    getters: {
        upperCaseMessage (state) {
            return state.message.toUpperCase()
        }
    }
}

const store = createStore({
    modules: {
        a: moduleA,
        b: moduleB,
    }
})

export default store