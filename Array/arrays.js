// 1
// function is_array(Arr){
// 	return Array.isArray(Arr);
// }

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


// 2

// function array_Clone(arr){
// 	var bArr=arr.slice(0);
// 	return bArr;
// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));


// 3

// function first(arr, i=1){
// 	if(i>0){
// 		return arr.slice(0,i);
// 	}
// 	else
// 		return [];
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


// 4

// var myColor = ["Red", "Green", "White", "Black"];

// function arrToStr(arr, s){
// 	console.log(arr.join(s))
// }

// arrToStr(myColor,'')
// arrToStr(myColor,',')
// arrToStr(myColor,'+')


// 5
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// var map = {};
// var felement = arr1[0];
// function findMostFrequent(){
//     for(var i = 0; i<arr1.length; i++){
//         if(!map[arr1[i]]){
//             map[arr1[i]]=1;
//         }else{
//             ++map[arr1[i]];
//             if(map[arr1[i]]>map[felement]){
//                 felement = arr1[i];
//             }
//         }
//     }
//     console.log(felement);
//  }

//  findMostFrequent()
