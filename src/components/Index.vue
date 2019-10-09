<template>
  <div>
  	<!--头部-->
    <Pheader :back="false" :exit="true">{{$t('index.header.shouye')}}</Pheader>
    <!--内容-->
    <div class="content">
    	<!--背景图-->
    	<div class="indexbg">
    		<Swiper :swiperSlides="sliders"></Swiper>
        <div class="linear"></div>
    	</div>
    	<!--导航栏-->
      <div class="listnav">
        <ul>
          <router-link v-for="(knowledgenav,index) in listNav" :key="index" :to="knowledgenav.dist" :class="{listnavAct:knowledgenav.isNavact}" tag="li">
            <label><img :src="knowledgenav.imgurl" alt="" /></label>
            <span v-text="$globalfn.limitVal(knowledgenav.name,7)"></span>
          </router-link>
        </ul>
      </div>
      <!--账单-->
      <router-link to="/index/loancenter" class="listimg" tag="div"><img src="../assets/img/index_banner.jpg" alt=""></router-link>
      <!--理财推荐-->
      <div class="recommended">
        <h5><span>理财推荐</span></h5>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
      <!--理财推荐-->
      <div class="recommended">
        <h5><span>基金推荐</span></h5>
        <ul>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <!--理财推荐-->
      <div class="recommended">
        <h5><span>大额存单推荐</span></h5>
        <ul>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
    <!--脚部-->
    <Pfooter></Pfooter>
  </div>
</template>

<script>
import Pheader from './base/Pheader';
import Pfooter from './base/Pfooter';
import Swiper from './base/Swiper';
export default {
  name: 'Index',
  data () {
    return {
    	sliders:[
	      {imgurl:require('../assets/img/ebg1.jpg'),dist:'index/myaccount'},
	      {imgurl:require('../assets/img/ebg2.jpg'),dist:'index/transfer'},
	      {imgurl:require('../assets/img/ebg3.jpg'),dist:'index/wealth'},
	      {imgurl:require('../assets/img/ebg4.jpg'),dist:'index/creditcard'},
	      {imgurl:require('../assets/img/ebg5.jpg'),dist:'index/lifepaycost'}
	    ],
      listNav:[
        {imgurl:require('../assets/img/indexNav_icon1.png'),name:this.$t('index.naver.wodezhanghu'),dist:'index/myaccount'},
        {imgurl:require('../assets/img/indexNav_icon2.png'),name:this.$t('index.naver.zhuanzhang'),dist:'index/transfer'},
        {imgurl:require('../assets/img/indexNav_icon3.png'),name:this.$t('index.naver.caifu'),dist:'index/wealth'},
        {imgurl:require('../assets/img/indexNav_icon4.png'),name:this.$t('index.naver.xinyongka'),dist:'index/creditcard'},
        {imgurl:require('../assets/img/indexNav_icon5.png'),name:this.$t('index.naver.shenghuojiaofei'),dist:'index/lifepaycost'},
        {imgurl:require('../assets/img/indexNav_icon6.png'),name:this.$t('index.naver.huangjin'),dist:'index/gold'},
        {imgurl:require('../assets/img/indexNav_icon7.png'),name:this.$t('index.naver.junengzhuan'),dist:'index/togethermake'},
        {imgurl:require('../assets/img/indexNav_icon2.png'),name:this.$t('index.naver.fudiankuaidai'),dist:'index/richdianfastcredit'},
        {imgurl:require('../assets/img/indexNav_icon1.png'),name:this.$t('index.naver.fudiankuaixian'),dist:'index/richdianfastline'},
        {imgurl:require('../assets/img/indexNav_icon8.png'),name:this.$t('index.naver.gengduo'),dist:'index/indexmore'},
      ],
    }
  },
  created(){
    
  },
  methods:{
    
  },
  mounted() {
  	
 	},
 	watch: {
 		
	},
  components:{
    Pheader,Pfooter,Swiper
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content{
	.indexbg{
		height: 3.6rem;max-height: 3.6rem;
	}
  .listnav{
    width: 100%;background: #fff;
    ul{
      display: flex;flex-direction: row;flex-flow:row wrap;padding-top: .13rem;
      li{
        display: flex;width: 20%;flex-direction: column;justify-content: center;align-items: center;margin: .16rem 0;
        label{
          height: .7rem;width: .7rem;display: inline-block;border-radius: .1rem;text-align: center;line-height: .9rem;
          img{width: 100%;height: 100%;}
        }
        span{margin-top: .1rem;}
      }
    }
  }
  .listimg{
    height: 1.9rem;padding: .2rem .1rem;img{width: 100%;height: 100%;border-radius: .09rem;}
  }
  .recommended{
    background: #fff;margin-bottom: .36rem;
    h5{padding: .16rem .23rem;span{font-size: .31rem;border-left: 2px solid #fe5345;padding-left: .23rem;}}
    ul{
      li{
        padding: .23rem;
      }
    }
  }
}

</style>
