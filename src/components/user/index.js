/**
 * Created by 王仁 on 2017/4/1.
 * 邮箱：
 * ren.wang@hand-china.com
 * 842837175@qq.com
 */
import BScroll from 'better-scroll'
import greensModal from "../greensModal";
import flyModal from "../fly"
import hotIcon from "../../assets/img/hot.png"
export default {
	data() {
		//当前页面所需绑定的变量放到这里
		return {
			headerMenu: [{
				href: '/index',
				title: '商品'
			}, {
				href: '/myComment',
				title: '评价'
			}, {
				href: '/msgBoard',
				title: '留言'
			}, ],
			routerName: '', //头部菜单路由名
			headerMenuOn: 0, //头部菜单默认，0为商品
			headerHintStyle: {},
			leftNavStyle: {},
			navListStyle: {},
			scrollBoxStyle: {},
			scroll: null, //滚动实例
			navItemIndex: 0, //默认的菜单分类，0为热销榜
			leftNav: [{
				title: "热销榜",
				code: "HOTSELL",
				icon: hotIcon
			}, {
				title: "营养早餐",
				code: "BREAKFAST",
				icon: ''
			}, {
				title: "特色午餐",
				code: "LUNCH",
				icon: ''
			}, {
				title: "下午茶",
				code: "TEA",
				icon: ''
			}, {
				title: "小吃零食",
				code: "SOCK",
				icon: ''
			}],
			greensList: [{
					classTitle: "热销榜",
					code: "HOTSELL",
					greensPartList: [{
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp1.jpg',
						greensTitle: "鸭腿饭",
						describe: "鸭腿，两素菜，豆干，卤蛋",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10001',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp1.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp3.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp4.jpg',
						greensTitle: "鸡腿饭",
						describe: "鸡腿，两素菜，豆干，卤蛋",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10002',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp4.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp6.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp7.jpg',
						greensTitle: "兔腿饭",
						describe: "兔腿，两素菜，豆干，卤蛋",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10003',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp7.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp9.jpg'
						]
					}, ]
				},
				{
					classTitle: "营养早餐",
					code: "BREAKFAST",
					greensPartList: [{
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10004',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp11.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp1.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
						greensTitle: "清粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10005',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp3.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp4.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
						greensTitle: "蛋肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10006',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp6.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp7.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
						greensTitle: "粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10007',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp9.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg'
						]
					}, ]
				},
				{
					classTitle: "特色午餐",
					code: "LUNCH",
					greensPartList: [{
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
						greensTitle: "鸭腿饭",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10001',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp11.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp1.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
						greensTitle: "鸡腿饭",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10002',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp3.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp4.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
						greensTitle: "兔腿饭",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10003',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp6.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp7.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
						greensTitle: "辣椒炒肉",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '10008',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp9.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg'
						]
					}, ]
				},
				{
					classTitle: "下午茶",
					code: "TEA",
					greensPartList: [{
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp11.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp1.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp3.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp4.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp6.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp7.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp9.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg'
						]
					}, ]
				},
				{
					classTitle: "零食小吃",
					code: "SOCK",
					greensPartList: [{
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp11.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp1.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp2.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp3.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp4.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp5.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp6.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp7.jpg'
						]
					}, {
						stopimg: 'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
						greensTitle: "皮蛋瘦肉粥",
						describe: "皮蛋，芹菜，瘦肉，香菜",
						sale: 25,
						goodDir: "100%",
						money: 13,
						greensId: '123456',
						swipeList: [
							'http://servicewx.yadea.com.cn/upload/test/temp8.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp9.jpg',
							'http://servicewx.yadea.com.cn/upload/test/temp10.jpg'
						]
					}, ]
				},
			],
			shopList: [
				[{
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}],
				[{
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}],
				[{
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}],
				[{
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}],
				[{
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}, {
					goods: {},
					numb: 0
				}],
			], //购物车中的商品
			greensAmong: [], //滚动队列
			cutScrollType: 1, //滚动类型。1.为自然滚动；2.为点击菜单分类滚动
			isCut: true,
			carLeft: 0,
			carTop: 0,

		}
	},
	components: {
		//模版文件导入后在这里初始化

	},
	methods: {
		//所有构建的方法放在这里面
		//初始化数据
		init: function() {
			var that = this;
			var headInfo = document.getElementById('headInfo');
			var headInfoH = headInfo.clientHeight;

			var headerMenuDom = this.common.getElementsClass('headerMenu flexOne on');
			var headerMenuDomW = headerMenuDom[0].clientWidth;

			var header = document.getElementById('header');
			var headerH = header.clientHeight;

			var appDom = document.getElementById('app');
			var appH = appDom.clientHeight;

			var scrollBox = document.querySelector('.scrollBox');

			var mainDom = document.getElementById('main');

			var left = (headerMenuDomW / 2 - (75 / 2)) / window.rem;
			this.headerHintStyle = {
				left: left + 'rem'
			}

			var contentH = (appH - headInfoH - headerH) / window.rem;
			this.leftNavStyle = {
				height: contentH + 'rem'
			}
			this.navListStyle = {
				minHeight: contentH + 'rem'
			}
			
			this.carLeft = this.$refs.shopCarBox.offsetLeft;
			this.carTop = this.$refs.shopCarBox.offsetTop;

			/*this.scrollBoxStyle = {
				height: (contentH*window.rem) + 'px'
			}*/

			var itemLength = this.common.getElementsClass('greensItem');
			for(var i = 0; i < itemLength.length; i++) {
				if(i == 0) {
					var h = itemLength[i].clientHeight;
					this.greensAmong.push(h);
				} else {
					for(var t = 0; t < this.greensAmong.length; t++) {
						var h = itemLength[i].clientHeight + this.greensAmong[t];
					}
					this.greensAmong.push(h);
				}
			}
			this.scroll = new BScroll(scrollBox, {
				probeType: 3,
				HWCompositing: true,
				click: true,
			});

			function getMainY() {
				var mainYText = mainDom.style.transform;
				return parseInt(mainYText.substring(mainYText.indexOf("(") + 1, mainYText.indexOf("p")));
			}

			this.scroll.on('scroll', (pos) => {
				if(this.cutScrollType == 1) {
					var a = 0;
					for(var i = 0; i < this.greensAmong.length; i++) {
						if(-pos.y < this.greensAmong[i]) {
							a = i;
							break;
						}
					}
					this.navItemIndex = a;
				}
			});
			this.scroll.on('scrollEnd', function() {
				that.isCut = true;
			});

		},
		//切换头部菜单
		cutMenu: function(index, event) {
			console.log();
			this.headerMenuOn = index;
			var target = event.srcElement;
			var width = target.clientWidth;
			console.log(width);
			var w = width * (index + 1);
			var rem = (w - (width / 2)) / window.rem;

			var left = rem - 1 / 2;
			this.headerHintStyle = {
				left: left + 'rem'
			}

			this.routerName = this.headerMenu[index].href;
			console.log(this.routerName);
			this.$router.push({
				path: this.routerName
			});

		},
		openFullScreen: function() {
			var loadingInstance = Loading.service({
				target: document.body,
				text: '玩命加载中',
				lock: false
			});

			setTimeout(function() {
				loadingInstance.close();
			}, 3000);
		},
		//切换分类
		cutType: function(code, index) {
			if(this.isCut) {
				this.isCut = false;
				if(this.navItemIndex == index) return;
				this.cutScrollType = 0;
				this.navItemIndex = index;
				var toDoms = this.common.getElementsClass('greensType');
				var toDom;
				for(var i = 0; i < toDoms.length; i++) {
					//.dataset.code
					//.getAttribute('data-code');
					//两种方法获取data-code
					if(toDoms[i].dataset.code == code) {
						toDom = toDoms[i];
						break;
					}
				}
				this.scroll.scrollToElement(toDom, 600, 0, 0, 'easeInBack');
				setTimeout(function() {
					this.cutScrollType = 1;
					this.isCut = true;
				}.bind(this), 850);
			}
		},
		//显示菜品详情
		showGreensModal: function(data, index, indexs) {
			console.log(data);
			var that = this;
			var mygreensModal = new greensModal({
				showMask: true,
				greensData: data,
				onAddCar: function() {
					var itemId = data.greensId;
					if(that.greensList[index].code == "HOTSELL") {
						for(var i = 0; i < that.greensList.length; i++) {
							if(that.greensList[i].code != "HOTSELL") {
								for(var b = 0; b < that.greensList[i].greensPartList.length; b++) {
									if(itemId == that.greensList[i].greensPartList[b].greensId) {
										that.shopList[i][b].goods = data;
										that.shopList[i][b].numb += 1;
									}
								}
							}
						}
					} else {
						for(var i = 0; i < that.greensList.length; i++) {
							if(that.greensList[i].code == "HOTSELL") {
								for(var b = 0; b < that.greensList[i].greensPartList.length; b++) {
									if(itemId == that.greensList[i].greensPartList[b].greensId) {
										that.shopList[i][b].goods = data;
										that.shopList[i][b].numb += 1;
									}
								}
							}
						}
					}

					if(that.shopList[index][indexs].goods.greensId == undefined) {
						that.shopList[index][indexs].goods = data;
						that.shopList[index][indexs].numb += 1;
					} else {
						that.shopList[index][indexs].numb += 1;
					}
				}
			});
		},
		//添加到购物车
		addCart: function(event, index, indexs, data) {
			if(!event._constructed) {
				/*原生点击事件和better-scroll派发的事件是有区别的
				 *原生的没有event._constructed属性，better-scroll派发的事件有这个属性
				 * 所以当没有这个属性的时候是原生点击事件，则添加到购物车
				 * */
				var fly = new flyModal({
					startT: event.y - (0.7 / 2) * window.rem,
					startL: event.x - (0.7 / 2) * window.rem,
					endT: this.carTop,
					endL: this.carLeft
				});
				var itemId = data.greensId;
				if(this.greensList[index].code == "HOTSELL") {
					for(var i = 0; i < this.greensList.length; i++) {
						if(this.greensList[i].code != "HOTSELL") {
							for(var b = 0; b < this.greensList[i].greensPartList.length; b++) {
								if(itemId == this.greensList[i].greensPartList[b].greensId) {
									this.shopList[i][b].goods = data;
									this.shopList[i][b].numb += 1;
								}
							}
						}
					}
				} else {
					for(var i = 0; i < this.greensList.length; i++) {
						if(this.greensList[i].code == "HOTSELL") {
							for(var b = 0; b < this.greensList[i].greensPartList.length; b++) {
								if(itemId == this.greensList[i].greensPartList[b].greensId) {
									this.shopList[i][b].goods = data;
									this.shopList[i][b].numb += 1;
								}
							}
						}
					}
				}

				if(this.shopList[index][indexs].goods.greensId == undefined) {
					this.shopList[index][indexs].goods = data;
					this.shopList[index][indexs].numb += 1;
				} else {
					this.shopList[index][indexs].numb += 1;
				}
				
				console.log(this.shopList);
				return;
			}
		},
		remoShop: function(event, index, indexs, data) {
			if(!event._constructed) {
				/*原生点击事件和better-scroll派发的事件是有区别的
				 *原生的没有event._constructed属性，better-scroll派发的事件有这个属性
				 * 所以当没有这个属性的时候是原生点击事件，则添加到购物车
				 * */
				var itemId = data.greensId;
				if(this.greensList[index].code == "HOTSELL") {
					for(var i = 0; i < this.greensList.length; i++) {
						if(this.greensList[i].code != "HOTSELL") {
							for(var b = 0; b < this.greensList[i].greensPartList.length; b++) {
								if(itemId == this.greensList[i].greensPartList[b].greensId) {
									//this.shopList[i][b].goods = data;
									this.shopList[i][b].numb -= 1;
								}
							}
						}
					}
				} else {
					for(var i = 0; i < this.greensList.length; i++) {
						if(this.greensList[i].code == "HOTSELL") {
							for(var b = 0; b < this.greensList[i].greensPartList.length; b++) {
								if(itemId == this.greensList[i].greensPartList[b].greensId) {
									//this.shopList[i][b].goods = data;
									this.shopList[i][b].numb -= 1;
								}
							}
						}
					}
				}

				this.shopList[index][indexs].numb -= 1;
				return;
			}
		},
		openCar: function() {

		}
	},
	created() {
		//页面渲染之前要执行的代码放在这里面

		//禁止在当前页面返回上个页面
		/*history.pushState(null, null, document.URL);
		window.addEventListener('popstate', function() {
			history.pushState(null, null, document.URL);
		});*/

	},
	mounted() {
		//页面渲染之后要执行的代码放在这里面
		this.init();
	},

}