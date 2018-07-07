#### vue-subscribe
##### npm安装

```
npm install --save vue-subscribe
```
##### main.js引入

```
import vueSubscribe from 'vue-subscribe'
Vue.use(vueSubscribe)
```
##### 在组件里使用

```
<template>
  <vue-subscribe :setting="setting" :selectTime.sync="selectTime" ></vue-subscribe>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      //配置的对象
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
  },
  components:{

  }
}
</script>
```

