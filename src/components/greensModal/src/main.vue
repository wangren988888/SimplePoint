<template>
	<div class="module greensModal" :class="{isWKwebView:isAddWkWebView,allShow:isAddAllShow}">
		<div class="scrollBox" :class="{def:!isAddAllShow}">
			<div v-if="showMask" class="mask" :style="maskStyle" @click="close"></div>
			<div class="conter clear show" :class="{hide:isHide}">
				<v-touch v-on:swipeup="onSwipeUp" v-on:swipedown="onSwipeDown" style="height: 100%;">
					<div class="bannerImgBox">
						<swipe class="mySwipe" :speed="700" :auto="3500" :showIndicators="false">
							<swipe-item class="slide" v-for="item in greensData.swipeList">
								<div class="greendBg" :style="{backgroundImage: 'url('+item+')'}"></div>
							</swipe-item>
							<p class="swipeTitleBg"></p>
							<p class="swipeTitle">{{greensData.describe}}</p>
						</swipe>
					</div>
					<div class="greendInfo">
						<p class="title">{{greensData.greensTitle}}</p>
						<p class="seel">月售{{greensData.sale}}份，好评率{{greensData.goodDir}}</p>
						<div class="moneyAndBtn clear">
							<p class="money"><span class="subs">￥</span>{{greensData.money}}</p>
							<button class="addBtn" @click="addCar($event,greensData.greensId)">加入购物车</button>
						</div>
					</div>
				</v-touch>
			</div>
			<div class="noShowBox">
				<div class="evaluate">
					<span class="left">商品评价<span class="fzemA">(好评率{{greensData.goodDir}})</span></span>
					<span class="right">16条评价<i class="myicon">&#xe6a7;</i></span>
				</div>
				<div class="recommend">
					<p class="recommendTitle">进店的人都买了</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import noimgdef from '../../../assets/img/noimgdef.jpg'
	import BScroll from 'better-scroll'
	import flyModal from "../../fly"
	export default {
		data() {
			return {
				isAddWkWebView: false,
				isAddAllShow: false,
				showMask: false,
				maskStyle: {},
				isHide: false,
				closed: false,
				greensData: {
					swipeList: [noimgdef]
				},
				scroll: null,
				state: 0,
				onClose: null,
				onAddCar: null,
				endL:0,
				endT:0,
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
			isAddAllShow(newVal) {
				if(newVal) {
					this.$nextTick(function() {
						var scrollBox = document.querySelector('.module');
						this.scroll = new BScroll(scrollBox, {
							probeType: 3,
							HWCompositing: true,
							click: true,
						});
					})
				} else {
					this.$nextTick(function() {
						this.scroll.scrollTo(0, 0);
						this.scroll.destroy();
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
			addCar: function($event, goodId) {
				this.onAddCar();
				this.close();
				setTimeout(function() {
					var fly = new flyModal({
						startT: $event.y,
						startL: $event.x,
						endT: this.endT,
						endL: this.endL
					});
				}.bind(this), 200);

			},
			onSwipeUp: function(e) {
				if(this.state == 0) {
					this.state += 1;
					this.isAddAllShow = true;
					this.isAddWkWebView = false;
					this.showMask = false;
				}
				console.log(this.state);

			},
			onSwipeDown: function(e) {
				if(this.state == 1) {
					this.state -= 1;
					this.isAddAllShow = false;
					this.isAddWkWebView = true;
					this.showMask = true;
				} else if(this.state == 0) {
					this.isHide = true;
					setTimeout(function() {
						this.$destroy(true);
						this.$el.parentNode.removeChild(this.$el);
					}.bind(this), 500);
				}
			}
		},
		mounted() {
			this.endL = $('.shopCarBox')[0].offsetLeft + ($('.shopCarBox')[0].clientWidth / 3);
			this.endT = $('.shopCarBox')[0].offsetTop + (0.1 * window.rem);
			
			
			setTimeout(function() {
				this.isAddWkWebView = true;
			}.bind(this), 100);
		}
	};
</script>

<style scoped src="./main.css"></style>