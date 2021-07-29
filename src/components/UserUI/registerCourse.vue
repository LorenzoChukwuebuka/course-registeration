<template>

  <div class="card mx-auto d-flex shadow" style="width: 40rem;">
    <div class="card-body">
      <h5 class="card-title text-center">Register course</h5>
      <h6 class="card-subtitle mb-2 text-center text-muted">
        {{ fname }} {{ lname }}
      </h6>

      <b-form-group class="mx-2  my-2">
        <div class="mb-2">
          <label for="input-none" class="mx-1"> Session </label>
          <b-form-select v-model="form.session">
            <option class="px-3" value="__"> select session </option>
            <option
              v-for="session in sessions"
              :key="session.Id"
              :value="session.Id"
            >
              {{ session.session }}
            </option>
          </b-form-select>

          <label for="input-none" class="mx-1"> Semester </label>
          <b-form-select v-model="form.semester" @change="fetchCourse()">
            <option value="__"> select Semester </option>
            <option
              v-for="semester in semesters"
              :key="semester.Id"
              :value="semester.Id"
            >
              {{ semester.semester }}
            </option>
          </b-form-select>

          <label for="input-none" class="mx-1"> level </label>
          <b-form-select v-model="form.level" @change="fetchCourse()">
            <option value="__"> Select level </option>
            <option v-for="level in levels" :key="level.Id" :value="level.Id">
              {{ level.levels }}
            </option>
          </b-form-select>

        </div>

          <b-button class="" variant="info" @click="submit"> Submit </b-button>

      </b-form-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "courseRegister",
  props: ["levels", "sessions", "semesters", "fname", "lname"],
  data() {
    return {
      form: {
        semester: "",
        level: "",
        session: "",
      },
      
    }
  },

    methods:{
        fetchCourse(){
             let data = new Object()
             data.semester = this.form.semester
             data.level = this.form.level

         axios.post('http://localhost:3000/api/getStudent/course',data)
          .then(res=>{
              console.log(res.data)
          }) 
        },
        submit(e){
            e.preventDefault() 
            console.log(this.form)
        }
    }
};
</script>

<style></style>
