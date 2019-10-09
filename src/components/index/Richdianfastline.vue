<template>
	<div>
		<!--头部-->
	  <pheader :back="true" :exit="false">{{$t('richdianfastline.header.fudiankuaixian')}}</pheader>
	  <!--内容-->
	  <div class="content"></div>
	  <!--脚部-->
	  <pfooter></pfooter>
	</div>
</template>

<script>
import Pheader from '../base/Pheader';
import Pfooter from '../base/Pfooter';
export default {
  name: 'Richdianfastline',
  data () {
  	return {}
  },
  methods:{
  
  },
  components:{
	  Pheader,Pfooter
	},
}



</script>

<style>
</style>
