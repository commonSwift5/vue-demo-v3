<template>
	<div class="container">
		<h1>父组件 {{ money }}</h1>
		<button @click="money = 1000">花钱</button>
		<hr />
		<Son />
	</div>
</template>

<script>
import { provide, ref } from 'vue'
import Son from './son.vue'
export default {
	name: 'App',
	components: {
		Son
	},
	setup() {
		const money = ref(100)
		// 将数据提供给后代 provide
		const changeMoney = s => {
			money.value -= s
		}
		// 可以把函数传给后代
		provide('changeMoney', changeMoney)
		provide('money', money)
		return {
			money,
			changeMoney
		}
	}
}
</script>

<style></style>
