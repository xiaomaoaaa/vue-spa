<template>
	<nav>
		<h3>Count is {{ counterValue }}</h3>
	</nav>
</template>

<script>
	import { getCount } from '../vuex/getters'
	export default {
		vuex: {
			getters: {
				counterValue: getCount
			}
		}
	}
</script>
