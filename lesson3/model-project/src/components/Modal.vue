<template>
    <div class="backdrop" @click.self="closeModal"> 
        <!-- if theme equal to sale then give class =sale -->
        <div class="modal" :class="{sale:theme==='sale'}">
            <h1>{{ header }}</h1>
            <p>{{text}}</p>
            <!-- will pass into everything inside tag <MyModal><MyModal/> -->
            <!-- "default contnent" will only show if we didnt pass in any content -->
            <slot>default contents</slot>
            <!-- pass slot with name links into slot -->
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MyModal",
  props:['header','text','theme'],
  methods:{
      closeModal(){
          this.$emit('close')
      }
  },
  data(){
      return{}
  }
};
</script>

// the css component in App also will apply here
<style>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height:100%;
} 
/* will overwrite */
/* h1{
    color:#03cfb4;
    border:none;
    padding: 0;
}  */

.modal h1{
    color:#03cfb4;
    border:none;
    padding: 0;
  
}
.modal.sale{
    background: crimson;
    color: white;

}
.modal.sale h1{
    color: white;
}
.modal .actions{
    text-align: center;
    margin: 30px 0 10px 0;
    color:#333;
}
.modal .actions a{
    color:#333;
    padding:8px;
    border:1px solid #eee;
    border-radius:4px;
    text-decoration: none;
    margin:10px; 
}
.modal.sale .actions{
    color:white;
}
.modal.sale .actions a{
    color:white;
}
</style>

// apply style only for this component (scoped)
<style scoped>
/* .modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height:100%;
}

h1{
    color:#03cfb4;
    border:none;
    padding: 0;
} */
</style>