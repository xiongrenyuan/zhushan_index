// tab 
function setTab(name, cursel, n) {
	var tabtext = document.getElementById(name + cursel).innerHTML;
	console.log(tabtext)
	document.getElementById("tabtext").innerHTML = tabtext;
	
	for(i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_" + name + "_" + i);
		menu.className = i == cursel ? "hot" : "";
		con.style.display = i == cursel ? "block" : "none";
	}
}