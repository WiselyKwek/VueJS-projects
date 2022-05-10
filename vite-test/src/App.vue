// how you want your info to be presented
<template>
  <div>
    <button @click="count++">Current Count: {{count}}</button>
  </div>
</template>

// where you define your info
<script>
  export default{
    name: 'App',
    components: {

    },
  
    data() {
      return {
        count: 0
      }
    }
  }
</script>

