<template>
    <div class="card mx-auto shadow w-50" >
  <div class="card-body">
    <h5 class="card-title text-md-center">Course registration and exams record </h5>
    
    <p class="card-text text-center font-bold"> Welcome {{name}} </p>
   
  </div>
</div>
</template>
<script>
export default {
   name:"card", 
   data(){
       return{
           name:localStorage.getItem('username')
       }
   }
}
</script>