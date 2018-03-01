<template>
  <div class="list-group">
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
            <router-link :to="{ name: 'DetailTimeline', params: {id: article._id}  }">
              Read More
            </router-link>
          </small>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style lang="css">
</style>
