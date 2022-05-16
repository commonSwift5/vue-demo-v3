//主要职责：创建一个vue应用
// 1.导入createApp函数从vue中
// 2.创建一个根组件App.vue导入至main
// 3.使用createApp创建应用实例
// 4.应用内是咧挂载到 #app容器中
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// vue2.0 Vue.mixin({全局混入的选项对象})
// vue3.0 Vue.mixin({全局混入的选项对象})
app.mixin({
	mounted() {
		// $el 组件的根元素
		console.log(this.$el, 'don')
	}
})
app.mount('#app')
