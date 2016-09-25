
// 应用初始状态
const state = {
	count: 0
}

// 定义所需的 mutations
const mutations = {
	INIT (state, val) {
		state.count = val
	},
	INCREMENT (state) {
		state.count++
	},
	DECREMENT (state) {
		if (state.count > 0) {
			state.count--
		}
	}
}

export default {
	state,
	mutations
}