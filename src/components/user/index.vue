<template>
	<div class="page">
		<div class="shopCarBox" :class="{hide:carBoxHind}" ref="shopCarBox">
			<img src="../../assets/img/shoppingCar.png" @click="openCart" />
		</div>
		<div class="headInfo" id="headInfo">
			<div id="headMask"></div>
			<div class="bgC" id="bgC"></div>
			<div class="bulr clear">
				<div class="left leftImg"></div>
				<div class="left leftInfo">
					<h4 class="title">简单点小灶（万达店）</h4>
					<p class="psInfo">商家配送 | 平均10分钟 | 配送费1元</p>
					<p class="adInfo">公告：欢迎光临，用餐高峰期请提前下单，谢谢~</p>
				</div>
			</div>
		</div>
		<div id="main">
			<div class="header" id="header">
				<div class="mlGG">
					<div class="headerMenuBox flexBox rela">
						<div @click.stop="cutMenu(index,$event)" class="headerMenu flexOne" :class="{on:headerMenuOn==index}" v-for="(item,index) in headerMenu">
							{{item.title}}
						</div>
						<div class="borderHint abso" :style="headerHintStyle"></div>
					</div>
				</div>
			</div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
			<div class="contentBox clear">
				<div class="left leftNav" :style="leftNavStyle">
					<ul class="navList" :style="navListStyle">
						<!--<li class="navItem" :class="{on:navItemIndex==-1}" data-code="HOTSELL" @click="cutType('HOTSELL', -1)">
							<i class="icon hot"></i>热销榜
						</li>-->
						<li class="navItem" v-for="(item,index) in leftNav" :class="{on:navItemIndex==index}" :data-code="item.code" @click="cutType(item.code,index)">
							<i v-if="item.icon.length>0" class="icon" :style="{backgroundImage: 'url('+item.icon+')'}"></i>{{item.title}}
							<i class="hintNumb" v-if="hintNumb[index]>0">{{hintNumb[index]}}</i>
						</li>
					</ul>
				</div>
				<div class="scrollBox">
					<div class="left rightContent" id="rightContent">
						<div class="greensItem" v-for="(item,index) in greensList">
							<p class="greensType" :data-code="item.code">{{item.classTitle}}</p>
							<ul class="contentList">
								<li class="contentItem" v-for="(items,indexs) in item.greensPartList">
									<div class="clickDom clear" @click="showGreensModal($event,items,index,indexs)">
										<div class="left greensImg">
											<img :src="items.stopimg" />
										</div>
										<div class="left greensInfo">
											<h4 class="greensTitle">{{items.greensTitle}}</h4>
											<p class="greensDescribe">{{items.describe}}</p>
											<p class="monthSale">月售{{items.sale}}份</p>
											<p class="money"><span class="subs">￥</span>{{items.money}}</p>
										</div>
									</div>
									<button class="remoBtn" :class="{show:shopList[index][indexs].numb!=undefined&&shopList[index][indexs].numb!=0}" :data-greensId="items.greensId" @click.stop="remoShop($event,index,indexs,items)"></button>
									<span class="gerNumb" :class="{show:shopList[index][indexs].numb!=undefined&&shopList[index][indexs].numb!=0}">{{shopList[index][indexs].numb}}</span>
									<button class="addBtn" :data-greensId="items.greensId" @click.stop="addCart($event,index,indexs,items)"></button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="foot"></div>
	</div>
</template>
<script src="./index.js"></script>
<style scoped src="./index.css"></style>