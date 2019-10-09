<template>
	<div>
		<!--头部-->
	  <pheader :back="true" :exit="false">{{$t('indexmore.header.gengduo')}}</pheader>
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
  name: 'Indexmore',
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
