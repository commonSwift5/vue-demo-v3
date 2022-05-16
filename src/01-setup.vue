<template>
	<div class="container">{{ msg }}</div>
	<button @click="say()">按钮</button>
</template>

<script>
export default {
	name: 'App',
	//1.组合api起点
	setup() {
		console.log('setup', this)
		const msg = 'hello'
		const say = () => {
			console.log('hello')
		}
		return {
			msg,
			say
		}
	},
	beforeCreate() {
		console.log('before', this)
	}
}
</script>

<style></style>
