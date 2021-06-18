// Sort the playersList
// Author: Yufei Wu
// Last Edited on 17/06/2021

function sortPlayersList(code, ascending) {
	sign = (2 * ascending - 1)
	playersList.sort(function(x,y){
		if(x[code] == '-') return 1000;
		else if(y[code] == '-') return -1000;  // 这两行处理是'-'的数据，不论升序还是降序都排在最后
		else return sign * (x[code] - y[code]);
	})
	return (null);
}