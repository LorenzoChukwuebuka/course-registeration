<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="navbar py-3 navbar-expand-sm navbar-collapse mb-5"
      variant="primary"
    >
      <b-navbar-brand href="#">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'registerCourse'}" class="nav-link active">
            Register courses
          </router-link>
          <router-link :to="{ name: 'student' }" class="nav-link active">
            view results
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "DashNav",
};
</script>

<style></style>
