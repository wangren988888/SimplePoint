<template>
	<div class="module message" :class="{isWKwebView:isAddWkWebView}">
		<div v-if="showMask" class="mask" :style="maskStyle"></div>
		<transition name="fade">
			<div class="conter clear show" v-show="visible" :class="{hide:isHide}">
				<img class="message_img" :src="typeImg" alt="">
				<div class="message_group">
					<h3 class="message_title">{{title}}</h3>
					<p class="message_sm_title">{{message}}</p>
					<div class="btnBox clear">
						<button v-if="showConfirm" class="btn" @click="confirm">{{btnConfirmText}}</button>
						<button v-if="showClose" class="btn" @click="close">{{btnCloseText}}</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showMask: false,
				maskStyle: {},
				visible: false,
				title: '',
				message: '',
				duration: 3000,
				type: 'info',
				customClass: '',
				onClose: null,
				showClose: false,
				closed: false,
				timer: null,
				btnCloseText: "关闭",
				showConfirm: false,
				btnConfirmText: "确定",
				confirmed: false,
				onConfirm: null,
				isWKwebView: false,
				isAddWkWebView: false,
				isHide: false
			};
		},

		computed: {
			typeImg() {
				return require(`../assets/${ this.type }.svg`);
			}
		},

		watch: {
			closed(newVal) {
				if(newVal) {
					/*if(this.isWKwebView || this.isWKwebView == undefined) {
						this.isHide = true;
						setTimeout(function() {
							this.$destroy(true);
							this.$el.parentNode.removeChild(this.$el);
						}.bind(this), 500);
					} else {
						this.visible = false;
						this.$el.addEventListener("webkitTransitionEnd", this.destroyElement, false);
						this.$el.addEventListener("transitionend", this.destroyElement, false);
					}*/
					this.isHide = true;
					setTimeout(function() {
						this.$destroy(true);
						this.$el.parentNode.removeChild(this.$el);
					}.bind(this), 500);

				}
			},
			confirmed(newVal) {
				if(newVal) {
					/*if(this.isWKwebView || this.isWKwebView == undefined) {
						this.isHide = true;
						setTimeout(function() {
							this.$destroy(true);
							this.$el.parentNode.removeChild(this.$el);
						}.bind(this), 500);
					} else {
						this.visible = false;
						this.$el.addEventListener("webkitTransitionEnd", this.destroyElement, false);
						this.$el.addEventListener("transitionend", this.destroyElement, false);
					}*/

					this.isHide = true;
					setTimeout(function() {
						this.$destroy(true);
						this.$el.parentNode.removeChild(this.$el);
					}.bind(this), 500);
				}
			}
		},
		methods: {
			destroyElement() {
				this.$el.removeEventListener("webkitTransitionEnd", this.destroyElement);
				this.$el.removeEventListener("transitionend", this.destroyElement);
				this.$destroy(true);
				this.$el.parentNode.removeChild(this.$el);
			},

			close() {
				this.closed = true;
				if(typeof this.onClose === 'function') {
					this.onClose(this);
				}
			},
			confirm() {
				this.confirmed = true;
				if(typeof this.onConfirm === 'function') {
					this.onConfirm(this);
				}
			},
			clearTimer() {
				clearTimeout(this.timer);
			},

			startTimer() {
				if(this.duration > 0) {
					this.timer = setTimeout(() => {
						if(!this.closed) {
							this.close();
						}
					}, this.duration);
				}
			}
		},
		mounted() {
			this.isWKwebView = window.__wxjs_is_wkwebview;
			/*if(this.isWKwebView || this.isWKwebView == undefined) {
				setTimeout(function() {
					this.isAddWkWebView = true;
				}.bind(this), 10);
			}*/

			setTimeout(function() {
				this.isAddWkWebView = true;
			}.bind(this), 10);

			//this.startTimer();
		}
	};
</script>

<style scoped>
	.module {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}
	
	.module .mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #000;
		opacity: .7;
		z-index: 10;
	}
	
	.module .conter {
		width: 7rem;
		min-height: 4rem;
		margin: 0 auto;
		position: relative;
		z-index: 11;
		padding: .5rem;
		background: #FFF;
		border-radius: .2rem;
		top: 40%;
		margin-top: -3rem;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all .5s;
		-moz-transition: all .5s;
		-webkit-transition: all .5s;
		-o-transition: all .5s;
	}
	
	.conter.fade-enter,
	.conter.fade-leave-active {
		top: 38%;
		opacity: 0;
	}
	
	.isWKwebView .conter {
		transition: all .5s;
		-moz-transition: all .5s;
		-webkit-transition: all .5s;
		-o-transition: all .5s;
	}
	
	.isWKwebView .conter {
		top: 38%;
		opacity: 0;
	}
	
	.isWKwebView .conter.show {
		top: 40%;
		opacity: 1;
	}
	
	.isWKwebView .conter.hide {
		top: 38%;
		opacity: 0;
	}
	
	.message_img {
		width: 1.6rem;
		margin: 0 auto;
		display: block;
	}
	
	.message_title {
		font-size: .6rem;
		color: #F25943;
		text-align: center;
		margin-top: .6rem;
	}
	
	.message_sm_title {
		font-size: .4rem;
		color: #F25943;
		text-align: center;
		margin-top: .4rem;
	}
	
	.btnBox {
		text-align: center;
		margin-top: .4rem;
	}
	
	.btn {
		width: 3rem;
		height: 1rem;
		border: 0;
		border-radius: .6rem;
		font-size: .48rem;
		color: #fff;
		background: #F25943;
	}
</style>