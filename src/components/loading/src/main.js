import Vue from 'vue';
let LoadingConstructor = Vue.extend(require('./main.vue'));
let instance;
//let instances = [];
//let seed = 1;
var Loading = function(options) {
	if(Vue.prototype.$isServer) return;
	options = options || {};
	if(typeof options === 'string') {
		options = {
			loading: options
		};
	}

	let userOnClose = options.onClose;
	//let id = 'loading' + seed++;
	options.onClose = function() {
		Loading.close(userOnClose);
	};

	instance = new LoadingConstructor({
		data: options
	});

	//instance.id = id;
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);
	instance.dom = instance.vm.$el;
	//instances.push(instance);
	return instance.vm;
}

Loading.close = function(userOnClose) {
	if(typeof userOnClose === 'function') {
		userOnClose();
	}
	
	/*for(let i = 0, len = instances.length; i < len; i++) {
		if(id === instances[i].id) {
			if(typeof userOnClose === 'function') {
				userOnClose(instances[i]);
			}
			instances.splice(i, 1);
			break;
		}
	}*/
};

export default Loading;