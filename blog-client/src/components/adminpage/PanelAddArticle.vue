<template>
  <form class="col-md-5 offset-md-2">
    <fieldset>
      <legend>Add Article</legend>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input v-model="title" type="text" class="form-control" placeholder="enter title...">
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Description</label>
        <textarea v-model="description" class="form-control" id="exampleTextarea" rows="3" placeholder="enter description... "></textarea>
      </div>
      <div class="form-group">
      <label for="exampleInputFile">Image</label>
      <br>
      <img v-if="image" :src="image" alt="">
      <input @change="onFileChange" type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" >
      <small id="fileHelp" class="form-text text-muted">upload</small>
    </div>
      <button type="button" class="btn btn-primary" @click="addArticle">Add</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  data () {
    return {
      image: null,
      imageToServer: null,
      title: null,
      description: null
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      var reader = new FileReader()
      var vm = this
      this.imageToServer = file
      console.log(reader)

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    addArticle () {
      let formData = new FormData()
      formData.append('image', this.imageToServer)
      formData.append('title', this.title)
      formData.append('description', this.description)
      // console.log(document.getElementById("exampleInputFile").files[0])
      this.$http.post('api/artikel/add', formData, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then((response) => {
          console.log(response.data.data)
          let newArticle = response.data.data
          this.$emit('addArticle', newArticle)
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css">
</style>
