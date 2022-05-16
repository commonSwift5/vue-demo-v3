<template>
	<div class="container">
		<!-- vue2.0获取单个元素 -->
		<!-- 1.通过this.ref属性绑定改元素 -->
		<!-- 2.通过this.$refs.box获取元素 -->
		<!-- <div ref="box">我是box</div> -->
		<!-- vue2.0获取v-for遍历多个元素 -->
		<!-- 1.通过this.ref属性绑定改元素 -->
		<!-- 2.通过this.$refs.li获取元素 -->
		<!-- <ul>
			<li v-for="i in 4" :key="i" ref="li">{{ i }}</li>
		</ul> -->
		<!-- vue3.0 -->
		<div ref="box">我是box</div>
		<!-- 2.被遍历的元素 -->
		<ul>
			<li v-for="i in 4" :key="i" :ref="setDom">第{{ i }}li</li>
		</ul>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
	name: 'App',
	setup() {
		// 获取单个数据
		// 1.1.先定义一个 空的响应式数据ref定义的
		// 1.2.setup中返回改数据，你想获取的拿个元素，在该元素上使用ref属性绑定改数据即可。
		const box = ref(null)
		onMounted(() => {
			console.log(box)
		})
		// 2.获取v-for遍历
		// 2.1先定义一个空数组 接收所有的li
		// 2.2定义一个函数，往空数组pushDom
		const domList = []
		const setDom = el => {
			domList.push(el)
		}
		return { box, setDom }
	}
}
</script>

<style></style>
