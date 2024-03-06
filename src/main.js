import '@unocss/reset/eric-meyer.css'
import 'virtual:uno.css'
import './assets/main.scss'

import 'sweetalert2/src/sweetalert2.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
