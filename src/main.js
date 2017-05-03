import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
//导入路由
import router from './router'
//全局注册网络通讯插件
import Vueresource from 'vue-resource'
Vue.use(Vueresource);

import common from './assets/js/common'
Vue.prototype.common = common;

Vue.use(ElementUI)

require('vue-swipe/dist/vue-swipe.css');
const {
	Swipe,
	SwipeItem
} = require('vue-swipe');

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

var identity = "user";
var openid = "123456";
Vue.config.productionTip = false;

var overscroll = function(el) {
	el.addEventListener('touchstart', function() {
		var top = el.scrollTop,
			totalScroll = el.scrollHeight,
			currentScroll = top + el.offsetHeight;
		//If we're at the top or the bottom of the containers
		//scroll, push up or down one pixel.
		//
		//this prevents the scroll from "passing through" to
		//the body.
		if(top === 0) {
			el.scrollTop = 1;
		} else if(currentScroll === totalScroll) {
			el.scrollTop = top - 1;
		}
	});
	el.addEventListener('touchmove', function(evt) {
		//if the content is actually scrollable, i.e. the content is long enough
		//that scrolling can occur
		if(el.offsetHeight < el.scrollHeight)
			evt._isScroller = true;
	});
}
overscroll(document.getElementById('app'));
document.body.addEventListener('touchmove', function(evt) {
	//In this case, the default behavior is scrolling the body, which
	//would result in an overflow.  Since we don't want that, we preventDefault.
	if(!evt._isScroller) {
		evt.preventDefault();
	}
});

(function() {
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
	var metaEl = document.querySelector('meta[name="viewport"]');
	dpr = window.devicePixelRatio || 1;
	rem = docEl.clientWidth * dpr / 10;
	scale = 1 / dpr;
	// 设置viewport，进行缩放，达到高清效果
	metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

	// 设置data-dpr属性，留作的css hack之用
	docEl.setAttribute('data-dpr', dpr);

	// 动态写入样式
	docEl.firstElementChild.appendChild(fontEl);
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

	// 给js调用的，某一dpr下rem和px之间的转换函数
	window.rem2px = function(v) {
		v = parseFloat(v);
		return v * rem;
	};
	window.px2rem = function(v) {
		v = parseFloat(v);
		return v / rem;
	};

	window.dpr = dpr;
	window.rem = rem;
})();

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	},
	created() {
		if(identity == "user") {
			this.$router.push({
				name: 'index'
			});
		} else if(identity == "admin") {
			/*this.$router.push({
				name:'admin'
			});*/
		} else if(identity == "unregistered") {
			this.$router.push({
				name: 'register',
				params: {
					openid: openid
				}
			});
		}
	}
})