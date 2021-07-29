<template>
   
 <div class="d-flex">
  <b-navbar toggleable="lg" type="dark" class="navbar py-3 navbar-expand-sm navbar-collapse mb-5" variant="primary">
    <b-navbar-brand href="#">Admin Dashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <router-link :to="{name:'AdminHome'}" class="nav-link active" >Home </router-link>
      <router-link :to="{name:'courses'}" class="nav-link active" > Courses </router-link>
      <router-link :to="{name:'student'}" class="nav-link active" > Student </router-link>
      <router-link :to="{name:'Home'}" class="nav-link active" > Result </router-link>
      
      </b-navbar-nav>

      <!-- Right aligned nav items -->

 
     

      
    </b-collapse>
  </b-navbar>
</div>
  
</template>

<script>
export default {
    name:"AdminNav"
}
</script>