<template>
    <div class="backdrop"> 
        <div class="modal">
            <h1>Modal Title</h1>
            <p>modal content</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "MyModal",
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