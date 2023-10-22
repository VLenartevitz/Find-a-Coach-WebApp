import router from './router.js'

import store from './store/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseBtn from './components/ui/BaseBtn.vue'
import BaseBadge from './components/ui/BaseBadge.vue'

const app = createApp(App)
app.use(router);
app.use(store);

app.component('base-card', BaseCard)
app.component('base-btn', BaseBtn)
app.component('base-badge' , BaseBadge)

app.mount('#app');
