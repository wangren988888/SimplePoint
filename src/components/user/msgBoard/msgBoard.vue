<template>
	<transition name="slide-fade">
		<div class="msgBoard">
			留言板
		</div>
	</transition>
</template>

<script>
</script>

<style scoped>
	.msgBoard {
		width: 100%;
		height: 100%;
		background: #fff;
	}
	
	.slide-fade-enter-active {
		transition: all .3s .2s ease;
	}
	
	.slide-fade-leave-active {
		transition: all .3s .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-active {
		transform: translateX(10rem);
		opacity: 0;
	}
</style>