<template>
  <div>
    <v-slider></v-slider>
    <div class="job-wrapper" v-for="item in jobList">
      <div class="icon">
        <img :src="item.compId.compLogoUrl" alt="" width="100" height="100">
      </div>
      <div class="content">
        <h2 class="jobName">{{item.jobName}}</h2>
        <p class="compName">{{item.compId.compName}}</p>
        <div class="extra">
          <span>{{item.compId.compCity}}｜{{item.compId.financingType}}｜{{item.compId.type}}</span>
          <span>{{item.education}}｜{{item.experience}}｜{{item.salary}}</span>
        </div>
      </div>
      <div class="time">{{item.modified.substr(0,10)}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from './slider.vue'

  export default{
    name: 'index',
    data () {
      return {
        jobList: []
      }
    },
    created () {
      let url = 'http://easy-mock.com/mock/59619a379adc231f357c0443/online_1499568695420/job/getJobInfoList.do'
      this.$http.get(url).then((response) => {
        response = response.body
        if (response.code === 0) {
          this.jobList = response.data
        }
        console.log(this.jobList)
      })
    },
    components: {
      'v-slider': slider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl";

  .job-wrapper
    display: flex
    padding: 10px
    border-1px(rgba(7, 17, 27, 0.1))
    .icon
      flex: 1
    .content
      flex: 2
      padding-left: 10px
      margin: auto
      .jobName
        font-size: 14px
        font-weight: bold
        color: rgb(7, 17, 27)
      .compName
        margin: 5px 0
      .compName, .extra
        font-size: 13px
        color: rgb(147, 153, 159)
    .time
      flex: 1
      margin: auto
</style>
