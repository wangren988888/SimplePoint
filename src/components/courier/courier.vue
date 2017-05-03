<template>
	<div class="page couriers" style="overflow: auto;">
		<div class="dispose_list">
			<button class="btn" :class="{on:menu==0}" @click="cutMenu(0)">未处理</button>
			<button class="btn" :class="{on:menu==1}" @click="cutMenu(1)">已处理</button>
		</div>
		<div class="courier_list" v-if="menu==0">
			<ul>
				<li class="" v-for="(item,index) in dingDan">
					<div class="deliver">
						<dl class="text-dl">
							<dd><span>客户姓名：</span><p>{{item.yonghu}}</p></dd>
							<dd><span>菜品名称：</span><p>{{item.caipin}}</p></dd>
							<dd><span>用户电话：</span><p>{{item.dianhua}}</p></dd>
							<dd><span>订单金额：</span><p>{{item.jine}}</p></dd>
							<dd><span>收货地址：</span><p>{{item.dizhi}}</p></dd>
							<dd><span>支付类型：</span><p>{{item.zhifu}}</p></dd>
							<dd><span>订单状态：</span><p>{{item.zhuangtai}}</p></dd>
						</dl>
						<button>用户拒单</button>
						<button @click="succSD(index)">已送达</button>
					</div>
				</li>
			</ul>
		</div>
		<div class="courier_list" v-if="menu==1">
			<ul>
				<li class="" v-for="item in wancheng">
					<div class="deliver">
						<dl class="text-dl">
							<dd><span>客户姓名：</span><p>{{item.yonghu}}</p></dd>
							<dd><span>菜品名称：</span><p>{{item.caipin}}</p></dd>
							<dd><span>用户电话：</span><p>{{item.dianhua}}</p></dd>
							<dd><span>订单金额：</span><p>{{item.jine}}</p></dd>
							<dd><span>收货地址：</span><p>{{item.dizhi}}</p></dd>
							<dd><span>支付类型：</span><p>{{item.zhifu}}</p></dd>
							<dd><span>订单状态：</span><p>{{item.zhuangtai}}</p></dd>
						</dl>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./courier.js"></script>
<style scoped src="./courier.css"></style>