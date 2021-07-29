<template>
  <main>
    <DashNav />

    <div class="container">
 
      <courseRegister :levels="levels" :semesters="semesters" :sessions="sessions" :fname="fname" :lname="lname"    />

    
    </div>
  </main>
</template>

<script>
import DashNav from "@/components/UserUI/DashNav.vue";
import courseRegister from '@/components/UserUI/registerCourse.vue'
import axios from "axios";
axios.defaults.crossDomain = true;
export default {
  name: "registerCourse",
  components: {
    DashNav,
    courseRegister
  },
  data() {
    return {
      fname: "",
      lname: "",
      levels: [],
      semesters: [],
      sessions: [],
     
    };
  },
  mounted() {
    this.getname();
    this.fetchsemester()
    this.fetchsession()
    this.fetchlevel()
  },
  methods: {
    getname() {
      let lastname = localStorage.getItem("Lname");
      let firstname = localStorage.getItem("Fname");
      this.fname = firstname;
      this.lname = lastname;
    },
    fetchlevel() {
      axios.get("http://localhost:3000/api/getStudent/level").then((res) => {
        this.levels = res.data;
      });
    },
    fetchsession() {
      axios.get("http://localhost:3000/api/getStudent/session").then((res) => {
        this.sessions = res.data;
      });
    },
    fetchsemester() {
      axios.get("http://localhost:3000/api/getStudent/semester").then((res) => {
        this.semesters = res.data;
      });
    },
    
  },
};
</script>

<style></style>
