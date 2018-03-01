<template>
  <div class="">
    <Navbar/>
    <div class="container row mt-4">
      <panel-admin/>
      <router-view :articles="articles" v-on:updatedArticle="updateArticle" v-on:addArticle="addArticle" v-on:deletedArticle="deleteArticle"/>
    </div>
  </div>

</template>

<script>
import PanelAdmin from '@/components/adminpage/PanelAdmin'
import Navbar from '@/components/homepage/Navbar'
export default {
  components: {
    PanelAdmin,
    Navbar
  },
  data () {
    return {
      articles: null
    }
  },
  created: function () {
    this.$http.get('/api/artikel')
      .then((response) => {
        this.articles = response.data.data
      }).catch((err) => {
        console.error(err)
      })
  },
  methods: {
    updateArticle (data) {
      // console.log('kedengeran', data);
      this.articles.forEach((article, idx) => {
        if (article._id === data._id) {
          this.articles.splice(idx, 1, data)
        }
      })
      alert('keupdate')
      this.$router.push('/admin')
    },
    addArticle (data) {
      this.articles.push(data)
      alert('ketambah')
      this.$router.push('/admin')
    },
    deleteArticle (data) {
      this.articles.forEach((article, idx) => {
        if (article._id === data._id) {
          this.articles.splice(idx, 1)
        }
      })
    }
  }
}
</script>

<style lang="css">

</style>
