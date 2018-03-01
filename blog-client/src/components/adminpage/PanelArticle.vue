<template>
  <div class="col-md-9" style="border: 1px solid lightgrey">
    <div class="row" >
      <a v-for="article in articles" :key="article._id" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{article.title}}</h5>
          <small>3 days ago</small>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img :src="article.img" alt="" style="max-width:10rem">
          </div>
          <div class="col-md-9" style="text-align: left">
            <p class="mb-1">
              {{article.description}}
            </p>
            <small>
              <router-link :to="{ name: 'PanelEditArticle', params: {id: article._id}  }">
                <i class="material-icons">&#xE254;</i>
              </router-link>
              <br> <br>
              <a class="tombol" @click="deleteArticle(article._id)">
                <i class="material-icons">&#xE92B;</i>
              </a>
            </small>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  name: 'PanelArticle',
  methods: {
    deleteArticle (data) {
      this.$http.delete(`api/artikel/delete/${data}`)
        .then((response) => {
          let deletedArticle = response.data.data
          this.$emit('deletedArticle', deletedArticle)
        }).catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="css">
.tombol:hover {
  cursor:pointer;
  text-decoration: underline;
 }
 .tombol:hover i{
   text-decoration: underline;
 }
</style>
