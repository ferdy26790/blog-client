<template>
  <div class="container">
    <form>
      <fieldset>
        <legend>Register</legend>
        <br> <br>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input v-model="name" type="text" class="form-control" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
      </fieldset>
      <button @click="register" type="button" class="btn btn-secondary">REGISTER</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    register () {
      this.$http.post('api/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then((response) => {
          console.log(response)
          alert('register berhasil, silahkan login')
          this.$router.push('login')
        }).catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="css">
</style>
