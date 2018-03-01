<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="https://hacktiv8.com/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png" alt="oxford-fox" style="max-height: 3rem;">HacktivBlog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'TimeLine' }" class="nav-link">Home</router-link>

      </li>
      <li class="nav-item">
        <a @click="logOut" class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapMutations([
      'emptyUser'
    ]),
    logOut () {
      this.emptyUser()
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">

</style>
