import Vue from 'vue'
import App from './App'
import Home from './components/home.vue'
import timeEntries from './components/timeEntries.vue'
import logTime from './components/logTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/* 注册两个组件 */
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

// 路由 map
router.map({
	'/home': {
		component: Home
	},       
	'/time-entries': {
		component: timeEntries,
		subRoutes: {
			'/log-time': {
				component: logTime
			}
		}
	}
})

router.redirect({
	'*': '/home'
})

router.start(App, '#app')

