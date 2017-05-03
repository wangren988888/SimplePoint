/**
 * Created by 王仁 on 2017/4/1.
 * 邮箱：
 * ren.wang@hand-china.com
 * 842837175@qq.com
 */
import myMessage from "../../message";
import myLoading from "../../loading";
import { Message } from 'element-ui';

export default {
	data() {
		//当前页面所需绑定的变量放到这里
		return {
			autoCodeText: "获取验证码",
			autoCodeBtnDIS: false,
			openid: "",
			userName: "",
			userPhone: "",
			authCode: "",
		}
	},
	components: {
		//模版文件导入后在这里初始化

	},
	methods: {
		//所有构建的方法放在这里面
		getAutoCode: function() {
			var isPhone = this.common.checkPhone(this.userPhone);
			if(isPhone != true) {
				myMessage({
					showMask: true,
					title: "您的手机号码输入有误",
					message: "请输入正确的手机号码~",
					type: "error",
					duration: 0,
					showClose: true,
					btnCloseText: "确定",
				});
				return;
			}

			var time = 60;
			this.autoCodeBtnDIS = true;
			var st = setInterval(function() {
				time -= 1;
				if(time == 0) {
					this.autoCodeText = "获取验证码";
					this.autoCodeBtnDIS = false;
					clearInterval(st);
				} else {
					this.autoCodeText = time + ' s';
				}
			}.bind(this), 1000);
		},
		//提交注册
		submit: function() {
			var data = {
				userName: this.userName,
				userPhone: this.userPhone,
				authCode: this.authCode
			}
			var check = this.common.checkFrom(data, "userPhone");
			console.log(check);
			if(check == "userName") {
				var mymsg = new myMessage({
					showMask: true,
					title: "姓名不能为空",
					message: "您还可以输入别名噢~",
					type: "error",
					duration: 0,
					showClose: true,
					btnCloseText: "确定",
					onClose: function() {
						console.log('关闭msg');
					}
				});
			} else if(check == "userPhone") {
				myMessage({
					showMask: true,
					title: "请输入正确的手机号码",
					message: "手机号码是为了送餐时方便联系您噢~",
					type: "error",
					duration: 0,
					showClose: true,
					btnCloseText: "确定",
				});
			} else if(check == "authCode") {
				myMessage({
					showMask: true,
					title: "请输入正确的验证码",
					message: "谢谢亲噢~",
					type: "error",
					duration: 0,
					showClose: true,
					btnCloseText: "确定",
				});
			} else {
				this.$router.push({
					name: 'index'
				});
			}
		}
	},
	created() {
		//页面渲染之前要执行的代码放在这里面
		this.openid = this.$route.params.openid;
		//禁止在当前页面返回上个页面
		history.pushState(null, null, document.URL);
		window.addEventListener('popstate', function() {
			history.pushState(null, null, document.URL);
		});
	},
	mounted() {
		//页面渲染之后要执行的代码放在这里面
		/*var myLoadings = new myLoading({
			showMask: true,
			type: 1,
			loadingText: "Loading..",
			loadingBoxStyle: {
				width: '1rem',
				height: '1rem',
				margin: '-.5rem 0 0 -.5rem',
			},
			onClose: function() {
				console.log("关闭loading");
			}
		});
		setTimeout(function(){
			myLoadings.close();
		},2000);*/
	},

}