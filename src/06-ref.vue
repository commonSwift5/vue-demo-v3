<template>
	<div class="container">
		<div>{{ name }}</div>
		<div>{{ age }}</div>
		<button @click="updateName()">修改数据</button>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'App',
	//1.组合api起点
	setup() {
		let name = ref('zs')
		const updateName = () => {
			name.value = 'ls'
		}
		const age = ref(18)
		// ref 常用定义简单数据类型的响应式数据
		// 其实也可以定义复杂类型的响应式数据
		// const data = ref(null)
		// setTimeout(()=>{
		// 	data.value=res.data
		// },1000)
		return {
			name,
			age,
			updateName
		}
	}
}
</script>

<style></style>
