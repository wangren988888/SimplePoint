import Vue from 'vue';
let cartConstructor = Vue.extend(require('./main.vue'));
let instance;
//let instances = [];
//let seed = 1;

var cartModal = function(options) {
	if(Vue.prototype.$isServer) return;
	options = options || {};
	if(typeof options === 'string') {
		options = {
			greens: options
		};
	}

	let userOnClose = options.onClose;

	options.onClose = function() {
		cartModal.close(userOnClose);
	};

	instance = new cartConstructor({
		data: options
	});
	//instance.id = id;
	instance.vm = instance.$mount();
	document.getElementById('app').appendChild(instance.vm.$el);
	instance.vm.visible = true;
	instance.dom = instance.vm.$el;
	//instances.push(instance);
	return instance.vm;
};

cartModal.close = function(userOnClose) {
	if(typeof userOnClose === 'function') {
		userOnClose();
	}
};
export default cartModal;