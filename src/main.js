import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js";
import naive from 'naive-ui'
const app = createApp(App)

app.use(naive)
app.use(router)
app.mount('#app')
