<template>
	<div class="container">
		<h1>父组件 {{ count }}</h1>
		<!--vue提供 $event 就是原生事件对象 -->
		<button @click="$event.target.style.color = 'red'">按钮</button>
		<hr />
		<!-- 自定义事件没有事件对象 此时$event 代表 自定义事件的传参 -->
		<!-- <Son :modelValue="count" @update:modelValue="count = $event" /> -->
		<!-- 使用v-model -->
		<Son v-model="count" />
	</div>
</template>

<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
	name: 'App',
	components: {
		Son
	},
	setup() {
		const count = ref(0)

		return { count }
	}
}
</script>

<style></style>
