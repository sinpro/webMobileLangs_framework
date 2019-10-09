<template>
	<div>
		<!--头部-->
	  <pheader :back="true" :exit="false">{{$t('lifepaycost.header.shenghuojiaofei')}}</pheader>
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
  name: 'Lifepaycost',
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
