"use strict"; 

var block = document.getElementById('block');
block.onclick = function(e){
	var target = e.target;
	while(target != block){
		if(target.tagName == 'H3'){
			showP(target.nextElementSibling);
			return;
		}
		target = target.parentNode;
	}
}

function showP(node){		
	if(node.getAttribute('class').split(' ')[1] == 'hide'){
		node.classList.remove('hide');
		node.previousElementSibling.classList.add('minus');		
	}else{		
		node.classList.add('hide');
		node.previousElementSibling.classList.remove('minus');
	}	
}



/*
$(document).ready(function(){
	$('.answer').hide();
	$('.main h3').click(function() {
		var answer = $(this).next('.answer');
		if(answer.is(':hidden')){
			answer.slideDown();
			$(this).addClass('close');
		}else{
			answer.slideUp();
			$(this).removeClass('close');
		}
	});
});
*/		