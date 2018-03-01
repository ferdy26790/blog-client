<template>
  <div class="">
    <Navbar/>
    <div class="row">
      <div style="margin-top: 2em" class="col-md-3">
        <SideBar :articles='articles'/>
      </div>
      <div style="margin-top: 2em" class="col-md-8">
        <router-view :articles='articles'/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/homepage/Navbar'
import SideBar from '@/components/homepage/SideBar'
import Footer from '@/components/homepage/Footer'
export default {
  data () {
    return {
      articles: null
    }
  },
  components: {
    Navbar,
    SideBar,
    Footer
  },
  created: function () {
    this.$http.get('/api/artikel')
      .then((response) => {
        console.log(response.data.data)
        this.articles = response.data.data
      }).catch((err) => {
        console.error(err)
      })
  }
}
</script>

<style lang="css">
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #222;
    text-align: left;
    /* background-color: #ababab; */
}
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ababab;
    border-color: #acacac;
}
a {
    color: #e23e0d;
    text-decoration: none;
    background-color: transparent;
    /* text-align: center; */
    /* -webkit-text-decoration-skip: objects; */
}
</style>
