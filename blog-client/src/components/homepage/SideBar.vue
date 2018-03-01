<template>
  <div class="list-group">
    <router-link v-for="article in articles" :key="article._id" :to="{ name: 'DetailTimeline', params:{id: article._id }}" class="list-group-item list-group-item-action">{{article.title}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['articles']

}
</script>

<style>
</style>
