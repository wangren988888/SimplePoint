<template>
	<div class="module cartModal" :class="{isWKwebView:isAddWkWebView}">
		<div v-if="showMask" class="mask" :style="maskStyle" @click="close"></div>
		<div class="scrollBox">
			<div class="conter clear" :class="{hide:isHide}" :style="conterStyle">
				<v-touch v-on:swipeleft="onSwipeLeft" style="height: 100%;">
					<h4 class="title">已选商品</h4>
					<div id="cartScroll" :style="cartScrollStyle">
						<ul>
							<li class="itemLi clear" v-for="(item,index) in greensList">
								<div class="goodName left">{{item.goods.greensTitle}}</div>
								<div class="moneyBox left"><span class="subs">￥</span>{{item.goods.money}}</div>
								<div class="buttonBox left">
									<button class="remoBtn" @click="removeCar($event,index,item.goods.greensId)"></button>
									<span class="gerNumb">{{item.numb}}</span>
									<button class="addBtn" @click="addCar($event,index,item.goods.greensId)"></button>
								</div>
							</li>
						</ul>
					</div>
				</v-touch>
			</div>
		</div>
	</div>
</template>
<script>
	import noimgdef from '../../../assets/img/noimgdef.jpg'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				isAddWkWebView: false,
				showMask: true,
				maskStyle: {},
				conterStyle: {},
				cartScrollStyle: {},
				isHide: false,
				closed: false,
				greensList: [],
				scrolls: null,
				onClose: null,
				onAddCar: null,
				endL: 0,
				endT: 0,
			};
		},
		components: {

		},
		computed: {

		},
		watch: {
			closed(newVal) {
				if(newVal) {
					this.isHide = true;
					setTimeout(function() {
						this.$destroy(true);
						this.$el.parentNode.removeChild(this.$el);
					}.bind(this), 500);
				}
			},
			isAddWkWebView(newVal) {
				if(newVal) {
					this.$nextTick(function() {
						var scrollBox = document.getElementById('cartScroll');
						this.scrolls = new BScroll(scrollBox, {
							probeType: 3,
							HWCompositing: true,
							click: true,
						});
					})
				}
			}
		},
		methods: {
			close() {
				this.closed = true;
				if(typeof this.onClose === 'function') {
					this.onClose(this);
				}
			},
			addCar: function($event, index, goodId) {
				if(!event._constructed) {
					this.onAddCar(goodId);
					return;
				}
			},
			removeCar: function($event, index, goodId) {
				if(!event._constructed) {
					this.onRmoveCar(goodId);
					if(this.greensList[index].numb == 0) {
						this.greensList.splice(index, 1);
					}
					return;
				}
			},
			onSwipeLeft: function() {
				this.close();
			}
		},
		mounted() {
			this.endL = $('.shopCarBox')[0].offsetLeft + ($('.shopCarBox')[0].clientWidth / 3);
			this.endT = $('.shopCarBox')[0].offsetTop + (0.1 * window.rem);
			setTimeout(function() {
				var appDom = document.getElementById('app');
				var appH = appDom.clientHeight;
				this.conterStyle = {
					height: appH + 'px'
				}
				this.cartScrollStyle = {
					height: appH - 75 + 'px'
				}
				this.isAddWkWebView = true;
			}.bind(this), 100);
		}
	};
</script>

<style scoped src="./main.css"></style>