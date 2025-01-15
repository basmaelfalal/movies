/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
// Emitter Config
import mitt from 'mitt';
const Emitter = mitt();



//pinia config
import { createPinia } from "pinia";


const pinia = createPinia()


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
