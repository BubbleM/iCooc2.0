<template>
  <div id="app">
    <!-- 路由切换组件 template 插入的位置 -->
    <router-view></router-view>
    <div class="tab">
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
    position: fixed
    bottom: 0
    padding: 5px
    width: 100%
    height: 40px
    font-size: 14px
    background-color: rgb(153, 153, 153)
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        color: rgb(77, 85, 93)
        &.active
          color: rgb(0, 153, 255)
      span
        font-size: 25px
</style>
