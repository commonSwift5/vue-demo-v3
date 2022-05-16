<template>
	<div class="container">
		<h1>子组件{{ modelValue }}</h1>
		<button @click="fn">改变数字</button>
	</div>
</template>

<script>
export default {
	name: 'Son',
	props: {
		modelValue: {
			type: Number,
			default: 0
		}
	},
	setup(props, { emit }) {
		const fn = () => {
			emit('update:modelValue', 10)
		}
		return {
			fn
		}
	}
}
</script>

<style></style>
