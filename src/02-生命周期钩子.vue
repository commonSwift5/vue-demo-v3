<template>
	<div class="container">内容</div>
</template>

<script>
import { onBeforeMount, onMounted } from '@vue/runtime-core'
export default {
	name: 'App',
	setup() {
		// 渲染前钩子
		onBeforeMount(() => {
			console.log('1')
		})
		// 渲染后钩子
		onMounted(() => {
			console.log('2')
		})
		// 我们可以定义多个相同的构造函数，去实现不同的逻辑
		onMounted(() => {
			console.log('3')
		})
	}
}
</script>

<style></style>
