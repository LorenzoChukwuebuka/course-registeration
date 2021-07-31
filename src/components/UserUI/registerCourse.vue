<template>
  <div class="card mx-auto d-flex shadow" style="width: 40rem;">
    <div class="card-body">
      <h5 class="card-title text-center mb-4">Register course</h5>
      <h6 class="card-subtitle mb-4 text-center text-muted">
        <strong> {{ fname }} {{ lname }} </strong>
      </h6>

      <b-form-group class="mx-2 my-2">
        <div class="mb-3">
          <label for="input-none" class="mx-1">Session</label>
          <b-form-select v-model="form.session">
            <option class="px-3" value="__">select session</option>
            <option
              v-for="session in sessions"
              :key="session.Id"
              :value="session.Id"
              >{{ session.session }}</option
            >
          </b-form-select>

          <label for="input-none" class="mx-1">Semester</label>
          <b-form-select v-model="form.semester" @change="fetchCourse()">
            <option class="px-3" value="__">select Semester</option>
            <option
              v-for="semester in semesters"
              :key="semester.Id"
              :value="semester.Id"
              >{{ semester.semester }}</option
            >
          </b-form-select>

          <label for="input-none" class="mx-1">level</label>
          <b-form-select v-model="form.level" @change="fetchCourse()">
            <option value="__">Select level</option>
            <option
              class="px-3"
              v-for="level in levels"
              :key="level.Id"
              :value="level.Id"
              >{{ level.levels }}</option
            >
          </b-form-select>
        </div>

        <hr />

        <b-form-checkbox
          v-model="form.courses"
          class="mb-2"
          v-for="course in courses"
          :key="course.cid"
          :value="course.cid"
        >
          <strong>Course code</strong>
          {{ course.course_code }} ::
          {{ course.course_title }}
        </b-form-checkbox>

        <b-button class variant="info" @click="submit">Register</b-button>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'courseRegister',
  props: ['levels', 'sessions', 'semesters', 'fname', 'lname'],
  data () {
    return {
      form: {
        semester: '',
        level: '',
        session: '',
        courses: [],
        Id: localStorage.getItem('Id')
      },
      courses: [],
      success: []
    }
  },

  methods: {
    fetchCourse () {
      let data = new Object()
      data.semester = this.form.semester
      data.level = this.form.level

      axios
        .post('http://localhost:3000/api/getStudent/course', data)
        .then(res => {
          this.courses = res.data
        })
    },
    submit (e) {
      e.preventDefault()

      this.$swal({
        title: 'Do you want to register courses?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`
      }).then(result => {
        /* Read more about isConfirmed, isDenied below */
        axios.post('http://localhost:3000/api/courseRegister', this.form)
        if (result.isConfirmed) {
          this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
          this.$swal('Changes are not saved', '', 'info')
        }
      })
      setTimeout(() => {
        location.reload()
      }, 3000)
    }
  }
}
</script>

<style></style>
