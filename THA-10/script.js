const items= document.querySelectorAll(".items")
var count=0;
var before=0,after=0;
array=[
	"https://www.pngitem.com/pimgs/m/41-412576_dog-face-png-transparent-png.png",
	"http://clipart-library.com/new_gallery/7-74006_pug-head-png-pug-face-transparent-background.png",
	"http://clipart-library.com/new_gallery/2-21444_doge-face-png.png",
	"http://clipart-library.com/images_k/dog-face-transparent/dog-face-transparent-23.jpg",
	"http://clipart-library.com/images_k/dog-face-transparent/dog-face-transparent-20.jpg",
	"http://clipart-library.com/img1/897493.png",
	"http://clipart-library.com/img1/897662.png",
	"http://clipart-library.com/new_gallery/60-609073_dog-face-transparent-help-i-need-somebody-meme.png"
];

function shuffleArr(){
	for(let i=array.length -1 ;i>0;i--)
	{
		const j= Math.floor(Math.random()*(i+1));
		[array[i],array[j]]=[array[j],array[i]];
	}
	
}

shuffleArr();

function checking(before,after)
{
	count=0;
	if(array[before]===array[after])
	{
		console.log(array[before]);
		console.log(array[after]);
		// document.getElementById(before).style.removeProperty("background-image");
		// document.getElementById(after).style.removeProperty("background-image");
		// document.getElementById(before).remove();
		// document.getElementById(after).remove();
		
	}
	// else{
	// 	document.getElementById(before).style.removeProperty("background-image");
	// 	document.getElementById(after).style.removeProperty("background-image");
	// }
}

items.forEach(item => item.addEventListener('click',()=>{
	
	count+=1;
	if(item.classList.contains('itemclicked')){
		item.classList.remove('itemclicked');
		item.style.removeProperty("background-image")
	}
	else{
		item.classList.add('itemclicked');
		var id=item.id ;
		var id2=(id)%8;
		if(id>0 && id<9)
		{
			if(count===0)
				before=id;
			else if(count===1)
				after=id;

			document.getElementById(id).style.backgroundImage="url(" + array[id-1] + ")";
		}
		else if(id>8 && id<17)
		{
			if(count===0)
				before=id2;
			else if(count===1)
				after=id2;

			document.getElementById(id).style.backgroundImage="url(" + array[id2] + ")";
		}
		
		document.getElementById(id).style.backgroundSize="9rem 9rem";
	}
	if(count===2)
	{
		checking(before,after);

	}
}))
