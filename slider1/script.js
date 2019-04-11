//"use strict"; 

var lis = document.getElementsByTagName('li');
for(var i= 0; i< lis.length;i++){
	lis[i].style.position = 'relative';
	var span = document.createElement('span');
	span.className = "sp";
	span.innerHTML = i + 1;	
	lis[i].appendChild(span);
	
}
var width = 100;
var count = 5;

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
/* console.log(listElems); */
var position = 0;
var limit = (3 * width) - (listElems.length * width); //максимально возможный margin-left
carousel.querySelector('.prev').onclick = function(){	
	position += width; 
	if(position == width) position = limit;
	console.log(position);
	list.style.marginLeft = position + 'px';
};
carousel.querySelector('.next').onclick = function(){
	position += -width;
	if(position < limit) position = 0;
	list.style.marginLeft = position + 'px';
};

//page 46 L6


		