import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入normalize
import '@assets/style/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@assets/style/index.scss'

// 导入icons
import '@/icons'
// 权限控制
import '@/permission'

Vue.use(ElementUI, { size: 'medium' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
