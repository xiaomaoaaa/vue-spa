<template>
	<nav>
		<h3>Count is {{ getCount }}</h3>
	</nav>
</template>

<script>
	import { getCount } from '../vuex/getters'
	export default {
		vuex: {
			getters: {
				getCount
			}
		},
		ready () {
			console.log(this.getCount.count)
		}
	}
</script>
