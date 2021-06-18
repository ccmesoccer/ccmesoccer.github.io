// Print the content of a javaScript 2D array
// Author: Yufei Wu
// Last Edited on 17/06/2021

function print2DArray(arrayName){
	for(i=0;i<playersList.length;i++){
		for(j=0;j<playersList[i].length;j++){
			document.write(playersList[i][j]+", ")
		}
	document.write("<br />")
	}
	return(null)
}