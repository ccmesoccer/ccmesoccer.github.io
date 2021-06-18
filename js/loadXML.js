// Javascript for the loading of xml files
// Author: Yufei Wu
// Last Edited on 15/06/2021

function loadXML(dname){
	try {
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
 		}
			else {// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}

		xmlhttp.open("GET",dname,false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 
		return (xmlDoc)
	}
	catch(e) {alert(e.message)}
	return (null)
}