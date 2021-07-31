<template>
  <main>
    <AdminNav />

    <div class="container d-flex">
      <div
        class="card container-fluid d-flex mx-auto shadow-sm"
        style="width: 40rem;"
      >
        <div class="card-body">
          <h5 class="card-title  text-center ">Add student Results</h5>

          <label> Select course </label>
          <b-form-select
            size="sm"
            class="mt-3 w-100"
            @change="getStudents()"
            v-model="get.Id"
          >
            <option value="__" disabled> select course </option>
            <option v-for="cos in courses" :key="cos.Id" :value="cos.Id">
              {{ cos.course_code }} {{ cos.course_title }}
            </option>
          </b-form-select>

          <b-list-group
            v-for="regs in registerdStd"
            :key="regs.cid"
            :value="regs.cid"
          >
            <b-list-group-item disabled
              >list of Students who registered for this course
            </b-list-group-item>
            <b-list-group-item>
              <router-link
                :to="{
                  name: 'resultInput',
                  query: { 
					  courseId: regs.cid,
					  studentId: regs.sid,
					  coursename: regs.course_title,
					  stuFname :regs.Fname,
					  stuLname :regs.Lname

				  }
                }"
              >
                {{ regs.Fname }} {{ regs.Lname }} {{ regs.Oname }}
              </router-link>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AdminNav from '@/components/AdminUI/navbar.vue'
import axios from 'axios'
axios.defaults.crossDomain = true
export default {
  name: 'result',
  components: {
    AdminNav
  },
  data () {
    return {
      courses: [],
      get: {
        Id: ''
      },
      registerdStd: []
    }
  },
  mounted () {
    this.fetchCourse()
  },
  computed: {},
  methods: {
    fetchCourse () {
      axios.get('http://localhost:3000/api/result').then(res => {
        this.courses = res.data
      })
    },
    getStudents () {
      axios
        .post('http://localhost:3000/api/result/getStudents', this.get)
        .then(res => {
          this.registerdStd = res.data
        })
    }
  }
}
</script>

<style></style>
