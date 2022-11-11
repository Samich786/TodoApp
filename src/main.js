import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
// import MyHome from './components/MyHome.vue';
// import MyAbout from './components/MyAbout.vue';
  

Vue.config.productionTip = false

// Vue.use(VueRouter);
// const router=new VueRouter({
//   routes:[
//     {
//       path:'/',
//       // component: MyHome

//   },
//   {
//     path:'/MyAbout',
//     // component:MyAbout
//   }
//   ]
// });

new Vue({
//   router,
  render: h => h(App),
}).$mount('#app')
