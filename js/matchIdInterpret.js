// Javascript for the interpretation of match id
// Author: Yufei Wu
// Last Edited on 15/08/2021

function matchIdInterpret(id){
	id = Number(id);
	
	var a = [];
	a.push(Math.floor(id/100));  // id整除100得到前两位，代表年份
	a.push(Number(id%100>=50));  // 判断是北大杯还是新生杯
	a.push(id%100-a[1]*50);  // 根据id后两位判断比赛类型
	
	var cup = ["北大杯", "新生杯"];
	var game = new Array(50);
	{
		game[0] = "小组赛第一轮";
		game[1] = "小组赛第二轮";
		game[2] = "小组赛第三轮";
		game[3] = "小组赛第四轮";
		game[4] = "小组赛第五轮";
		game[10] = "12进8";
		game[11] = "1/8决赛";
		game[20] = "1/4决赛";
		game[30] = "半决赛";
		game[40] = "决赛";
	}
	
	return ("20"+a[0]+"年"+cup[a[1]]+game[a[2]]);
}