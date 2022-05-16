<template>
	<div class="container">
		<div>{{ x }}</div>
		<div>{{ y }}</div>
		<div>数字:{{ num }}</div>
		<button @click="add">加1</button>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from 'vue'
export default {
	name: 'App',
	setup() {
		const obj = reactive({
			x: 0,
			y: 0
		})
		const move = e => {
			obj.x = e.pageX
			obj.y = e.pageY
		}
		onMounted(() => {
			document.addEventListener('mousemove', move)
		})
		onUnmounted(() => {
			document.removeEventListener('mousemove', move)
		})
		// 数字的累加功能
		let num = ref(0)
		const add = () => {
			num.value++
		}

		return { ...toRefs(obj), num, add }
	}
}
</script>

<style></style>
