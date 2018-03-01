<template>
  <div class="container">
    <!-- <form style="margin: auto;"> -->
      <fieldset>
        <legend>Login</legend>
        <br> <br>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      </fieldset>
    <!-- </form> -->
    <button @click="login({email:email, password:password})" type="button" class="btn btn-secondary">LOGIN</button>
    <p>don't have account? register <router-link :to="{ name: 'Register' }">Here</router-link></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style lang="css">
</style>
