<template>
    <nav class="navbar py-3 navbar-expand-sm navbar-dark bg-primary mb-5">
  <a class="navbar-brand" href="#">Admin Dashboard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link :to="{name:'AdminHome'}" class="nav-link active" >Home </router-link>
      <router-link :to="{name:'courses'}" class="nav-link active" > Courses </router-link>
      <router-link :to="{name:'student'}" class="nav-link active" > Student </router-link>
      <router-link :to="{name:'Home'}" class="nav-link active" > Result </router-link>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"AdminNav"
}
</script>