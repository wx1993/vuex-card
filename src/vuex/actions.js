import * as types from './mutation-types'

const newAction = (type) => {
	return ({ commit }, ...args) => {
		commit(type, ...args)
	}
}

export const addPhone = newAction(types.ADD_PHONE)
export const addEmail = newAction(types.ADD_EMAIL)
export const addBlog = newAction(types.ADD_BLOG)
export const removePhone = newAction(types.REMOVE_PHONE)
export const removeEmail = newAction(types.REMOVE_EMAIL)
export const removeBlog = newAction(types.REMOVE_BLOG)

// action 提交 mutation，而不是直接更改 this.state
// action 可以包含任意的异步操作