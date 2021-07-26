<template>
  <main>  
   <AdminNav /> 

   <div class="container row d-flex ">

       <addStudent />

       <showStudent :student="student"  @Id="deleteStudent" />
    
        



     



 
 </div>

 </main>
  
</template>

<script>
import axios from 'axios'
axios.defaults.crossDomain = true
import  AdminNav from "../../components/AdminUI/navbar.vue"
import addStudent from "../../components/AdminUI/addStudent.vue"
import showStudent from "../../components/AdminUI/showStudent.vue"
export default {
    name:"student",
  components:{
      AdminNav,
      addStudent,
      showStudent
  },
  data(){
      return{
          student:[]
      }
  },
  mounted(){
      this.getStudents()
  },
   methods:{
       getStudents(){
           axios.get('http://localhost:3000/api/student')
           .then(res=>{
              this.student = res.data
           })
       },
       deleteStudent(Id){
          this.$swal({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.isConfirmed) {
					axios.delete(`http://localhost:3000/api/student/${Id}`)
					this.$swal.fire(
					'Deleted!',
					'Student has been deleted.',
					'success'
					)
						setTimeout(() => {
						location.reload()
						}, 2000);
				}
		})

       }
   }
}
</script>

<style>

</style>