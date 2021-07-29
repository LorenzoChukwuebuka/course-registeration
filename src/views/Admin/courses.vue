<template>
<main >

  <AdminNav/>

  <div class="row container  "> 

    <addCourse :levels="levels" :semesters="semesters" :load="load"/>

    <showCourse @Id="delcourse" :course="course" :load="load" :levels="levels"/>


   </div>
  


</main> 
 

 

 
   
</template>

<script>
import AdminNav from "../../components/AdminUI/navbar.vue"
import addCourse from "../../components/AdminUI/addCourse.vue"
import showCourse from "../../components/AdminUI/showCourses.vue"
import axios from 'axios'
axios.defaults.crossDomain = true
export default {
name:"courses",
components:{
    AdminNav,
    addCourse,
    showCourse
},
data(){
     return{
         levels:[],
        course:[],
		 load:[],
		 semesters:[]
	 
      
     }
},
mounted(){
  this.getlevels()
  this.getCourse()
  this.getCourseUnit()
  this.fetchsemester()
},

   methods:{
       getlevels(){
		   axios.get('http://localhost:3000/api/level')
		   .then(res=>{
			  this.levels = res.data
			   
		   })
	   },
	   getCourseUnit(){
		   axios.get('http://localhost:3000/api/course/courseLoad')
		   .then(res=>{
              this.load = res.data
		   })
	   },
     getCourse(){
       axios.get('http://localhost:3000/api/course')
	   .then(res=>{
		   this.course = res.data
	   })
     },
	 delcourse(cid){
         let Id = cid 
				// console.log('Id')
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
					axios.delete(`http://localhost:3000/api/course/course/${Id}`)
					this.$swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
					)
						setTimeout(() => {
						location.reload()
						}, 1000);
				}
		})

	 },
	   fetchsemester() {
      axios.get("http://localhost:3000/api/getStudent/semester").then((res) => {
        this.semesters = res.data;
      });
    },
	 
   }
}
</script>

<style>

</style>