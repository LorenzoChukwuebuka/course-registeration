<template>
  <div>
    <Nav />

    <div
      class="card  mx-auto  flex mt-5 shadow"
      style="width:40%;background-color:lilac;"
    >
      <div class="card-body">
        <h5 class="card-title text-center">Admin Sign In</h5>
        <div v-if="errors.length" class="alert alert-danger" role="alert">
          <p v-for="error in errors">{{ error }}</p>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1"> Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="form.username"
            />
            <!--	<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              v-model="form.password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" @click="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/homeUI/navbar.vue";
import axios from "axios";
axios.defaults.crossDomain = true;
export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      axios
        .post("http://localhost:3000/api/login/", this.form)
        .then((res) => {
          if (res.data == 500) {
            this.errors.push("Incorrect Login Details ");
          } else if (res.data[0].type === 0) {
            this.$router.push("/Admin");
            localStorage.setItem("Id", res.data[0].Id);
            localStorage.setItem("username", res.data[0].Username);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
