<template>
  <div class="footer">
    <router-link v-for="(tablist,index) in tabList" :key="index" :to="tablist.dist">
      <i :class="tablist.class"></i>
      <span>{{tablist.cont}}</span>
    </router-link>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        tabList:[
          {class:'iconfont icon-shouye',cont:this.$t('index.footer.shouye'),dist:'/index'},
          {class:'iconfont icon-licai',cont:this.$t('index.footer.licai'),dist:'/financial'},
          {class:'iconfont icon-icon',cont:this.$t('index.footer.shenghuo'),dist:'/life'},
          {class:'iconfont icon-gerensvg',cont:this.$t('index.footer.wode'),dist:'/personal'},
        ]
      }
    },
    created(){

    },
    methods:{

    },
    computed:{},
    components:{


    }
  }
</script>
<style scoped lang="less">
  .footer{
    position: fixed;left: 0;bottom: 0;width: 100%;height: 1.2rem;display: flex;background: #fff;z-index:99;border-top: 1px solid #f1f1f1;
    a{
      display: flex;flex-direction: column;flex: 1;align-items: center;justify-content: center;color: #595963;
      i{
        font-size: .37rem;
      }
      span{
        font-size: .3rem;
      }
    }
    .router-link-active{
      color: #167be3;
      font-weight: 600;
    }
  }
</style>
