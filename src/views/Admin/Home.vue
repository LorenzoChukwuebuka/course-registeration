<template>
<div>
   <AdminNav/>
   <card/>
 



</div>
    
</template>

<script>
import AdminNav from "../../components/AdminUI/navbar.vue"
import card from "../../components/AdminUI/welcome.vue"
  
export default {
   name:"AdminHome",
   components:{
     AdminNav,
     card,
   

   },
   data(){
      return{
         IsAuthenticated:localStorage.getItem('Id'),
         modal:null
      }
   },
   mounted(){
      if(!this.IsAuthenticated){
         this.$router.push('/AdminLog')
      }
   }
}
</script>