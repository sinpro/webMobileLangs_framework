<template>
	<div>
		<!--头部-->
	  <pheader :back="true" :exit="false">{{$t('myaccount.header.wodezhanghu')}}</pheader>
	  <!--内容-->
	  <div class="content">
	  	<!--1-->
	  	<div class="echarts_1">
	  		<div>
			    <v-chart :data="data_1">
				     <v-scale y :options="yOptions" />
				     <v-tooltip disabled />
				     <v-pie :radius="0.85" series-field="name" />
				     <v-legend :options="legendOptions" />
		   		</v-chart>
		  	</div>
	  	</div>
	  	<!--2-->
	  	<div class="echarts_2">
	  		<div>
			    <v-chart :data="data_2">
			      <v-scale y :min="0" /> <!-- 默认 y 轴数值从数据的最小值到最大值，此处重置为从 0 开始 -->
			      <v-point :styles="{
			        stroke: '#fff',
			        lineWidth: 1
			      }"/>
			      <v-tooltip :show-item-marker="false" :on-show="onShow" /> <!-- onShow 为 F2 属性而非事件-->
			      <v-line />
			    </v-chart>
			  </div>
	  	</div>
	  </div>
	  <!--脚部-->
	  <pfooter></pfooter>
	</div>
</template>

<script>
import Pheader from '../base/Pheader';
import Pfooter from '../base/Pfooter';
import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale,VPoint, } from 'vux';
const map = {
  '芳华': '34%',
  '妖猫传': '20%',
  '机器之血': '18%',
  '心理罪': '15%',
  '寻梦环游记': '5%',
  '流浪地球': '6%',
  '其他': '2%',
};
export default {
  name: 'Myaccount',
  data () {
  	return {
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      map,
      data_1: [
        { name: this.$t('myaccount.content.map.fanghua'), percent: 0.4, a: '1' },
        { name: this.$t('myaccount.content.map.maoyaozhuan'), percent: 0.2, a: '1' },
        { name: this.$t('myaccount.content.map.jiqizhixue'), percent: 0.18, a: '1' },
        { name: this.$t('myaccount.content.map.xinlizui'), percent: 0.15, a: '1' },
        { name: this.$t('myaccount.content.map.xunmenghuanyouji'), percent: 0.05, a: '1' },
        { name: this.$t('myaccount.content.map.liulangdiqiu'), percent: 0.06, a: '1' },
        { name: this.$t('myaccount.content.map.qita'), percent: 0.02, a: '1' }
      ],
      onShow (ev) {
        const { items } = ev
        items[0].name = null
        items[0].value = '$ ' + items[0].value
      },
      data_2: [
        { day: this.$t('myaccount.content.weeks.xingqiyi'), value: 300 },
        { day: this.$t('myaccount.content.weeks.xingqier'), value: 400 },
        { day: this.$t('myaccount.content.weeks.xingqisan'), value: 350 },
        { day: this.$t('myaccount.content.weeks.xingqisi'), value: 500 },
        { day: this.$t('myaccount.content.weeks.xingqiwu'), value: 490 },
        { day: this.$t('myaccount.content.weeks.xingqiliu'), value: 600 },
        { day: this.$t('myaccount.content.weeks.xingqitian'), value: 900 }
      ]
    }
  },
  methods:{
  
  },
  components:{
	  Pheader,Pfooter,
	  VChart,
	    VLine,
	    VArea,
	    VTooltip,
	    VLegend,
	    VBar,
	    VPie,
	    VScale,
	    VPoint
	},
}



</script>

<style>
</style>
