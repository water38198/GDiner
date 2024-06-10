import '@unocss/reset/eric-meyer.css';
import 'virtual:uno.css';
import './assets/scss/main.scss';

// SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
const options = {
  confirmButtonColor: '#3D081B',
}

// vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

//VeeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
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
import App from './App.vue';
import router from './router';
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2, options);
app.use(VueAxios, axios);

app.component('VLoading', Loading);
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
