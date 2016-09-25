<template>
  <div>
	  <button @click="incrementCounter">
	  	Increment +1
	  </button>
	  <button @click="decrementCounter">
	  	Increment -1
	  </button>
  </div>
</template>

<script>
	import { incrementCounter, decrementCounter } from '../vuex/actions'
	export default {
		vuex: {
			actions: {
				incrementCounter,
				decrementCounter
			}
		}
	}
</script>

