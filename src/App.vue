<template>
  <div class="app-wrapper">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: "App",
    mounted() {
      //vue-router库本身的问题，如果不加catch，会报vue-router.esm.js?8c4f:2065 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/welcome"，未找到更佳的解决方案
      this.$router.push('/welcome').catch(()=>{})
    }
  }
</script>