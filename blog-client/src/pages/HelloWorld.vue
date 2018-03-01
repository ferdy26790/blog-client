<template>
  <div class="">
    <div class="jumbotron">
      <h1 class="display-3">Welcome To HacktivBlog!</h1>
      <br>
      <p class="lead"><i>Put your blog out into the world and hope that your talent will speak for itself.</i></p>
      <hr class="my-4">
      <p>Create a unique and beautiful blog. It’s easy and free.</p>
      <br>
      <p class="lead">

        <router-link :to="{ name: 'Login'}">
          <button type="button" class="btn btn-secondary">CREATE YOUR BLOG</button>
        </router-link>
      </p>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Content from '@/components/welcomepage/Content'
import Footer from '@/components/homepage/Footer'
export default {
  name: 'HelloWorld',
  components: {
    Content,
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .form{
  border-color: lightgrey !important
} */
</style>
