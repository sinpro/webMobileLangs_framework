<template>
	<div>
		<!--头部-->
	  <pheader :back="true" :exit="false">{{$t('togethermake.header.junengzhuan')}}</pheader>
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
  name: 'Togethermake',
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
