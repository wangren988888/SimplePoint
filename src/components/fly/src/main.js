import Vue from 'vue';
let flyConstructor = Vue.extend(require('./main.vue'));
let instance;
//let instances = [];
//let seed = 1;

var flyModal = function(options) {
	if(Vue.prototype.$isServer) return;
	options = options || {};
	if(typeof options === 'string') {
		options = {
			greens: options
		};
	}

	let userOnClose = options.onClose;

	options.onClose = function() {
		flyModal.close(userOnClose);
	};

	instance = new flyConstructor({
		data: options
	});
	//instance.id = id;
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);
	instance.vm.visible = true;
	instance.dom = instance.vm.$el;
	//instances.push(instance);
	return instance.vm;
};

flyModal.close = function(userOnClose) {
	if(typeof userOnClose === 'function') {
		userOnClose();
	}
};
export default flyModal;