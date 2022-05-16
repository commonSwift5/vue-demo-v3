<template>
	<div class="container">
		<h1>子组件</h1>
		<div>{{ qian }}</div>
		<button @click="changeMoney">还有60元</button>
	</div>
</template>

<script>
export default {
	// 子组件接受数据用props即可和原来没什么差别
	props: {
		qian: {
			type: Number,
			default: 0
		}
	},
	// props父组件数据
	// emit 触发自定义事件的函数
	setup(props, { emit }) {
		// 可以通过传参在setup中使用props数据
		const changeMoney = () => {
			// 通知父组件钱还有60
			emit('update:qian', 60)
		}
		return {
			changeMoney
		}
	}
}
</script>

<style></style>
