<template>
	<div class="container">
		<h1>
			作者：周杰伦
			<a href="javascript:;" @click="followFn">{{ loading ? '正在请求' : '关注' }}</a>
		</h1>
		<Son />
	</div>
</template>

<script>
import Son from './son.vue'
import { followMixin } from './mixin.js'
export default {
	components: {
		Son
	},
	mixins: [followMixin]
}
</script>

<style></style>
