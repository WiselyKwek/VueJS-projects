<template>
    <div>
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task= "$emit('delete-task', task.id)" :key="task.id" :task="task" v-for="task in tasks"/>
    </div>
    
</template>

<script>
import Task from './Task.vue'

export default {
    name: "Tasks",
    props: {
        tasks: Array
    },
    components: {
        Task
    }
}
</script>