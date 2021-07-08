// 1

var student={
	name:"David Rayy",
	sclass: "VI",
	rollno:"12"
}

// console.log(Object.keys(student).join(','))


// 2

// console.log(student)
// delete student.rollno;
// console.log(student)

// 3. Write a JavaScript program to get the length of a JavaScript object.  

// console.log(Object.keys(student).length)

// 4. Write a JavaScript program to display the reading status (i.e. 
// display book name, author name and reading status) of the following 
// books. 

// var library = [ 
// 	{ 
// 		author: 'Bill Gates', 
// 		title: 'The Road Ahead', 
// 		readingStatus: true 
// 	}, 
// 	{ 
// 		author: 'Steve Jobs', 
// 		title: 'Walter Isaacson', 
// 		readingStatus: true 
// 	}, 
// 	{ 
// 		author: 'Suzanne Collins', 
// 		title: 'Mockingjay: The Final Book of The Hunger Games', 
// 		readingStatus: false 
// 	}
// ]; 

// for(let items in library){
// 	var demo=library[items]
// 	console.log(demo.author,'--',demo.title,'--',demo.readingStatus)
// }


// 5. Write a JavaScript program to get the volume of a Cylinder with 
// four decimal places using object classes. Volume of a cylinder :
//  V = πr2h where r is the radius and h is the height of the cylinder. 
//  Try To Attempt : Difficult Level Increased 

// var calVolume={
// 	height: 0,
// 	pie: 3.1415,
// 	radius: 0,
// 	set height1(a){
// 		this.height=a;
// 	},
// 	set radius1(b){
// 		this.radius=b;
// 	},
// 	get totalVolume(){
// 		var volume=2*this.pie*this.radius*this.height;
// 		return (volume.toFixed(4));
// 	}
	
// }

// calVolume.height1=100
// calVolume.radius1=100
// console.log(calVolume.totalVolume)

// 6. Write a JavaScript program to sort an array of JavaScript objects.  
// Sample Object : 
//  
// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
//  [object Object] { author: "Suzanne Collins", libraryID: 3245, 
//  title: "Mockingjay: The Final Book of The Hunger Games" }, 
//  [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [ 
{ 
	title: 'The Road Ahead',
	author: 'Bill Gates', 
	libraryID: 1254 
}, 
{ 
	title: 'Walter Isaacson', 
	author: 'Steve Jobs', 
	libraryID: 4264 
}, 
{ 
	title: 'Mockingjay: The Final Book of The Hunger Games', 
	author: 'Suzanne Collins', 
	libraryID: 3245 
}];

// for(let x in library){
// 	var it=library[x];
// 	var sortobj=library.sort(function(x,y){
// 		console.log(x,y)
// 	})
// 	console.log(sortobj)
// }
var sortobj=library.sort(function(x,y){
		return (y.libraryID-x.libraryID)
	})
	console.log(sortobj)
