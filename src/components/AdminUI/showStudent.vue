<template>

  
       <div class="col-sm-6 col-md-6 text-center">
    <div class="card mx-5  shadow-lg" style="width:120%;">
  <div class="card-body">
    <h5 class="card-title"> List of Students </h5>
       <b-list-group>
                <b-list-group-item v-for="st in student" :key="st.Id">
                    <strong> First Name </strong>: &nbsp; {{st.Fname}} &nbsp; &nbsp; <strong> Last Name : &nbsp; </strong> {{st.Lname}} &nbsp; <b> reg Number </b>: {{st.regNum}} 
                    <p>  <span @click="deleteStu(st.Id)"> <b-button class="bg-danger"> <b-icon icon="trash-fill" aria-hidden="true">  </b-icon> </b-button> </span>
                     &nbsp;
                 
                   <span @click="startEdit(st,st.Id)"> <b-button class="bg-primary" v-b-modal.modal-1> <b-icon icon ="pencil-fill"> </b-icon> </b-button>  </span> </p>
                
                 </b-list-group-item>
            </b-list-group>
  </div>
</div>  



 <div>



                              <!--- edit modal  --->


      <b-modal id="modal-1" title="Edit courses ">
           <div v-if="success.length"> 
              <p v-for="suc in success">    <b-alert show variant="success"> {{suc}} </b-alert> </p>
          </div> 

        <div class="card">
            <div class="card-header">
                Courses
            </div>
            <div class="card-body">
                     <b-form>
                        <label for="input-none"> First Name </label>
                         <b-form-input class="mb-3" v-model="edit.fname"> </b-form-input>
                         <label for="input-none"> Last Name </label>
                         <b-form-input class="mb-3" v-model="edit.lname"> </b-form-input>
                          <label for="input-none"> Other Name </label>
                         <b-form-input class="mb-3" v-model="edit.oname"> </b-form-input>
                          <label for="input-none"> Reg Number </label>
                         <b-form-input type="number" class="mb-3" v-model="edit.regNumber"> </b-form-input>
                        

                       <b-form-input class="mb-3" v-model="edit.Id" hidden> </b-form-input>
                            
                            <b-button class="mt-3 bg-primary" @click="update"> update  </b-button>

                     </b-form>
            </div>
        </div>
     </b-modal>
    </div>   
















     </div>



      


           

  
</template>

<script>
import axios from 'axios'
axios.defaults.crossDomain = true
export default {
name:"showStudent",
props:['student'],

data(){
    return{
        success:[],
        error:[],
        edited:null,
        edit:{
            fname:"",
            lname:"",
            oname:"",
            regNumber:"",
            Id:''
        },
    }
},
mounted(){
    
},
  methods:{
      update(e){
           e.preventDefault()
           let Id = this.edit.Id
           axios.put(`http://localhost:3000/api/student/${Id}`,this.edit)
           .then(res=>{
               if(res.data === 200){
                    this.success.push('Student has been updated')
                     setTimeout(() => {
                   location.reload()
                 }, 2000);
               }
           })  
      },
      startEdit(st){
           this.edited = st
           this.edit.fname =this.edited.Fname
           this.edit.lname = this.edited.Lname
           this.edit.oname = this.edited.Oname
           this.edit.regNumber = this.edited.regNum
           this.edit.Id = this.edited.Id
      },
      deleteStu(Id){
         this.$emit('Id',Id)
      }
  }
}
</script>

<style>

</style>