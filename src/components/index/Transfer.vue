<template>
	<div>
		<!--头部-->
	  <pheader :back="true" :exit="false">{{$t('transfer.header.zhuanzhang')}}</pheader>
	  <!--内容-->
	  <div class="content">

	  </div>
	  <!--脚部-->
	  <pfooter></pfooter>
	</div>
</template>

<script>
import Pheader from '../base/Pheader';
import Pfooter from '../base/Pfooter';
import { AlertModule, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'Transfer',
  data () {
  	return {

    }
  },
  methods:{

  },
  components:{
	Pheader,Pfooter,
	},
	mounted () {

  },

}



</script>

<style>
</style>
