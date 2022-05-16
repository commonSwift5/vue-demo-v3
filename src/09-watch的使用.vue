<template>
	<div class="container">
		<p>count的值：{{ count }}</p>
		<button @click="add">改数据</button>
		<hr />
		<div>姓名是：{{ name }}</div>
		<div>年龄是：{{ age }}</div>
		<div>brand: {{ brand.name }}</div>
		<button @click="updateName()">改名</button>
		<button @click="updateAge()">改年龄</button>
		<button @click="updateBrand()">改brand</button>
	</div>
</template>

<script>
import { ref, watch, toRefs, reactive, toRef } from 'vue'

export default {
	name: 'App',
	setup() {
		const count = ref(0)
		const add = () => {
			count.value++
		}
		// 当你需要监听数据的变化就可以使用watch
		// 1.监听ref定义的数据变化
		// 1.1第一个参数 需要监听的目标
		// 1.2第二个参数 该不是后触发的函数
		watch(count, (newVal, oldVal) => {
			console.log(newVal, oldVal)
		})
		//2.监听 reactive 定义的数据
		const obj = reactive({
			name: 'ls',
			age: 10,
			brand: {
				id: 1,
				name: 'xs'
			}
		})
		const updateName = () => {
			obj.name = 'zs'
		}
		watch(obj, (newVal, oldVal) => {
			// 因为是对象只能打印出改变后的值
			console.log('数据改变了')
		})
		//3.监听多个数据的变化
		watch([count, obj], val => {
			console.log(val)
		})
		// 4.监听reactive对象中某一个属性的变化
		const updateAge = () => {
			obj.age++
		}
		// 需要携程函数放回改属性的方式才能监听到
		watch(
			() => obj.age,
			() => {
				console.log('监听到obj.name改变了')
			}
		)
		// 5.监听reactive对象里面的对象
		const updateBrand = () => {
			obj.brand.name = 'xh'
		}
		watch(
			() => obj.brand.name,
			() => {
				console.log('监听到了obj.brand.name')
			}
		)
		// watch有第三选项  deep可以监听到更深的变化
		watch(
			() => obj.brand,
			() => {
				console.log('brand数据改变了')
			},
			{
				deep: true,
				// 默认执行
				immediate: true
			}
		)
		return { count, add, ...toRefs(obj), updateName, updateAge, updateBrand }
	}
}
</script>

<style></style>
