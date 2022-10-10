import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';

import AppDate from '@/components/common/AppDate.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('AppDate', AppDate);

app.mount('#app')
