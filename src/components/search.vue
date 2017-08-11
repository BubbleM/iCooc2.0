<template>
  <div class="container">
    <div class="input-wrapper">
      <span class="icon-search"></span>
      <input type="text" value="搜索职位/公司">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'search'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/icon.css";

  .container
    position: fixed
    top: 0
    height: 80px
    width: 100%
    z-index: 999
    background-color: rgb(0, 153, 255)
    .input-wrapper
      position: relative
      margin: 20px 20px
      height: 40px
      display: flex
      background-color: #fff
      span
        flex: 0.5
        text-align: center
        margin: auto
      input
        flex: 5.5
        height: 100%
        margin: auto
        color: rgb(147, 153, 159)
        text-align: center
</style>
