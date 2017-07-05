/**
 * Created by 王仁 on 2017/4/1.
 * 邮箱：
 * 842837175@qq.com
 */

var common = {
	//test
	test: function(text) {
		alert(text);
	},
	//拨打电话
	phone: function(num) {
		window.location.href = 'tel:' + num;
	},
	//通过class名获取元素
	getElementsClass: function(classnames) {
		var classobj = new Array(); //定义数组 
		var classint = 0; //定义数组的下标 
		var tags = document.getElementsByTagName("*");
		//console.log(tags);
		for(var i in tags) {
			if(tags[i].nodeType == 1) { //判断节点类型 
				if(tags[i].getAttribute("class") == classnames) {
					classobj[classint] = tags[i];
					classint++;
				}
			}
		}
		return classobj; //返回组成的数组 
	},
	//验证手机号码格式
	checkPhone: function(phone) {
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			return false;
		} else {
			return true;
		}
	},
	//表单验证
	checkFrom: function(obj, userphone) {
		var that = this;
		var t = true;
		for(var s in obj) {
			if(typeof(obj[s]) != "function") {
				if(obj[s] != undefined && obj[s] != null && obj[s] != "") {
					if(s == userphone) {
						var isPhone = that.checkPhone(obj[s]);
						if(isPhone == false) {
							t = s;
							break;
						}
					}
					console.log(obj[s]);
				} else {
					t = s;
					break;
				}
			} else {
				console.log(s + "个属性是个方法");
			}
		}
		return t;
	},
	compareDate: function(obj) {
		var frontDate = obj.frontDate;
		var byDate = obj.byDate;
		var type = obj.type;
		if(frontDate == '' && byDate == '') {
			return null;
		}
		if(frontDate) {
			var year = frontDate.substr(0, 4);
			//console.log(year);
			var month = frontDate.substr(5, 2);
			//console.log(month);
			var day = frontDate.substr(8, 2);
			//console.log(day);
			var hh = frontDate.substr(11, 2);
			//console.log(hh);
			var mm = frontDate.substr(14, 2);
			//console.log(mm);

			//console.log(frontTime);
			//console.log("----------------");
			var byYear = byDate.substr(0, 4);
			//console.log(byYear);
			var byMonth = byDate.substr(5, 2);
			//console.log(byMonth);
			var byDay = byDate.substr(8, 2);
			//console.log(byDay);
			var byHH = byDate.substr(11, 2);
			//console.log(byHH);
			var byMM = byDate.substr(14, 2);
			//console.log(byMM);
			var frontTime, byTime;
			if(type == 1) {
				frontTime = Date.parse(year + "/" + month + "/" + day + " " + hh + ":" + mm);
				byTime = Date.parse(byYear + "/" + byMonth + "/" + byDay + " " + byHH + ":" + byMM);
			} else if(type == 2) {
				frontTime = Date.parse(year + "/" + month + "/" + day);
				byTime = Date.parse(byYear + "/" + byMonth + "/" + byDay);
			}

			//console.log(byTime);
			if(frontTime > byTime) {
				return 0;
			} else if(frontTime == byTime) {
				return 1;
			} else if(frontTime < byTime) {
				return 2;
			} else {
				return 3;
			}
		} else {
			var currDate = new Date();
			//console.log(currDate);
			var currYear = currDate.getFullYear();
			//console.log(currYear);
			var currMonth = currDate.getMonth() + 1;
			//console.log(currMonth);
			var currDay = currDate.getDate();
			//console.log(currDay);
			var currHH = currDate.getHours();
			//console.log(currHH);
			var currMM = currDate.getMinutes();
			//console.log(currMM);
			var currTime = Date.parse(currYear + "/" + currMonth + "/" + currDay + " " + currHH + ":" + currMM);
			//console.log(currTime);
			//console.log("----------------");
			var byYear = byDate.substr(0, 4);
			//console.log(byYear);
			var byMonth = byDate.substr(5, 2);
			//console.log(byMonth);
			var byDay = byDate.substr(8, 2);
			//console.log(byDay);
			var byHH = byDate.substr(11, 2);
			//console.log(byHH);
			var byMM = byDate.substr(14, 2);
			//console.log(byMM);
			var byTime = Date.parse(byYear + "/" + byMonth + "/" + byDay + " " + byHH + ":" + byMM);
			//console.log(byTime);
			if(currTime > byTime) {
				return 0;
			} else if(currTime == byTime) {
				return 1;
			} else if(currTime < byTime) {
				return 2;
			} else {
				return 3;
			}
		}
	}

}

export default common;
