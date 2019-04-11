//"use strict"; 

function Menu(elem){
	this.save = function(){
		console.log('saving');
	};
	this.load = function(){
		console.log('loading');
	};
	this.search = function(){
		console.log('searching');
	};
	
	var self = this;
	
	elem.onclick = function(e){
		var target = e.target;
		console.log(target);
		var action = target.getAttribute('data-action');
		if(action){
			self[action]();
		}
	};
}
new Menu(menu);
		