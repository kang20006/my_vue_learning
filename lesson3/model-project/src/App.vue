<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <!-- all the template in the modal will place here -->
  <MyModal/>
</template>

<script>
// import the model
import MyModal from './components/Modal.vue'

// we export the root component
export default {
  // give component a name is optional
  name: 'App',
  data(){
    return {
      title: 'My First Vue App :)'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      // grab the refs name DOM element
      // add a class to it
      this.$refs.name.classList.add('active')
      // focus the input element
      this.$refs.name.focus()

    }
  },
  // register any extra component we use in this 
  components: {
    MyModal
  }
}
</script>


// this style is actually global
// apply to any component in the page
// style are place on the head of index.html
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;

}
</style>
