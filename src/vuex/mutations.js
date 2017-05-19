import { ADD_PHONE, ADD_EMAIL, ADD_BLOG, REMOVE_PHONE, REMOVE_EMAIL, REMOVE_BLOG } from './mutation-types'

export const state = {
	user: {
		baseInfo: {
			name: 'wangxi',
			age: 24,
			gender: 'male',
			location: 'Hangzhou'
		},
		contact: {
			phone: '',
			email: ''
		},
		blog: {
			url: ''
		}
	}
}

export const mutations = {
	[ADD_PHONE] (state, phone) {
		state.user.contact.phone = phone
	},
	[ADD_EMAIL] (state, email) {
		state.user.contact.email = email
	},
	[ADD_BLOG] (state, url) {
		state.user.blog.url = url
	},
	[REMOVE_PHONE] (state){
		state.user.contact.phone = ''
	},
	[REMOVE_EMAIL] (state){
		state.user.contact.email = ''
	},
	[REMOVE_BLOG] (state){
		state.user.blog.url = ''
	}
}