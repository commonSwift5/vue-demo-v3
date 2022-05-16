<template>
	<div class="container">
		{{ name }}
		<button @click="updateName">改名</button>
	</div>
</template>

<script>
import { reactive, toRef } from '@vue/reactivity'
export default {
	name: 'App',
	setup() {
		// 响应式 数据对象
		const obj = reactive({
			name: 'zs',
			age: 18
		})
		// 注意：从响应式数据对象中解构出的属性数据，不再是响应式数据
		// let { name } = obj
		const name = toRef(obj, 'name')
		const updateName = () => {
			// toRef转换的数据已经是一个对象了通过toRef转化的要加value来改变值
			name.value = 'ls'
			console.log(name)
		}
		return { name, updateName }
	}
}
</script>

<style></style>
