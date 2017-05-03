import Vue from 'vue';
let greensModalConstructor = Vue.extend(require('./main.vue'));
let instance;
//let instances = [];
//let seed = 1;

var greensModal = function(options) {
	if(Vue.prototype.$isServer) return;
	options = options || {};
	if(typeof options === 'string') {
		options = {
			greens: options
		};
	}

	let userOnClose = options.onClose;

	options.onClose = function() {
		greensModal.close(userOnClose);
	};

	instance = new greensModalConstructor({
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

greensModal.close = function(userOnClose) {
	if(typeof userOnClose === 'function') {
		userOnClose();
	}
};
export default greensModal;