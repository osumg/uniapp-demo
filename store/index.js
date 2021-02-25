import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './login/index'

const modules = {
	login,
}

const store = new Vuex.Store({
	modules,
})

export default store
