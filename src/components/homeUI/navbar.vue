<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="navbar py-3 navbar-expand-sm navbar-collapse mb-5"
      variant="primary"
    >
      <b-navbar-brand href="#">Course Registration</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Sign In</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isAuthenticate: false,
    };
  },
};
</script>
