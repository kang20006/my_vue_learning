<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <!-- all the template in the modal will place here -->
  <teleport to=".modals" v-if="showModal">
    <MyModal :header="header" :text="text" theme="sale" @close="toggleModal">
      <!-- name slot -->
      <template v-slot:links>
        <a href="a">sign up now</a>
        <a href="a">more info</a>
      </template>
      <!-- default slot -->
      <h1>slots111</h1>
      <p>slots test</p>
    </MyModal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <MyModal @close="toggleModalTwo">
      <!-- default slot -->
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes!</p>
    </MyModal>
  </teleport>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal two</button>
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
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your food for half prize!',
      showModal:false,
      showModalTwo:false,
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

    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo=!this.showModalTwo
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
#app .modal{
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
