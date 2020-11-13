import '@/assets/css/index.css'
import Vue from 'vue'
import App from '@/App.vue' // @ permet d'accéder directement au dossier src directement

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#Ongaku')

// const router = new VueRouter({
//   routes:[
//     {
//       path: 'New Album',
//       components: {
//         default: AlbumsInfos
//       }
//     }
//   ]
// })
