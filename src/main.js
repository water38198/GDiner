import './assets/scss/main.scss';
// BS5 JS
import 'bootstrap';

// VueLoadingOverlay
import Loading from 'vue-loading-overlay';

//VeeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { all } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 將規則一一加入VeeValidate
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');
//VeeValidate 結束

// 引入 AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('VLoading', Loading);
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

// 初始化 AOS
AOS.init({
  once: false,
});

app.mount('#app')
