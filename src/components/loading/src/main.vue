<template>
	<div class="module loading">
		<div class="mask" v-if="showMask" :style="maskStyle"></div>
		<div class="loadingContent">
			<p class="title" :style="titleStyle">{{loadingText}}</p>
			<div class="loadingBox typeOne" v-if="type==1" :style="loadingBoxStyle">
				<div class="leftEye"></div>
				<div class="rightEye"></div>
				<div class="mouth"></div>
			</div>
			<div class="loadingBox typeTwo" v-if="type==2" :style="loadingBoxStyle">
				<svg class="spinner" width="100%" height="100%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
					<circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showMask: false, //是否显示蒙板
				maskStyle: {}, //蒙板样式
				loadingBoxStyle: {}, //loading样式
				type: 1, //loading种类
				loadingText: "",
				titleStyle: {}, //title样式
				onClose: null, //关闭后的回调
			}
		},
		methods: {
			close() {
				if(this.type == 1) {
					setTimeout(function() {
						this.$destroy(true);
						this.$el.parentNode.removeChild(this.$el);
					}.bind(this), 3000);
					if(typeof this.onClose === 'function') {
						this.onClose(this);
					}
				} else {
					this.$destroy(true);
					this.$el.parentNode.removeChild(this.$el);
					if(typeof this.onClose === 'function') {
						this.onClose(this);
					}
				}
			},
		}

	}
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
	
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: #000;
		opacity: .7;
	}
	
	.loadingContent {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 11;
	}
	
	.title {
		position: relative;
		top: 35%;
		font-size: .45rem;
		font-weight: bold;
		text-align: center;
		color: #eee;
		opacity: .9;
	}
	
	.loadingBox {
		width: 1.5rem;
		height: 1.5rem;
		margin: -.75rem 0 0 -.75rem;
		position: relative;
		top: 45%;
		left: 50%;
	}
	/*毛玻璃效果*/
	.frostedGlass {
		width: 100%;
		height: 100%;
		background: inherit;
		-webkit-filter: blur(5px);
		-moz-filter: blur(5px);
		-ms-filter: blur(5px);
		-o-filter: blur(5px);
		filter: blur(5px);
		filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
	}
	/*type1.css*/
	
	.leftEye,
	.rightEye {
		width: 5vh;
		height: 5vh;
		border-radius: 50%;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		-webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
		animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	
	.rightEye {
		-webkit-animation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
		animation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	
	.mouth {
		width: 10vh;
		height: 10vh;
		border-radius: 50%;
		border: solid 1.3vh #fff;
		border-right: solid 1.3vh rgba(223, 223, 194, 0);
		border-left: solid 1.3vh rgba(223, 223, 194, 0);
		border-bottom: solid 1.3vh rgba(223, 223, 194, 0);
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%) rotate(360deg);
		transform: translate(-50%, -50%) rotate(360deg);
		-webkit-animation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
		animation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	
	@-webkit-keyframes mouthAnimation {
		0% {
			-webkit-transform: translate(-50%, -50%) rotateX(180deg);
			transform: translate(-50%, -50%) rotateX(180deg);
		}
		10% {
			-webkit-transform: translate(-50%, -50%) rotateZ(360deg);
			transform: translate(-50%, -50%) rotateZ(360deg);
		}
		40% {
			-webkit-transform: translate(-50%, -50%) rotateZ(320deg);
			transform: translate(-50%, -50%) rotateZ(320deg);
		}
		60% {
			-webkit-transform: translate(-50%, -50%) rotateZ(900deg);
			transform: translate(-50%, -50%) rotateZ(900deg);
		}
		100% {
			-webkit-transform: translate(-50%, -50%) rotateZ(900deg);
			transform: translate(-50%, -50%) rotateZ(900deg);
		}
	}
	
	@keyframes mouthAnimation {
		0% {
			-webkit-transform: translate(-50%, -50%) rotateX(180deg);
			transform: translate(-50%, -50%) rotateX(180deg);
		}
		10% {
			-webkit-transform: translate(-50%, -50%) rotateZ(360deg);
			transform: translate(-50%, -50%) rotateZ(360deg);
		}
		40% {
			-webkit-transform: translate(-50%, -50%) rotateZ(320deg);
			transform: translate(-50%, -50%) rotateZ(320deg);
		}
		60% {
			-webkit-transform: translate(-50%, -50%) rotateZ(900deg);
			transform: translate(-50%, -50%) rotateZ(900deg);
		}
		100% {
			-webkit-transform: translate(-50%, -50%) rotateZ(900deg);
			transform: translate(-50%, -50%) rotateZ(900deg);
		}
	}
	
	@-webkit-keyframes leftEyeAnimation {
		0% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		50% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		60% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(-150%, -50%);
			transform: translate(-150%, -50%);
		}
		90% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(-150%, -50%);
			transform: translate(-150%, -50%);
		}
		100% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
	}
	
	@keyframes leftEyeAnimation {
		0% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		50% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		60% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(-150%, -50%);
			transform: translate(-150%, -50%);
		}
		90% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(-150%, -50%);
			transform: translate(-150%, -50%);
		}
		100% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
	}
	
	@-webkit-keyframes rightEyeAnimation {
		0% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		50% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		60% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		70% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		75% {
			width: 2vh;
			height: 2px;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		80% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		90% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		100% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
	}
	
	@keyframes rightEyeAnimation {
		0% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		50% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		60% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		70% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		75% {
			width: 2vh;
			height: 2px;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		80% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		90% {
			width: 2vh;
			height: 2vh;
			-webkit-transform: translate(50%, -50%);
			transform: translate(50%, -50%);
		}
		100% {
			width: 5vh;
			height: 5vh;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
	}
	/*type2.css*/
	
	.spinner {
		-webkit-animation: rotator 1.4s linear infinite;
		animation: rotator 1.4s linear infinite;
	}
	
	@-webkit-keyframes rotator {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}
	
	@keyframes rotator {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}
	
	.path {
		stroke-dasharray: 187;
		stroke-dashoffset: 0;
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
		animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
	}
	
	@-webkit-keyframes colors {
		0% {
			stroke: #4285F4;
		}
		25% {
			stroke: #DE3E35;
		}
		50% {
			stroke: #F7C223;
		}
		75% {
			stroke: #1B9A59;
		}
		100% {
			stroke: #4285F4;
		}
	}
	
	@keyframes colors {
		0% {
			stroke: #4285F4;
		}
		25% {
			stroke: #DE3E35;
		}
		50% {
			stroke: #F7C223;
		}
		75% {
			stroke: #1B9A59;
		}
		100% {
			stroke: #4285F4;
		}
	}
	
	@-webkit-keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}
		50% {
			stroke-dashoffset: 46.75;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: 187;
			-webkit-transform: rotate(450deg);
			transform: rotate(450deg);
		}
	}
	
	@keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}
		50% {
			stroke-dashoffset: 46.75;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: 187;
			-webkit-transform: rotate(450deg);
			transform: rotate(450deg);
		}
	}
</style>