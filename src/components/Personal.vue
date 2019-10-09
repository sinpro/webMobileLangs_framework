<template>
  <div>
  	<!--头部-->
    <Pheader :back="false" :exit="true">{{$t('personal.header.geren')}}</Pheader>
    <!--内容-->
    <div class="content">

    </div>
    <!--脚部-->
    <Pfooter></Pfooter>
  </div>
</template>

<script>
import Pheader from './base/Pheader';
import Pfooter from './base/Pfooter';
export default {
  name: 'Personal',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
		

</style>
