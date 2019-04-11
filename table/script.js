//"use strict"; 

var selectedTd;
var table = document.getElementById('table');

table.onclick = function(event){	
	var target = event.target;	
	while(target != table){		
		if(target.tagName == 'TD'){
			hightlight(target);			
			return;
		}
		target = target.parentNode;
	}
}
function hightlight(node){
	if(selectedTd){
		selectedTd.classList.remove('hightlight');
	}
	selectedTd = node;
	selectedTd.classList.add('hightlight');
}
		