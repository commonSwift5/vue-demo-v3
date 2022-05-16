<template>
	<div class="container">
		<h1>Son {{ money }}</h1>
		<hr />
		<GrandSon />
	</div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import GrandSon from './12-依赖GrandSon.vue'

export default {
	name: 'son',
	components: {
		GrandSon
	},
	setup() {
		//接收外层组件提供的数据
		const money = inject('money')
		return {
			money
		}
	}
}
</script>

<style></style>
