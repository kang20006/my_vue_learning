<template>
  <h1>Ninja Reaction Timer</h1>
  <!-- make button disable when palaying -->
  <button @click="start" :disabled="isPlaying">play</button>
  <!-- custom event with data -->
  <MyBlock v-if="isPlaying" :delay="delay" @end="endGame"/>
  <MyResult v-if="showResult" :score="score"/> 
</template>

<script>
import MyBlock from './components/MyBlock.vue'
import MyResult from './components/MyResult.vue'
export default {
  
  name: 'App',
  data(){
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false
    }
  },
  methods:{
    start(){
      // #random between 2 to 7 seconds
      this.delay=2000+Math.random()*5000
      this.isPlaying=true
      this.showResult=false
    },
    // the reactime is bring from the MyBlock
    endGame(reactionTime){
      this.score=reactionTime
      this.isPlaying=false
      this.showResult=true
    }
  },
  
  components: {
   MyBlock,
   MyResult
  }
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

</style>
