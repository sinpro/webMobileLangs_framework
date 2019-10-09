const routes = [
  {
    path:'/',
    redirect:'/login'
  },{//登录
    path: '/login',
    name: 'Login',
    component: ()=>import('../components/Login.vue'),
    meta:{keepAlive:false,title:'登录',requireAuth:true}
  },{//登录_注册
    path: '/login/register',
    name: 'Register',
    component: ()=>import('../components/login/Register.vue'),
    meta:{keepAlive:false,title:'注册',requireAuth:true}
  },{//登录_忘记密码
    path: '/login/forgetpassword',
    name: 'Forgetpassword',
    component: ()=>import('../components/login/Forgetpassword.vue'),
    meta:{keepAlive:false,title:'忘记密码',requireAuth:true}
  }




  ,{//首页
      path: '/index',
      name: 'Index',
      component: ()=>import('../components/Index.vue'),
      meta:{keepAlive:false,title:'首页',requireAuth:true}
    },{//首页_我的账户
      path: '/index/myaccount',
      name: 'Myaccount',
      component: ()=>import('../components/index/Myaccount.vue'),
      meta:{keepAlive:false,title:'我的账户',requireAuth:true}
    },{//首页_转账
      path: '/index/transfer',
      name: 'Transfer',
      component: ()=>import('../components/index/Transfer.vue'),
      meta:{keepAlive:false,title:'转账',requireAuth:true}
    },{//首页_财富
      path: '/index/wealth',
      name: 'Wealth',
      component: ()=>import('../components/index/Wealth.vue'),
      meta:{keepAlive:false,title:'财富',requireAuth:true}
    },{//首页_信用卡
      path: '/index/creditcard',
      name: 'Creditcard',
      component: ()=>import('../components/index/Creditcard.vue'),
      meta:{keepAlive:false,title:'信用卡',requireAuth:true}
    },{//首页_生活缴费
      path: '/index/lifepaycost',
      name: 'Lifepaycost',
      component: ()=>import('../components/index/Lifepaycost.vue'),
      meta:{keepAlive:false,title:'生活缴费',requireAuth:true}
    },{//首页_黄金
      path: '/index/gold',
      name: 'Gold',
      component: ()=>import('../components/index/Gold.vue'),
      meta:{keepAlive:false,title:'黄金',requireAuth:true}
    },{//首页_聚能赚
      path: '/index/togethermake',
      name: 'Togethermake',
      component: ()=>import('../components/index/Togethermake.vue'),
      meta:{keepAlive:false,title:'聚能赚',requireAuth:true}
    },{//首页_富滇快贷
      path: '/index/richdianfastcredit',
      name: 'Richdianfastcredit',
      component: ()=>import('../components/index/Richdianfastcredit.vue'),
      meta:{keepAlive:false,title:'富滇快贷',requireAuth:true}
    },{//首页_富滇快线
      path: '/index/richdianfastline',
      name: 'Richdianfastline',
      component: ()=>import('../components/index/Richdianfastline.vue'),
      meta:{keepAlive:false,title:'富滇快线',requireAuth:true}
    },{//首页_更多
      path: '/index/indexmore',
      name: 'Indexmore',
      component: ()=>import('../components/index/Indexmore.vue'),
      meta:{keepAlive:false,title:'更多',requireAuth:true}
    },{//首页_贷款中心
      path: '/index/loancenter',
      name: 'Loancenter',
      component: ()=>import('../components/index/Loancenter.vue'),
      meta:{keepAlive:false,title:'贷款中心',requireAuth:true}
    },
    
    
    
    
    
    
    {//理财
      path: '/financial',
      name: 'Financial',
      component: ()=>import('../components/Financial.vue'),
      meta:{keepAlive:false,title:'搜索',requireAuth:true}
    },
    
    
    
    
    {//生活
      path: '/life',
      name: 'Life',
      component: ()=>import('../components/Life.vue'),
      meta:{keepAlive:false,title:'消息',requireAuth:true}
    },
    
    
    
    
    
    
    {//我的
      path: '/personal',
      name: 'Personal',
      component: ()=>import('../components/Personal.vue'),
      meta:{keepAlive:false,title:'我的',requireAuth:true}
    },
]
export default routes;
