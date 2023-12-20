function firstWord(str) {
  // your code here
// 	s.trim();
// var a=0;
//   for (let index = 0; index < s.length; index++) {
//   	 if(s[index]!==" "){
// 		 a=index;
//          break;
// 	 }
//   }
// 	var b=0;
// 	for (let i = 0; i <s.length; i++) {
// 		if(s[i]==" "){
// 			b=i;
// 			break;
// 		}
// 	}
//     // return b;
// 	// if(b>0)
// 	return s.substring(a,b);
// 	return "";
	// let a=s.trim;
	// let b=a.split(" ");
	// return b;
	if (!str.trim()) {
        return '';
    }

    // Split the string by spaces
    const words = str.trim().split(' ');

    // Return the first word
    return words[0];
}

// Do not change the code below
const str = prompt("Enter String:");
alert(firstWord(str));

