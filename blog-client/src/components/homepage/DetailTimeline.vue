<template>
  <div class="">
    <div class="card mb-3">
      <h3 class="card-header"></h3>
      <div class="card-body">
        <h5 class="card-title">author: {{article.author.name}}</h5>
        <h6 class="card-subtitle text-muted">posted: {{article.created}}</h6>
      </div>
      <img style="height: 20em; width: 50%; display: block; margin-left: 25%;" :src="article.img" alt="Card image">
      <div class="card-body">
        <p class="card-text">
          {{article.description}}
        </p>
      </div>
      <div class="card-body">

      </div>
      <div class="card-footer text-muted">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        author: {
          name: ''
        },
        created: '',
        img: '',
        title: '',
        description: ''
      }
    }
  },
  props: ['id'],
  methods: {
    fetchArticle () {
      this.$http.get(`api/artikel/` + this.id)
        .then((response) => {
          console.log(response.data.data, 'ini')
          this.article = response.data.data
        }).catch((err) => {
          console.error(err)
        })
    }
  },
  created: function () {
    this.fetchArticle()
  },
  watch: {
    id: function () {
      this.fetchArticle()
    }
  }
}
</script>

<style>
</style>
