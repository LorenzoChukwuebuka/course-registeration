<template>
  <div class="home">
     <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/homeUI/login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
