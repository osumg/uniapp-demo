import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
	name: 'zs',
	age: 18,
	gender: '1'
}

const login = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

export default login
