<template>
 <div> 
    {{count}}
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">decrement</button>
   
</div>
</template>

<script>



export default {
 Name:'MyCard',

data(){
    return {
       count:0 
     }

},
methods:{
   increment(){
    this.count++
   },
decrement(){
    if(this.count<1){
        this.count=0
    }else{
    this.count--
}


}

} }
</script>

<style>


</style>