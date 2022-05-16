<template>
	<div class="container">
		<div>{{ name }}</div>
		<div @click="updateAge">{{ age }}</div>
	</div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
	name: 'App',
	setup() {
		const obj = reactive({
			name: 'zs',
			age: 18
		})
		// 2.解构或者展开都的不到响应式数据
		// const {name,age}=obj
		// const obj2={...obj}
		// 3.
		const obj2 = toRefs(obj)
		console.log(obj2)
		const updateAge = () => {
			// obj2.age.value = 19 // obj和obj2数据是联通的 也可以直接修改obj
			obj.age = 19
		}
		return {
			...obj2,
			updateAge
		}
	}
}
</script>

<style></style>
