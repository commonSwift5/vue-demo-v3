<template>
	<div class="container">
		<h1>父组件</h1>
		<p>{{ money }}</p>
		<hr />
		<!-- 监听事件的方法 不能加执行符号 -->
		<!-- <son :qian="money" @update:qian="updateMoney"></son> -->
		<!-- 简写实现钱和money的双向绑定 -->
		<son v-model:qian="money"></son>
	</div>
</template>

<script>
import { ref } from 'vue'
import Son from './son.vue'
export default {
	components: {
		Son
	},
	name: 'App',
	// 父组件的数据传递给子组件
	setup() {
		const money = ref(100)
		const updateMoney = e => {
			money.value = e
		}
		return {
			money,
			updateMoney
		}
	}
}
</script>

<style></style>
