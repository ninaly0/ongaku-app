import '@/assets/css/index.css'
import Vue from 'vue'
import App from '@/App.vue' // @ permet d'accéder directement au dossier src directement

Vue.config.productionTip = false

console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#Ongaku')
