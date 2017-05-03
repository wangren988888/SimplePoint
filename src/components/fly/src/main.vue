<template>
		<span id="fly"></span>
</template>
<script>
	import noimgdef from '../../../assets/img/noimgdef.jpg'
	import $ from '../../../assets/js/jquery-vendor'
	import fly from '../../../assets/js/jquery.fly.min.js'
	export default {
		data() {
			return {
				w: ".7rem",
				h: ".7rem",
				startL: 0,
				startT: 0,
				bc: "#f25943",
				borderR: "1rem",
				endL: 0,
				endT: 0,
				isEnd: false,
				zindex:10000,
			};
		},
		components: {

		},
		computed: {

		},
		watch: {
			isEnd(newVal) {
				if(newVal) {
					this.$destroy(true);
					this.$el.parentNode.removeChild(this.$el);
				}
			}
		},
		methods: {
			init: function() {
				var that = this;
				var newNode = document.getElementById('fly');
				newNode.style.position = "fixed";
				newNode.style.width = this.w;
				newNode.style.height = this.h;
				newNode.style.borderRadius = this.borderR;
				newNode.style.background = this.bc;
				newNode.style.top = this.startT + "px";
				newNode.style.left = this.startL + "px";
				newNode.style.zIndex = this.zindex;
				
				this.$nextTick(function() {
					$(newNode).fly({
						start: {
							left: this.startL, //开始位置（必填）#fly元素会被设置成position: fixed
							top: this.startT, //开始位置（必填）
						},
						end: {
							left: this.endL, //结束位置（必填）
							top: this.endT, //结束位置（必填）
						},
						speed: 2,
						onEnd: function() {
							that.isEnd = true;
						} //结束回调
					});
				});
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.init();
			})
		}
	};
</script>