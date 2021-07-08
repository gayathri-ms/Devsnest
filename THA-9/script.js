const items= document.querySelectorAll(".items")
var count=0;
items.forEach(item => item.addEventListener('click',()=>{
	if(item.classList.contains('itemclicked')){
		item.classList.remove('itemclicked');
		count=count-1;
		booked();
		unbooked();
	}
	else{
		item.classList.add('itemclicked');
		count=count+1;
		booked();
		unbooked();
	}
}))
function booked(){
	var x=document.querySelector(".para");
	x.textContent=count;
}

function unbooked(){
	var x=document.querySelector(".unbook");
	x.textContent=36-count;
}

booked();
unbooked();