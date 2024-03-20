import '@unocss/reset/eric-meyer.css'
import 'virtual:uno.css'
import './assets/main.scss'

import 'sweetalert2/src/sweetalert2.scss'
import 'vue-loading-overlay/dist/css/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//VeeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// 將規則一一加入VeeValidate
Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
});
setLocale('zh_TW');
//VeeValidate 結束
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
