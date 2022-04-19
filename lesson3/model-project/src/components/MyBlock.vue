<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>

<script>
export default {
    props:['delay'],
    data(){
        return{
            showBlock:false,
            timer:null,
            reactionTime:0,
        }
    },
    // first we put in delay as a props
    // when a component mounted
    // we start a time out
    // fire that code after the amount of time
    // after the amount of time we let showblock to be true
    // then the green block show on the screen

    mounted(){
        // fire only when the component is mounted to the the DOM
        console.log('component mounted')
        // start the time
        // settimeout is a window function like the console.log
        // setTimeout(function(){ x.value = "2 seconds" }, 2000);
        setTimeout(()=>{
            this.showBlock=true
            this.startTimer()
            console.log(this.delay)
        }, this.delay)
    },
    updated(){
        // when the value updated
        console.log('component updated')
    },
    unmounted(){
        // when the component unmounted when we dont see it
        // good for vue router
    },
    methods:{
        // every 10 ms + 10 to the reactionTime
        // start right after showBlock true
        startTimer(){
            this.timer=setInterval( ()=>{
                this.reactionTime +=10
            },10 )
        },
        // clear the timer when click
        stopTimer(){
            clearInterval(this.timer)
            console.log(this.reactionTime)
            // pass along the this.reactionTime
            this.$emit('end',this.reactionTime)
        },
    }
}
</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding:100px;
        margin:40px auto;
    }
</style>