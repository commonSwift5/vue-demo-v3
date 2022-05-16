<template>
	<div class="container">
		<div>{{ age }}</div>
		<div>{{ newAge }}</div>
		<input type="text" v-model="newAge" />
	</div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
export default {
	name: 'App',
	setup() {
		// 1.计算属性：点你需要依赖现有的响应式数据，得到一个新的数据。
		const age = ref(18)
		// 在使用ref属性记得value
		// const newAge = computed(() => {
		// 	return age.value + 2
		// })
		// 计算属性的高级用法
		const newAge = computed({
			// get函数，获取计算属性的值
			get() {
				return age.value + 2
			},
			// set属性，当你给计算属性设置值得时候触发
			set(value) {
				age.value = value - 2
			}
		})
		return {
			age,
			newAge
		}
	}
}
</script>

<style></style>
