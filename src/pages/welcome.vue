<template>
  <div class="wrapper">
    <img
      :src="avatar"
      class="avatar"
    />
    <p>{{ welcomeTxt }}</p>
    <p>github地址：<a href="https://github.com/yyISACoder/vue2-custom-scaffold" target="_blank">https://github.com/yyISACoder/vue2-custom-scaffold</a></p>
  </div>
</template>

<script>
  import avatar from '@/assets/images/avatar.jpg'

  export default {
    name: "App",
    computed: {
      welcomeTxt() {
        return this.$store.state.welcomeTxt
      }
    },
    data() {
      return {
        avatar
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #c2e9ff;
  .avatar {
    width: 200px;
    border-radius: 50%;
  }
  p{
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    &:nth-child(3) {
      margin-top: 100px;
      a {
        color:#00f;
        text-decoration: underline;
        &:hover {
          color: #40a9ff;
        }
      }
    }
  }
}
</style>
