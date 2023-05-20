<template>
    <div>
        <input type="text" v-model="inputData" placeholder="请输入内容" />
        <VModelChild :text="inputData" v-model:myValue="childValue"  @update_value="handleUpdateText"/>
        <p>子组件传过来的值: {{ childData }}</p>
        <p>子组件实时传过来的值: {{ childValue }}</p>
        <br>
        <p>多个 v-model 绑定</p>
        <MutiVModel v-model:firstName="first_name" v-model:lastName="last_name" />
        <p>firstName:{{ first_name }}</p>
        <p>lastName:{{ last_name }}</p>

        <ParentComs />
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import VModelChild from "./VModelChild.vue";
import MutiVModel from "./MutiVModel.vue";
import ParentComs from "./ParentComs.vue";


const inputData = ref('')

const childData = reactive({
    text: "",
    count: 0,
})

const childValue = ref('')

const first_name = ref('')
const last_name = ref('')

const handleUpdateText = (text, count) => {
    console.log("1111",text)
    childData.text = text
    childData.count = count
}

</script>