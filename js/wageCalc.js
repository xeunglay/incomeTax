function show() {
	tabs = document.getElementsByTagName("table")[0];
	document.getElementById("enter").addEventListener("click",showTab);
	var changeInput = document.getElementsByTagName("table")[0].getElementsByTagName("input");
	for (var i = 0;i < changeInput.length;i++ ) {
		changeInput[i].addEventListener("change",showChange);
	}
}//绑定事件函数
function showTab() {
	var project = document.getElementById("project").value;
	var grossPay = document.getElementById("pay").value;
	var pro = {"全部缴纳项目":"0","养老":"1","医疗":"2","失业":"3","工伤":"4","生育":"5","公积金":"6","个税":"0"}
	if (grossPay == 0 || grossPay == "") {
		document.getElementById("error").innerHTML="请输入您的工资";
		return;
	}else{
		document.getElementById("error").innerHTML="";
		showBase();
		for (var i in pro) {
			if (i==project) {
				var num = pro[i];
			}
			showTr(num);
		}
	 	showChange();
		return;
	}
}//显示项目的计算结果.
function showChange () {
	var grossPay = document.getElementById("pay").value;
	var totalPer = showNum();
	var afterPayment = Number(grossPay - totalPer);
	var personalTax = showTax(afterPayment);
	var afterTax = Number(afterPayment-personalTax);
	personalTax == 0 ? document.getElementById("error").innerText="您不需要缴纳个人税。":"";
	document.getElementsByClassName("personal")[0].innerText = personalTax;
	document.getElementById("afterTax").innerText = afterTax;
}//五险一金数值改变和开始计算所执行的函数.
function showTr (trindex) {
	tabs.style.cssText="display:table";
	if (trindex == 0 || trindex == null) {
		document.getElementById("res").style.display="block";
		for(i = 0;i < tabs.rows.length;i++){
			tabs.rows[i].style.display="table-row";
    	}	
	} else{
		document.getElementById("res").style.display="none";
		for(i = 1;i < tabs.rows.length;i++){
			if (i != trindex) {
				tabs.rows[i].style.display="none";
			}
    	}	
	}
}//根据项目 显示哪一行
function showBase () {
	var data = [
	{"city":"北京","info":{"pension":["8","20"],"medical":["2","10"],"unemploy":["0.2","1"],"injury":["0","0.5"],"brith":["0","0.8"],"fund":["12","12"]}},
	{"city":"上海","info":{"pension":["8","21"],"medical":["2","11"],"unemploy":["0.5","1.5"],"injury":["0","0.5"],"brith":["0","1"],"fund":["7","7"]}},
	{"city":"广州","info":{"pension":["8","14"],"medical":["2","8"],"unemploy":["0.5","1.2"],"injury":["0","0.5"],"brith":["0","0.85"],"fund":["20","20"]}}
];
	var city = document.getElementById("city").value;
	var info = data[0].info;
	for (var i=0;i<data.length;i++) {
		if (data[i].city == city) {
			info = data[i].info;
		}
		showBasedata(info);
	}
	function showBasedata (info) {
		var k = 1;
		for (var j in info) {
			tabs.rows[k].cells[1].getElementsByTagName("input")[0].value=info[j][0];
			tabs.rows[k].cells[2].getElementsByTagName("input")[0].value=info[j][1];
			k++;
		}
	}
}//输出到表格五险一金的基数
function showNum () {
	var grossPay = document.getElementById("pay").value;
	var company = {"pcv":"","mcv":"","ucv":"","icv":"","bcv":"","fcv":"",};
	var personal = {"ppv":"","mpv":"","upv":"","ipv":"","bpv":"","fpv":"",};
	var j = 1,l=1,totalCom = 0,totalPer=0;
	for (var i in company) {
		var d=tabs.rows[j].cells[2].getElementsByTagName("input")[0].value
		company[i]=Number(grossPay * d /100).toFixed(2);
		tabs.rows[j].cells[2].getElementsByTagName("span")[0].innerText=company[i];
		totalCom += Number(company[i]);
		j ++;
	}
	for (var i in personal) {
		var d=tabs.rows[l].cells[1].getElementsByTagName("input")[0].value
		personal[i]=Number(grossPay * d /100).toFixed(2);
		tabs.rows[l].cells[1].getElementsByTagName("span")[0].innerText=personal[i];
		totalPer += Number(personal[i]);
		l ++;
	}
	document.getElementById("totalCom").innerText = totalCom.toFixed(2);
	document.getElementById("totalPer").innerText = totalPer.toFixed(2);
	return totalPer;
}
function  showTax(afterPayment) {
	var taxAmount = Number(afterPayment -3500);//得到应纳税额
	var section ={
	"t>0&&t<=1500":["0.03","0"],"t>1500&&t<=4500":["0.1","105"],"t>4500&&t<=9000":["0.2","555"],"t>9000&&t<=35000":["0.25","1005"],"t>35000&&t<=55000":["0.3","2755"],"t>55000&&t<=80000":["0.35","5505"],"t>80000":["0.45","13505"],
}
	for (var i in section) {
		var j = eval(i);
		var t = taxAmount;
		if (t<0) {
			return personalTax  =  0;
		}
		if(j==true){
			var r=section[i][0],s=section[i][1];
			return personalTax  = showTaxNum(taxAmount,r,s);
		}
	}
	function showTaxNum(taxAmount,r,s) {
		return Number(taxAmount*r-s).toFixed(2);
	}//计算个人所得税
}