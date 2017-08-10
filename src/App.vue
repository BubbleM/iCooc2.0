<template>
  <div id="app" class="tab">
    <div class="tab-item">
      <router-link to="/index">
        <span class="icon-home2"></span><br>首页
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/friendList">
        <span class="icon-address-book"></span><br>通讯录
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/message">
        <span class="icon-message"></span><br>消息
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/my">
        <span class="icon-user"></span><br>我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/icon.css";
  @import "common/stylus/mixin.styl";

  .tab
    display: flex
    position: absolute
    bottom: 0
    padding: 5px
    width: 100%
    height: 40px
    font-size: 14px
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex: 1
      text-align: center
      span
        font-size: 25px
</style>
