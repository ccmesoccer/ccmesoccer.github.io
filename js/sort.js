// Sort the playersList
// Author: Yufei Wu
// Last Edited on 17/06/2021

function sortPlayersList(code, ascending) {
	playersList.sort(function(x,y){
	return (2 * ascending - 1) * (x[code] - y[code]);
})
	return (null);
}