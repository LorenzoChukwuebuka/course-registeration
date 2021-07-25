<template>
  <div>

    <nav class="navbar navbar-expand-sm navbar-dark flex-md-row bd-navbar bg-primary p-3 mb-5">
  <a class="navbar-brand" href="#">Course Registration </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#"> Sign In </a>
     
    </div>
  </div>
</nav>
  
  </div>
</template>

<script>
export default {
    name:"Nav",
    data(){
      return{
        isAuthenticate:false
      }
    }
}
</script>