<template>
  <div class="col-sm-6 col-md-6">
    <div class="card shadow-lg d-flex w-100 mx-5">
      <div class="card-body">
        <h5 class="card-title text-md-center">Add Courses</h5>

        <div class=" bg-dark" v-if="error.length">
          <p v-for="err in error">
            <b-alert show variant="danger"> {{ err }} </b-alert>
          </p>
        </div>

        <div class="w-100 bg-dark" v-else-if="success.length">
          <p v-for="success in success">
            <b-alert show variant="success"> {{ success }} </b-alert>
          </p>
        </div>

        <label for="input-none"> Course Code</label>
        <b-form-input
          class="mb-3 "
          v-model="form.courseCode"
          placeholder="Enter course code"
        ></b-form-input>

        <label for="input-none">Course Title</label>
        <b-form-input
          v-model="form.CourseTitle"
          placeholder="Enter course title"
        ></b-form-input>

        <div class="mb-3">
          <label for="input-none"> level</label>
          <b-form-select class="mt-3 mx-1" v-model="form.level">
            <option value="__"> Select level </option>
            <option
              class="px-3 "
              v-for="level in levels"
              :key="level.Id"
              :value="level.Id"
            >
              {{ level.levels }}
            </option>
          </b-form-select>

		   <label for="input-none"> semester</label>
          <b-form-select class="mt-3 mx-1 form-select-md" v-model="form.semester">
            <option value="__"> Select semester </option>
            <option
              class="px-3 "
              v-for="semester in semesters"
              :key="semester.Id"
              :value="semester.Id"
            >
              {{ semester.semester }}
            </option>
          </b-form-select>

          <label for="input-none" class="mx-1"> unit </label>
          <b-form-select class="mt-3 mx-1" v-model="form.courseLoad">
            <option value="__"> Select unit </option>
            <option
              class="px-3 "
              v-for="cu in load"
              :key="cu.Id"
              :value="cu.Id"
            >
              {{ cu.course_load }}
            </option>
          </b-form-select>
        </div>
        <div>
          <button
            class="btn btn-primary"
            v-bind:disabled="disablebtn"
            @click="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.crossDomain = true;
export default {
  name: "addCourse",
  props: ["levels", "load","semesters"],

  data() {
    return {
      form: {
        courseCode: "",
        CourseTitle: "",
        courseLoad: "",
        level: "",
		semester:""
      },
      error: [],
      success: [],
    };
  },
  computed: {
    disablebtn: function() {
      if (
        this.form.courseCode.length >= 3 &&
        this.form.CourseTitle.length >= 7
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();
     axios
        .post("http://localhost:3000/api/course/course", this.form)
        .then((res) => {
          if (res.data === 200) {
            this.success.push("Course added successfully");
            setTimeout(() => {
              location.reload();
            }, 2000);
          } else if (res.data === 501) {
            this.error.push("Course already exists");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
        }); 
    }, 
  },
};
</script>

<style></style>
