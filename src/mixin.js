export const followMixin = {
	data() {
		return {
			loading: false
		}
	},
	methods: {
		followFn() {
			this.loading = true
			// 模拟请求
			setTimeout(() => {
				this.loading = false
			}, 1000)
		}
	}
}
