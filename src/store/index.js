import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isModalOpen: false
	},
	getters: {},
	mutations: {
		showModal(state) {
			state.isModalOpen = true;
		},
		hideModal(state) {
			state.isModalOpen = false;
		}
	},
	actions: {},
	modules: {}
});
