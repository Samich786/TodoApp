<template>
   <div>
    <div class="main">
    <h1>WEllcome to ToDo App</h1>
    <!-- <p v-for="(data index) in showtext" :key="index" >{{data}}</p> -->
    
      <div class="todo">
        <input  type="text" ref="name"  placeholder="Input Here" v-model="gettext" class="inputtext" required>
       
        <Button v-on:click="addtext" v-show="trueValue" >Submit</Button>
      
        <Button v-on:click="updateText" v-show="falseValue" >Update</Button> 
      </div>
     <div class="main-show" v-if="forceRender" >
      
      <div class="Show" v-for="(item ,index) in showtext" :key="index" >
        <div class="show-item">{{item.text}}
          <i v-on:click="remove(index)" class="fas fa-trash" > </i>
          <i v-on:click="edit(item)" class="fas fa-edit" > </i>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
Name:'HelloWorld',

data(){
    return{
      gettext:"",
      showtext:[],
      updateId:null,
      forceRender:true,
      trueValue:true,
      falseValue:false,
     
    }
   
  },
  methods:{
    addtext(){
      if(this.gettext){
      const id =this.showtext.length+1
       const data = {
         id,
         text:this.gettext
       }
       this.showtext.push(data)
      this.$refs.name.focus();
      this.gettext="";
      console.log(data)
      }else{
        // this.error=("input is required");
      }
          
  },
   
    remove(obj){
      this.showtext.splice(obj,1)
      console.log(obj)
      this.$refs.name.focus();
      this.gettext="";
      this.falseValue=false,
      this.trueValue=true
    },
 edit(item){
  this.gettext=item.text
  this.updateId =item.id
  this.$refs.name.focus();
  this.falseValue=true,
  this.trueValue=false
  
 },
updateText(){
if(this.updateId != null){
  this.forceRender =false
  // console.log(this.updateId)
  const obj =this.showtext.find((item)=>item.id==this.updateId)
  const index =this.showtext.indexOf(obj)
  this.showtext[index]={
    id:this.updateId,
    text:this.gettext
  }
  this.updateId =null
  this.forceRender=true
  this.$refs.name.focus();
  this.gettext="";
  this.falseValue=false,
  this.trueValue=true
}
// alert("hhhhheeeeee")
} 
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  background: rgb(104, 104, 236);
  width: 400px;
  margin: auto;
  height: 600px;
  border: 5px solid rgb(104, 104, 236);
}
.inputtext{
  height: 30px;
  width: 300px;
  padding: 10px;
  border: solid 5px  rgb(233, 121, 121) solid ;
  background: rgb(233, 121, 121);
  color: white;

  
}
button{
  width: 80px ;
  height: 40px;
  background: yellow;
  border: 1px solid yellow;
  color: black;
  margin: 20px;
}
.main-show{
  max-height: 350px;
  overflow-y: auto;
}
.main-show::-webkit-scrollbar{
  display: none;
}
.Show{
  width: 380px;
  height:fit-content;
 
  /* border: solid 1px white; */
  background: rgb(104, 104, 236);
}
.show-item{
  border: 1px solid black;
  padding: 10px;
  background: white;
  margin: 3px;
  height: 20px;
  width: 350px;
  overflow: hidden;
  position: relative;
}
.show-item i{
  float: right;
  margin: 2px;
}
</style>
