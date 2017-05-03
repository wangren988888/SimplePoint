import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = resolve => require(['@/components/user/index.vue'], resolve);
const register = resolve => require(['@/components/user/register/register.vue'], resolve);
const myComment = resolve => require(['@/components/user/comment/comment.vue'], resolve);
const msgBoard = resolve => require(['@/components/user/msgBoard/msgBoard.vue'], resolve);
const courier = resolve => require(['@/components/courier/courier.vue'], resolve);

export default new Router({
	routes: [{
			path: '/register',
			name: 'register',
			component: register
		}, {
			path: '/courier',
			name: 'courier',
			component: courier
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			children: [{
				path: '/myComment',
				name: 'myComment',
				component: myComment
			}, {
				path: '/msgBoard',
				name: 'msgBoard',
				component: msgBoard
			}]
		},
		{
			path: '/myComment',
			name: 'myComment',
			component: myComment,
			children: [{
				path: '/index',
				name: 'index',
				component: index
			}, {
				path: '/msgBoard',
				name: 'msgBoard',
				component: msgBoard
			}, ]
		},
		{
			path: '/msgBoard',
			name: 'msgBoard',
			component: msgBoard,
			children: [{
				path: '/index',
				name: 'index',
				component: index
			}, {
				path: '/myComment',
				name: 'myComment',
				component: myComment
			}, ]
		}
	]
})