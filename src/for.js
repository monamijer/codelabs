let i = 0;
let j = 10;

checkIandJ: while(i<4){
	console.log(i);
	i += j;
	checkJ: while(j>4){
	 console.log(j);
		j-=1;
		if(j%2===0){
		 continue;
		}
		console.log(j, "is odd.");
	}
	console.log("i =", i);
	console.log("j =", j);
}
