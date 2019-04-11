//"use strict"; 

document.onclick = function(event){
	if(!event.target.hasAttribute('data-counter')) return;
	var counter = event.target;
	counter.innerHTML++;
}
		