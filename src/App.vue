<template>
  <div id="app">
    <vueSubscribe :setting="setting" :selectTime.sync="selectTime" ></vueSubscribe>
  </div> 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      setting:{
        dateLength:7,//显示多少天
        startTime:'08:00',//开始时间
        endTime:'23:30',//结束时间
        interval: 20,//步长，预约的时间间隔
        display:true,//设置这个组件是显示还是隐藏
        defaultTime:true,//是否设置默认时间
        dateBlock:true//右侧日期是否显示
      },
      //选择日期后，子组件返回的对象
      selectTime:{
        is_active:'',//不用管
        date:'',//18:00 时分
        picker:'',//2018-16-17 12:00 日期
        timestamp:''//156224456时间戳
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
