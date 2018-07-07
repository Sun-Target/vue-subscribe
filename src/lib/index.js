import vueSubscribe from './vue-subscribe.vue'
const subscribe = { 
	install (Vue, options) 
	{ 
		Vue.component(vueSubscribe.name, vueSubscribe);
	}
}
export default subscribe

if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(subscribe);
}
