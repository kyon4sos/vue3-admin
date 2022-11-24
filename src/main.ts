import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import ECharts from 'vue-echarts';
import router from './routes';
import App from './App.vue';
import './app';
import 'element-plus/dist/index.css';
import './assets/css/normalize.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/css/element.less';
import './assets/css/index.less';

const pinia = createPinia();
const app = createApp(App);

app.component('VChart', ECharts);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
