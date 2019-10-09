<template>
  <div>
  	<!--头部-->
    <Pheader :back="false" :exit="true">{{$t('financial.header.licai')}}</Pheader>
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
  name: 'Search',
  data () {
    return {
      mtype:0,
      serachcont:'',
    }
  },
  created(){
   
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
