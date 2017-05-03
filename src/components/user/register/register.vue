<template>
	<div class="page register">
		<img src="../../../assets/img/logo.png" class="logo" />
		<div class="fromBox">
			<div class="item userName clear">
				<i class="myicon icon left">&#xe801;</i>
				<input type="text" class="fromBoxInput" v-model="userName" placeholder="请输入姓名或别名" />
			</div>
			<div class="item userName clear">
				<i class="myicon icon left">&#xec76;</i>
				<input type="text" class="fromBoxInput" v-model="userPhone" placeholder="请输入您的手机号" />
			</div>
			<div class="item userName clear">
				<i class="myicon icon left">&#xe624;</i>
				<input type="text" class="fromBoxInput userCode" v-model="authCode" placeholder="请输入验证码" />
				<button class="theme button getCodeBtn right" @click="getAutoCode" :disabled="autoCodeBtnDIS">{{autoCodeText}}</button>
			</div>
			<div class="item">
				<button class="submit theme button" @click="submit">注册</button>
			</div>
		</div>
	</div>
</template>


<script src="./register.js"></script>
<style scoped src="./register.css"></style>