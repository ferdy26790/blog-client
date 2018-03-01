<template>
  <div class="col-md-9">
    <strong>title:</strong> <br>
    <input v-model="article.title" type="text" name=""> <br>
    <br>
    <strong>description:</strong> <br>
    <textarea v-model="article.description" rows="4" cols="50">
    </textarea> <br>
    <br>
    <strong>image:</strong> <br>
    <img :src="article.img" alt="" style="max-width:10rem">
    <input type="file" name="" value="">
    <br> <br>
    <button type="button" class="btn btn-secondary" @click="editArticle">Edit</button>
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
          this.article = response.data.data
        }).catch((err) => {
          console.error(err)
        })
    },
    editArticle () {
      this.$http.put(`api/artikel/edit/${this.article._id}`, {
        title: this.article.title,
        description: this.article.description
      })
        .then((response) => {
          // console.log(response.data.data)
          this.$emit('updatedArticle', response.data.data)
        }).catch((err) => {
          console.error(err)
        })
    }
  },
  created: function () {
    this.fetchArticle()
  }
}
</script>

<style lang="css">
</style>
