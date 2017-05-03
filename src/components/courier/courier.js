/**
 * Created by 王仁 on 2017/4/1.
 * 邮箱：
 * ren.wang@hand-china.com
 * 842837175@qq.com
 */

export default {
	data() {
		//当前页面所需绑定的变量放到这里

		return {
			menu: 0,
			dingDan: [{
				yonghu: "刘佳才",
				caipin: "辣椒炒肉",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "微信支付",
				zhuangtai: "待配送",
				code: 1234

			}, {
				yonghu: "王仁",
				caipin: "香干回锅肉",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "线下支付",
				zhuangtai: "客户退单",
				code: 1234
			}, {
				yonghu: "王静",
				caipin: "红烧鲫鱼",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "微信支付",
				zhuangtai: "待配送",
				code: 1234
			}, {
				yonghu: "阳阳",
				caipin: "虾仁跑蛋",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "线下支付",
				zhuangtai: "待配送",
				code: 1234
			}, ],
			wancheng: [{
				yonghu: "王仁",
				caipin: "香干回锅肉",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "线下支付",
				zhuangtai: "客户退单",
				code: 1234
			}, {
				yonghu: "王静",
				caipin: "红烧鲫鱼",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "微信支付",
				zhuangtai: "待配送",
				code: 1234
			}, {
				yonghu: "阳阳",
				caipin: "虾仁跑蛋",
				dianhua: "13549649788",
				jine: "18",
				dizhi: "长沙市望城区万达广场A栋301",
				zhifu: "线下支付",
				zhuangtai: "待配送",
				code: 1234
			}, ]
		}
	},
	components: {
		//模版文件导入后在这里初始化

	},
	methods: {
		//所有构建的方法放在这里面
		cutMenu: function(index) {
			this.menu = index;
		},
		succSD: function(index) {
			var sc = this.dingDan[index];
			var code = this.dingDan[index].code;
			
			var data = 0;
			if(data == 0) {
				this.dingDan.splice(index, 1);
				this.wancheng.unshift(sc);
				console.log(this.dingDan);
			} else {
				alert("网络失败,请重试！");
			}

		}
	},
	created() {
		//页面渲染之前要执行的代码放在这里面

		//禁止在当前页面返回上个页面
		history.pushState(null, null, document.URL);
		window.addEventListener('popstate', function() {
		history.pushState(null, null, document.URL);
		});

	},
	mounted() {
		//页面渲染之后要执行的代码放在这里面

	},

}