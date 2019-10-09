<template>
  <div>
  	<!--头部-->
    <Pheader :back="false" :exit="true">{{$t('life.header.shenghuo')}}</Pheader>
    <!--内容-->
    <div class="content">

    </div>
    <!--脚部-->
    <Pfooter></Pfooter>
  </div>
</template>

<script>
import Pheader from './base/Pheader';
import Pfooter from './base/Pfooter';
export default {
  name: 'Message',
  data () {
    return {
      listNav:[
        {class:'iconfont icon-tubiaolunkuo-',name:'采购验收通知',isNavact:true},
        {class:'iconfont icon-liebiao',name:'审核通知',isNavact:false},
        {class:'iconfont icon-yaoqingma',name:'领用通知',isNavact:false},
        {class:'iconfont icon-remenicon',name:'异常预警',isNavact:false},
        {class:'iconfont icon-xiaoxi',name:'其它消息',isNavact:false}
      ],
    }
  },
  components:{
	  Pheader,Pfooter
	},
  created(){
   
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .listnav{
    width: 100%;background: #fff;padding: .23rem 0;
    ul{
      display: flex;flex-direction: row;
      li{
        display: flex;flex: 1;flex-direction: column;justify-content: center;align-items: center;
        label{
          height: .9rem;width: .9rem;display: inline-block;background: #afafaf;border-radius: 50%;text-align: center;line-height: .9rem;
          i{
            font-size: .46rem;color: #fff;
          }
        }
        span{margin-top: .16rem;}
      }
      .listnavAct>label{background: #3398ea;}
      .listnavAct>label>i{font-weight: 350;}
      .listnavAct>span{color: #3398ea;font-weight: 600;}
    }
  }
</style>
