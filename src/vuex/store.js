import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import { state, mutations } from './mutations' 

// console.log(getters);
Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	actions,
	mutations,
	getters
	// getters: {
	// 	getName () {
	// 		return state.user.name
	// 	}
	// }
})

console.log(store.getters.getUser.baseInfo.name);

export default store


// getters 会暴露为 store.getters 对象，在组件中可以通过 
// this.$store.getters.getName 的方式来获取


// 在一个文件或模块中，export、import可以有多个，export default仅有一个
// 通过export方式导出，在导入时要加{ }，export default则不需要