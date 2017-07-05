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
Vue.use(VueTouch, {
	name: 'v-touch'
})
Vue.config.productionTip = false;

//微信的引入
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://res.wx.qq.com/open/js/jweixin-1.2.0.js";
document.body.appendChild(script);

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

//在微信端获取微信号
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
var data = "";

function setPort(port, build) {
	//传code
	var username = getQueryString('code');
	if(port == 0) {
		//正式环境接口地址
		localStorage.setItem('url', '');
		localStorage.setItem('websocketUrl', '');
	} else if(port == 1) {
		//开发环境接口地址
		localStorage.setItem('url', '');
		localStorage.setItem('websocketUrl', '');
	} else if(port == 2) {
		//测试环境接口地址
		localStorage.setItem('url', '');
		localStorage.setItem('websocketUrl', '');
	}
	if(build == 0) {
		//打包
		data = 'client_id=client' + '&client_secret=secret' +
			'&grant_type=password' + '&username=' + username + '&password=""';
	} else if(build == 1) {
		//本地
		data = 'client_id=client' + '&client_secret=secret' +
			'&grant_type=password' + '&username=ADMIN' +
			'&password=yadea01admin';
	}
}
//全局变量url
setPort(1, 0);
//获取接口地址前缀
Vue.prototype.portUrl = localStorage.getItem('url');
Vue.prototype.websocketUrl = localStorage.getItem('websocketUrl');
Vue.prototype.requestData = function(param) {
	this.$http.post(this.portUrl + param.proturl, param.data, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
		}
	}).then(function(res) {
		param.callback(res);
	}, function(res) {})
}

//vue-resource,可以看下文档
Vue.http.post(localStorage.getItem('url') + 'oauth/token', data, {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function(res) {
	console.log(res);
	localStorage.setItem("access_token", res.body.access_token);

	//localStorage.setItem("access_token", '7b27572d-4e31-4af3-8fc8-86a7d16c19f1');	//WR

	var param = {
		"pUrl": window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search,
		"timestamp": new Date().getTime()
	}
	//获取微信签名，之后才能对微信配置
	//参数
	Vue.http.post(localStorage.getItem('url') + 'api/getJsTicket',
		param, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
			}
		}).then(function(res) {
		//获取到微信的信息后进行微信的配置
		console.log('okConfigWX');
		var result = null;
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: res.body.rows[0].corpid, // 必填，公众号的唯一标识
			timestamp: res.body.rows[0].timestamp, // 必填，生成签名的时间戳
			nonceStr: res.body.rows[0].nonceStr, // 必填，生成签名的随机串
			signature: res.body.rows[0].signature, // 必填，签名，见附录1
			jsApiList: [
				"onMenuShareTimeline",
				"onMenuShareAppMessage",
				"onMenuShareQQ",
				"onMenuShareWeibo",
				"onMenuShareQZone",
				"startRecord",
				"stopRecord",
				"onVoiceRecordEnd",
				"playVoice",
				"pauseVoice",
				"stopVoice",
				"onVoicePlayEnd",
				"uploadVoice",
				"downloadVoice",
				"chooseImage",
				"previewImage",
				"uploadImage",
				"downloadImage",
				"translateVoice",
				"getNetworkType",
				"openLocation",
				"getLocation",
				"hideOptionMenu",
				"showOptionMenu",
				"hideMenuItems",
				"showMenuItems",
				"hideAllNonBaseMenuItem",
				"showAllNonBaseMenuItem",
				"closeWindow",
				"scanQRCode",
				"chooseWXPay",
				"openProductSpecificView",
				"addCard",
				"chooseCard",
				"openCard",
			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	}, function(res) {
		console.log(res)
	});
	//创建实例
	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: {
			App
		},
		created() {
			this.$http.post(localStorage.getItem('url') + 'api/getOpenId', {}, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
				}
			}).then(function(res) {
				localStorage.setItem("openid", res.body.rows[0].openId);
				var param = {
					wechatID: localStorage.getItem('openid')
				};
				//判断角色
				this.$http.post(localStorage.getItem('url') + 'api/getUser',
					param, {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
						}
					}).then(function(res) {
					console.log(res);
					//res.body.rows[0].role = "unregistered";
					if(res.body.rows[0].role == "user") {
						this.$router.push({
							name: 'index',
							params: res.body.rows[0]
						});
					} else if(res.body.rows[0].role == "admin") {
						this.$router.push({
							name: 'admin',
							params: res.body.rows[0]
						});
					} else if(res.body.rows[0].role == "unregistered") {
						this.$router.push({
							name: 'register',
							params: res.body.rows[0]
						});
					}
				})
			})
		},
	})
})
