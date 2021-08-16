//Javascript for repeating strings
// Author: Yufei Wu
// Last Edited on 16/08/2021

function strTimes(str, num){
	if (num==0) return '';
	else return num > 1 ? str += strTimes(str, --num): str;
}