<template>
    <div>
      <div class="header">
        {{$t('login.header.denglu')}}
        <i class="iconfont icon-xiangzuo" @click="goHome"></i>
        <x-switch class="tablang" title="" :linline-desc=titles @on-change="changeLocale" v-model="langStuts">开关</x-switch>
      </div>
      <div class="content">
        <div class="loginwrap">
          <div class="loginlogo"> </div>
          <div class="loginformwrap">
            <div class="loginform">
              <article class="input">
                <i class="iconfont icon-yonghuming"></i>
                <XInput class="inputIndent5 inputFs" :placeholder="$t('login.content.usernameplaceholder')" ></XInput>
              </article>
              <article class="input marginT23">
                <i class="iconfont icon-mima"></i>
                <XInput class="inputIndent5 inputFs" type="password" :placeholder="$t('login.content.passwordplaceholder')"></XInput>
              </article>
              <XButton class="marginT36" type="warn" @click.native="goHome">{{$t('login.content.denglubtn')}}</XButton>
              <flexbox class="marginT23">
                <flexbox-item><router-link to="login/forgetpassword" class="flex-demo" tag="div">{{$t('login.content.wangjimima')}}</router-link></flexbox-item>
                <flexbox-item><router-link to="login/register" class="flex-demo" tag="div">{{$t('login.content.xinyonghuzhuce')}}</router-link></flexbox-item>
              </flexbox>
            </div>
          </div>
          <div class="logintabwrap">
            <div class="logintab">
              <h5>{{$t('login.content.wenxintishi')}}</h5>
              <p>{{$t('login.content.wenxintishineirong')}}</p>
            </div>
          </div>

        </div>
      </div>
      <div class="footer">{{$t('login.footer.weixinyinhang')}}</div>
    </div>
</template>

<script>
  import { Search,XButton,XInput,Flexbox,FlexboxItem,XSwitch } from 'vux'
  export default {
    name: "Login",
    data(){
      return {
        value:0,
        langStuts:false,
        titles:'中文/EN'
      }
    },
    created(){
      console.log(this.$store.getters.languages)
      if(this.$store.getters.languages=='zh-CN'){
        this.langStuts=true;
      }else{
        this.langStuts=false;
      }
    },
    methods:{
      goHome(){
        this.$router.push({ path:'/index'})
      },
      changeLocale (e) {
        console.log(e)
        if(!e){
          this.Cookies.set('SET_LANGUAGES', 'en-US');
          this.$store.commit('SET_LANGUAGES', 'en-US');
          this.$router.go(0);
        }else{
          this.Cookies.set('SET_LANGUAGES', 'zh-CN');
          this.$store.commit('SET_LANGUAGES', 'zh-CN');
          this.$router.go(0);
        }

      }
    },
    components: {
      Search,XButton,XInput,Flexbox,FlexboxItem,XSwitch
    }
  }
</script>

<style scoped lang="less">
  .header{
    height: 1rem;width: 100%;position: fixed;top: 0;left: 0;z-index:99;text-align: center;line-height: 1rem;font-size: .32rem;
    i{position: absolute;left: .23rem;top: 0;font-size: .42rem;}
    .tablang{position: absolute;right: 0;top: 0;}
  }
  .content{
    height: 100%;width: 100%;position: fixed;top: 0;bottom: 0;background: #fff;
    .loginwrap{
      height: 60%;width: 100%;top: 20%;left:0;position: absolute;
      .loginlogo{
        height: 30%;width: 100%;background: #ccc;background: url("../assets/img/loginLogo.png") no-repeat center;background-size: auto 1.1rem;
      }
      .loginformwrap{
        height: 50%;padding: 0 .42rem;
        .loginform{
          height: 100%;width:100%;overflow: hidden;
          .input{
            height: .8rem;border-bottom: 1px solid #d1d1d1;position: relative;
            i{font-size: .46rem;position: absolute;left: 0;}
            .weui-cell:before{border-top: none;}
          }
          .flex-demo {
            text-align: center;color: #b54434;font-size: .32rem;
          }
        }
      }
      .logintabwrap{
        height: 20%;padding: 0 .42rem;
        .logintab{
          width: 100%;
          h5{font-size: .28rem;}p{font-size: .26rem;}
        }
      }

    }
  }
  .footer{
    height: 1rem;width: 100%;position: fixed;bottom: 0;left: 0;z-index:99;text-align: center;line-height: 1rem;font-size: .32rem;
  }
</style>
