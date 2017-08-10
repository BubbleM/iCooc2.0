<template>
  <div class="carousel-wrap" id="carousel">
    <!--轮播图列表-->
    <transition-group class="slider-ul">
      <li v-for="(list, index) in images" :key="index"　v-show="index===currentIndex"
          @mouseenter="stop" @mouseleave="go">
        <router-link to="list.targetUrl">
          <img :src="list.imgeUrl" :alt="list.desc">
        </router-link>
      </li>
    </transition-group>
    <!--轮播图位置指示-->
    <div class="carousel-items">
      <span v-for="(item,index) in images.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'slider',
    data () {
      return {
        images: [],
        currentIndex: 0,
        timer: ''
      }
    },
    created () {
      let url = 'http://easy-mock.com/mock/59619a379adc231f357c0443/online_1499568695420/res/homeImages.do'
      this.$http.get(url).then((response) => {
        response = response.body
        if (response.code === 0) {
          this.images = response.data
        }
//        console.log(this.images)
      })

      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    },
    methods: {
      go () {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop () {
        clearInterval(this.timer)
        this.timer = null
      },
      change (index) {
        this.currentIndex = index
      },
      autoPlay () {
        this.currentIndex++
        if (this.currentIndex > this.images.length - 1) {
          this.currentIndex = 0
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel-wrap
    position: relative
    height: 300px
    width: 100%
    overflow: hidden
    .slider-ul
      width: 100%
      height: 100%
      li
        position: absolute
        width: 100%
        height: 100%
        img
          width: 100%
          height: 100%
    .carousel-items
        position: absolute
        z-index: 10
        top: 380px
        width: 100%
        margin: 0 auto
        text-align: center
        font-size: 0
        span
          display: inline-block
          height: 6px
          width: 30px
          margin: 0 3px
          background-color: #b2b2b2
          cursor: pointer
        .active
          background-color: $btn-color
</style>
