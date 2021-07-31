<template>
  <main> 
 
  <AdminNav/>

  <div class="container">

    <b-card title="Title" header-tag="header"  footer-tag="footer">
      <template #header>
        <h6 class="mb-0"> hello </h6>
      </template>
      <b-card-text>Header and footers using slots.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
  
    </b-card>

    </div>
      
      
      
 </main>
</template>

<script>
import AdminNav from '@/components/AdminUI/navbar.vue'
import axios from 'axios'
axios.defaults.crossDomain = true
export default {
 name:"resultinput",
 components:{
     AdminNav
 },
 data(){
     return{

     }
 },
 created(){
   if(this.$route.query.courseId === undefined || this.$route.query.studentId === undefined){
       this.$router.push('/')
   }
 }
}
</script>

<style>

</style>