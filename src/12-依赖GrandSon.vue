<template>
	<div class="container">
		<h1>GrandSon {{ money }}</h1>
		<button @click="fn(20)">消费20</button>
	</div>
</template>

<script>
import { inject } from 'vue'
export default {
	name: 'grdson',
	setup() {
		//接收外层组件提供的数据
		const money = inject('money')
		// 孙组件，消费50通知父组件App.vue组件，进行修改
		// 不能自己修改数据，遵循单项数据流原则 数据谁定义谁修改
		const fn = sale => {
			changeMoney(sale)
		}
		const changeMoney = inject('changeMoney')
		return {
			money,
			fn
		}
	}
}
</script>

<style></style>
