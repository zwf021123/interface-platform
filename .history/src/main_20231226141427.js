import { createApp } from 'vue'
import '@/assets/style/base.scss'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/fonts/iconfont/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')
