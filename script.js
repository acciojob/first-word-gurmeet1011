function firstWord(s) {
  // your code here
	let s2=s.trim();
	let index=s2.indexOf(' ');
	let word=s2.slice(0,index+1);
	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
