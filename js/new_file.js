var data = {"city":[
		{"area":"北京","pension":["8","20"],"medical":["2","10"],"unemploy":["0.2","1"],"injury":["0","0.5"],"brith":["0","0.8"],"fund":["12","12"]},
		{"area":"上海","pension":["8","21"],"medical":["2","11"],"unemploy":["0.5","1.5"],"injury":["0","0.5"],"brith":["0","1"],"fund":["7","7"]},
		{"area":"广州","pension":["8","14"],"medical":["2","8"],"unemploy":["0.5","1.2"],"injury":["0","0.5"],"brith":["0","0.85"],"fund":["20","20"]},
]};


var data = {"city":[
		{"area":"北京","pensionPer":"8","pensionCom":"20","medicalPer":"2","medicalCom":"10","unemployPer":"0.2","unemployCom":"1","injuryPer":"0","injuryCom":"0.5","brithPer":"0","brithCom":"0.8","fundPer":"12","fundCom":"12"},
		{"area":"上海","pensionPer":"8","pensionCom":"21","medicalPer":"2","medicalCom":"11","unemployPer":"0.5","unemployCom":"1.5","injuryPer":"0","injuryCom":"0.5","brithPer":"0","brithCom":"1","fundPer":"7","fundCom":"7"},
		{"area":"广州","pensionPer":"8","pensionCom":"14","medicalPer":"2","medicalCom":"8","unemployPer":"0.5","unemployCom":"1.2","injuryPer":"0","injuryCom":"0.5","brithPer":"0","brithCom":"0.85","fundPer":"20","fundCom":"20"},
]};


var data = {
	{"city":"北京","info":{"pension":["8","20"],"medical":["2","10"],"unemploy":["0.2","1"],"injury":["0","0.5"],"brith":["0","0.8"],"fund":["12","12"]}},
	{"city":"上海","info":{"pension":["8","21"],"medical":["2","11"],"unemploy":["0.5","1.5"],"injury":["0","0.5"],"brith":["0","1"],"fund":["7","7"]}},
	{"city":"广州","info":{"pension":["8","14"],"medical":["2","8"],"unemploy":["0.5","1.2"],"injury":["0","0.5"],"brith":["0","0.85"],"fund":["20","20"]}}
}


	var company = {"pcv":"","mcv":"","ucv":"","icv":"","bcv":"","fcv":"",}
	var j = 1;
	for (var i in company) {
		var k=tabs.rows[j].cells[2].getElementsByTagName("input")[0].value
		company[i]=Number(grossPay * k /100).toFixed(2);
		j ++;
	}
	
	
var section ={
	"t<0":["0","0"],"t>0&&t<=1500":["0.03","0"],"t>1500&&t<=4500":["0.1","105"],"t>4500&&t<=9000":["0.2","555"],"t>9000&&t<=35000":["0.25","1005"],"t>35000&&t<=55000":["0.3","2755"],"t>55000&&t<=80000":["0.35","5505"],"t>80000":["0.45","13505"],
}

switch (true){
		case taxAmount < 0:
			document.getElementById("error").innerHTML="您的工资不用交个人所得税";
			return personalTax = 0;
		case taxAmount > 0 && taxAmount <= 1500:
			var r = 0.03,s = 0;
			return personalTax  = showTaxNum(taxAmount,r,s);
		case taxAmount > 1500 && taxAmount <= 4500:
			var r = 0.1,s = 105;
			return personalTax  = showTaxNum(taxAmount,r,s);
		case taxAmount > 4500 && taxAmount <= 9000:
			var r = 0.2,s = 555;
			return personalTax  = showTaxNum(taxAmount,r,s);
		case taxAmount > 9000 && taxAmount <= 35000:
			var r = 0.25,s = 1005;
			return personalTax  = showTaxNum(taxAmount,r,s);
		case taxAmount > 35000 && taxAmount <= 55000:
			var r = 0.3,s = 2755;
			return personalTax  = showTaxNum(taxAmount,r,s);
		case taxAmount > 55000 && taxAmount <= 80000:
			var r = 0.35,s = 5505;
			return personalTax  = showTaxNum(taxAmount,r,s);
		case taxAmount > 80000:
			var r = 0.45,s = 13505;
			return personalTax  = showTaxNum(taxAmount,r,s);
		default:
			break;
	}//判定应纳税额得到个人税的税率，并计算
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
