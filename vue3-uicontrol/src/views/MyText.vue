<template>
    <div>
        <!-- <input v-model="message" placeholder="edit me" /> -->
        <h3>主题：{{ title }}</h3>
        <input v-model="message" placeholder="请输入文本" />
        <p>Message is: {{ message }}</p>

        <span>多行文本:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br />
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
        <br>
        <span>复选框</span> 
        <div id = "v-model-multiple-checkboxes">
            <h3>选择您喜欢的语言：</h3>
            
            <label>
            <input type="checkbox" v-model="checkedNames" value="JavaScript" />
            JavaScript
            </label>
            
            <label>
            <input type="checkbox" v-model="checkedNames" value="TypeScript" />
                TypeScript
            </label>
            
            <label>
                <input type="checkbox" v-model="checkedNames" value="Python" />
                Python
            </label>
        </div>

        <br />
        <span>Checked names: {{ checkedNames }}</span>
        <br>
        <span>单选文本</span>
        <div>
            <label>
            <input type="radio" value="option1" v-model="selectedOption" /> Option 1
            </label>

            <label>
            <input type="radio" value="option2" v-model="selectedOption" /> Option 2
            </label>

            <label>
            <input type="radio" value="option3" v-model="selectedOption" /> Option 3
            </label>

            <p>You selected: {{ selectedOption }}</p>
        </div>

        <br>
        <span>多选文本</span>
        <div>
            <label>
            <input type="checkbox" :checked="selectedItems.includes('item1')" @change="handleToggleSelection('item1')" /> Item 1
            </label>

            <label>
            <input type="checkbox" :checked="selectedItems.includes('item2')" @change="handleToggleSelection('item2')" /> Item 2
            </label>

            <label>
            <input type="checkbox" :checked="selectedItems.includes('item3')" @change="handleToggleSelection('item3')" /> Item 3
            </label>

            <p>Selected items: {{ selectedItems }}</p>
        </div>

            <div>
            <select v-model="dropMenuSelectedOption">
              <option value="" disabled>Select an option</option>
              <!-- <option v-for="(item, index) in dropMenuOptions" :key="index" >{{ item }}</option> -->
              <option v-for="option in dropMenuOptions" :key="option.label" :value="option
              .value" >{{ option.value }}</option>
            </select>
            <p>Selected option: {{ dropMenuSelectedOption }}</p>
          </div>
        
    </div>


</template>

<script>

import { onBeforeUnmount, reactive, ref, watch } from 'vue'


const titleData = () => {
    const data = reactive({
        title: "Hello VUE3!",
        message: "this is a good message!",
    });

    return {
        title: data.title,
        message: data.message,
    }
}

const multipleSelectedData = () => {
    const checkedNames = ref([]);

    const stop = watch(checkedNames, (newValue, oldValue) => {
        handleCheckedNamesChange(newValue, oldValue);
    });

    function handleCheckedNamesChange(newValue, oldValue) {
        console.log("---")
        console.log('新的选中的值:', newValue);
        console.log('旧的选中的值:', oldValue);
    }

    // 在组件销毁时停止监视
    onBeforeUnmount(() => {
        stop();
    });

    return {
        checkedNames,
        stop,
        handleCheckedNamesChange,
    }
}


//多选
const multipleSelectedData2 = () => {
    const selectedItems = reactive([])

    function handleToggleSelection(item) {
        console.log("selectedItems is Array:",Array.isArray(selectedItems))
        console.log("handleToggleSelection---", item)
        if (selectedItems.includes(item)) {
            const idx = selectedItems.indexOf(item)
            selectedItems.splice(idx, 1)
        } else {
            selectedItems.push(item)
        }
    }

    return {
        selectedItems,
        handleToggleSelection,
    }
}

const dropMenuData = () => {

    const dropMenuOptions = reactive([
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'orange', label: 'Orange' }])

    const dropMenuSelectedOption = ref('')

    console.log("---dropMenuData:",dropMenuOptions)

    return {
        dropMenuOptions,
        dropMenuSelectedOption,
    }
}


export default {
    setup() {
        const { title, message} = titleData()

        const {checkedNames, stop, handleCheckedNamesChange } = multipleSelectedData()
        //
        const selectedOption = ref("");
        watch(selectedOption, (newValue, oldValue) => {
            console.log('------1');
            console.log('新的选中的值:', newValue);
            console.log('旧的选中的值:', oldValue);
            self.selectedOption = newValue;

            if (!oldValue) {
                console.log("--- oldValue null", oldValue);
            }else {
                console.log("--- oldValue", oldValue);
            }

            if (selectedOption) {
                console.log("---1", selectedOption);
            } else {
                console.log("---null")
            }
        } , {immediate: true})

        //
        const {selectedItems, handleToggleSelection} = multipleSelectedData2()
        const {dropMenuOptions, dropMenuSelectedOption} = dropMenuData()

        //     const dropMenuOptions = reactive([
        // { value: 'apple', label: 'Apple' },
        // { value: 'banana', label: 'Banana' },
        // { value: 'cherry', label: 'Cherry' },
        // { value: 'orange', label: 'Orange' }])

        // const dropMenuSelectedOption = ref('')
        console.log("dropMenuOptions---",dropMenuOptions)

        return {
            title,
            message,
            checked: true,
            checkedNames,
            handleCheckedNamesChange,
            selectedOption,
            selectedItems,
            handleToggleSelection,
            dropMenuOptions,
            dropMenuSelectedOption
        }
    }
}

</script>