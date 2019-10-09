<template>
  <div id="app">
    <!--需要缓存的-->
    <transition name="fadeIn">
      <keep-alive>
        <router-view class="Router" v-wechat-title="$route.meta.title" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition name="fadeIn">
      <router-view class="Router" v-wechat-title="$route.meta.title" v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
    return {
      transitionName: ''
    }
  },
  watch: {

  }
}
</script>

<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/common.css');
@import url('./assets/css/font/iconfont.css');
.fadeIn-enter{opacity: 0;}
.fadeIn-enter-active{transition: all 0.3s linear;}
.fadeIn-leave-active{transition: all 0.3s linear;opacity: 0}
.content{
    position: fixed;top:1rem;bottom:1.2rem;width: 100%;overflow-y: auto;overflow-x: hidden;background: #f1f1f1;
}
  .loading{text-align: center;line-height: 1rem;color: #d5d5d5;}
  .watchmore{height: .8rem;text-align: center;background: #0d70c5;color: #fff;line-height: .8rem;border-radius: .23rem;margin-top: .23rem;}
</style>
