<template>
  <main>
    <DashNav />

    <div
      class="card  text-dark  mb-3 mx-auto d-flex shadow"
      style="max-width: 30rem;"
    >
      <div class="card-header text-center">
        Welcome {{ fname }}&nbsp;{{ lname }}
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">Course registered</h5>
        <p class="card-text text-center">7</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
axios.defaults.crossDomain = true;
import DashNav from "@/components/UserUI/DashNav.vue";
export default {
  name: "userDash",
  data() {
    return {
      fname: "",
      lname: "",
    };
  },
  components: {
    DashNav,
  },
  mounted() {
    this.getname();
  },
  methods: {
    getname() {
      let lastname = localStorage.getItem("Lname");
      let firstname = localStorage.getItem("Fname");
      this.fname = firstname;
      this.lname = lastname;
    },
  },
};
</script>

<style></style>
