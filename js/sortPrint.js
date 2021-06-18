// Sort the playersList
// Author: Yufei Wu
// Last Edited on 17/06/2021

function sortPrintPlayersList(code, ascending) {
	sign = (2 * ascending - 1)
	playersList.sort(function(x,y){
		if(x[code] == '-') return 1000;
		else if(y[code] == '-') return -1000;  // 这两行处理是'-'的数据，不论升序还是降序都排在最后
		else return sign * (x[code] - y[code]);
	})
	
	
	var table='<table id="demo" border="1" align="center"><tr>';
	// 表头
	for (i=0;i<length;i++){
		table += '<th align="center">' + playersColumn[i] + '</th>'; 
	}
	table += '</tr>';

	// 表格内容
	for (j=0;j<playersList.length;j++){
		table += '<tr>';
		for (i=0;i<length;i++){
			table += '<td align="center">' + playersList[j][i] +'</td>';
		}
		table += '</tr>';
	}
	table += '</table>
	return table;

}