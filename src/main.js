import { createApp } from 'vue'
import App from './App.vue'

// 1. 내가 직접 만든 기능 설정 파일
import routes from './routes/index.js';

// createApp(App).mount('#app')

const app = createApp(App);

// 2. 필요한 기능 사용하도록 설정
app.use(routes);

app.mount('#app')