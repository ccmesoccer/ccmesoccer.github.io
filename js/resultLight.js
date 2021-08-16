//Javascript to transfer match results into three-color lights
// Author: Yufei Wu
// Last Edited on 16/08/2021

function resultLight(result) {
	if(result=="-") return result;  // 未来的比赛
	if(result.indexOf("(")!=-1) {
		result = eval(result.slice(result.indexOf("(")+1, -1))
	}  // 检查是否存在点球决胜
		else result = eval(result);
	
	if (result>0) return '<img src="../img/greenlight.png" alt="W">';
		else if (result==0) return '<img src="../img/yellowlight.png" alt="D">';
		else return '<img src="../img/redlight.png" alt="L">';
}