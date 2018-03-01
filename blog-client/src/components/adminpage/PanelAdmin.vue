<template>
  <div class="col-md-3">
    <ul class="nav nav-pills flex-column" style="border: 1px solid lightgrey">
      <li class="nav-item">
        Hi Admin!
        <br>
        <img src="https://hacktiv8.com/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png" alt="oxford-fox" style="max-height: 3rem;">
      </li>
      <br>
      <li class="nav-item">
        <div class="">
          <i class="material-icons mt-2">&#xE02F;</i>
          <br>
          <router-link :to="{ name: 'PanelAddArticle' }">
            <button type="button" class="btn btn-secondary btn-sm mb-2">Add Articles</button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
