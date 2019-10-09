<template>
   <div>
     <!--头部-->
     <pheader :back="true" :exit="false">贷款中心</pheader>
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
      name: "Loancenter",
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

<style scoped>

</style>
