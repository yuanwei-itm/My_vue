import { createApp } from 'vue'
import App from './App.vue'

// 👇👇👇 你的 main.js 里有没有这一行？如果没有，必须补上！ 👇👇👇
import './assets/main.css' 
// (注意：如果你之前把 CSS 文件放在了 src/style.css，这里就改成 import './style.css')

createApp(App).mount('#app')