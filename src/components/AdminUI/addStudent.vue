<template>
  <div class="col-sm-6 col-md-6 ">
    <div class="card shadow-lg d-flex w-100">
      <div class="card-body">
        <h5 class="card-title text-center">Add student</h5>

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

        <b-form class="mt-2">
          <label for="input-none" class="mb-2"> Firsrt Name </label>
          <b-form-input trim id="input-1" v-model="form.fname" class="mb-2">
          </b-form-input>

          <label for="input-none" class="mb-2"> Last Name </label>
          <b-form-input trim id="input-1 " v-model="form.lname" class="mb-2">
          </b-form-input>

          <label for="input-none" class="mb-2 "> Other name </label>
          <b-form-input trim id="input-1" class="mb-2" v-model="form.oname">
          </b-form-input>

          <label for="input-none" class="mb-2"> Reg. Number </label>
          <b-form-input
            type="number"
            trim
            id="input-1"
            class="mb-2"
            v-model="form.regNumber"
          >
          </b-form-input>

          <b-button
            class="mt-3 bg-primary"
            :disabled="disablebtn"
            @click="submit"
          >
            submit
          </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.crossDomain = true;
export default {
  name: "addStudent",
  data() {
    return {
      form: {
        fname: "",
        lname: "",
        oname: "",
        regNumber: "",
      },
      error: [],
      success: [],
    };
  },
  computed: {
    disablebtn: function() {
      if (
        this.form.fname.length >= 3 &&
        this.form.lname.length >= 7 &&
        this.form.regNumber.length >= 8
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
      axios.post("http://localhost:3000/api/student", this.form).then((res) => {
        if (res.data === 200) {
          this.success.push("Student added successfully");
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else if (res.data === 501) {
          this.error.push("Student already exists");
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
