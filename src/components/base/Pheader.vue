<template>
  <div class="header">
  	<span class="back" v-if="back" @click="goBack"><i class="iconfont icon-xiangzuo"></i>{{$t('index.header.fanhui')}}</span>
    <slot></slot>
    <span class="exit" v-if="exit">
    	<i class="iconfont icon-gengduo"></i>|
    	<i class="iconfont icon-tuichu"></i>
    </span>
    <label v-else><i class="iconfont icon-gengduo1"></i></label>
  </div>
</template>

<script>
  export default {
    name: "Pheader",
    props:{
      back:{
        type:Boolean,
        default:true
      },
      exit:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header{
    position: fixed;top:0;left:0;width:100%;background: #167ee1;height: 1rem;text-align: center;line-height: 1rem;color:#f1fffa;font-size: .35rem;z-index:99;
   span{
   	display: inline-block;position: absolute;top:.25rem;font-size: .25rem;line-height: .5rem;
   }
   .back{
   	left: .16rem;font-size: .29rem;text-align: left;
   		i{font-size: .42rem;float: left;}
   	}
   .exit{
   	right: .16rem;border:1px solid #dcdcdc;border-radius: .39rem;padding: 0 .16rem;
   	i:nth-child(1){margin-right: .16rem;float: left;}
   	i:nth-child(2){margin-left: .16rem;float: right;}
   }
   label{
   	position: absolute;right: .16rem;
   	i{font-size: .36rem;}
   }

  }
</style>

