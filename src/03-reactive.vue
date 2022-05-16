<template>
	<div class="container">
		{{ obj.name }}
		<button @click="updateName">换名</button>
	</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
	name: 'App',
	setup() {
		// 普通数据
		// const obj = {
		// 	name: 'ls',
		// 	age: 18
		// }
		// 响应式处理
		const obj = reactive({
			name: 'ls',
			age: 18
		})
		// 不能改变视图  不是响应式数据
		const updateName = () => {
			obj.name = 'zs'
			console.log(obj.name)
		}
		return { obj, updateName }
	}
}
</script>

<style></style>
