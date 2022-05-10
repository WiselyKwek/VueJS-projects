// how you want your info to be presented
<template>
  <div>
    <p>Has published books:</p>
      <span>Computed: {{ publishedBooksMessage }}</span>
      <br>
      <p>Method: {{ publishedBooksMessage2() }}</p>
      <br>
      <input type="text" v-model="message">
      <br>
      <span>computed datetime now: {{now}}</span>
      <br>
      <span>method datetime now: {{now2()}}</span>

      <br>

      <div class='static' :class="{active: isActive, 'text-danger': hasError}"> active line</div>
      <br>

      <div class='static' :style="{color: activeColor, fontSize: fontSize + 'px'}"> style line</div>

      <br>
      
      <li v-for="(book) in author.books" :key="book">
        {{book}}
      </li>
  </div>
</template>

// where you define your info
<script>
  export default{
    name: 'App',
    data(){
      return {
        author: {
          name: 'John Doe',
          books: [
            'book1',
            'book2',
            'book3',
            'book3',
            'book4'
          ]
        },
        message: "being dynamically rendered",
        isActive: true,
        hasError: false,
        activeColor: 'red',
        fontSize: 30
      }
    },
    components: {

    },
    methods: {
      publishedBooksMessage2(){
        console.log("method")
        return this.author.books.length > 4 ? 'Yes' : 'No'
      },
      now2(){
        return Date.now()
      }
    },
    computed: {
      publishedBooksMessage(){
        console.log('computed')
        return this.author.books.length > 4 ? 'Yes' : 'No'
      },
      now(){
        return Date.now()
      }
    }
  }
</script>

