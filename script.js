function firstWord(s) {
  // your code here
	let s2=s.trim();
	let index=s2.indexOf(' ');
	if(index==-1)
		return s;
	let word=s2.slice(0,index);
	return word;
}

// Do not change the code be

const s = prompt("Enter String:");
alert(firstWord(s));
