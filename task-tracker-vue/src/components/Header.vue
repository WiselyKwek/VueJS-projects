<template>
    <header>
        <h1>{{ title }}</h1>
        <Button 
        @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"
        v-if="homePage"/>
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: "Hello World"
        },
        showAddTask: {
            Boolean
        }
    },
    components: {
        Button
    },
    computed: {
        homePage() {
            if(this.$route.path === "/"){
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>

// scoped means all styles only apply to this component
<style scoped> 
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>