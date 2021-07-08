function reverse(param){
	var x = param.length, y = '';
	while(x > 0){
		y += param[x - 1];
		x--;
	}
	return y;
}
var word = "kasur ini rusak";
var word = "malas";

if(word === reverse(word)){
	console.log("Kata `"+word+"` termasuk kata Palindrome.");
}
else{
	console.log("Kata `"+word+"` termasuk bukan kata Palindrome.");
}