<template>
  <div>
    <userNav />

    <div
      class="card  mx-auto  flex mt-5 shadow-lg"
      style="width:40%;background-color:lilac;"
    >
      <div class="card-body">
        <h5 class="card-title text-center">Student login</h5>
        <div v-if="errors.length" class="alert alert-danger " role="alert">
          <p class="text-center " v-for="error in errors">{{ error }}</p>
        </div>
        <form>
          <div class="form-group">
            <b-icon icon="lock-fill"></b-icon>
            <input
              type="text"
              placeholder="Enter your reg. Number"
              class="form-control"
              id="exampleInputEmail1"
              v-model="form.regNum"
            />
            <!--	<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <button
            type="submit"
            @click="submit"
            v-bind:disabled="disabledbtn"
            class="btn btn-primary mt-3"
          >
            login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import userNav from "@/components/UserUI/navbar.vue";
import axios from "axios";
axios.defaults.crossDomain = true;
export default {
  name: "userLog",
  components: {
    userNav,
  },
  data() {
    return {
      errors: [],
      form: {
        regNum: "",
      },
    };
  },
  computed: {
    disabledbtn: function() {
      if (this.form.regNum.length >= 8) {
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
        .post("http://localhost:3000/api/user/login", this.form)
        .then((res) => {
          if (res.data === 500) {
            this.errors.push("Incorrect details");
          } else {
            this.$router.push("/userDash");
            localStorage.setItem("Id", res.data[0].Id);
            localStorage.setItem("Fname", res.data[0].Fname);
            localStorage.setItem("Lname", res.data[0].Lname);
          }
        });
    },
  },
};
</script>

<style></style>
