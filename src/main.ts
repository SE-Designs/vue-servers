import './assets/reset.scss'
import 'primevue/resources/themes/aura-dark-cyan/theme.css'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'

const app = createApp(App)

app.use(PrimeVue)
app.mount('#app')
