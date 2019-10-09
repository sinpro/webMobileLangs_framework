<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide.imgurl" alt="" @click="gourl(slide.dist)">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
    export default {
      name: 'carousel',
      props:['swiperSlides'],
      data() {
        return {
          swiperOption: {
            autoplay:{
              disableOnInteraction: false
            },
            speed: 600,
            loop: true,
            setWrapperSize :true,
            pagination: {
              el: '.swiper-pagination'
            },
            observeParents:true
          }
        }
      },
      methods:{
      	gourl(url){
      		this.$router.push({ path:url})
      	}
      }
     
    }
</script>

<style scoped>
  img{
    height:3.6rem;width: 100%;
  }
</style>
