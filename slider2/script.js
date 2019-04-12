"use strict"; 

$(document).ready(function(){
	$('#nav').hover(
	function(){
		$(this).stop().animate(
			{left: '0'}, 500
		)
	},
	function(){
		$(this).stop().animate(
			{left: '-110px'}, 500
		)
	}
	);
});